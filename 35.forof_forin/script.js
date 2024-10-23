const fruits = ['apple', 'banana','guava', 'grapes','peach']
for(let i = 0 ; i < fruits.length; i++){
    console.log(fruits[i]);
}
console.log("*******************");

for(const fruit of fruits){
    // debugger
    console.log(fruit);
}

console.log("*******************");

const user = 'shweta chaudhary'
for(letter of user){
    console.log(letter);
}

console.log("*******************");
//for..of
// const person = {
//     name: 'shweta',
//     class: 'btech',
//     address: 'SDR'
// }
// for(personInfo of person){
//   console.log(personInfo);
// }

// output - script.js:26 Uncaught TypeError: person is not iterable so we use forin

//
// const person = {
//     name: 'shweta',
//     class: 'btech',
//     address: 'SDR',
//     city:' naugarh'
// }
// const personkeys = Object.keys(person);
// const personValues = Object.values(person)
// const personEntries = Object.entries(person)
// ------------------------------------------------------------------
// ..forin
// for(const personInfo in person){
//   console.log(personInfo, ':', person[personInfo]);
// }

// for(const key in person){
//     console.log(key, ':', person[key]);
//   }
// -------------------------------------------------------------------------
// const person = {
//     name: 'shweta',
//     class: 'btech',
//     address: 'SDR',
//     city:' naugarh'
// }
// const personValues = Object.values(person)
// for(value of personValues){
//     console.log(value);
// }



// const student = {

//     name: 'John Doe',

//     age: 20,

//     grade: 'A'

// };

// for(property in student){
//     console.log(Object.values(property));
// }


                                                  //foreach
// const fruits2 = ['apple', 'banana','guava', 'grapes','peach']
// fruits2.forEach(function(fruit){
//     console.log(fruit);
// })

//using arrow fun

const fruits2 = ['apple', 'banana','guava', 'grapes','peach']
// fruits2.forEach((fruit) => {
//     console.log(fruit);
// })
fruits.forEach(function(fruit){
    console.log(fruit);
})

