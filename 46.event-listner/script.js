
// const h1 = document.querySelector('h1')
// const card = document.querySelector('.card')
// const container = document.querySelector('.container')

// function sayHi() {
//     console.log('Hiiiii');
// }

// function secondSayHi() {
//     console.log('Second Hi');
// }

// // h1.onclick = sayHi
// // h1.onclick = secondSayHi


// // h1.addEventListener('click', sayHi)
// // h1.addEventListener('click', secondSayHi)

// let count = 1

// card.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     // const newCard = card.cloneNode()
//     // newCard.classList.remove('add-card')
//     console.log(newCard)
//     newCard.innerText = count++
//     container.append(newCard)
// })

const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')
function sayHi(){
    console.log("okay hii");
}
function card1(){
    console.log("card1 double click");
}

// h1.addEventListener('click', sayHi)
// h1.addEventListener('click', card1)

// card.addEventListener('click',sayHi)
// let count = 1
// card.addEventListener('click',()=>{
//     // console.log('unknown functionS');
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })

// let count = 1
// card.addEventListener('mouseup',()=>{
//     // console.log('unknown functionS');
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })

// let count = 1
// card.addEventListener('mousedown',()=>{
//     // console.log('unknown functionS');
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })


let count = 1
// card.addEventListener('mouseenter',()=>{
//     // console.log('unknown functionS');
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })

// card.addEventListener('mousemove',()=>{
//     // console.log('unknown functionS');
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })

// card.addEventListener('mouseleave',()=>{
//     // console.log('unknown functionS');
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })

// card.addEventListener('mouseout',()=>{
//     // console.log('unknown functionS');
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })

// card.addEventListener('wheel',()=>{
//     // console.log('unknown functionS');
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })

// card.addEventListener('scroll',()=>{
//     // console.log('unknown functionS');
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })

// card.addEventListener('touchstart',()=>{
//     // console.log('unknown functionS');
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })


// card.addEventListener('touchend',()=>{
//     // console.log('unknown functionS');
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })

// card.addEventListener('touchmove',()=>{
//     // console.log('unknown functionS');
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })

// h1.addEventListener('drag',(e)=>{
//     // console.log('unknown functionS');
//     console.log(e);
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })

// card.addEventListener('pointermove',(e)=>{
//     // console.log('unknown functionS');
//     console.log(e);
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })

// card.addEventListener('pointerenter',(e)=>{
//     // console.log('unknown functionS');
//     console.log(e);
//     const newCard = document.createElement('div');
//     newCard.classList.add('card')
//     newCard.innerText = count;
//     count++;
//     container.append(newCard)
    
// })

card.addEventListener('pointerleave',(e)=>{
    // console.log('unknown functionS');
    console.log(e);
    const newCard = document.createElement('div');
    newCard.classList.add('card')
    newCard.innerText = count;
    count++;
    container.append(newCard)
    
})