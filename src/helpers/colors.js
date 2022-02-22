module.exports = function getColorByScore(score) {

    let color = "#008bab";

    if (score >= 80) {
        color = "#3b82f6";
    }

    if (score < 80 && score >= 50) {
        color = "#a855f7";
    }

    if (score < 50) {
        color = "#ef4444";
    }

    return color;

};