import React from "react";
import "./styles.css"
import EmojiList from "./EmojiList";
import emojipedia from "../emojipedia";
//Slice the following up into different pieces 

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <EmojiList emojis={emojipedia} />
    </div>
  );
}

export default App;
