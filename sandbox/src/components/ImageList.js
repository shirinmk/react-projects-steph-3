import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return <ImageShow image={image} />;
  });
  return (
    <div className="container">
      {/* <div>This is ImageList component {images.length}</div> */}
      {/* <ImageShow /> */}
      {/* i have arraay of images, I have to show them one by on */}
      {renderImages}
    </div>
  );
}

export default ImageList;
