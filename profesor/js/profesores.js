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
    obj.classList.remove("youtube-inactive");
    obj.classList.add("youtube-active");    

}
function cancelarvideo(obj){
    obj.classList.add("youtube-inactive");
    obj.classList.add("youtube-active");

}
