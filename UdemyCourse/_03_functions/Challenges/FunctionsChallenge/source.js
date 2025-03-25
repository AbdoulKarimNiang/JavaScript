// ## Challenge 1

// **Instructions:**

// Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

// For bonus points, write it as a one line arrow function


function getCelsius(temp){
   const celcius =  ( temp -32) * 5 / 9
   const rounded = Math.round(celcius )
   return rounded
}


console.log(getCelsius(44))
console.log(getCelsius(80))


// ## Challenge 2

// **Instructions:**

// Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

// **Expected Result:**

// ```JavaScript
// console.log(minMax([1, 2, 3, 4, 5]));
// // { min: 1, max: 5 }
// ````

// **Hints:**

// 1.  You can use `Math.min()` and `Math.max()` to get the min and max of a list of numbers.
// 2.  You can use the Spread `...` operator to spread the values of an array into separate arguments.

function minMax(arr){
    min = Math.min(...arr);
    max = Math.max(...arr);
    minMaxObj = {
        min: min,
        max: max
    }
    return minMaxObj ;
}

console.log(minMax([1, 2, 3, 4, 5]));





// ## Challenge 3

// Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.

// **Expected Result:**

// ```JavaScript
// // On page load
// The area of a rectangle with a length of 10 and a width of 5 is 50.
// ````

// **Hints:**

// 1.  The area of a rectangle is `length * width`. These should get passed into the IIFE as arguments.
// 2.  You do not have to return anything from this function, just log to the console.


( (lenght, width) =>
{
    const area = lenght  * width
    const message = `The  are of a rectangle with a lenght of ${lenght} and ${width} is ${area}`
    console.log(message)

} )(5,10);

