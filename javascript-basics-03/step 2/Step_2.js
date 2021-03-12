function showHide(){

    hide = document.querySelector("#hide")
    hide.addEventListener('click',function(){
        document.querySelector("#texte").style.display = "none"
    })
    
    show = document.querySelector("#show")
    show.addEventListener('click',function(){
        document.querySelector("#texte").style.display = "block"
    })
}