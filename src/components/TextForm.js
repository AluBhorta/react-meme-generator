import React from "react";

function TextForm(props) {
  const { userText, addTextToCanvas, handleTextChange, onSaveMeme } = props;
  return (
    <form className="text-form">
      <input
        name="userText"
        value={userText}
        onChange={handleTextChange}
        placeholder="Top Text"
      />
      <br />
      <button onClick={addTextToCanvas}>Add Text</button>

      <br />
      <button onClick={onSaveMeme}>Save Meme</button>
    </form>
  );
}

export default TextForm;
