import {runners} from "../data/runners.js"

function runnerAverageSpeed(runners)
{
    return runners.reduce((acc, cur) => acc + cur.fastest) / runners.length;
}

console.log("Average: ", runnerAverageSpeed(runners));