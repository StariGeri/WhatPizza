const express = require("express");

const app = express();
const PORT = 3000;

app.get("/splinetool/runtime", (req, res) => {
  res.sendFile(__dirname + "/node_modules/@splinetool/runtime/build/runtime.js");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
