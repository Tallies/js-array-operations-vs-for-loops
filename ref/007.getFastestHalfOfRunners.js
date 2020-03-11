import runners from "../data/runners.js";

function getFastestHalfOfRunners(runners){
    return runners.slice(0, runners.length/2);
}


console.log("Fastest half: ", getFastestHalfOfRunners(runners));