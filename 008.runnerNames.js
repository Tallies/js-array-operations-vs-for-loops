import runners from "./data/runners.js"

function runnerNames(runners){
    const runnerNames = []
    for(const runner of runners) {
        runnerNames.push(runner.name);
    }
    return runnerNames;
}

console.log("Runners Names: ", runnerNames(runners));