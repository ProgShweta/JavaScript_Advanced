const username = 'Anurag'
let userAge = 25
// var a = 50

// function subtract() {
//     debugger
//   const x = 18
//   const y = 15
//   const z = 12
//   console.log(x - y)
//   console.log(username)
//   function child(){
//     const childName = 'chhoti';
//     console.log(childName);
//     console.log(z);
//   }
//   child()
// }

// subtract()
// debugger
// function parent() {
//     const msg = 'hello ';
//     function child(){
//         const a = 10
//         console.log(msg);
//         console.log(a);
//     }
//     child()
// }
// parent()                   this will wor

// debugger ------------->THIS ONE IS LEXICAL SCOPE
// function parent() {
//   const msg = 'hello '
//   function child() {
//     const a = 10
//     console.log(msg)
//     function sibling() {
//       console.log(a)
//     }
//     sibling()
//   }
//   child()
// }
// parent()



//THIS ONE IS NOT ACCESSIBLE LEXICAL SCOPE
// function parent() {
//     const msg = 'hello '
//     function child() {
//       const a = 10
//       console.log(msg)
//     }
//     child()
//       function sibling() {
//         console.log(a)
//       }
//       sibling()
//   }
//   parent()


  // BLOCK SCOPE
  {
    const c = 'hi'
    console.log(c);
  }
  console.log(c);

console.log('Program Ended')
