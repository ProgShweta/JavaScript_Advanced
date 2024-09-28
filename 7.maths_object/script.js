console.log(Math.PI)
// 3.141592653589793
console.log(Math.E)
// 2.718281828459045
console.log(Math.SQRT2)
// 1.4142135623730951

console.log(Math.sqrt(16)); //4
console.log(Math.pow(2,3))//8=2k power =2** 3
Math.floor(7.1)
// 7
Math.floor(7.2)
// 7
Math.floor(-3.9)
// -4

Math.ceil(2.1)
// 3
Math.ceil(2.2)
// 3
Math.ceil(2.3)
// 3
Math.ceil(2.4)
// 3
Math.ceil(2.6)
// 3
Math.ceil(2.8)
// 3
Math.ceil(2.9)
// 3
Math.ceil(-2.9)
// -2
Math.ceil(-2.8)
// -2
Math.ceil(-2.1)
// -2
Math.ceil(-2)
// -2
Math.ceil(-3.1)
// -3
// --------------------------------MAth.random()----------------------
Math.random()
// 0.18882642353227586
Math.random()
// 0.5874940596664218
Math.random(1)
// 0.7543256763233399
Math.random(1)
// 0.1370126551157047
Math.random(1)
// 0.881103159640966
Math.random(10)
// 0.5366613026680727
Math.random(10)
// 0.6936840831625335
Math.random(10)
// 0.5795534461110787
Math.random()*10
// 0.678366667515764
Math.random()*10
// 0.5740982838694197
Math.random()*10
// 9.76967441829979
Math.random()*10
// 0.42259215598998034
Math.random()*10
// 1.8693934337500129
Math.random()*10
// 5.501039819095126
Math.random()*10
// 7.175456381985397
Math.random()*10
// 8.452668054996275

const width = +prompt("Please Enter Rectangle Width");
const height = +prompt("Please Enter Rectangle Height");

// console.log(width * height);
document.write(`Rectangle Area: ${width * height}`);


//
//Generate a random integer between 25 and 50 in JavaScript?
const randomNumber = Math.floor(Math.random() * (50 - 25  + 1)) + 25;
console.log(randomNumber)

//50 = max no
//25 = min no
// (max - min +1)