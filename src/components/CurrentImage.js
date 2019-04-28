import React from "react";

function getMousePos(canvas, evt) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function handleText(evt) {
  const canv = evt.target;

  const ctx = canv.getContext("2d");
  var pos = getMousePos(canv, evt);
  console.log(pos);

  ctx.fillStyle = "#000000";
  ctx.fillRect(pos.x, pos.y, 4, 4);
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
          <h2>
            Current Image: <em>{alt}</em>
          </h2>
          <p>Click and start typing on image to enter text.</p>
        </div>
      )}

      <div className="img-canvas">
        <canvas
          id="imageCanvas"
          width={16 * 50}
          height={16 * 50}
          onClick={handleText}
        >
          The Canvas element is not supported in your browser.
        </canvas>
      </div>
    </div>
  );
}

export default CurrentImage;
