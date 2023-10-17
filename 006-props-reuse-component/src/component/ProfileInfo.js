// import "bulma/css/bulma.css";

function ProfileInfo({ title, content, image }) {
  return (
    // <div className="box">
    //   <img src={image} alt={title} />
    //   <h4>{title}</h4>
    //   <p>{content}</p>
    // </div>

    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt={title} />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
        </div>
      </div>

      <div className="content is-6">{content}</div>
    </div>
  );
}

export default ProfileInfo;
