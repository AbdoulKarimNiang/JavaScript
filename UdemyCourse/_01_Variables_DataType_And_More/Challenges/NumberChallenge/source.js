let x, y;


x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

sumResult = x + y
differenceResult = x - y
mutiplicationResult = x * y
quotienResult = x / y
remainderResult = Math.floor(x % y)

console.log(` ${x} + ${y} = ${ x + y}`)
console.log(` ${x} - ${y} = ${ x - y}`)
console.log(` ${x} * ${y} = ${ x * y}`)
console.log(` ${x} / ${y} = ${ x / y}`)
console.log(` ${x} % ${y} = ${ x % y}`)