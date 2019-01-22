import React from "react";

function CurrentImage(props) {
  const { currentImage } = props;
  return (
    <div>
      <h2>{!currentImage ? "Click on an image to load" : "Current Image"}</h2>
      <img src={currentImage} alt={currentImage} width="600px" />
    </div>
  );
}

export default CurrentImage;
