import React from "react";
import "./styles.css";
import EmojiList from "./EmojiList"; // Adjust the import path

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <EmojiList /> {/* Use the EmojiList function */}
      </dl>
    </div>
  );
}

export default App;
