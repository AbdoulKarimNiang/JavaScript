const myString = 'developer';

let finalString = myString[0].toUpperCase() + myString.slice(1,myString.length)

console.log(finalString)


// Second solution

let finalString2 = myString.charAt(0).toUpperCase() + myString.slice(1,myString.length)

console.log(finalString2)


// Third solution

let finalString3 = myString.charAt(0).toUpperCase() + myString.substring(1,myString.length)

console.log(finalString3)


// Fourth solution

let finalString4 = myString[0].toUpperCase() + myString.split('').slice(1).join('')
console.log(finalString4)

// Fifth solution

arrayString = Array(myString)

arrayString.shift(0)

let finalString5 = myString[0].toUpperCase() + arrayString.join('')
console.log(finalString5)
