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

           /*-------- NAV AND  BURGER RESET-----------*/
           navegador.style.left = "-16em" 
           burguer.classList.remove("showNavBurger")
           line1.classList.remove("crossburger1")
           line2.classList.remove("crossburger2")
           line3.classList.remove("crossburger3")
       /*-------- NAV AND  BURGER RESET-----------*/
    
})
}

// boton NAV responsive codename: the burger hamburger





let burguer = document.getElementById("burger")

let navegador = document.getElementById("navegador")


let encabezado = document.querySelector(".encabezado")   



burguer.addEventListener("click",function(){

let line1 = document.getElementById("line1")
let line2 = document.getElementById("line2")
let line3 = document.getElementById("line3")

   if(navegador.style.left == "-16em"){
      navegador.style.left = "0em";
      burguer.classList.add("showNavBurger")
      line1.classList.add("crossburger1")
      line2.classList.add("crossburger2")
      line3.classList.add("crossburger3")

   }else{
      if(navegador.style.left == "0em" ){
        navegador.style.left = "-16em" 
        burguer.classList.remove("showNavBurger")
        line1.classList.remove("crossburger1")
        line2.classList.remove("crossburger2")
        line3.classList.remove("crossburger3")

    }
   }
   
})


////////////////// display responsive //////////////// 
window.addEventListener("load",function(){
    let screen = window.innerWidth;     

 
 if(screen <= 507 ){
  navegador.classList.remove("navegador1")
  navegador.classList.add("navegador2")
   
  for(var i = 0; i < nav.length; i++){
   nav[i].classList.remove("navButton")
   nav[i].classList.add("navButton2")
  }
  
}
else{
  navegador.classList.remove("navegador2")
  navegador.classList.add("navegador1")

  for(var i = 0; i < nav.length; i++){
    nav[i].classList.remove("navButton2")
    nav[i].classList.add("navButton")
   }
} 
 })

window.addEventListener("resize",function(){
  let screen = window.innerWidth;

 if(screen <= 507 ){
       navegador.classList.remove("navegador1")
       navegador.classList.add("navegador2")
        
       for(var i = 0; i < nav.length; i++){
        nav[i].classList.remove("navButton")
        nav[i].classList.add("navButton2")
       }
      }
      else{
        navegador.classList.remove("navegador2")
        navegador.classList.add("navegador1")

        for(var i = 0; i < nav.length; i++){
          nav[i].classList.remove("navButton2")
          nav[i].classList.add("navButton")
         }

        /*-------- NAV AND  BURGER RESET-----------*/
            navegador.style.left = "-16em" 
            burguer.classList.remove("showNavBurger")
            line1.classList.remove("crossburger1")
            line2.classList.remove("crossburger2")
            line3.classList.remove("crossburger3")
        /*-------- NAV AND  BURGER RESET-----------*/
      }
      

})