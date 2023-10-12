// import react and reactDOM library
import React from "react";
import ReactDOM from "react-dom/client";

// refrence to div root in html file
const el = document.getElementById("root");

// Tell react to get control of that position
const root = ReactDOM.createRoot(el);

// create a component which is function and return jsx
function App() {
  let messageStr = "string";
  let messageNum = 123;
  let messageDynamic = Math.floor(Math.random() * 100);
  return (
    <div>
      <h1>Hi there</h1>
      <h4>Show all messages</h4>
      <p>
        first: {messageDynamic}
        Second: {messageNum}
        third: {messageStr}
      </p>
    </div>
  );
}

// render that componwnt on browser
root.render(<App />);
