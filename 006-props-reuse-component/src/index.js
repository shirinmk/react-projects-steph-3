// import react and reactDOM library
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// refrence to div root in html file
const el = document.getElementById("root");

// Tell react to get control of that position
const root = ReactDOM.createRoot(el);

// render that componwnt on browser
root.render(<App />);
