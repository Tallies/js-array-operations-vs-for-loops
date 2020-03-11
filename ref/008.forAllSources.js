function resetAnswers(answers, startReset, endReset){
    startReset = startReset || 0;
    endReset = endReset || startReset + 1;
    const shouldReset = index => index >= startReset && index < endReset;
    
    return answers.map((answer, index) => shouldReset(index) ? -1 : answer);
}

console.log("Answers: ", resetAnswers([2, 3, 5, -1, 3])); 
console.log("Answers: ", resetAnswers([2, 3, 5, -1, 3], 0, 4));