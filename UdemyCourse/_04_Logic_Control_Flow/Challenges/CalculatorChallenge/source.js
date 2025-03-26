
// **Instructions:**

// Create a function called `calculator` that takes three parameters: `num1`, `num2` and `operator`. The operator can be `+`, `-`, `*` or `/`. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.

// **Example:**

// ```
// calculator(5, 2, '+') // returns 7
// calculator(5, 2, '-') // returns 3
// calculator(5, 2, '*') // returns 10
// calculator(5, 2, '/') // returns 2.5
// calculator(5, 2, '&') // returns an error message
// ```

// **Hint:**

// - You can use an if statement for the operator, but this is also a good example for using a switch statement.

function calculator(firstNum, secondNumber, operation){
    if (operation ==='+'){
        const total = firstNum + secondNumber
        return total
    } else if (operation ==='-'){
        const total = firstNum - secondNumber
        return total
    } else if (operation ==='*'){
        const total = firstNum * secondNumber
        return total
    } else if (operation ==='/'){
        const total = secondNumber > 0 ? firstNum / secondNumber : 'Please insert a number greater than 0 as denominator'
        if ( (typeof total === 'number' )) {
            return total
        } else {
            alert(total)
        }
    } else {
        alert('Something wrong in the input values')

    }

}


// Second solution

function switchCalculator(firstNum, secondNumber, operation){
    switch (operation) {
        case '+':
            console.log(firstNum + secondNumber)
            break;
        case '-':
            console.log(firstNum - secondNumber)
            break;
        case '*':
            console.log(firstNum * secondNumber)
            break;
        case '/':
            if(secondNumber > 0){
                console.log(firstNum / secondNumber)
            }
            else {
                console.log("Please insert a proper number")
            }
            break;
        default:
            console.log('Please insert a proper operation')

    }

}


console.log(calculator(5, 2, '+')) // returns 7
console.log(calculator(5, 2, '-')) // returns 3
console.log(calculator(5, 2, '*')) // returns 10
console.log(calculator(5, 2, '/')) // returns 2.5
console.log(calculator(5, 2, '&')) // returns an error message



switchCalculator(5, 2, '+') // returns 7
switchCalculator(5, 2, '-') // returns 3
switchCalculator(5, 2, '*') // returns 10
switchCalculator(5, 2, '/') // returns 2.5
switchCalculator(5, 2, '&') // returns an error message