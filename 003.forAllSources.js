function resetAnswers(answers, start, count) {
    start = start || 0;
    const end = count || start + 1;

    for(let index = start; index < end; index++) {
        answers[index] = -1;
    }
}

console.log("Answers: ", resetAnswers([2, 3, 5, -1, 3])); 
console.log("Answers: ", resetAnswers([2, 3, 5, -1, 3], 0, 5));