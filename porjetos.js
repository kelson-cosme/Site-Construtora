const construcoes = document.getElementById("construcoes");
const entregues = document.getElementById("entregues")

const aparecerEntregues = document.querySelector(".aparecerEntregues");
const aparecerConstrucoes = document.querySelector(".aparecerConstrucoes");

function cliqueEntregues(){
   
    if(entregues.className == "entregues"){
        construcoes.classList.remove("traco")
        entregues.classList.add("traco")
        aparecerConstrucoes.style.display = "none";
        aparecerEntregues.style.display = "block";

    } 
}

function cliqueConstrucoes(){

    if(construcoes.className == "construcoes"){
        entregues.classList.remove("traco")
        construcoes.classList.add("traco")
        aparecerEntregues.style.display = "none"
        aparecerConstrucoes.style.display = "block"
    }
}