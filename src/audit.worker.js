const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const _config = require("./config");
const { workerData, parentPort } = require("worker_threads");

const processResult = require("./transform");

(async () => {

  parentPort.postMessage({
    data: null,
    token: workerData.url,
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

    const result = await lighthouse(workerData.url, options, config);
    chrome.kill();

    const data = processResult(JSON.parse(result.report));

    parentPort.postMessage({
      data,
      token: workerData.url,
      status: 200,
    });
  } catch (err) {
    throw err;
  }

})();
