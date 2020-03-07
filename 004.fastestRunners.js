import runners from "./data/runners.js";

function fastestRunners(runners, speed) {
    const fastest = [];
    for(var runner of runners){
        if(runner.fastest <= speed)
            fastest.push(runner);
    }
    return fastest;
}


console.log("Faster than 9.5: ", fastestRunners(runners, 9.5));
console.log("Faster than 9.6: ", fastestRunners(runners, 9.6));
console.log("Faster than 9.7: ", fastestRunners(runners, 9.7));