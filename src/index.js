const express = require("express");
const { Worker, isMainThread } = require("worker_threads");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mcache = require('memory-cache');
const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

const cache = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.query.q + req.query.env;
    let cachedBody = mcache.get(key);
    if (cachedBody) {
      res.send(cachedBody);
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        req.query.env == "production" ? mcache.put(key, body, duration * 1000) : mcache.put(key, body);
        res.sendResponse(body);
      }
      next()
    }
  }
}

app.get("/", cache(540), (req, res, next) => {

  // Splitting the process into multiple worker in case of multiple requests received
  if (isMainThread) {
    const worker = new Worker("./src/audit.worker.js", {
      workerData: { url: "https://" + req.query.q },
    });

    worker.on("message", (message) => {
      if (message.status == 0) {
        console.log("%c++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++", "color:green; font-weight: 900;")
        console.log("Started analysing", message.token);
      } else {
        console.log("Successfully analysed", message.token);
        console.log("%c++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++", "color:green; font-weight: 900;")
        res.json(message.data);
      }
    });

    worker.on("error", (error) => {
      console.log("%c++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++", "color:red; font-weight: 900;")
      console.error(error);
      console.log("%c++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++", "color:red; font-weight: 900;")
      next(error);
    });

    worker.on("exit", (code) => {
      console.log("Closing lighthouse", code);
    });
  }
});

app.listen(process.env.PORT || 6006, () =>
  console.log("listening to port 6006")
);
