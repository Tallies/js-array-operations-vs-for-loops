import {oneLevel, twoLevels, threeLevels} from "./data/nestedArrays.js";

function allAsList(source, depth) {
    if(depth == 0) {
        return source;
    }
    var destination = [];
    for(const element of source) {
        if(Array.isArray(element)) {
            for(const element2 of allAsList(element, depth - 1)) {
                destination.push(element2);
            }
        } else {
            destination.push(element);
        }
    }
    return destination;
}

console.log("One level to depth 1: ", allAsList(oneLevel, 1));
console.log("Two levels to depth 1: ", allAsList(twoLevels, 1));
console.log("Two levels to depth 2: ", allAsList(twoLevels, 2));
console.log("Three levels to depth 2: ", allAsList(threeLevels, 2));
console.log("Three levels to depth 3: ", allAsList(threeLevels, 3));