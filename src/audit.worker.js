const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const _config = require("./config");
const axios = require("axios");
const { workerData, parentPort } = require("worker_threads");

const merge = require("./transform/merge");

(async () => {

  parentPort.postMessage({
    data: null,
    token: workerData.Website,
    status: 0,
  });

  try {

    const config = await _config();

    const chrome = await chromeLauncher.launch(
      {
        chromeFlags: [
          "--headless",
          "--no-sandbox",
          "--disable-gpu",
          "--disable-dev-shm-usage"
        ]
      },
      config
    );

    const options = {
      logLevel: "info",
      output: "json",
      port: chrome.port,
    };

    const { report } = await lighthouse(workerData.Website, options, config);
    chrome.kill();

    const data = await merge(report, workerData);

    parentPort.postMessage({
      data,
      token: workerData.Website,
      status: 200,
    });
  } catch (err) {
    throw err;
  }

})();
