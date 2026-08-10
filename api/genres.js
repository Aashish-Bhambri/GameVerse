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

    const response = await fetch("https://api.igdb.com/v4/genres", {
      method: "POST",
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${token}`,
        "Content-Type": "text/plain",
      },
      body: "fields name, slug; limit 40;",
    });

    const genres = await response.json();
    
    const mapped = genres.map(g => ({
      id: g.id,
      name: g.name,
      image_background: "https://media.rawg.io/media/games/e04/e041175e1658c35bd4c4314c449c2883.jpg"
    }));

    return res.status(200).json({ count: mapped.length, results: mapped });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
