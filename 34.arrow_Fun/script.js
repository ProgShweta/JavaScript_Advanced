//function expression
// const square = function(a){
//     return a*a;
// }

// arrow function expression
const square = (a) => {
    return a*a;
}

const add = (a,b) => a+b;
const cube = (a) => a*a*a;
const sub = (A,b) => A-b; 

// setTimeout(() => {
//     debugger
//     console.log("hii");
// }, 3000)

const random = () => (
    Math.floor(Math.random() *10 ) + 1
)