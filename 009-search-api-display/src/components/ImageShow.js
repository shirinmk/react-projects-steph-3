// import searchImage from "../api";

// searchImage();

function ImageShow({ image }) {
  return (
    <div key={image.id}>
      {/* <div>This is ImageShow component</div> */}
      {/* <img src="https://picsum.photos/200" alt="image display" /> */}
      {/* // this hardcode  */}
      {/* <img /> */}
      <img src={image.urls.small} alt={image.id} className="image-list" />
    </div>
  );
}

export default ImageShow;
