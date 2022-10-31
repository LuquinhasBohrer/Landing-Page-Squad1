function rolar(){
    const rolar = document.getElementById("produto").scrollIntoView({behavior: "smooth"})
}

const processador = document.getElementById("processador")
const placaVideo = document.getElementById("placaVideo")
const memoria = document.getElementById("memoria")
const liPro = document.getElementById("liPro")
const liPla = document.getElementById("liPla")
const liMem = document.getElementById("liMem")
const proImg = document.getElementById("proImg")
const plaImg = document.getElementById("plaImg")
const memImg = document.getElementById("memImg")

function pro(){
    processador.classList.add("mostrar")
    placaVideo.classList.remove("mostrar") 
    memoria.classList.remove("mostrar")
    liPro.style.opacity = "1"
    liPla.style.opacity = "0.5"
    liMem.style.opacity = "0.5"
    proImg.style.display = "flex"
    plaImg.style.display = "none"
    memImg.style.display = "none"
}


function pla(){
    placaVideo.classList.add("mostrar")
    processador.classList.remove("mostrar")
    memoria.classList.remove("mostrar")
    liPro.style.opacity = "0.5"
    liPla.style.opacity = "1"
    liMem.style.opacity = "0.5"
    proImg.style.display = "none"
    plaImg.style.display = "flex"
    memImg.style.display = "none"
}

function mem(){
    memoria.classList.add("mostrar")
    processador.classList.remove("mostrar")
    placaVideo.classList.remove("mostrar") 
    liPro.style.opacity = "0.5"
    liPla.style.opacity = "0.5"
    liMem.style.opacity = "1"
    proImg.style.display = "none"
    plaImg.style.display = "none"
    memImg.style.display = "flex"
}

function comprar(){
    const comprar = document.getElementById("contatos").scrollIntoView({behavior: "smooth"})
}

const controls = document.querySelectorAll(".control")
let currentItem = 0
const items = document.querySelectorAll(".item")
const maxItems = items.length

controls.forEach(control =>{
    control.addEventListener("click",() =>{
        const isLeft = control.classList.contains("arrow-left")
        
        if(isLeft){
            currentItem -= 1
        } else{
            currentItem += 1
        }

        if(currentItem >= maxItems){
            currentItem = 0
        }

        if(currentItem < 0){
            currentItem = maxItems-1
        }

        items.forEach(item => item.classList.remove("current-item"))

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "center"
        })

        items[currentItem].classList.add("current-item")
    })
})
