const processResult = require("./transform");
const getColorByScore = require("../helpers/colors");

module.exports = async (report, workerData) => {
    let summary = {};
    const results = processResult(JSON.parse(report));

    results.forEach((category) => {
        const score = category.score * 100;
        summary = { ...summary, [category.id]: { score, color: getColorByScore(score) } }
    })

    return { results, summary, personal: workerData };
}