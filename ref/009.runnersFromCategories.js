import { runnersByTenOfASecond as runners } from "../data/runners.js";

function runnersFromCategories(runnersByTenthOfASecond) {
    return runnersByTenthOfASecond.flatMap(category => category.runners);
}

console.log("Runners: ", runnersFromCategories(runners));