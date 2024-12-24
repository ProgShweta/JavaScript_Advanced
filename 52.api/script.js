const image =document.querySelector('img')
const btn =document.querySelector('button')
let userData;
btn.addEventListener('click',()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      console.log('got the data');

      console.log(json)
      console.log(json.message)
  image.src=json.message
      // userData=json
    })
})



// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
      