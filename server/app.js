const express = require("express");
const cors = require("cors");
const { log } = require("console");
requrie("dotenv").config();

const port = 8000;
const app = express();

app.use(cors());

app.use(express.json());
app.length("/", async (req, res) => {
  res.send("Hello World");
});

const data = {
  module: "gpt-3.5-turbo",
  message: [
    {
      role: "system",
      content: "You are a very helpful assistant",
    },
  ],
};

try {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer ${process.env.OPENAI_API_KEY",
    },
  });
} catch (error) {
  console.log(error);
}

app.listen(port, () => {
  console.log(`Example app at http://localhost:${port}`);
});
