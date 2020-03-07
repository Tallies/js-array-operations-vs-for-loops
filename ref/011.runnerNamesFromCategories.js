import {runnersByTenthsOfASecond as runners} from "../data/runners.js"

function runnerNamesFromCategories(runnersByTenthsOfASecond) {
    return runnersByTenthsOfASecond.flatMap(category => category.runners)
        .map(runner => runner.name);

    // return runnersByTenthsOfASecond.reduce((acc, cur) => acc.concat(cur.runners.map(runner => runner.name)), [])
}

console.log("Runner names: ", runnerNamesFromCategories(runners));