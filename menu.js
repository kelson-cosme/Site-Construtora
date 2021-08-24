const menu = document.querySelector(".menu");

function ativar(){
    const navegacao = document.querySelector(".navegacao");

    if(navegacao.className == "navegacao"){
        navegacao.classList.add("active")
    } else {
        navegacao.classList.remove("active")
    }

    console.log(navegacao.className);
}

menu.addEventListener("click", ativar)