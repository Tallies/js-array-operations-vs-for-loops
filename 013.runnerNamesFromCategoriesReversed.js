import {runnersByTenthsOfASecond as runners} from "./data/runners.js";

function runnerNamesFromCategoriesReversed(runnersByTenthsOfASecond) {
    const names = [];
    for(let categoryIndex = runnersByTenthsOfASecond.length - 1; categoryIndex >=0; categoryIndex--) {
        const category = runnersByTenthsOfASecond[categoryIndex];
        for(let runnerIndex = category.runners.length - 1; runnerIndex >= 0; runnerIndex--) {
            names.push(category.runners[runnerIndex].name);
        }
    }
    return names;
}

console.log("Runner names (reversed):", runnerNamesFromCategoriesReversed(runners));