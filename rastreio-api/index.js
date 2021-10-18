const express = require("express");
const rastrojs = require("rastrojs");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

app.get("/api/rastreio/:code", async (req, res) => {
  try {
    const tracks = await rastrojs.track(req.params.code);

    if (tracks[0].error) throw tracks[0].error;

    res.status(200).json(tracks[0]);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Aplicação rodando em localhost:${port}`);
});
