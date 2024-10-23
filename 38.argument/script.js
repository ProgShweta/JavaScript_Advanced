//  function add(a,b){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//     return a+b;
//  }
//  add(4,5,6,7)

// function add(){
//  for(let i = 0; i < arguments.length;i++)
//   console.log(arguments[i]);
// }
// add(4,5,5,6)

function add(){
   let sum = 0;
   for(let i = 0; i < arguments.length;i++)
{
   sum = sum +arguments[i]
}  
 console.log(sum);
}
  add(4,5,5,6)