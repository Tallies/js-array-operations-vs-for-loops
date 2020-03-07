//for
function hasNine(numbers) {
    for(let index = 0; index < numbers.length; index++){
        //console.log(numbers[index]);
        if(numbers[index] === 9)
            return true;
    }
    return false;
}

console.log("Has none? ", hasNine([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) ? "Yes": "No"); //Yes
console.log("Has none? ", hasNine([0, 1, 2, 3, 4, 5, 6, 7, 8]) ? "Yes": "No"); //No
console.log("Has none? ", hasNine([9, 0, 1, 2, 3, 4, 5, 6, 7, 8]) ? "Yes": "No"); //Yes