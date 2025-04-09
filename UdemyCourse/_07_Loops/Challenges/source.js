
console.log("Solution with For loop")

for (let i = 0; i <= 100; i++){

    if ( (i % 3 === 0) & (i % 5 === 0) ) {
        console.log(` ${i}: FizzBuzz`)
    }
    else if (i % 3 === 0 ){
        console.log(` ${i}: Fizz`)
    }
    else if (i % 5 === 0 ){
        console.log(` ${i}: Buzz`)
    }
    
}


console.log("Solution with While Loops")

let j = 0

while (j <= 100) {
    if ( (j % 3 === 0) & (j % 5 === 0) ) {
        console.log(` ${j}: FizzBuzz`)
    }
    else if (j % 3 === 0 ){
        console.log(` ${j}: Fizz`)
    }
    else if (j % 5 === 0 ){
        console.log(` ${j}: Buzz`)
    }
    
    j++;
}