const { default: Axios } = require("axios");

async function getCategories() {
  try {
    // Fetching Categories data from Storyblok
    const { data } = await Axios.get(
      `https://api.storyblok.com/v2/cdn/stories?starts_with=categories/&token=${process.env.STORYBLOK_TOKEN}`,
      {}
    );
    const categories = data.stories.map((story) => story.content).sort((a, b) => a.order - b.order);

    // Looping through the results to transform data, for the configs of Lighthouse 
    let categories_config = {};

    for (let i = 0; i < categories.length; i++) {
      // Combining normal and JSON Audit Refs from Storyblok
      const audits = categories[i].auditRefs;
      const auditsJSON = JSON.parse(categories[i].auditRefsJSON);
      categories[i].auditRefs = [...auditsJSON, ...audits];

      // Adding new properties to the Storyblok data. Namely, brief statuses
      categories[i].brief = {
        passed: 0,
        failed: 0,
        warning: 0,
        informative: 0,
        notApplicable: 0,
      }

      // Transforming data from Storyblok to be ingested by Lighthouse
      const config = {
        // "-custom" needs to be added to prevent Lighthouse from overriding it with native config
        [categories[i].id + "-custom"]: {
          ...categories[i],
        },
      };

      categories_config = { ...categories_config, ...config };
    }

    return categories_config;
  } catch (err) {
    console.error(err);
  }
}

module.exports = getCategories;