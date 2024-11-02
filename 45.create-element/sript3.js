//1.
const container = document.querySelector('.container')
// for(let i = 1; i <10;i++){

// const imgContainer =  document.createElement('div')
// imgContainer.classList.add('img-container')

// const newImage = document.createElement('img')
// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites//pokemon/${i}.png`

// const paragraph = document.createElement('p')
// paragraph.innerText =i

// imgContainer.append(newImage, paragraph)
// container.append(imgContainer)
// }


//2.
// for(let i = 1; i <10;i++){
// const imgContainer =  document.createElement('div')
// imgContainer.classList.add('img-container')
// const myHTML = 
// `
//      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites//pokemon/${i}.png"/>
//       <p>${i}</p>
// `
// imgContainer.innerHTML=myHTML
// container.append(imgContainer)
// }

//3.

const imgContainer =  document.createElement('div')
imgContainer.classList.add('img-container')
let myHtml = ``
for(let i = 1; i <=100;i++)
{
  myHtml += `
  <div class="img-container">
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites//pokemon/${i}.png"/>
<p>${i}</p>
</div> 
`
}
container.innerHTML = myHtml

