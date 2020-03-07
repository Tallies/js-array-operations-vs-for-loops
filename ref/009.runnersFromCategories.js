import { runnersByTenthsOfASecond as runners } from "../data/runners.js";

function runnersFromCategories(runnersByTenthsOfASecond) {
    return runnersByTenthsOfASecond.flatMap(category => category.runners);
}

console.log("Runners: ", runnersFromCategories(runners));