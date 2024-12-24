// const xhr = new XMLHttpRequest();
// xhr.responseType='json'
// xhr.addEventListener('load',()=>{
// console.log(xhr.response.users[0].id);
// })
// xhr.open('GET', 'https://dummyjson.com/users');
// xhr.send()



// function makeHttpReq(method, url){
//     const xhr = new XMLHttpRequest();
// xhr.responseType='json'
// xhr.addEventListener('load',()=>{
// console.log(xhr.response.users[0].id);
// })
// xhr.open(method,url);
// xhr.send()

// }

// makeHttpReq('GET', 'https://dummyjson.com/users')
// makeHttpReq('GET', 'https://dummyjson.com/users/1')


function makeHttpReq(method, url,callback){
    const xhr = new XMLHttpRequest();
xhr.responseType='json'
xhr.addEventListener('load',()=>{
// console.log(xhr.response.users[0].id);
callback(xhr.response)
})
xhr.open(method,url);
xhr.send()

}

makeHttpReq('GET', 'https://dummyjson.com/users',(userData)=>{
    // console.log(data.users[0].id)
    console.log(userData)
    makeHttpReq('GET', `https://dummyjson.com/posts/user/${userData.users[0].id}`,(postData)=>{
        console.log(postData)
        makeHttpReq('GET', `https://dummyjson.com/comments/post/${postData.posts[0].id}`,(commentsData)=>{
            console.log(commentsData.comments[0].user.id)
            // console.log(commentsData.comments[0].user)
// 
            makeHttpReq('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`,(userData)=>{
                console.log(userData)
            })
        })
    })

})
// makeHttpReq('GET', 'https://dummyjson.com/users/1')