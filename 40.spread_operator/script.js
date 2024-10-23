// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]
// const str = 'shweta';
// const joinedArr = [...arr1, ...arr2,...str]
// console.log(joinedArr);
// console.log(arr1.concat(arr2));
// const joinedArr = [...arr1, ...arr2]
// console.log(joinedArr);
// ===========================================================
// const user1 = {
//     name:'shweta',
//     class:12
// }
// const user2 = {
//     ...user1,
//     city:'SDR'
// }


// ===============================================================
const arr1 = [1,2]
const arr2 = [3,3 ]
const joinedArr = [...arr1, ...arr2]

function add() {
    let sum = 0;
     for(let i = 0; i<arguments.length; i++){
            sum = sum + arguments[i]
    }
    return sum;
}