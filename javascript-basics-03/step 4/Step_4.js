function test(){
    pass = document.querySelector("#password").value
    conf = document.querySelector("#confirmation").value
    
    if(pass != conf){
        document.getElementById("password").style.border = "3px solid red"
        document.getElementById("confirmation").style.border = "3px solid red"
    }
}