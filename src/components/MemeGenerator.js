import React, { Component } from "react";
import TextForm from "./TextForm";
import CurrentImage from "./CurrentImage";

class MemeGenerator extends Component {
  state = {
    topText: "",
    bottomText: "",
    allImages: [],
    currentImage: ""
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
    this.setState({
      [name]: value
    });
  };

  handleImgClick = e => {
    this.setState({ currentImage: e.target.src });
  };

  getMemeImageElements() {
    let imgStyles = {
      cursor: "pointer",
      width: "150px",
      height: "150px"
    };
    let memeImages;
    if (this.state.allImages) {
      memeImages = this.state.allImages.map(image => (
        <React.Fragment key={image.id}>
          {/* <p>
            <strong>{"image id: " + image.id}</strong>
          </p> */}
          <img
            id={image.id}
            src={image.url}
            alt={image.name}
            style={imgStyles}
            onClick={this.handleImgClick}
          />
        </React.Fragment>
      ));
      return memeImages;
    }
    return null;
  }

  render() {
    let memeImages = this.getMemeImageElements();
    return (
      <div className="meme-generator">
        {/* form for  */}
        <TextForm
          topText={this.state.topText}
          bottomText={this.state.bottomText}
          handleTextChange={this.handleTextChange}
          onSaveMeme={this.onSaveMeme}
        />
        <hr />

        {/* current working image */}
        <CurrentImage currentImage={this.state.currentImage} />
        <hr />

        {/* all meme images */}
        <h2>Meme Library</h2>
        <div className="meme-images">{memeImages}</div>
      </div>
    );
  }
}

export default MemeGenerator;
