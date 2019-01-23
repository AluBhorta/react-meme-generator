import React from "react";

function getMemeImageElements(allImages, handleImgClick) {
  let imgStyles = {
    cursor: "pointer",
    width: "150px",
    height: "150px"
  };

  let memeImages;
  if (allImages) {
    memeImages = allImages.map(image => (
      <React.Fragment key={image.id}>
        <img
          id={image.id}
          src={image.url}
          alt={image.name}
          style={imgStyles}
          onClick={handleImgClick}
        />
      </React.Fragment>
    ));

    return memeImages;
  }
  return null;
}

function MemeLibrary(props) {
  const { allImages, handleImgClick } = props;

  const memeImages = getMemeImageElements(allImages, handleImgClick);

  return <div className="meme-library">{memeImages}</div>;
}

export default MemeLibrary;
