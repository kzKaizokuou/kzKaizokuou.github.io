let nav = document.querySelectorAll(".navButton")
let seccionesMain = document.querySelectorAll(".mainSec")
let headerL = document.getElementById("perfil")

botones()


function botones(){
  for (var i = 0 ; i < nav.length; i++) {
    botones2(i)
  }
}

headerL.addEventListener("click",function(){
    for (let i = 1; i < nav.length; i++) {
         seccionesMain[i].classList.add("hide")
    }
    seccionesMain[0].classList.remove("hide")
})

function botones2(arg){
    nav[arg].addEventListener("click",function(){
      for (let i = 0; i < nav.length; i++) {
         seccionesMain[i].classList.add("hide")
      }
    seccionesMain[arg].classList.remove("hide")
})
}