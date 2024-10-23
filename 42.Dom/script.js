
// function sayHi() {
//   document.body.children[4].src =
//     'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'
// }


// const allImage = document.getElementsByTagName('img')
// const cssImg = document.getElementsByClassName('css-image-class')[0]
// const cssImgId = document.getElementById('css-image-id')[0]
// const cssSelector9 = document.querySelector('.css-image') // only first wali show krega
// const cssSelector9 = document.querySelectorAll('.css-image') // only all wali show krega
// const cssSelector9 = document.querySelectorAll('[alt="javascript roadmap"]') 
// alt="javascript roadmap"
//======================================================================================================================//

// const allImages = document.querySelectorAll('img')
// const allImage = [...document.images]

// const imageUrls = 
// [
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSZ2vNkiVru2LtxNG2_QaJPjP16VnCRSm3w&s',
//     'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo890dsxpB5UCLQFdVBWmK4qVxTrsrLEEUg&s'
// ]

// allImages[0].src= imageUrls[0]
// allImages[1].src= imageUrls[1]
// allImages[2].src= imageUrls[2]

//=============================================using loop=========================================================================//

// for(let i = 0; i<=allImages.length; i++){
//     allImages[i].src= imageUrls[i]
// }
//===================================================using foreach===================================================================//

// allImages.forEach((Images,i) => {
//     Images.src = imageUrls[i]

// console.log(Images);
// })

//===============================================innerhtml, innertext,textcontent=======================================================================//
const paragraph = document.querySelector('p')
console.log(paragraph.innerText);
// console.log(paragraph.innerHTML);
// const nameShows =document.querySelector('[name = "shweta"]')

document.querySelector('[data-name="shweta"]').getAttribute('data-name');
const setA = document.querySelector('h1').setAttribute('title','hii')