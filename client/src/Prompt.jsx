import React, { useState, useEffect } from "react";
import axios from "axios";
import AllResponses from "./AllResponses.jsx";
const Prompt = () => {
  const [networkError, setNetworkError] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [latestPost, setLatestPost] = useState({ prompt: "", response: "" });

  const sendPrompt = (e) => {
    e.preventDefault();
    axios
      .post("/prompts", { body: prompt })
      .then((res) => {
        setLatestPost({ prompt: prompt, response: res.data.choices[0].text });
        setPrompt("");
      })
      .catch((error) => {
        console.log("error", error);
        setNetworkError(true);
      });
  };
  return (
    <div id="content">
      <div id="prompt">
        <h2>Write Your Prompt Here</h2>
        <form>
          <textarea
            id="promptInput"
            type="text"
            placeholder="Write a joke about Gnomes"
            value={prompt}
            pattern="[a-zA-Z0-9]*"
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
          <br />
          <button onClick={(e) => sendPrompt(e)} type="submit">
            Submit
          </button>
        </form>
      </div>
      <AllResponses latestPost={latestPost} />
    </div>
  );
};

export default Prompt;
