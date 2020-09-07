const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const config = require("./config");
const { workerData, parentPort } = require("worker_threads");

const processResult = require("./transform");

const token = Math.random(2);

(async () => {
  parentPort.postMessage({
    data: null,
    token,
    status: 0,
  });

  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const options = {
    logLevel: "info",
    output: "json",
    port: chrome.port,
  };

  const result = await lighthouse(workerData.url, options, config);
  chrome.kill();

  const transformed = processResult(JSON.parse(result.report));

  parentPort.postMessage({
    data: transformed,
    token,
    status: 200,
  });
})();
