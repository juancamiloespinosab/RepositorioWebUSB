var timeline = document.getElementById('timeline');

var publicacion = new Publicacion("profesor", "20 Octubre 2019", "../profesor/img/user.png", "titulo", "                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita iste sed ipsum reprehenderit, corrupti dolore dolores quaerat quasi illum ad ipsam nulla odit molestias minus amet. Nemo autem corporis recusandae!", "tagMateria", "tagCarrera", "tagSemestre");

var publicacion2 = new Publicacion("profesor", "20 Octubre 2019", "../profesor/img/user.png", "titulo", "descripcion", "tagMateria", "tagCarrera", "tagSemestre");

var publicacion3 = new Publicacion("profesor", "20 Octubre 2019", "../profesor/img/user.png", "titulo", "descripcion", "tagMateria", "tagCarrera", "tagSemestre");

var publicaciones = [];

window.addEventListener("load",start);

function start(){
    var data = { usuario: "a", clave:"b" };

        fetch('php/consultas.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (miRes) {
                console.log(miRes);
                sqlStart(miRes[0], miRes);
            });
}

function sqlStart(cantidad, json){

    var obj;

    for(var i = 1; i <= cantidad; i++){
2
        obj = new Publicacion(json[i][0], json[i][11], "../profesor/img/user.png", json[i][8], json[i][9], "tagMateria", "tagCarrera", "tagSemestre");
        timeline.appendChild(obj.getElement());
    }

        

}




