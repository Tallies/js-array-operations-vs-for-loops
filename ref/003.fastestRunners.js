import runners from "../data/runners.js";

function fastestRunners(runners, speed) {
    return runners.filter(runner => runner.fastest <= speed);
}

console.log("Faster than 9.5: ", fastestRunners(runners, 9.5));
console.log("Faster than 9.6: ", fastestRunners(runners, 9.6));
console.log("Faster than 9.7: ", fastestRunners(runners, 9.7));
