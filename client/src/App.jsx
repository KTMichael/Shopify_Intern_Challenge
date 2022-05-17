import React, { useState, useEffect } from "react";
import Prompt from "./Prompt.jsx";


const App = () => {
  return (
    <div>
      <div id="robot"></div>
      <div id="mainPage">
        <h1> Fun With AI</h1>
        <Prompt />
        <h1> Fun With AI</h1>
      </div>
    </div>
  );
};

export default App;
