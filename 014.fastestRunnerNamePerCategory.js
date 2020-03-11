import {runnersByTenthsOfASecond as runners} from "./data/runners.js";

function fastestRunnerNamePerCategory(runnersByTenthsOfASecond) {
    const names = [];
    for(const category of runnersByTenthsOfASecond) {
        let fastestRunnerForCategory = {fastest: 100};
        for(const runner of category.runners) {
            if(fastestRunnerForCategory.fastest >= runner.fastest) {
                fastestRunnerForCategory = runner;
            }
        } 
        names.push(fastestRunnerForCategory.name);
    }
    return names;
}

console.log("Fastest runner per category:", fastestRunnerNamePerCategory(runners));