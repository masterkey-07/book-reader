const express = require("express");
const connect = require("./database/connect");
const cors = require("cors");
const path = require("path");

const app = express();

connect();

app.use(cors());

app.use(express.json({ extended: false }));

app.use("/api/", require("./api/"));

/*app.use(express.static("../client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
});*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Listening on Port: ${PORT}`));
