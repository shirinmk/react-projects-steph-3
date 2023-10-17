import React, { useState } from "react";
import ShowAnimal from "./component/ShowAnimal";
import "./App.css";

function getRandomAnimal() {
  const animals = ["bird", "horse", "cat", "dog", "cow", "gator"];

  let num = Math.floor(Math.random() * animals.length);
  // console.log(num);
  // console.log(animals[num]);
  return animals[num];
}

function App() {
  const [animals, setAnimal] = useState([]);
  const handleClick = () => {
    // console.log("button clicked");
    setAnimal([...animals, getRandomAnimal()]);
  };

  const renderAnimalsMap = animals.map((animal, index) => {
    return <ShowAnimal title={animal} key={index} />;
  });
  return (
    <div className="app ">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list"> {renderAnimalsMap}</div>
    </div>
  );
}

export default App;
