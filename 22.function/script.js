
// // Function Definition
// function introduceMe(username, profession, age) {
//     // console.log(typeof username);
//     // console.log(typeof profession);
//     // console.log(typeof age);
//     console.log('Hi,');
//     console.log(`My name is ${username || 'Procodrr'}.`);
//     console.log(`I am a ${profession}`);
//     console.log(`I am ${age} years old.`); 
// }

// //                  Function Call
// const returnValue = introduceMe()

// introduceMe('Anurag', 'Software Engineer', 25)
// introduceMe('Akash', 'Mechanical Engineer', 27)

function introduce(username, profession,age=24){
    console.log(`my name is ${username}`);
    console.log(`I am a ${profession}`);
    console.log(`I am  ${age} years old`);
    // console.log('hii');
    return true;
}
introduce('shweta','web developer')
console.log('*************');
introduce('shreya', ' delhi IItian',23)
