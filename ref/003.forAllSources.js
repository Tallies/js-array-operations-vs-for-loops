function resetAnswers(answers, startReset, endReset){
    startReset = startReset || 0;
    endReset = endReset || startReset + 1;

    return answers.fill(-1, startReset, endReset);
}

console.log("Answers: ", resetAnswers([2, 3, 5, -1, 3])); // [-1, 3, 5, -1, 3]
console.log("Answers: ", resetAnswers([2, 3, 5, -1, 3], 0, 4)); // [-1, -1, -1, -1, -1]