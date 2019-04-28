import React from "react";

function CurrentImage(props) {
  const { src, alt } = props.currentImage;

  return (
    <div className="current-image">
      <h2>{!src ? "Click on an image to load" : "Current Image"}</h2>
      <p>{alt}</p>
      <img src={src} alt={alt} width="600px" />
    </div>
  );
}

export default CurrentImage;
