import {runners} from "./data/runners.js"

function runnerAverageSpeed(runners)
{
    var sum = 0;
    for(const runner of runners){
        sum += runner.fastest;
    }
    return sum / runners.length;
}

console.log("Average: ", runnerAverageSpeed(runners));