import runners from "../data/runners.js";

function runnerBySpeed(runners, speed) {
    return runners.find(runner => runner.fastest === speed);// ?? "<none>";
}

console.log("Runner for 9.58: ", runnerBySpeed(runners, 9.58));
console.log("Runner for 9.58: ", runnerBySpeed(runners, 9.69));
console.log("Runner for 9.58: ", runnerBySpeed(runners, 10));