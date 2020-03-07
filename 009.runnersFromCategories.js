import { runnersByTenthsOfASecond as runners } from "./data/runners.js";

function runnersFromCategories(runnersByTenthsOfASecond) {
    const runners = [];
    for(const category of runnersByTenthsOfASecond) {
        for(const runner of category.runners) {
            runners.push(runner);
        }
    }
    return runners;
}

console.log("Runners: ", runnersFromCategories(runners));