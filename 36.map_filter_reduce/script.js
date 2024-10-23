//--------------------------------------------------------Map------------------------------------------------------
// const months = ['january', 'february', 'march','april','may']
// months.map((month) =>{
//     console.log(month);
//     return month;
// })

// console.log(months.map((index, month) =>{
//     console.log(month);
//     // console.log(index,month);
// // 
//     return month;
// }));
// const capitalMonth = months.map((month) =>{
//     console.log(month);
//     return month;
// });
// console.log(capitalMonth);

//--------------------------------------------------------Filter------------------------------------------------------
// const capitalMonth = months.filter((month) =>{
//     // console.log(month);
//     return month.length == 5;
// });
// console.log(capitalMonth);

// const months = ['january', 'february', 'march','april','May','Decmber']
// const capitalMonth = months.filter((month,array) =>{
//     console.log(month,array);
//     return month.includes('m') || month.includes('M')
// });
// console.log(capitalMonth);  // output= >[ 'march','May','Decmber']


const studentInfo = [
    {name:'shweta', age:18},
    {name:'shreya', age:19},
    {name:'lakshmi', age:14},
    {name:'chhoti', age:20},


]
const filterStudent = studentInfo.filter((studentAge)=>{
if(studentAge.age > 18){
    return studentAge.age
}
}).map((student) =>{
    return student.name;
})
console.log(filterStudent);