import React, { useState } from "react";

function App() {
  // This is array destructing
  const [counter, setCounter] = useState(0);
  console.log(useState());
  const handleClick = () => {
    console.log("button clicked");
    setCounter(counter + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{counter}</div>
    </div>
  );
}

export default App;
