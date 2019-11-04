var timeline = document.getElementById('timeline');
var filtros = document.getElementById('filtros');
var carga = new Carga();
var listFiltros = [];

window.addEventListener("load",startTimeline);
window.addEventListener("load",startFiltros);

function startTimeline(){
    var data = {};
    carga.cargar();

        fetch('php/startTimeline.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (miRes) {
                carga.cargar();
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
        listFiltros.push(obj);
        filtros.appendChild(obj.getElement());
    }

}


var btnFiltrar = document.getElementById('btnFiltrar');
btnFiltrar.addEventListener('click',quitarFiltros);

function quitarFiltros(){
    listFiltros.forEach(el => {
        el.listItems.forEach(element => {
            if(element.firstChild.checked){
                element.firstChild.checked = false;
            }
            element.classList.remove('txt-item-on');
            element.classList.remove('b700');
        });
        el.items.classList.remove('items-on');
        
        if(el.flechaStatus){
            el.flecha.classList.remove('img-flecha-on');
            el.filtroInner.classList.remove('filtro-inner-on');
            el.flechaStatus = false;
        }
        
    });

    listChecks = {
        'tam': 0,
        'Semestres': [],
        'Carreras': [],
        'Profesores': [],
        'Materias': []
    };

    btnFiltrar.value = "Filtrar:";
    btnFiltrar.classList.remove('btn-filtrar-on');
    timeline.innerHTML = "";
    startTimeline();
    count = 0;
    
}



