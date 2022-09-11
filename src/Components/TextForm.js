import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const upperCase = () => {
    setText(text.toUpperCase());
  };

  const lowerCase = () => {
    setText(text.toLowerCase());
  };

  const titleCase = () => {
    let lower = text
      .toLowerCase()
      .split(" ")
      .map((element) => {
        return element.charAt(0).toUpperCase() + element.slice(1);
      })
      .join(" ");
    setText(lower);
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
  };

  const copyText = () => {
    let input = document.getElementById("textArea");
    input.select();
    navigator.clipboard.writeText(input.value);
  };

  const clearText = () => {
    setText("");
  };

  return (
    <>
      <div className="mb-3">
        <h1>Enter Your Text Here</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          id="textArea"
          rows="8"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "gray",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
      </div>
      <button className="btn btn-success mx-1" onClick={upperCase}>
        Upper Case
      </button>
      <button className="btn btn-success mx-1" onClick={lowerCase}>
        Lower Case
      </button>
      <button className="btn btn-success mx-1" onClick={titleCase}>
        Title Case
      </button>
      <button className="btn btn-success mx-1" onClick={removeExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-success mx-1" onClick={copyText}>
        Copy Text
      </button>
      <button className="btn btn-success mx-1" onClick={clearText}>
        Clear Text
      </button>
    </>
  );
}
