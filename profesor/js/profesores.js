function mostrar(obj){
    obj.style.visibility="visible";
}
function ocultar(){
    document.getElementById("materia").style.visibility="hidden";
    darestilo();
}
function ocultar2(){
    document.getElementById("crear").style.visibility="hidden";
}
var btn = document.getElementById("btn");

btn.addEventListener("click",darestilo);
function darestilo(){
    btn.classList.toggle("toggle");
}
function animar(obj){
<<<<<<< HEAD
    obj.classList.remove("youtube-inactive");
    obj.classList.add("youtube-active");    

}
function cancelarvideo(obj){
    obj.classList.add("youtube-inactive");
=======
    obj.classList.add("youtube-active");
>>>>>>> 18fe03ede47c0a780e08093b58834ae02d1428e8
}
