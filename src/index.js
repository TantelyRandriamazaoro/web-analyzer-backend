const express = require("express");
const { Worker, isMainThread } = require("worker_threads");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/analyze", (req, res) => {
  if (isMainThread) {
    const worker = new Worker("./src/audit.worker.js", {
      workerData: { url: req.body.url },
    });

    worker.on("message", (message) => {
      if (message.status == 0) {
        console.log("Started worker", message.token);
      } else {
        console.log("Successfully fetched with worker", message.token);
        res.json(message.data);
      }
    });

    worker.on("error", (error) => {
      console.log(error);
      res.send(error);
    });

    worker.on("exit", (code) => {
      console.log("Worker stopped working", code);
    });
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(process.env.PORT || 3000, () =>
  console.log("listening to port 3000")
);
