var fondo = document.querySelector(".fondo");
var luces = document.querySelector(".luces");
var llanta = document.querySelector(".llanta");
var llanta2 = document.querySelector(".llanta2");
var polvo = document.querySelector(".polvo");

fondo.addEventListener('click', fondoMover)
luces.addEventListener('click', fondoMover)
llanta.addEventListener('click', fondoMover)
llanta2.addEventListener('click', fondoMover)
polvo.addEventListener('click', fondoMover)

function fondoMover(){
    fondo.classList.add('fondoMover')
    luces.classList.remove('oculto')
    luces.classList.add('lucesMover')
    llanta.classList.add('llantaMover')
    llanta2.classList.add('llanta2Mover')
    polvo.classList.remove('oculto')
    polvo.classList.add('polvoMover')
}