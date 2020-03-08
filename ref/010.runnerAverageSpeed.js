import {runners} from "../data/runners.js"

function runnerAverageSpeed(runners)
{
    runners.reduce((acc, cur) => (acc + cur.fastest) / 2);
    
    /* With function */
    // const calculateAverage = (avg, runner) => (avg + runner.fastest) /2;
    //
    // runners.reduce(calculateAverage);
}

console.log("Average: ", runnerAverageSpeed(runners));