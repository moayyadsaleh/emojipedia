import React from "react";
import EmojiItem from "./EmojiItem"; // Adjust the import path
import emojipedia from "../emojipedia";

function EmojiList() {
  // Rename the function to EmojiList
  return emojipedia.map((emojiObj) => (
    <EmojiItem
      key={emojiObj.id}
      emoji={emojiObj.emoji}
      name={emojiObj.name}
      meaning={emojiObj.meaning}
    />
  ));
}

export default EmojiList; // Export the function as EmojiList
