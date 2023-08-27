const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you.",
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of 'rofl'. Stands for 'rolling on the floor, laughing'.",
  },
  {
    id: 4,
    emoji: "😍",
    name: "Heart Eyes",
    meaning:
      "An expression of deep affection. It's often used to convey love, infatuation, or admiration for someone or something.",
  },
  {
    id: 5,
    emoji: "🌸",
    name: "Cherry Blossom",
    meaning:
      "A pink flower with five petals and a yellow center. Represents the beauty and fleeting nature of life. Often used to symbolize springtime and new beginnings.",
  },
  {
    id: 6,
    emoji: "🌊",
    name: "Water Wave",
    meaning:
      "Depicts a wave of water. Can refer to the ocean, the beach, or water-related activities. It's also used metaphorically for the ups and downs of life.",
  },
  {
    id: 1,
    emoji: "💡",
    name: "Idea Bulb",
    meaning: "Represents a new idea, innovation, or a spark of creativity.",
  },
  {
    id: 2,
    emoji: "🌟",
    name: "Glowing Star",
    meaning:
      "Symbolizes achievement, special moments, or someone who stands out.",
  },
  {
    id: 3,
    emoji: "🎈",
    name: "Party Balloon",
    meaning: "Indicates celebration, happiness, and a festive atmosphere.",
  },
  {
    id: 4,
    emoji: "🌈",
    name: "Rainbow",
    meaning: "Represents diversity, hope, and the beauty of natural phenomena.",
  },
  {
    id: 5,
    emoji: "🍀",
    name: "Four-Leaf Clover",
    meaning: "Symbol of luck, good fortune, and positive outcomes.",
  },
  {
    id: 6,
    emoji: "📚",
    name: "Stack of Books",
    meaning: "Signifies learning, knowledge, and academic pursuits.",
  },
  {
    id: 7,
    emoji: "🎵",
    name: "Musical Note",
    meaning: "Represents music, melody, and the arts.",
  },
  {
    id: 8,
    emoji: "☕",
    name: "Coffee Cup",
    meaning: "Symbolizes coffee, relaxation, and casual conversations.",
  },
  {
    id: 9,
    emoji: "🏆",
    name: "Trophy",
    meaning: "Denotes victory, achievement, and recognition of excellence.",
  },
  {
    id: 10,
    emoji: "🌺",
    name: "Hibiscus",
    meaning: "Represents beauty, grace, and tropical vibes.",
  },
  {
    id: 21,
    emoji: "🚀",
    name: "Rocket",
    meaning: "Signifies ambition, progress, and reaching for the stars.",
  },
  {
    id: 22,
    emoji: "🌍",
    name: "Earth Globe Europe-Africa",
    meaning: "Represents the Earth, global unity, and international affairs.",
  },
  {
    id: 23,
    emoji: "🎨",
    name: "Artist Palette",
    meaning: "Symbolizes creativity, artistry, and self-expression.",
  },
  {
    id: 24,
    emoji: "🌔",
    name: "First Quarter Moon Face",
    meaning:
      "Depicts the first quarter moon and can signify transition or anticipation.",
  },
  {
    id: 25,
    emoji: "🍔",
    name: "Hamburger",
    meaning: "Represents food, fast food culture, and indulgence.",
  },
  {
    id: 26,
    emoji: "📷",
    name: "Camera",
    meaning: "Symbolizes photography, capturing moments, and memories.",
  },
  {
    id: 27,
    emoji: "🎈",
    name: "Balloon",
    meaning: "Indicates celebration, joy, and a lighthearted atmosphere.",
  },
  {
    id: 28,
    emoji: "🌞",
    name: "Sun with Face",
    meaning:
      "Depicts a sun with a happy face, representing warmth and positivity.",
  },
  {
    id: 29,
    emoji: "🐾",
    name: "Paw Prints",
    meaning: "Symbolizes animals, pets, and the journey of life.",
  },
  {
    id: 30,
    emoji: "🗺️",
    name: "World Map",
    meaning: "Represents geography, exploration, and a global perspective.",
  },
  {
    id: 31,
    emoji: "🌵",
    name: "Cactus",
    meaning:
      "Symbolizes endurance, toughness, and thriving in harsh conditions.",
  },
  {
    id: 32,
    emoji: "🚲",
    name: "Bicycle",
    meaning: "Represents cycling, exercise, and eco-friendly transportation.",
  },
  {
    id: 33,
    emoji: "🌆",
    name: "Cityscape at Dusk",
    meaning:
      "Depicts a city skyline during sunset or twilight, evoking urban life.",
  },
  {
    id: 34,
    emoji: "🎤",
    name: "Microphone",
    meaning: "Symbolizes singing, performing, and public speaking.",
  },
  {
    id: 35,
    emoji: "🌼",
    name: "Blossom",
    meaning: "Represents the beauty of nature, growth, and new beginnings.",
  },
  {
    id: 36,
    emoji: "🏝️",
    name: "Desert Island",
    meaning:
      "Depicts a tropical island and symbolizes relaxation and vacation.",
  },
  {
    id: 37,
    emoji: "🎮",
    name: "Video Game Controller",
    meaning: "Signifies gaming, entertainment, and virtual adventures.",
  },
  {
    id: 38,
    emoji: "🎬",
    name: "Clapper Board",
    meaning: "Represents movies, filmmaking, and the world of cinema.",
  },
  {
    id: 39,
    emoji: "🍕",
    name: "Pizza Slice",
    meaning: "Symbolizes pizza, comfort food, and casual dining.",
  },
  {
    id: 40,
    emoji: "🔭",
    name: "Telescope",
    meaning:
      "Indicates curiosity, exploration, and the desire to discover new things.",
  },
  {
    id: 41,
    emoji: "🎉",
    name: "Party Popper",
    meaning:
      "Depicts a party popper bursting with confetti, used for celebrations.",
  },
  {
    id: 42,
    emoji: "🌓",
    name: "First Quarter Moon",
    meaning:
      "Represents the first quarter moon phase and can signify transition or anticipation.",
  },
  {
    id: 43,
    emoji: "🧘",
    name: "Person in Lotus Position",
    meaning: "Symbolizes meditation, mindfulness, and inner peace.",
  },
  {
    id: 44,
    emoji: "🍦",
    name: "Ice Cream Cone",
    meaning: "Represents ice cream, dessert, and sweet indulgence.",
  },
  {
    id: 45,
    emoji: "🌄",
    name: "Sunrise Over Mountains",
    meaning:
      "Depicts a sunrise scene with mountains and symbolizes new beginnings.",
  },
  {
    id: 46,
    emoji: "📚",
    name: "Open Book",
    meaning: "Signifies reading, knowledge, and education.",
  },
  {
    id: 47,
    emoji: "🚀",
    name: "Rocket",
    meaning: "Represents ambition, progress, and reaching for the stars.",
  },
  {
    id: 48,
    emoji: "🛰️",
    name: "Satellite",
    meaning:
      "Symbolizes technology, communication, and exploration of outer space.",
  },
  {
    id: 49,
    emoji: "🎈",
    name: "Balloon",
    meaning: "Indicates celebration, joy, and a lighthearted atmosphere.",
  },
  {
    id: 50,
    emoji: "🌿",
    name: "Herb",
    meaning: "Represents nature, healing, and herbal remedies.",
  },
];

export default emojipedia;
