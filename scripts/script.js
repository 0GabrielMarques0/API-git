function teste() {
    console.log("funciona")
}

fetch('https://api.github.com/users/0gabrielmarques0')
.then( res =>  res.json())
.then( res => {
        const img = document.createElement('img')
        img.setAttribute("src", res.avatar_url)
        img.style.width = "100px"
        img.style.height = "100px"
        const userPic = document.querySelector(".user-pic")
        userPic.appendChild(img)    

})
