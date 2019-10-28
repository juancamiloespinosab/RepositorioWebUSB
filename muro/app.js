var timeline = document.getElementById('timeline');
var filtros = document.getElementById('filtros');

var btnFiltrar = document.getElementById('btnFiltrar').addEventListener('click', () => {
    var data = listChecks;

        fetch('php/consultas.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (miRes) {
                console.log(miRes)
                sqlStartTimeLine(miRes[0], miRes);
        });
});

window.addEventListener("load",startTimeline);
window.addEventListener("load",startFiltros);

function startTimeline(){
    var data = {};

        fetch('php/startTimeline.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (miRes) {
                sqlStartTimeLine(miRes[0], miRes);
            });
}

function sqlStartTimeLine(cantidad, json){

    var obj;

    for(var i = 1; i <= cantidad; i++){
        obj = new Publicacion(json[i].profesor, json[i].fecha, `../recursos/${json[i].avatar}`, json[i].titulo, json[i].descripcion, json[i].materia, json[i].carrera, json[i].semestre, json[i].documentos);
        timeline.appendChild(obj.getElement());
    }

}

function startFiltros(){
    var data = {};

        fetch('php/startFiltros.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (miRes) {
                sqlStartFiltros(miRes);
            });
}

function sqlStartFiltros(json){

    var obj;

    for(var i = 0; i < 4; i++){
        obj = new Filtro(json[i].filtro.color, json[i].filtro.name, json[i].filtro.checks, json[i].filtro.tam);
        filtros.appendChild(obj.getElement());
    }

}




