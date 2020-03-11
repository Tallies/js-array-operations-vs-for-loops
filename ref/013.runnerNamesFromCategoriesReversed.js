import {runnersByTenthsOfASecond as runners} from "../data/runners.js";

function runnerNamesFromCategoriesReversed(runnersByTenthsOfASecond) {
    return runnersByTenthsOfASecond.reduceRight((acc, cur) => acc.concat(cur.runners.map(runner => runner.name)), []);
}

console.log("Runner names (reversed):", runnerNamesFromCategoriesReversed(runners));