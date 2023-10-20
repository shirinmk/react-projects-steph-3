import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImage from "./api";
import { useState } from "react";

function App() {
  // create array of images
  const [images, setImages] = useState([]);
  const handleMySubmit = async (term) => {
    console.log(`term to look at api unsplash ` + term);
    const result = await searchImage(term);
    //this is array of 10 elemnt is
    setImages(result);
    console.log(result);
  };
  return (
    <>
      <div>Hello</div>
      <SearchBar handleSubmit={handleMySubmit} />
      <ImageList images={images} />
    </>
  );
}

export default App;
