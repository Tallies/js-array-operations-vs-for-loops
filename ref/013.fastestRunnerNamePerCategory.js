import {runnersByTenthsOfASecond as runners} from "./data/runners.js";

function fastestRunnerNamePerCategory(runnersByTenthsOfASecond) {
    const fastestInCategory = (curFastest, challenger) => curFastest.fastest <= challenger.fastest ? curFastest : challenger;
    const fastestNamePerCategory = (names, category) => [...names, category.runners.reduce(fastestInCategory, {fastest: 100}).name];
    
    return runnersByTenthsOfASecond.reduce(fastestNamePerCategory, []);
}

console.log("Fastest runner per category:", fastestRunnerNamePerCategory(runners));