import runners from "../data/runners.js";

function runnerIndexBySpeed(runners, speed) {
    return runners.findIndex(runner => runner.fastest === speed);
}

console.log("Runner for 9.58: ", runnerIndexBySpeed(runners, 9.58));
console.log("Runner for 9.58: ", runnerIndexBySpeed(runners, 9.69));
console.log("Runner for 9.58: ", runnerIndexBySpeed(runners, 10));