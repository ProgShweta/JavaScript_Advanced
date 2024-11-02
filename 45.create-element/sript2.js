const image = document.querySelector('img')
const container = document.querySelector('.container')
// for(let i = 2; i<=100;i++){
//     const moreImage = image.cloneNode();
//     moreImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites//pokemon/${i}.png`
//     container.appendChild(moreImage)

// }
// const paragraph = document.createElement('p');
// paragraph.innerText = "hello world"
// container.appendChild(paragraph)

for(let i = 1; i<=100;i++){
    const image2 = document.createElement('img')
    image2.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites//pokemon/${i}.png`
    container.appendChild(image2)
}
