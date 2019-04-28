import React from "react";

function loadImageInCanvas(e) {
  // onload of img, clear canvas
  // load img in canvas of appropriate dimensions
}

function CurrentImage(props) {
  const { src, alt } = props.currentImage;

  return (
    <div className="current-image" id="current-image">
      {!src ? (
        <h2>
          <span>
            "Click on an image from the{" "}
            <a href="#meme-library-container">Meme Library</a> below to load."
          </span>
        </h2>
      ) : (
        <div>
          <h2>"Current Image."</h2>
          <p>Click and start typing on image to enter text.</p>
        </div>
      )}

      <p>
        <strong>{alt}</strong>
      </p>
      <div className="img-canvas">
        <canvas id="imageCanvas" width={16 * 50} height={16 * 50}>
          The Canvas element is not supported in your browser.
        </canvas>
      </div>
    </div>
  );
}

export default CurrentImage;
