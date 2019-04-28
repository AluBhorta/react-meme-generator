import React, { Component } from "react";
import TextForm from "./TextForm";
import CurrentImage from "./CurrentImage";
import MemeLibrary from "./MemeLibrary";

class MemeGenerator extends Component {
  state = {
    topText: "",
    bottomText: "",
    allImages: [],
    currentImage: ""
  };

  resetCurrentImage = e => {
    this.setState({ currentImage: "" });
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(output => {
        this.setState({
          allImages: output.data.memes
        });
      })
      .catch(err => console.log(err));
  }

  onSaveMeme = e => {
    e.preventDefault();
    alert("Save image not yet implemented, sorry");
  };

  handleTextChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleImgClick = e => {
    this.setState({ currentImage: e.target });

    const canvas = document.getElementById("imageCanvas");
    const ctx = canvas.getContext("2d");

    // collected from studyJS:  http://www.studyjs.com/canvas/image.html
    let calculateAspectRatio = function(image) {
      let imageAspectRatio = image.width / image.height;
      let canvasAspectRatio = canvas.width / canvas.height;
      let renderableHeight, renderableWidth, xStart, yStart;
      let AspectRatio = {};

      // If image's aspect ratio is less than canvas's we fit on height
      // and place the image centrally along width
      if (imageAspectRatio < canvasAspectRatio) {
        renderableHeight = canvas.height;
        renderableWidth = image.width * (renderableHeight / image.height);
        xStart = (canvas.width - renderableWidth) / 2;
        yStart = 0;
      }

      // If image's aspect ratio is greater than canvas's we fit on width
      // and place the image centrally along height
      else if (imageAspectRatio > canvasAspectRatio) {
        renderableWidth = canvas.width;
        renderableHeight = image.height * (renderableWidth / image.width);
        xStart = 0;
        yStart = (canvas.width - renderableHeight) / 2;
      }

      //keep aspect ratio
      else {
        renderableHeight = canvas.height;
        renderableWidth = canvas.width;
        xStart = 0;
        yStart = 0;
      }
      AspectRatio.renderableHeight = renderableHeight;
      AspectRatio.renderableWidth = renderableWidth;
      AspectRatio.startX = xStart;
      AspectRatio.startY = yStart;
      return AspectRatio;
    };

    const img = new Image();
    img.src = e.target.src;
    img.addEventListener("load", () => {
      // self cofig === BS
      // canvas.width = img.width;
      // canvas.height = img.height;
      // ctx.drawImage(img, 0, 0);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // from studyJS
      let AR = calculateAspectRatio(img);
      ctx.drawImage(
        img,
        AR.startX,
        AR.startY,
        AR.renderableWidth,
        AR.renderableHeight
      );
    });
  };

  render() {
    return (
      <div className="meme-generator">
        {/* form for text */}
        <TextForm
          topText={this.state.topText}
          bottomText={this.state.bottomText}
          handleTextChange={this.handleTextChange}
          onSaveMeme={this.onSaveMeme}
        />
        <hr />

        {/* current working image */}
        {/* <button onClick={this.resetCurrentImage}>Reset Current Image</button> */}
        <CurrentImage currentImage={this.state.currentImage} />
        <hr />

        {/* all meme images */}
        <MemeLibrary
          allImages={this.state.allImages}
          handleImgClick={this.handleImgClick}
        />
      </div>
    );
  }
}

export default MemeGenerator;
