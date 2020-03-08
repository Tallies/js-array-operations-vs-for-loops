function hasNine() {
   return numbers.some(num => num === 9);
}

/* With console.log to should elements traversed and short-circuit behaviour */
// function hasNine(numbers) {
//    return numbers.some(num => {console.log(num); num => num === 9});
// }

console.log("Has none? ", hasNine([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) ? "Yes": "No");    //Yes
console.log("Has none? ", hasNine([0, 1, 2, 3, 4, 5, 6, 7, 8]) ? "Yes": "No");       //No
console.log("Has none? ", hasNine([9, 0, 1, 2, 3, 4, 5, 6, 7, 8]) ? "Yes": "No");    //Yes