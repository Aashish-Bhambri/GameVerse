let cachedToken = null;
let tokenExpiresAt = 0;

async function getTwitchToken() {
  const clientId = process.env.TWITCH_CLIENT_ID || process.env.VITE_TWITCH_CLIENT_ID;
  const clientSecret = process.env.TWITCH_CLIENT_SECRET || process.env.VITE_TWITCH_CLIENT_SECRET;
  if (!clientId || !clientSecret) throw new Error("Missing Twitch credentials");
  const now = Date.now();
  if (cachedToken && now < tokenExpiresAt) return cachedToken;
  const res = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`, { method: "POST" });
  const data = await res.json();
  cachedToken = data.access_token;
  tokenExpiresAt = now + (data.expires_in - 60) * 1000;
  return cachedToken;
}

export default async function handler(req, res) {
  try {
    const token = await getTwitchToken();
    const clientId = process.env.TWITCH_CLIENT_ID || process.env.VITE_TWITCH_CLIENT_ID;

    const response = await fetch("https://api.igdb.com/v4/platforms", {
      method: "POST",
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${token}`,
        "Content-Type": "text/plain",
      },
      body: "fields name, slug; where id = (6, 48, 49, 34, 14, 3, 130); limit 20;",
    });

    const platforms = await response.json();
    
    const mapped = platforms.map(p => {
      let mappedId = p.id;
      if (p.id === 6) mappedId = 1;
      else if (p.id === 48) mappedId = 2;
      else if (p.id === 49) mappedId = 3;
      else if (p.id === 14) mappedId = 5;
      else if (p.id === 3) mappedId = 6;
      else if (p.id === 130) mappedId = 7;
      else if (p.id === 34) mappedId = 8;

      return {
        id: mappedId,
        name: p.name,
        slug: p.slug
      };
    });

    return res.status(200).json({ count: mapped.length, results: mapped });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
