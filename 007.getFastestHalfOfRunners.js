import runners from "./data/runners.js";

function getFastestHalfOfRunners(runners){
    const fasterRunners =  [];
    for(let index = 0; index < runners.length / 2; index++) {
        fasterRunners.push(runners[index]);        
    }
    return fasterRunners;
}


console.log("Fastest half: ", getFastestHalfOfRunners(runners));