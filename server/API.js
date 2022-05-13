const axios = require("axios");
const path = require("path");

const { APIKey } = require("./config.js");


const url = "https://api.openai.com/v1/engines/text-curie-001/completions";

module.exports = {
  postPrompt: (data, callback) => {
    const promptData = {
      prompt: data,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    axios
      .post(url, JSON.stringify(promptData), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${APIKey}`,
        },
      })
      .then((response) => {
        callback(null, response);
      })
      .catch((err) => callback(err));
  },
};

// const data = {
//   prompt: "Write a poem about a dog wearing skis",
//   temperature: 0.5,
//   max_tokens: 64,
//   top_p: 1.0,
//   frequency_penalty: 0.0,
//   presence_penalty: 0.0,
// };

// fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${APIKey}`,
//   },
//   body: JSON.stringify(data),
// });
