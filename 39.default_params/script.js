// ==============================================1==================
// function multiply(a,b) {
//     return a * b;
// }
// multiply(5,6) //30

//==============================================2===================
// function multiply(a,b) {
//     console.log(a*b)
//     return a * b;
// }
// multiply(5) // NaN => isliye we use default params

// ===========================================3=================
// function multiply(a,b=7) {
//     console.log(a*b)
//     return a * b;
// }
// multiply(5) //35

// ==============================================4===================
// function multiply(a,b=7) {
//     console.log(a*b)
//     return a * b;
// }
// multiply(5,8)// 40 => overright 8 from 7

// ==================================================5================
// function multiply(a,b=7) {
//     console.log(a*b)
//     return a * b;
// }
// multiply(5, undefined)  //35
// ==================================================6=====================
// function multiply(a,b) {
//     console.log(a*b)
//     return a * b;
// }
// multiply(5, undefined) // NaN

// =========================================================7======================
// function multiply(a,b=9) {
//     console.log(a*b)
//     return a * b;
// }
// multiply(5, null) // 0 -> because of falsy value

// ===========================================================8========================
// function multiply(a,b=9) {
//     console.log(a*b)
//     return a * b;
// }
// multiply(5, '') //  0 -> because of falsy value

// ===========================================9===============
// function rollDie(){
//     return Math.floor(Math.random() *6) + 1;
// }


// ====================10===============
// function rollDie(dicenum){
//     return Math.floor(Math.random() *dicenum) + 1;
// }
// using default params

function rollDie(dicenum = 6){
    return Math.floor(Math.random() *dicenum) + 1;
}
// rollDie()
// rollDie()
// 1
// rollDie()
// 2
// rollDie()
// 1
// rollDie()
// 1
// rollDie()
// 2
// rollDie()
// 5