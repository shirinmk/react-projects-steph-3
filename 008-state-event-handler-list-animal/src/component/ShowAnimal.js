import React from "react";
import bird from "../svg/bird.svg";
import cat from "../svg/cat.svg";
import cow from "../svg/cow.svg";
import dog from "../svg/dog.svg";
import gator from "../svg/gator.svg";
import horse from "../svg/horse.svg";
import heart from "../svg/heart.svg";
import { useState } from "react";
import "../ShowAnimal.css";
const svgMap = {
  bird,
  cat,
  cow,
  horse,
  dog,
  gator,
};

function ShowAnimal({ title }) {
  console.log(horse);
  const [animalLike, setAnimalLike] = useState(0);
  function handleLike() {
    setAnimalLike(animalLike + 1);
  }
  return (
    <div onClick={handleLike} className="animal-show">
      <h4> {title}</h4>
      <img
        src={svgMap[title]}
        alt="animal image"
        // style={{ width: "100px" }}
        className="animal"
      />
      <img
        alt="heart"
        src={heart}
        style={{ width: animalLike + 10 + "px" }}
        className="heart"
      />
    </div>
  );
}

export default ShowAnimal;
