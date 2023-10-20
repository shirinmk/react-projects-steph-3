// 1 import
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import searchImage from "./api";

searchImage();
// 2 make a refrence to html page div
const el = document.getElementById("root");

// 3 create root out of it
const root = ReactDOM.createRoot(el);

// 4 fill it with el or plant App
root.render(<App />);
