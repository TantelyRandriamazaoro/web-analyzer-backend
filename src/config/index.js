const getCategories = require("./categories.config");
const constants = require("lighthouse/lighthouse-core/config/constants")

module.exports = async () => ({
  extends: "lighthouse:default",
  settings: {
    throttling: constants.throttling.desktopDense4G,
    onlyCategories: Object.keys(await getCategories()),
  },
  categories: await getCategories(),
});
