// const user = {
//     firstName : 'shweta',
//     lastName: 'chaudhary',
//     shweta : 'developer'
// }
// console.log(user);
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user[firstName]);// it must be in inverted comma
// console.log(user["firstName"]);

// ---------------------updating data-----------------------------------
// user.age = 23
// user['is-student'] = true
 // console.log(user)
// // {firstName: 'shweta', lastName: 'chaudhary', shweta: 'developer', age: 23, is-student: true}
// age: 23
// firstName: "shweta"
// is-student: true
// lastName: "chaudhary"
// shweta: "developer"

const user = {
  firstName: 'Shweta',
  lastName: 'chaudhary',
  address: {
    city: 'Naugarh',
    pinCode: 23455,
    state: 'UP',
  },
  moreDetails:{
    number:98989898
  }
}
console.log(user);
console.log(user.address);
console.log(user.address.city);
console.log(user.moreDetails.number);