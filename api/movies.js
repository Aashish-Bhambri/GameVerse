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

    const response = await fetch("https://api.igdb.com/v4/game_videos", {
      method: "POST",
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${token}`,
        "Content-Type": "text/plain",
      },
      body: `fields video_id, name; where game.slug = "${slug}"; limit 1;`,
    });

    const videos = await response.json();
    
    // Check if any video was returned
    if (!videos.length) {
      return res.status(200).json({ count: 0, results: [] });
    }

    const v = videos[0];
    const mapped = [{
      id: v.id,
      name: v.name,
      preview: `https://img.youtube.com/vi/${v.video_id}/hqdefault.jpg`,
      data: {
        480: `https://www.youtube.com/embed/${v.video_id}`,
        max: `https://www.youtube.com/embed/${v.video_id}`
      }
    }];

    return res.status(200).json({ count: mapped.length, results: mapped });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
