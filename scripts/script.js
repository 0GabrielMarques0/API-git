const users = []

const buttonUser = document.querySelector(".user-button")

buttonUser.addEventListener("click" , function () {
    const userGit = document.querySelector(".user").value
    fetch(`https://api.github.com/users/${userGit}`)
    .then( res =>  res.json())
    .then( res => {
        const box = document.querySelector("article")
        box.style.display = "block"

        const user = {
            nome: res.login,
            imagem: res.avatar_url,
            link: res.html_url
       }
       users.push(user)
    })
})



users.map( function (user){
    
        const img = document.createElement('img')
        img.setAttribute("src", user.imagem)
        img.style.width = "100px"
        img.style.height = "100px"
        const userPic = document.querySelector(".user-pic")
        userPic.appendChild(img)

        const texto = document.createElement('h1')
        texto.textContent = user.nome
        texto.style.color = "white"
        const userName = document.querySelector(".user-name")
        userName.appendChild(texto)

        const link = document.createElement('a')
        link.setAttribute("href", user.link)
        link.setAttribute("target", "_blank")
        link.textContent = "Github"
        link.style.color = "white"
        const userLink = document.querySelector('.user-link')
        userLink.appendChild(link)
})