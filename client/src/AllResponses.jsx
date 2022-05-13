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
  console.log(localStorage.getItem("allResponses"));

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("allResponses")) === null) {
      setAllResponses([latestPost, ...allResponses]);
    } else {
      setAllResponses([
        latestPost,
        ...JSON.parse(localStorage.getItem("allResponses")),
      ]);
    }
  }, [latestPost]);

  console.log("all", allResponses);
  useEffect(() => {
    localStorage.setItem("allResponses", JSON.stringify(allResponses));
  }, [allResponses]);
  return (
    <div id="responsesContainer">
      <h2> Responses</h2>
      <div id="allResponses">
        {allResponses.map((singleResponse, index) => {
          if (singleResponse.prompt !== "") {
            return <Response singleResponse={singleResponse} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default AllResponses;
