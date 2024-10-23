// const hii = "hello"
// setTimeout('console.log("hii")')
// setTimeout('console.log(true)')
// setTimeout(`console.log("shweta");console.log("shweta")`, 4000)

// const timer1 = setTimeout(`console.log("h-1")`, 1000)
// const timer2=  setTimeout(`console.log("h-2")`, 2000)
// const timer3 = setTimeout(`console.log("h-7")`, 7000)

// clearTimeout(timer2) // timer2 ko print ni krega it will stop to h-2
// -------------------------------which one will firstly print-----------------------------

// const timer1 = setTimeout(`console.log("h-1")`, 1000)
// const timer2=  setTimeout(`console.log("h-2")`,0)
// const timer3 = setTimeout(`console.log("h-3")`, 3000)
// const timer4 = setTimeout(a, 4000)
// function a() {
//     console.log("hello worlds");
// }

// console.log("first print"); //firstly this will print then three
// --------------------------set Interval

// const timer1 = setInterval(`console.log("h-1")`, 1000)
// clearInterval(timer1) -.ruk jayega issee wrna synchronously print hota rhega

// const timer1 = setInterval(a, 3000) // here is higher order function

// function a() {
//     console.log("hello worlds");
// }

// --------------------------
setTimeout(function(){
    debugger
    console.log("h-1");
})
console.log("h-2");