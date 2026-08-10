import { type GameDetails } from "../hooks/useGame";
import { type Screenshot } from "../hooks/useScreenshots";
import { type Trailer } from "../hooks/useTrailers";

export const mockDetails: Record<string, GameDetails> = {
  "grand-theft-auto-v": {
    id: 3498,
    slug: "grand-theft-auto-v",
    name: "Grand Theft Auto V",
    background_image: "https://media.rawg.io/media/games/456/456ade5a1154bc3cc18c08a1b5cbd08a.jpg",
    metacritic: 92,
    released: "2013-09-17",
    updated: "2024-01-10",
    rating_top: 5,
    playtime: 74,
    description_raw: "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.\n\nThe game offers players a huge range of PC-specific customization options, including over 25 separate configurable settings for texture quality, shaders, tessellation, anti-aliasing and more, as well as support for keyboard and mouse controls.",
    website: "http://www.rockstargames.com/V/",
    reddit_url: "https://www.reddit.com/r/GrandTheftAutoV/",
    genres: [
      { id: 4, name: "Action", slug: "action" },
      { id: 3, name: "Adventure", slug: "adventure" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } }
    ],
    platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 18, name: "PlayStation 4", slug: "playstation4" } },
      { platform: { id: 187, name: "PlayStation 5", slug: "playstation5" } },
      { platform: { id: 1, name: "Xbox One", slug: "xbox-one" } }
    ],
    developers: [
      { id: 10, name: "Rockstar North", slug: "rockstar-north" }
    ],
    publishers: [
      { id: 3, name: "Rockstar Games", slug: "rockstar-games" }
    ],
    ratings: [
      { id: 5, title: "exceptional", count: 4802, percent: 59.2 },
      { id: 4, title: "recommended", count: 2510, percent: 30.9 },
      { id: 3, title: "meh", count: 620, percent: 7.6 },
      { id: 1, title: "skip", count: 182, percent: 2.3 }
    ]
  },
  "the-witcher-3-wild-hunt": {
    id: 3328,
    slug: "the-witcher-3-wild-hunt",
    name: "The Witcher 3: Wild Hunt",
    background_image: "https://media.rawg.io/media/games/618/618c2031b86bb1e19eb85814521b2b55.jpg",
    metacritic: 92,
    released: "2015-05-18",
    updated: "2024-01-15",
    rating_top: 5,
    playtime: 101,
    description_raw: "The Witcher: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher you play as the professional monster hunter, Geralt of Rivia, tasked with finding a child of prophecy in a vast open world rich with merchant cities, viking pirate islands, dangerous mountain passes, and forgotten caverns to explore.",
    website: "https://thewitcher.com/en/witcher3",
    reddit_url: "https://www.reddit.com/r/witcher/",
    genres: [
      { id: 4, name: "Action", slug: "action" },
      { id: 5, name: "RPG", slug: "role-playing-game-rpg" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 7, name: "Nintendo", slug: "nintendo" } }
    ],
    platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 18, name: "PlayStation 4", slug: "playstation4" } },
      { platform: { id: 1, name: "Xbox One", slug: "xbox-one" } },
      { platform: { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" } }
    ],
    developers: [
      { id: 9026, name: "CD PROJEKT RED", slug: "cd-projekt-red" }
    ],
    publishers: [
      { id: 7424, name: "CD PROJEKT RED", slug: "cd-projekt-red" }
    ],
    ratings: [
      { id: 5, title: "exceptional", count: 6224, percent: 77.3 },
      { id: 4, title: "recommended", count: 1350, percent: 16.7 },
      { id: 3, title: "meh", count: 280, percent: 3.5 },
      { id: 1, title: "skip", count: 201, percent: 2.5 }
    ]
  },
  "portal-2": {
    id: 4200,
    slug: "portal-2",
    name: "Portal 2",
    background_image: "https://media.rawg.io/media/games/2ba/2bac4ae535d8e235a2d5885c2107b97a.jpg",
    metacritic: 95,
    released: "2011-04-18",
    updated: "2024-02-01",
    rating_top: 5,
    playtime: 11,
    description_raw: "Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following.\n\nThe single-player portion of Portal 2 introduces a cast of dynamic new characters, a host of fresh puzzle elements, and a much larger set of devious test chambers. Players will explore never-before-seen areas of the Aperture Science Labs and be reunited with GLaDOS, the occasionally murderous computer companion who guided them through the original game.",
    website: "http://www.thinkwithportals.com/",
    reddit_url: "https://www.reddit.com/r/Portal/",
    genres: [
      { id: 2, name: "Shooter", slug: "shooter" },
      { id: 7, name: "Puzzle", slug: "puzzle" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } }
    ],
    platforms: [
      { platform: { id: 4, name: "PC", slug: "pc" } },
      { platform: { id: 18, name: "PlayStation 4", slug: "playstation4" } },
      { platform: { id: 1, name: "Xbox One", slug: "xbox-one" } }
    ],
    developers: [
      { id: 4, name: "Valve Software", slug: "valve" }
    ],
    publishers: [
      { id: 3399, name: "Valve", slug: "valve" }
    ],
    ratings: [
      { id: 5, title: "exceptional", count: 4200, percent: 74.8 },
      { id: 4, title: "recommended", count: 1100, percent: 19.6 },
      { id: 3, title: "meh", count: 210, percent: 3.7 },
      { id: 1, title: "skip", count: 104, percent: 1.9 }
    ]
  }
};

export const mockScreenshots: Record<string, Screenshot[]> = {
  "grand-theft-auto-v": [
    { id: 1, image: "https://media.rawg.io/media/screenshots/a7c/a7c4387c4e59d9f582f340f1fb9ec2cf.jpg", width: 1280, height: 720 },
    { id: 2, image: "https://media.rawg.io/media/screenshots/cf9/cf91d7ce7c59913f1f72b0851ec91d3c.jpg", width: 1280, height: 720 },
    { id: 3, image: "https://media.rawg.io/media/screenshots/b9a/b9a1175e1658c35bd4c4314c449c2883.jpg", width: 1280, height: 720 },
    { id: 4, image: "https://media.rawg.io/media/screenshots/26e/26ed1a24d2526f925fc63ad7410885c2.jpg", width: 1280, height: 720 }
  ],
  "the-witcher-3-wild-hunt": [
    { id: 1, image: "https://media.rawg.io/media/screenshots/1ac/1ac83f61b18d2d64f0b6c1e19eb85814.jpg", width: 1280, height: 720 },
    { id: 2, image: "https://media.rawg.io/media/screenshots/e0b/e0b1f7ce7c59913f1f72b0851ec91d3c.jpg", width: 1280, height: 720 },
    { id: 3, image: "https://media.rawg.io/media/screenshots/3a6/3a6c2031b86bb1e19eb85814521b2b55.jpg", width: 1280, height: 720 },
    { id: 4, image: "https://media.rawg.io/media/screenshots/88c/88c81c0349c12dbf53fc849942a055b7.jpg", width: 1280, height: 720 }
  ]
};

export const mockTrailers: Record<string, Trailer[]> = {
  "grand-theft-auto-v": [
    {
      id: 1,
      name: "Grand Theft Auto V Official Trailer",
      preview: "https://media.rawg.io/media/games/456/456ade5a1154bc3cc18c08a1b5cbd08a.jpg",
      data: {
        480: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        max: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      }
    }
  ],
  "the-witcher-3-wild-hunt": [
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt gameplay trailer",
      preview: "https://media.rawg.io/media/games/618/618c2031b86bb1e19eb85814521b2b55.jpg",
      data: {
        480: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        max: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      }
    }
  ]
};

// Fallback Generators
export const getFallbackGameDetails = (slug: string): GameDetails => {
  if (mockDetails[slug]) return mockDetails[slug];

  const formattedName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    id: Math.floor(Math.random() * 10000),
    slug,
    name: formattedName,
    background_image: "https://media.rawg.io/media/games/456/456ade5a1154bc3cc18c08a1b5cbd08a.jpg",
    metacritic: 85,
    released: "2020-01-01",
    updated: "2024-01-01",
    rating_top: 4,
    playtime: 30,
    description_raw: `Welcome to the offline game page for ${formattedName}.\n\nThis page is running on dynamic offline portfolio data because the RAWG API is currently down or rate-limited. This fallback ensures recruiters can view the layout, interactive statistics, screenshot lightboxes, and trailer video players successfully.`,
    website: "https://rawg.io",
    reddit_url: "https://reddit.com",
    genres: [{ id: 4, name: "Action", slug: "action" }],
    parent_platforms: [{ platform: { id: 1, name: "PC", slug: "pc" } }],
    platforms: [{ platform: { id: 4, name: "PC", slug: "pc" } }],
    developers: [{ id: 1, name: "CD PROJEKT RED", slug: "cd-projekt-red" }],
    publishers: [{ id: 1, name: "CD PROJEKT", slug: "cd-projekt" }],
    ratings: [
      { id: 5, title: "exceptional", count: 80, percent: 50.0 },
      { id: 4, title: "recommended", count: 50, percent: 31.25 },
      { id: 3, title: "meh", count: 20, percent: 12.5 },
      { id: 1, title: "skip", count: 10, percent: 6.25 }
    ]
  };
};

export const getFallbackScreenshots = (slug: string): Screenshot[] => {
  if (mockScreenshots[slug]) return mockScreenshots[slug];

  return [
    { id: 1, image: "https://media.rawg.io/media/screenshots/a7c/a7c4387c4e59d9f582f340f1fb9ec2cf.jpg", width: 1280, height: 720 },
    { id: 2, image: "https://media.rawg.io/media/screenshots/cf9/cf91d7ce7c59913f1f72b0851ec91d3c.jpg", width: 1280, height: 720 },
    { id: 3, image: "https://media.rawg.io/media/screenshots/b9a/b9a1175e1658c35bd4c4314c449c2883.jpg", width: 1280, height: 720 },
    { id: 4, image: "https://media.rawg.io/media/screenshots/26e/26ed1a24d2526f925fc63ad7410885c2.jpg", width: 1280, height: 720 }
  ];
};

export const getFallbackTrailers = (slug: string): Trailer[] => {
  if (mockTrailers[slug]) return mockTrailers[slug];

  return [
    {
      id: 1,
      name: "Sintel Open Movie Trailer",
      preview: "https://media.rawg.io/media/games/456/456ade5a1154bc3cc18c08a1b5cbd08a.jpg",
      data: {
        480: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        max: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
      }
    }
  ];
};
