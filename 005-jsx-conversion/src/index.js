// import react and reactDOM library
import React from "react";
import ReactDOM from "react-dom/client";

// refrence to div root in html file
const el = document.getElementById("root");

// Tell react to get control of that position
const root = ReactDOM.createRoot(el);

// create a component which is function and return jsx
function App() {
  //creating object
  const style = {
    color: "blue",
    borderColor: "red",
  };
  return (
    <div>
      <h1>Input and props</h1>
      <input min={5} max={20} type="number" style={style} autoFocus />
      <textarea maxLength={200} spellCheck placeholder="write something" />
    </div>
  );
}

// render that componwnt on browser
root.render(<App />);
