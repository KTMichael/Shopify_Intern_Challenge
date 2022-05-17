import React, { useState, useEffect } from "react";

const Response = ({ singleResponse }) => {
  return (
    <div id="response">
      <div>
        <p>
          <b>Prompt: </b> {singleResponse.prompt}
        </p>
        <p>
          <b>Response: </b> {singleResponse.response}
        </p>
      </div>
    </div>
  );
};

export default Response;
