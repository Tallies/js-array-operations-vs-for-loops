function areToggled(flags) {
    for(const flag of flags) {
        //console.log(flag);
        if(!flag)
            return false;
    }
    return true;
}

console.log("All set:", areToggled([0, 0, 0, 0, 0, 0]) ? "Yes": "No"); //No
console.log("All set:", areToggled([1, 1, 1, 1, 1, 1]) ? "Yes": "No"); //Yes
console.log("All set:", areToggled([1, 1, 1, 0, 1, 1]) ? "Yes": "No"); //No
