const image =document.querySelector('img')
const btn =document.querySelector('button')
let userData;
btn.addEventListener('click',()=>{
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(json => {
//       console.log('got the data');

//       console.log(json)
//       console.log(json.message)
//   image.src=json.message
//       // userData=json
//     })
const xhr = new XMLHttpRequest();
xhr.responseType='json'
xhr.addEventListener('load',()=>{
// console.log(JSON.parse(xhr.response));
// console.log(xhr.response);
image.src= xhr.response.message
console.log(xhr);
})
xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
xhr.send()
})




      