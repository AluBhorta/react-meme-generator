import React from "react";

function TextForm(props) {
  const { topText, bottomText, handleTextChange, onSaveMeme } = props;
  return (
    <form className="text-form">
      <input
        name="topText"
        value={topText}
        onChange={handleTextChange}
        placeholder="Top Text"
      />
      <br />
      <input
        name="bottomText"
        value={bottomText}
        onChange={handleTextChange}
        placeholder="Bottom Text"
      />
      <br />
      <button onClick={onSaveMeme}>Save Meme</button>
      {/* <button onClick="" >Save Image</button> */}
    </form>
  );
}

export default TextForm;
