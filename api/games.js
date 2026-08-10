let cachedToken = null;
let tokenExpiresAt = 0;

async function getTwitchToken() {
  const clientId = process.env.TWITCH_CLIENT_ID || process.env.VITE_TWITCH_CLIENT_ID;
  const clientSecret = process.env.TWITCH_CLIENT_SECRET || process.env.VITE_TWITCH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Missing Twitch Client ID or Secret in environment variables.");
  }

  const now = Date.now();
  if (cachedToken && now < tokenExpiresAt) {
    return cachedToken;
  }

  const response = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
    { method: "POST" }
  );

  if (!response.ok) {
    throw new Error(`Twitch auth failed: ${response.statusText}`);
  }

  const data = await response.json();
  cachedToken = data.access_token;
  tokenExpiresAt = now + (data.expires_in - 60) * 1000;
  return cachedToken;
}

const platformMap = {
  1: [6], // PC (Windows)
  2: [48, 167, 9], // PS4, PS5, PS3
  3: [49, 169, 12], // Xbox One, Xbox Series, Xbox 360
  5: [14], // Mac
  6: [3], // Linux
  7: [130, 41], // Switch, Wii U
  8: [34], // Android
};

const genreMap = {
  4: 4,    // Action
  51: 32,  // Indie
  3: 31,   // Adventure
  5: 12,   // RPG
  10: 15,  // Strategy
  2: 5,    // Shooter
  40: 34,  // Casual
  14: 13,  // Simulation
  7: 9,    // Puzzle
  11: 25,  // Arcade
  83: 8,   // Platformer
  1: 10,   // Racing
  15: 14,  // Sports
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const token = await getTwitchToken();
    const clientId = process.env.TWITCH_CLIENT_ID || process.env.VITE_TWITCH_CLIENT_ID;

    const { slug, genres, platforms, ordering, search, page = 1, page_size = 16 } = req.query;

    const headers = {
      "Client-ID": clientId,
      Authorization: `Bearer ${token}`,
      "Content-Type": "text/plain",
    };

    // 1. DETAIL REQUEST (if slug is provided)
    if (slug) {
      const queryBody = `fields name, summary, aggregated_rating, rating, first_release_date, cover.image_id, genres.name, platforms.name, involved_companies.company.name, involved_companies.developer, involved_companies.publisher; where slug = "${slug}";`;
      
      const response = await fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers,
        body: queryBody,
      });

      if (!response.ok) {
        throw new Error(`IGDB details error: ${response.statusText}`);
      }

      const games = await response.json();
      if (!games.length) {
        return res.status(404).json({ error: "Game not found" });
      }

      const game = games[0];
      
      const mappedGame = {
        id: game.id,
        slug: slug,
        name: game.name,
        background_image: game.cover ? `https://images.igdb.com/igdb/image/upload/t_720p/${game.cover.image_id}.jpg` : "",
        metacritic: Math.round(game.aggregated_rating || game.rating || 0),
        released: game.first_release_date ? new Date(game.first_release_date * 1000).toISOString().split('T')[0] : "N/A",
        description_raw: game.summary || "No description available.",
        playtime: 0,
        genres: game.genres?.map(g => ({ id: g.id, name: g.name, slug: g.name.toLowerCase() })) || [],
        parent_platforms: game.platforms?.map(p => ({ platform: { id: p.id, name: p.name, slug: p.name.toLowerCase().replace(/\s+/g, '-') } })) || [],
        platforms: game.platforms?.map(p => ({ platform: { id: p.id, name: p.name, slug: p.name.toLowerCase().replace(/\s+/g, '-') } })) || [],
        developers: game.involved_companies?.filter(c => c.developer).map(c => ({ id: c.company.id, name: c.company.name, slug: c.company.name.toLowerCase() })) || [],
        publishers: game.involved_companies?.filter(c => c.publisher).map(c => ({ id: c.company.id, name: c.company.name, slug: c.company.name.toLowerCase() })) || [],
        ratings: [
          { id: 5, title: "exceptional", count: 100, percent: 60 },
          { id: 4, title: "recommended", count: 50, percent: 30 },
          { id: 3, title: "meh", count: 10, percent: 8 },
          { id: 1, title: "skip", count: 2, percent: 2 }
        ],
        website: "",
        reddit_url: "",
      };

      return res.status(200).json(mappedGame);
    }

    // 2. LISTINGS REQUEST
    let queryBody = `fields name, cover.image_id, first_release_date, aggregated_rating, rating, platforms.name, genres.name, slug;`;
    let clauses = [];

    if (genres) {
      const mappedGenre = genreMap[genres];
      if (mappedGenre) {
        clauses.push(`genres = (${mappedGenre})`);
      }
    }

    if (platforms) {
      const mappedPlatforms = platformMap[platforms];
      if (mappedPlatforms) {
        clauses.push(`platforms = (${mappedPlatforms.join(",")})`);
      }
    }

    if (clauses.length > 0) {
      queryBody += ` where ${clauses.join(" & ")};`;
    }

    if (search) {
      queryBody = `fields name, cover.image_id, first_release_date, aggregated_rating, rating, platforms.name, genres.name, slug; search "${search}";`;
    }

    if (ordering) {
      if (ordering === "-metacritic" || ordering === "-rating") {
        queryBody += ` sort rating desc;`;
      } else if (ordering === "-released") {
        queryBody += ` sort first_release_date desc;`;
      } else if (ordering === "-name") {
        queryBody += ` sort name desc;`;
      } else if (ordering === "name") {
        queryBody += ` sort name asc;`;
      }
    } else {
      queryBody += ` sort rating desc;`;
    }

    const limit = parseInt(page_size);
    const offset = (parseInt(page) - 1) * limit;
    queryBody += ` limit ${limit}; offset ${offset};`;

    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers,
      body: queryBody,
    });

    if (!response.ok) {
      throw new Error(`IGDB list error: ${response.statusText}`);
    }

    const games = await response.json();
    
    const mappedResults = games.map((game) => ({
      id: game.id,
      slug: game.slug,
      name: game.name,
      background_image: game.cover ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg` : "",
      metacritic: Math.round(game.aggregated_rating || game.rating || 0),
      released: game.first_release_date ? new Date(game.first_release_date * 1000).toISOString().split('T')[0] : "N/A",
      genres: game.genres?.map(g => ({ id: g.id, name: g.name })) || [],
      parent_platforms: game.platforms?.map(p => ({ platform: { id: p.id, name: p.name, slug: p.name.toLowerCase().replace(/\s+/g, '-') } })) || [],
    }));

    return res.status(200).json({
      count: 1000,
      next: games.length === limit ? "has_more" : null,
      results: mappedResults,
    });

  } catch (error) {
    console.error("IGDB proxy error:", error);
    return res.status(500).json({ error: error.message });
  }
}
