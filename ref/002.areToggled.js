// function areToggled(flags) {
//     return flags.every(flag => flag);
// }

function areToggled(flags) {
    return flags.every(flag => { console.log(flag); return flag; });
}

console.log("All set:", areToggled([0, 0, 0, 0, 0, 0]) ? "Yes": "No");      //No
console.log("All set:", areToggled([1, 1, 1, 1, 1, 1]) ? "Yes": "No");      //Yes
console.log("All set:", areToggled([1, 1, 1, 0, 1, 1]) ? "Yes": "No");      //No