const axios = require("axios");
const path = require("path");

const { APIKey } = require("./config.js");

const url = "https://api.openai.com/v1/engines/text-curie-001/completions";

module.exports = {
  postPrompt: (data, callback) => {
    const promptData = {
      prompt: data[0],
      temperature: 0.9,
      max_tokens: 35,
      top_p: 1.0,
      frequency_penalty: 0.7,
      presence_penalty: 0.9,
    };

    axios
      .post(
        `https://api.openai.com/v1/engines/${data[1]}/completions`,
        JSON.stringify(promptData),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${APIKey}`,
          },
        }
      )
      .then((response) => {
        callback(null, response);
      })
      .catch((err) => callback(err));
  },
};
