import runners from "../data/runners.js"

function runnerNames(runners){
    return runners.map(runners => runners.name);
}

console.log("Runners: ", runnerNames(runners));