import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("converted to uppercase!","success")
  };
  const handleDownClick = () => {
    setText(text.toLowerCase());
    props.showAlert("converted to lowercase!","success")
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("text cleared!","success")
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard!","success")
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!","success")
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h2>{props.title}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows={8}
            value={text}
            onChange={handleChange}
            defaultValue={""}
            style={{backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'light' ? 'black' : 'white'}}
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          clear
        </button>
      </div>

      <div className="my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h2>Your text summary</h2>
        <p>
          <strong>
            {
              text
                .trim()
                .split(/\s+/)
                .filter((word) => word.length > 0).length
            }
          </strong>{" "}
          words and <strong>{text.replace(/\s/g, "").length}</strong> characters
        </p>
        <p>
          <strong>
            {0.008 *
              text
                .trim()
                .split(/\s+/)
                .filter((word) => word.length > 0).length}
          </strong>{" "}
          Minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here..."}</p>
      </div>
    </>
  );
};

export default TextForm;
