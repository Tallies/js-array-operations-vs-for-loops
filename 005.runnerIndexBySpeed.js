import runners from "./data/runners.js";

function runnerIndexBySpeed(runners, speed) {
    for(const runnerIndex in runners) {
        if(runners[runnerIndex].fastest === speed)
            return runnerIndex;
    }
    return -1;
}

console.log("Runner for 9.58: ", runnerIndexBySpeed(runners, 9.58));
console.log("Runner for 9.58: ", runnerIndexBySpeed(runners, 9.69));
console.log("Runner for 9.58: ", runnerIndexBySpeed(runners, 10));