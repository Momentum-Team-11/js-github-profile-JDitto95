

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

.then((response) => response.json())
.then((data) =>{ 
    let named = document.getElementById("name")

    let location = document.getElementById("location")
    location.innerHTML = data.location
    let avatar = document.querySelector("avatar")
    named.innerHTML = `<img src = ${data.avatar_url}>Joseph Menditto`
    let htmly = document.getElementById("html")
    htmly.innerHTML = `<a href=${data.html_url}>joey.menditto</a>`
    console.log(data.repos_url)
    return data.repos_url
})
.then((reposUrl) => fetch(reposUrl))
.then((res) => res.json())
.then((data) =>{
    console.log(data)
    for (let repo of data){
        console.log(repo)
    document.querySelector('.user-name').innerHTML +=  `<p><a href=${repo.url}>${repo.name}</a></p>`
    }
})


// for (let repo of data){
//     console.log(data)
//     document.querySelector(
//     '#org-data'
//         ).innerHTML += `<p><a href=${repo.url}>${repo.name}</a></p>}`

// })
