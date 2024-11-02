const usernameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')
const form = document.querySelector('form')
// usernameInput.addEventListener('click', ()=>{
//     console.log("hello user");
// })

// usernameInput.addEventListener('dblclick',()=>{
//     console.log("hello user");
// })

//  usernameInput.addEventListener('input', (e)=>{
//     // console.log(e);
// // console.log(e.target.value);
// paragraph.innerText=e.target.value
//     })

// usernameInput.addEventListener('change', (e)=>{
// paragraph.innerText=e.target.value
//     })



// usernameInput.addEventListener('focus', (e)=>{
//     console.log(e);
//     paragraph.innerText=e.target.value
//         })
// usernameInput.addEventListener('blur', (e)=>{
//     console.log(e);
//     paragraph.innerText=e.target.value
//         })

// form.addEventListener('submit', (e)=>{
//         e.preventDefault();
//         console.log("form submit");
//             })


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const myForm = new FormData(form);
        console.log(myForm);
        for (const ppp of myForm.entries()) {
            console.log(ppp); // This will log the name and value pairs
        }
    });
