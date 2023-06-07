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
       render()
    })
})


function render(){  
    const userList = document.querySelector(".user-list")
    userList.innerHTML = ''
    users.map( function (user){
        const userInList = document.createElement("li")
        userList.appendChild(userInList)
        userInList.style.display = 'flex'
        
        const img = document.createElement('img')
        img.setAttribute("src", user.imagem)
        img.style.width = "100px"
        img.style.height = "100px"
        img.style.borderRadius = "50px"
        userInList.appendChild(img)
        
        const userInfo = document.createElement("div")
        userInList.appendChild(userInfo)
        userInfo.style.padding = '0 10px'
        userInfo.style.height = "fit-content"
        userInfo.style.position = "relative"
        userInfo.style.left = "40px"
        userInfo.style.top = "30px"

        const texto = document.createElement('h1')
        texto.textContent = user.nome
        texto.style.color = "white"
        texto.style.fontSize = "20px"
        userInfo.appendChild(texto)

        const link = document.createElement('a')
        link.setAttribute("href", user.link)
        link.setAttribute("target", "_blank")
        link.textContent = "Github"
        link.style.color = "white"
        link.style.marginTop = "20px"
        userInfo.appendChild(link)
    })
}