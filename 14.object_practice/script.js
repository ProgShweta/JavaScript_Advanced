// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

/**
 * 
 1. var student = {
    name : 'shweta',
    sclass: "btech",
    rollno:45
}
console.log(student.name);
console.log(student.sclass);
console.log(student.rollno);
console.log(student.hasOwnProperty('name'));
console.log(student.hasOwnProperty('class'));
 */

2.
// let student = {
//     name : 'shweta',
//     sclass: "btech",
//     rollno:45
// }
// // console.log(Object.keys(student)); ['name', 'sclass', 'rollno']
// const storeKeys = Object.keys(student);
// console.log(storeKeys.join(","));
// for(let property in student){
//     console.log(`${property} : ${student[property]}`);
// }

3.
// let student2 = {
//     name : 'shweta',
//     sclass: "btech",
//     rollno:45
// }
// delete student2.rollno;
// console.log(student2.rollno);


// 4
// let student2 = {
//     name : 'shweta',
//     sclass: "btech",
//     rollno:45
// }
// console.log(student2.toString());//[object Object]
// console.log(student2.length);


// 5.
// let student2 = {
//     name : 'shweta',
//     sclass: "btech",
//     rollno:45
// }
// let printValues = Object.values(student2)
// console.log(printValues.join(","));


//6.
// let student2 = {
//     name : 'shweta',
//     sclass: "btech",
//     rollno:45
// }
// console.log(Object.keys(student2)); //(3) ['name', 'sclass', 'rollno'
// console.log(Object.values(student2));//(3) ['shweta', 'btech', 45]
// console.log(Object.entries(student2));
// // 0: (2) ['name', 'shweta']
// // 1: (2) ['sclass', 'btech']
// // 2: (2) ['rollno', 45]


// 7.
const obj = {
    // a : 'one',
    // b: 'two',
    // b : 'three'
    // {a: 'one', b: 'three'}
    a : 'one',
    b: 'two',
    a : 'three'
    // {a: 'three', b: 'two'}
}
console.log(obj);