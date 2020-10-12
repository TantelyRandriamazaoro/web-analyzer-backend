const patches = require("../config/audits.config");
const groupsPatches = require("../config/groups.config");

module.exports = (data) => {
  // Transform object data into array of objects
  let audits = Object.values(data.audits);
  let categories = Object.values(data.categories);
  let groups = Object.values(groupsPatches);

  // Loop thru each category, then thru each auditRefs to transform an audit
  categories.forEach((category) => {
    category.id = category.id.split("-custom")[0];
    category.auditRefs.forEach((auditRef) => {
      const audit = audits.find((el) => el.id === auditRef.id);
      const group = groups.find((el) => el.id == auditRef.group);

      audit.group = group == undefined ? null : group.id;
      audit.weight = auditRef.weight;
      audit.category = category.id;

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

      category.brief[audit.status] += 1;
      group.brief[audit.status] += 1;
    });
  });

  return { audits, categories, groups };
};
