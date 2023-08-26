import React from "react";

function EmojiItem({ emoji, name, meaning }) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={name}>
          {emoji}
        </span>
        <span>{name}</span>
      </dt>
      <dd>{meaning}</dd>
    </div>
  );
}

export default EmojiItem;


