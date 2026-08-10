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
    const { slug } = req.query;

    if (!slug) return res.status(400).json({ error: "Missing game slug" });

    const response = await fetch("https://api.igdb.com/v4/screenshots", {
      method: "POST",
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${token}`,
        "Content-Type": "text/plain",
      },
      body: `fields image_id; where game.slug = "${slug}"; limit 8;`,
    });

    const shots = await response.json();
    const mapped = shots.map(s => ({
      id: s.id,
      image: `https://images.igdb.com/igdb/image/upload/t_1080p/${s.image_id}.jpg`,
      width: 1920,
      height: 1080
    }));

    return res.status(200).json({ count: mapped.length, results: mapped });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
