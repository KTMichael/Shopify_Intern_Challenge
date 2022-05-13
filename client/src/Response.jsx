import React, { useState, useEffect } from "react";

const Response = ({ singleResponse }) => {
  return (
    <div id="response">
      {singleResponse.prompt !== "" && (
        <div>
          <p> Prompt: {singleResponse.prompt}</p>
          <p>Response: {singleResponse.response}</p>
        </div>
      )}
    </div>
  );
};

export default Response;
