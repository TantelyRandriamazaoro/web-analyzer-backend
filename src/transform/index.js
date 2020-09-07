const patchAudits = require("./transform");

module.exports = function processResult(data) {
  const result = patchAudits(data);

  return result;
};
