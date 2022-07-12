import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () =>
    {
        console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowClick = () =>
    {
        console.log(text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleCopyClick = ()=>
    {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text is Copied", "success");
    }

    const handleRemoveClick = ()=>{
      let newText = text.split(/[  ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed Extra Space", "success");
    }

    const handleMirrorClick = ()=>{
      let newText = text.split("").reverse("").join("");
      setText(newText);
      props.showAlert("Mirrored Text", "success");
      
    }
    const handleOnChange = (event) =>
    {
        setText(event.target.value);
    }

    const handleClearClick = ()=>{
      let newText="";
      setText(newText);
      props.showAlert("Text Editor is Clear", "success");
    }
    const[text,setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
        <label htmlFor="MyBox" className="form-label">
          <br></br>
          <h5>Enter the text to utilize</h5>
        </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To Lower Case</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-primary my-2 mx-2" onClick={handleRemoveClick}>Remove Extra Space</button>
      <button className="btn btn-primary mx-1" onClick={handleMirrorClick}>Mirror Text</button>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Priview Text</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
