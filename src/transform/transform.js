const { audit } = require("lighthouse/lighthouse-core/audits/audit");

module.exports = (data) => {
  // Transform object data into array of objects
  let audits = Object.values(data.audits);
  let categories = Object.values(data.categories);

  // Loop thru each audit to get completion statuses based on score
  audits.forEach((audit) => {
    switch (audit.scoreDisplayMode) {
      case "binary":
        audit.status = audit.score == 1 ? "passed" : "failed";
        break;

      case "numeric":
        if (audit.score >= 0.8) audit.status = "passed";
        if (audit.score < 0.8 && audit.score >= 0.5) audit.status = "warning";
        if (audit.score < 0.5) audit.status = "failed";
        break;

      case "informative":
        audit.status = audit.scoreDisplayMode;

      case "notApplicable":
        audit.status = audit.scoreDisplayMode;

      default:
        break;
    }
  });

  // Loop thru categories to merge audit results into category.auditRefs for easier consumption.
  // And generate brief statuses
  categories.forEach((category) => {

    // Removes '-custom' from caegory.id since it is not needed for consumption
    category.id = category.id.split("-custom")[0];

    category.auditRefs = category.auditRefs.map((auditRef) => {
      const auditResult = audits.find((audit) => audit.id == auditRef.id);
      return { ...auditRef, ...auditResult };
    });

    category.auditRefs.forEach((audit) => {
      category.brief[audit.status] += 1;
    })
  });

  return categories;
};
