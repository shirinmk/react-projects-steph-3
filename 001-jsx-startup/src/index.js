// import react and reactDOM library
import React from "react";
import ReactDOM from "react-dom/client";

// refrence to div root in html file
const el = document.getElementById("root");

// Tell react to get control of that position
const root = ReactDOM.createRoot(el);

// create a component which is function and return jsx
function App() {
  return (
    <div>
      <h1>Hi there</h1>
    </div>
  );
}

// render that componwnt on browser
root.render(<App />);
