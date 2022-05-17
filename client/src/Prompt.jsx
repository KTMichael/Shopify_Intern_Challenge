import React, { useState, useEffect } from "react";
import axios from "axios";
import AllResponses from "./AllResponses.jsx";
const Prompt = () => {
  const [networkError, setNetworkError] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [latestPost, setLatestPost] = useState({ prompt: "", response: "" });
  const [promptExample, setPromptExample] = useState(" Gnomes");
  const [currentPromptInstruction, setCurrentPromptInstruction] =
    useState("Write a joke about");
  const instructions = {
    joke: [
      "Write a joke about",
      `Write a joke about Gnomes. Where do gnomes first go when they log on to the internet? The gnome page of course! Write a joke about Cows. Who’s there?Interrupting cow. Interrupting c–. MOO! Write a joke about cans. What do you call a can opener that doesn’t work? A can’t opener! ${currentPromptInstruction} ${prompt}`,
      " Gnomes",
    ],
    movie: [
      "Convert movie titles into emoji",
      `${currentPromptInstruction}. Back to the Future: 👨👴🚗🕒 ### ${currentPromptInstruction}. Batman: 🤵🦇  ### ${currentPromptInstruction}. Transformers: 🚗🤖 ### ${currentPromptInstruction}. ${prompt}:`,
      " Drive",
    ],
    startUp: [
      "Brainstorm some start up business ideas for",
      `Brainstorm some start up business ideas for socks: Create dating app for lost pairs of socks. ### toast: Create a toaster that puts inspirational quotes on your bread. ### Beer: Create a beer brand named “occasionally” so when someone asked I say I drink occasionally. ${currentPromptInstruction} ${prompt}###`,
      " Meal Kits",
    ],
  };
  const [promptType, setPromptType] = useState("joke");

  // Convert movie titles into emoji.

  const sendPrompt = (e) => {
    e.preventDefault();
    axios
      .post("/prompts", { body: instructions[promptType][1] })
      .then((res) => {
        setLatestPost({
          prompt: `${currentPromptInstruction} ${prompt}`,
          response: res.data.choices[0].text,
        });
        setPrompt("");
      })
      .catch((error) => {
        console.log("error", error);
        setNetworkError(true);
      });
  };

  const promptInstructions = (e) => {
    let currentPrompt = e.target.value;
    setPromptType(currentPrompt);
    setCurrentPromptInstruction(instructions[currentPrompt][0]);
    setPromptExample(instructions[currentPrompt][2]);
  };

  return (
    <div id="content">
      <div id="prompt">
        <h2>Write Your Prompt Here</h2>
        <form>
          <label>Choose Your Prompt Type:</label>
          <select value={promptType} onChange={(e) => promptInstructions(e)}>
            <option value="joke">Joke Ideas</option>
            <option value="movie">Movie to Emoji</option>
            <option value="startUp">Start Up Ideas</option>
          </select>
          <br />
          <br />
          <label>{currentPromptInstruction}:</label>
          <input
            id="promptInput"
            type="text"
            placeholder={promptExample}
            value={prompt}
            pattern="[a-zA-Z0-9]*"
            onChange={(e) => setPrompt(e.target.value)}
          ></input>
          <br />
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
