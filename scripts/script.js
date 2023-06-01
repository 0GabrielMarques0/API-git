fetch('https://api.github.com/users/0gabrielmarques0/repos')
.then( res =>  res.json())
.then( res => {
    res.forEach(repo => {
        const li = document.createElement('li')
        const name = document.createTextNode(repo.name)
        li.appendChild(name)
        const lista = document.querySelector(".lista")
        lista.appendChild(li)
    });
    
})