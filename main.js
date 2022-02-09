

// fetch(url)
//     .then(function(response){
//     console.log(response)
//     return response.json()
//     })

//     .then(function(data){
//         console.log(data)
//     document.querySelector('#user-name').innerHTML = `<h2>${data.name}</h2>`
//     })
let url = 'https://api.github.com/users/JDitto95'

fetch(url)
.then((res) => res.json())
.then((data) =>{
document.querySelector('.user-name').innerHTML = "testString"
console.log(data.repos_url)
return data.repos_url
})
.then((reposUrl) => fetch(reposUrl))
.then((res) => res.json())
.then((data) =>{
    console.log(data)
}) 
for (let repo of data){
    document.querySelector(
         '#org-data'
        ).innerHTML += `<p><a href=${repo.url}>${repo.name}</a></p>}`
}
})
