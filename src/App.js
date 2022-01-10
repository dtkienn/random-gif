import axios from "axios";
import React, { useState } from "react";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield"
import './App.css'
function App() {
  const api_key = "yO0Ir7r7VV8pE0hrYULqFrbNz5dZ8z7s";
  const [gif, setGif] = useState("");
  const [input, setInput] = useState("");
  const getGif = async () => {
    let res = await axios.get(
      `https://api.giphy.com/v1/gifs/random?tag=${input}&api_key=${api_key}&limit=1`
    );
    setGif(res.data.data.images.downsized_large.url);
    document.querySelector('.copied').innerHTML = "";
  }
  const handleInputChange = (e) => {
    let output = e.target.value;
    setInput(output);
  }
  const handleImageClick = (e) => {
    let url = e.target.src;
    navigator.clipboard.writeText(url);
    document.querySelector('.copied').innerHTML = "Copied to clipboard";
  }
  return (
    <div className="main-app">
      <div className="main-container">
        <h1>Get random GIF</h1>
        {gif && 
          <img src={gif} alt="" onClick={handleImageClick}>
          </img>
        }
        <p className="copied"></p>
        <Textfield onChange={handleInputChange} placeholder="Enter GIF search"></Textfield>
        <Button onClick={getGif} appearance='primary'>
          Get a gif
        </Button>
      </div>
    </div>
  );
}

export default App;
