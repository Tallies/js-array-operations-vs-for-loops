import { runnersByTenOfASecond as runners } from "./data/runners.js";

function runnersFromCategories(runnersByTenthOfASecond) {
    const runners = [];
    for(const category of runnersByTenthOfASecond) {
        for(const runner of category.runners) {
            runners.push(runner);
        }
    }
    return runners;
}

console.log("Runners: ", runnersFromCategories(runners));