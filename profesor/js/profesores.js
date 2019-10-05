function mostrar(){
    document.getElementById("materia").style.visibility="visible";
}
function mostrar2(){
    document.getElementById("crear").style.visibility="visible";
}
function ocultar(){
    document.getElementById("materia").style.visibility="hidden";
    darestilo();
}
function ocultar2(){
    document.getElementById("crear").style.visibility="hidden";
}
var btn= document.getElementById("btn");

btn.addEventListener("click",darestilo);
function darestilo(){
    btn.classList.toggle("toggle");
}