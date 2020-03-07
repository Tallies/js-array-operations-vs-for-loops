import {runners} from "../data/runners.js"

function runnerAverageSpeed(runners)
{
    runners.reduce((acc, cur) => (acc + cur.fastest) / 2);
}

console.log("Average: ", runnerAverageSpeed(runners));