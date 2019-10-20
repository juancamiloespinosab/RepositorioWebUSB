var flecha = document.getElementById("flecha");
flecha.addEventListener("click", flechaOn);

function flechaOn(){
    document.getElementById("doc-inner").classList.toggle('documentos-inner-on');
    document.getElementById("publiBody").classList.toggle('publiBody-on');
    flecha.classList.toggle("flecha-on");
}