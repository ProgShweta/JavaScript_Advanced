const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')


// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))
// container.appendChild(card.cloneNode(true))
// container.appendChild(card.cloneNode(true))
// container.appendChild(card.cloneNode(true))
// container.appendChild(card.cloneNode())
// for(let i = 2; i<=50;i++){
//  const newCard = card.cloneNode();
//  newCard.innerText = i;
//  container.append(newCard)
// }
// -------------------------------append-----------------------

// console.log(container.append('hello'));

// container.append('hello');
// container.appendChild('hello');
const text = document.createTextNode("hello")
container.appendChild(text)
