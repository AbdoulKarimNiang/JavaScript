// **Instructions:**

// Use some of the array methods that we looked at to mutate the following array to = the expected result below:

// ```js
// const arr = [1, 2, 3, 4, 5];
// ```

// **Expected Result:**

// ```js
// console.log(arr);
// // [6, 5, 4, 3, 2, 1, 0];
// ```

let arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.unshift(0);
arr.reverse()

console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr1.pop()

new_array = [...arr1, ...arr2]
console.log(new_array)


