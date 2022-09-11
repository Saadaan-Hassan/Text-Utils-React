import React from "react";

export default function TextForm() {
  return (
    <div className="container">
      <div className="mb-3">
        <h1>Enter Your Text Here</h1>
        <textarea
          className="form-control"
          id="textArea"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-success mx-1">Upper Case</button>
      <button className="btn btn-success mx-1">Lower Case</button>
      <button className="btn btn-success mx-1">Title Case</button>
      <button className="btn btn-success mx-1">Remove Extra Spaces</button>
      <button className="btn btn-success mx-1">Copy Text</button>
      <button className="btn btn-success mx-1">Clear Text</button>
    </div>
  );
}
