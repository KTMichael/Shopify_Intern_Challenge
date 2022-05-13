const cors = require("cors");
const express = require("express");
const app = express();
const morgan = require("morgan");
const api = require("./API.js");
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors());
app.use(morgan("dev"));

app.post("/prompts", (req, res) => {
  api.postPrompt(req.body.body, (err, response) => {
    if (!err) {
      res.status(response.status).send(response.data);
    } else {
      console.log(err);
      res.sendStatus(err.response.status);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
