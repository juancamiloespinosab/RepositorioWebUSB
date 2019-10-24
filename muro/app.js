var timeline = document.getElementById('timeline');

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
        obj = new Publicacion(json[i].profesor, json[i].fecha, `../recursos/${json[i].avatar}`, json[i].titulo, json[i].descripcion, json[i].materia, json[i].carrera, json[i].semestre);
        timeline.appendChild(obj.getElement());
    }

        

}




