// Constructing
const nums = [0, 1, 2, 3];
console.log("[0, 1, 2, 3]: ", nums);
console.log("Array.of: ", Array.of(0, 1, 2, 3));
console.log('Array(): ', Array(4));

//Mutating YOU SHOULD AVOID USING THESE METHOD, UNLESS YOU'VE MADE A DEEP COPY
// //push
// const numsCopy = nums;
// const newCount = nums.push(0);
// console.log("push: ", newCount, ": ",  nums, "[copy: ", numsCopy, "]");

// //pop
// const lastValue = nums.pop();
// console.log("pop: ", lastValue, ": ",  nums, "[copy: ", numsCopy, "]");

// //reverse
// const reversed = nums.reverse();
// console.log("reverse: ", reversed)
// console.log("reverse: ", lastValue, ": ",  nums, "[copy: ", numsCopy, "]");

// //sort
// nums.sort();
// console.log("sort: ", lastValue, ": ",  nums, "[copy: ", numsCopy, "]");


// //splice
// const deleted = nums.splice(2,2);
// console.log("splice: ", deleted)
// console.log("splice: ", lastValue, ": ",  nums, "[copy: ", numsCopy, "]");

// nums.push(deleted[0]);
// nums.push(deleted[1]);

// const deleted2 = nums.splice(2,2, 5, 6, 7);
// console.log("splice2: ", deleted2)
// console.log("splice2: ", lastValue, ": ",  nums, "[copy: ", numsCopy, "]");

// // concat
// const nums2 = [5, 6, 7, 8]
// const nums3 = nums.concat(nums2);
// // const nums3 = nums.concat(nums2, 4, 6, [7, 9]);
// console.log("spread: ", nums, ", nums2: ", nums2, ", nums3: ", nums3);


// //Spread
// const nums2 = [5, 6, 7, 8]
// const nums3 = [...nums, ...nums2];
// // const nums3 = [...nums, ...nums2, 4, 6, ...[7, 9]];
// console.log("spread: ", nums, ", nums2: ", nums2, ", nums3: ", nums3);

// //for
// for(let index = 0; index < nums.length; index++){
//     if(nums[index] === 3)
//         console.log("Found 3");
// }

// //for..in
// for(const idx in nums) {
//     if(nums[idx] === 3) {
//         console.log("Found 3");
//     }
// }

// //for..of
// for(const num of nums) {
//     if(num === 3) {
//         console.log("Found 3");
//     }
// }


