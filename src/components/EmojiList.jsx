import React from "react";
import EmojiItem from "./EmojiItem";

function EmojiList({ emojis }) {
  return (
    <dl className="dictionary">
      {emojis.map(({ id, emoji, name, meaning }) => (
        <EmojiItem key={id} emoji={emoji} name={name} meaning={meaning} />
      ))}
    </dl>
  );
}

export default EmojiList;