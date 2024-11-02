const green = document.querySelector('.green')
const blue = document.querySelector('.blue')
const pink = document.querySelector('.pink')
green.addEventListener('click',(e)=>{
    // e.stopImmediatePropagation()
    console.log("Green event listener");
})

pink.addEventListener('click',(e)=>{
    e.stopPropagation()

    console.log("pink event listener");
})


blue.addEventListener('click',(e)=>{

    console.log("blue event listener");
})

document.addEventListener('click',(e)=>{
    e.stopImmediatePropagation()

    console.log("document event listener");
})

document.body.addEventListener('click',(e)=>{
    console.log("document body event listener");
})