import React, { useState, useEffect } from "react";
import axios from "axios";
const { APIKey } = "../../server/config.js";
const Prompt = () => {
  const [allResponses, setAllResponses] = useState([]);
  const [networkError, setNetworkError] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  //   //only allows letters and numbers in input
  // const verifyInput = (text) => {
  //   return text.replace(/[^\w]|_/g, "");
  // };

  const sendPrompt = (e) => {
    e.preventDefault();
    axios
      .post("/prompts", { body: prompt })
      .then((res) => {
        setResponse(res.data.choices[0].text);
        console.log("res", res.data.choices[0].text);
      })
      .catch((error) => {
        console.log("error", error);
        setNetworkError(true);
      });
  };
  return (
    <div id="prompt">
      <h2>Write Your Prompt Here</h2>
      <form>
        <textarea
          id="promptInput"
          type="text"
          placeholder="Write a joke about Gnomes"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <br />
        <button onClick={(e) => sendPrompt(e)} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Prompt;
