import React, { useState, useEffect } from "react";
import Prompt from "./Prompt.jsx";
import AllResponses from "./AllResponses.jsx";

const App = () => {

  return (
    <div id="mainPage">
      <h1> Fun With AI</h1>
      <div id="content">
        <Prompt />
        <AllResponses />
      </div>
    </div>
  );
};

export default App;
