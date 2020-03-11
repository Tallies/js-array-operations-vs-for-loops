import runners from "./data/runners.js";

function runnerBySpeed(runners, speed) {
    for(const runner of runners) {
        if(runner.fastest === speed)
            return runner;
    }
    return undefined;
    // return "<none>";
}

console.log("Runner for 9.58: ", runnerBySpeed(runners, 9.58));
console.log("Runner for 9.58: ", runnerBySpeed(runners, 9.69));
console.log("Runner for 9.58: ", runnerBySpeed(runners, 10));