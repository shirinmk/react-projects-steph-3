import { useState } from "react";
function SearchBar({ handleSubmit }) {
  const [term, setTerm] = useState(" ");
  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(term);

    handleSubmit(term);
  };
  function handleChange(e) {
    e.preventDefault();
    setTerm(e.target.value);
  }
  return (
    <>
      <div>This is searchbar component</div>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleChange} />
      </form>
      {/* <button onClick={handleButtonclicked}>click me</button> */}
    </>
  );
}

export default SearchBar;
