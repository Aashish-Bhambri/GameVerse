export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const mockGenres: Genre[] = [
  { id: 4, name: "Action", image_background: "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac40f491d9e45fb63a6a.jpg" },
  { id: 51, name: "Indie", image_background: "https://media.rawg.io/media/games/e04/e041175e1658c35bd4c4314c449c2883.jpg" },
  { id: 3, name: "Adventure", image_background: "https://media.rawg.io/media/games/ad2/ad2274b5961d1ea0624fe2f336de40e5.jpg" },
  { id: 5, name: "RPG", image_background: "https://media.rawg.io/media/games/618/618c2031b86bb1e19eb85814521b2b55.jpg" },
  { id: 10, name: "Strategy", image_background: "https://media.rawg.io/media/games/a3c/a3c0fb83d6fec86243b130541e8da3c5.jpg" },
  { id: 2, name: "Shooter", image_background: "https://media.rawg.io/media/games/120/12081c0349c12dbf53fc849942a055b7.jpg" },
  { id: 40, name: "Casual", image_background: "https://media.rawg.io/media/games/66e/66e90c6c7b9a5f4007b01077775c9e35.jpg" },
  { id: 14, name: "Simulation", image_background: "https://media.rawg.io/media/games/174/1743b3dd73d72a3278df3260a14dfabf.jpg" },
  { id: 7, name: "Puzzle", image_background: "https://media.rawg.io/media/games/942/9425a751cd5a0560a5abfecaa4b2b18e.jpg" },
  { id: 11, name: "Arcade", image_background: "https://media.rawg.io/media/games/b5a/b5a0b2dc043133800ca30c1e7968e7f2.jpg" },
  { id: 83, name: "Platformer", image_background: "https://media.rawg.io/media/games/c89/c89c7053e7407e3a985e504c5c23e3e2.jpg" },
  { id: 59, name: "Massively Multiplayer", image_background: "https://media.rawg.io/media/games/5a4/5a4e5aa8572ce5e82845c47936a790f9.jpg" },
  { id: 1, name: "Racing", image_background: "https://media.rawg.io/media/games/a7e/a7e4b2d07a9157bc1a3db4ac63077e31.jpg" },
  { id: 15, name: "Sports", image_background: "https://media.rawg.io/media/games/d60/d60ad5fb4526d1d2836267868dfd6ebc.jpg" },
];
