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
    this.setState({ currentImage: e.target });
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
        <CurrentImage currentImage={this.state.currentImage} />
        <hr />

        {/* all meme images */}
        <h2>Meme Library</h2>
        <MemeLibrary
          allImages={this.state.allImages}
          handleImgClick={this.handleImgClick}
        />
      </div>
    );
  }
}

export default MemeGenerator;
