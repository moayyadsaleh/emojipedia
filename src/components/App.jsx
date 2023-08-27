import React from "react";
import Entry from "./Entry";
import "./styles.css";
import emojipedia from "../emojipedia"; //import the emojipedia in order to map through it
//Create Entry component
//create props to replace hardcoded data
// import the emojipedia const and map through emojipedia array and render Entry components
console.log(emojipedia);
function CreateEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      describtion={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary"></dl>
      {emojipedia.map(CreateEntry)}
    </div>
  );
}

export default App;
