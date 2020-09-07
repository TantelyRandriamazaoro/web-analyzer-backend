const categories = require("./categories.config");
const groups = require("./groups.config");

module.exports = {
  extends: "lighthouse:default",
  settings: {
    onlyCategories: ["performance-custom", "seo-custom", "best-practices-custom"],
  },
  categories,
  groups
};
