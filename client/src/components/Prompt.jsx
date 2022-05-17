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
  const [promptType, setPromptType] = useState("joke");

  const promptMachine = {
    joke: {
      instructions: "Write a joke about",
      currentPrompt: `Write a joke about Gnomes. Where do gnomes first go when they log on to the internet? The gnome page of course! Write a joke about Cows. Who’s there? Interrupting cow. Interrupting c–. MOO! Write a joke about cans. What do you call a can opener that doesn’t work? A can’t opener! ${currentPromptInstruction} ${prompt}`,
      example: " Gnomes",
      engine: "text-curie-001",
      maxToken: 35,
    },
    movie: {
      instructions: "Convert movie titles into emoji",
      currentPrompt: `${currentPromptInstruction} Back to the Future: 👨👴🚗🕒 Batman: 🤵🦇 Transformers: 🚗🤖 ${prompt}:`,
      example: " Drive",
      engine: "text-davinci-002",
      maxToken: 7,
    },
    startUp: {
      instructions: "Brainstorm some start up business ideas for",
      currentPrompt: `Brainstorm some start up business ideas for socks: Create dating app for lost pairs of socks toast: Create a toaster that puts inspirational quotes on your bread Beer: Create a beer brand named “occasionally” so when someone asked I say I drink occasionally ${currentPromptInstruction} ${prompt}`,
      example: " Meal Kits",
      engine: "text-curie-001",
      maxToken: 50,
    },
  };

  const sendPrompt = (e) => {
    e.preventDefault();
    axios
      .post("/prompts", {
        body: [
          promptMachine[promptType].currentPrompt,
          promptMachine[promptType].engine,
          promptMachine[promptType].maxToken,
        ],
      })
      .then((res) => {
        console.log(res.data.choices[0].text);
        setLatestPost({
          prompt: `${currentPromptInstruction}: ${prompt}`,
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
    setCurrentPromptInstruction(promptMachine[currentPrompt].instructions);
    setPromptExample(promptMachine[currentPrompt].example);
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
