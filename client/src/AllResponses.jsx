import React, { useState, useEffect } from "react";
import Responses from "./Response.jsx";

const AllResponses = () => {

  
  return (
    <div id="responsesContainer">
      <h2> Responses</h2>
      <div id="allResponses">
        <Responses />
      </div>
    </div>
  );
};

export default AllResponses;
