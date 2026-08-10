import type { Game } from "../hooks/useGames";

export const mockGames: Game[] = [
  {
    id: 3498,
    slug: "grand-theft-auto-v",
    name: "Grand Theft Auto V",
    background_image: "https://media.rawg.io/media/games/456/456ade5a1154bc3cc18c08a1b5cbd08a.jpg",
    metacritic: 92,
    released: "2013-09-17",
    genres: [
      { id: 4, name: "Action" },
      { id: 3, name: "Adventure" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } }
    ]
  },
  {
    id: 3328,
    slug: "the-witcher-3-wild-hunt",
    name: "The Witcher 3: Wild Hunt",
    background_image: "https://media.rawg.io/media/games/618/618c2031b86bb1e19eb85814521b2b55.jpg",
    metacritic: 92,
    released: "2015-05-18",
    genres: [
      { id: 4, name: "Action" },
      { id: 5, name: "RPG" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 7, name: "Nintendo", slug: "nintendo" } }
    ]
  },
  {
    id: 4200,
    slug: "portal-2",
    name: "Portal 2",
    background_image: "https://media.rawg.io/media/games/2ba/2bac4ae535d8e235a2d5885c2107b97a.jpg",
    metacritic: 95,
    released: "2011-04-18",
    genres: [
      { id: 2, name: "Shooter" },
      { id: 7, name: "Puzzle" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      { platform: { id: 6, name: "Linux", slug: "linux" } }
    ]
  },
  {
    id: 5286,
    slug: "tomb-raider",
    name: "Tomb Raider",
    background_image: "https://media.rawg.io/media/games/021/021c4b21a1824d2526f925fc63ad7410.jpg",
    metacritic: 86,
    released: "2013-03-05",
    genres: [
      { id: 4, name: "Action" },
      { id: 3, name: "Adventure" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } }
    ]
  },
  {
    id: 13536,
    slug: "portal",
    name: "Portal",
    background_image: "https://media.rawg.io/media/games/7fa/7fa0b5de342b58d343de680e6cfd6a57.jpg",
    metacritic: 90,
    released: "2007-10-09",
    genres: [
      { id: 7, name: "Puzzle" },
      { id: 83, name: "Platformer" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      { platform: { id: 6, name: "Linux", slug: "linux" } }
    ]
  },
  {
    id: 12020,
    slug: "left-4-dead-2",
    name: "Left 4 Dead 2",
    background_image: "https://media.rawg.io/media/games/d58/d588991d95bc8e148522e27d50061d21.jpg",
    metacritic: 89,
    released: "2009-11-17",
    genres: [
      { id: 4, name: "Action" },
      { id: 2, name: "Shooter" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      { platform: { id: 6, name: "Linux", slug: "linux" } }
    ]
  },
  {
    id: 13537,
    slug: "half-life-2",
    name: "Half-Life 2",
    background_image: "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac40f491d9e45fb63a6a.jpg",
    metacritic: 96,
    released: "2004-11-16",
    genres: [
      { id: 4, name: "Action" },
      { id: 2, name: "Shooter" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      { platform: { id: 6, name: "Linux", slug: "linux" } }
    ]
  },
  {
    id: 4062,
    slug: "borderlands-2",
    name: "Borderlands 2",
    background_image: "https://media.rawg.io/media/games/49c/49c3dfa4db2dec28c59149b0c020ecda.jpg",
    metacritic: 89,
    released: "2012-09-18",
    genres: [
      { id: 4, name: "Action" },
      { id: 2, name: "Shooter" },
      { id: 5, name: "RPG" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      { platform: { id: 6, name: "Linux", slug: "linux" } }
    ]
  },
  {
    id: 28,
    slug: "red-dead-redemption-2",
    name: "Red Dead Redemption 2",
    background_image: "https://media.rawg.io/media/games/511/511a43fb69b9236e78b683b9845b454e.jpg",
    metacritic: 97,
    released: "2018-10-26",
    genres: [
      { id: 4, name: "Action" },
      { id: 3, name: "Adventure" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } }
    ]
  },
  {
    id: 41494,
    slug: "cyberpunk-2077",
    name: "Cyberpunk 2077",
    background_image: "https://media.rawg.io/media/games/26d/26d4ef074d641b55b6c05c9ae5d13b47.jpg",
    metacritic: 86,
    released: "2020-12-10",
    genres: [
      { id: 4, name: "Action" },
      { id: 5, name: "RPG" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } }
    ]
  },
  {
    id: 58175,
    slug: "elden-ring",
    name: "Elden Ring",
    background_image: "https://media.rawg.io/media/games/b11/b115b2c0d59c9ff9110dbaa4b17e4740.jpg",
    metacritic: 96,
    released: "2022-02-25",
    genres: [
      { id: 4, name: "Action" },
      { id: 5, name: "RPG" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } }
    ]
  },
  {
    id: 3070,
    slug: "fallout-4",
    name: "Fallout 4",
    background_image: "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    metacritic: 87,
    released: "2015-11-10",
    genres: [
      { id: 4, name: "Action" },
      { id: 5, name: "RPG" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } }
    ]
  },
  {
    id: 11859,
    slug: "minecraft",
    name: "Minecraft",
    background_image: "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66b84007b8aa997cb1.jpg",
    metacritic: 93,
    released: "2011-11-18",
    genres: [
      { id: 40, name: "Casual" },
      { id: 14, name: "Simulation" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
      { platform: { id: 8, name: "Android", slug: "android" } },
      { platform: { id: 4, name: "iOS", slug: "ios" } }
    ]
  },
  {
    id: 2908,
    slug: "the-elder-scrolls-v-skyrim",
    name: "The Elder Scrolls V: Skyrim",
    background_image: "https://media.rawg.io/media/games/7a2/7a21127ee421268b08ab07ff0167a29f.jpg",
    metacritic: 94,
    released: "2011-11-11",
    genres: [
      { id: 4, name: "Action" },
      { id: 5, name: "RPG" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 7, name: "Nintendo", slug: "nintendo" } }
    ]
  },
  {
    id: 416,
    slug: "grand-theft-auto-san-andreas",
    name: "Grand Theft Auto: San Andreas",
    background_image: "https://media.rawg.io/media/games/960/960b701d41dad118610a256902b6ad6d.jpg",
    metacritic: 93,
    released: "2004-10-26",
    genres: [
      { id: 4, name: "Action" },
      { id: 3, name: "Adventure" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 8, name: "Android", slug: "android" } },
      { platform: { id: 4, name: "iOS", slug: "ios" } }
    ]
  },
  {
    id: 3272,
    slug: "rocket-league",
    name: "Rocket League",
    background_image: "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc90d66c03d49653a6648.jpg",
    metacritic: 86,
    released: "2015-07-07",
    genres: [
      { id: 15, name: "Sports" },
      { id: 1, name: "Racing" }
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 7, name: "Nintendo", slug: "nintendo" } }
    ]
  }
];
