function changeColor(){
    g = document.querySelector(".green")
    r = document.querySelector(".red")
    b = document.querySelector(".blue")

    g.addEventListener('click',function(){
        txt = document.querySelector("div > p")
        txt.style.color = "green"
    })

    r.addEventListener('click',function(){
        txt = document.querySelector("div > p")
        txt.style.color = "red"
    })

    b.addEventListener('click',function(){
        txt = document.querySelector("div > p")
        txt.style.color = "blue"
    })
}