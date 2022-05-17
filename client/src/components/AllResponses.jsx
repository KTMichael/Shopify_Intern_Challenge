import React, { useState, useEffect } from "react";
import Response from "./Response.jsx";
const AllResponses = ({ latestPost }) => {
  const [allResponses, setAllResponses] = useState([
    {
      prompt: "Write a joke about Gnomes",
      response:
        "Where do gnomes first go when they log on to the internet? The gnome page of course!",
    },
  ]);

  useEffect(() => {
    setAllResponses([latestPost, ...allResponses]);
  }, [latestPost]);

  return (
    <div id="responsesContainer">
      <h2> Responses</h2>
      <div id="allResponses">
        {allResponses.map((singleResponse, index) => {
          if (singleResponse.prompt !== "") {
            return (
              <Response
                singleResponse={singleResponse}
                key={singleResponse.prompt + index}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default AllResponses;
