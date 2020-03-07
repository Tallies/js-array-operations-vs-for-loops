import {runnersByTenthsOfASecond as runners} from "./data/runners.js"

function runnerNamesFromCategories(runnersByTenthsOfASecond) {
    const names = [];
    for(const category of runnersByTenthsOfASecond) {
        for(const runner of category.runners) {
            names.push(runner.name);
        }
    }
    return names;
}

console.log("Runner names: ", runnerNamesFromCategories(runners));