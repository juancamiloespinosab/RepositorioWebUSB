let opProfesor = document.getElementById('opProfesor');
    opEstudiante = document.getElementById('opEstudiante');
    formHead = document.getElementById('formHead');
    logImagen = document.getElementById('logImagen');
    logTitulo = document.getElementById('logTitulo');

var formProfesor;

document.addEventListener('click', op);

function op(e){
    if (e.target == opProfesor){
        addFormProfesor();
    }

    if (e.target == opEstudiante){
        
    }
}

function loadPage(){
    var main = document.getElementById('main');

    formProfesor = document.createElement('div')
    formProfesor.innerHTML = `
    
    <div class="col2">
        <label for="txtUser" class="labelOff">Usuario</label>
        <input id="txtUser" class="txt titulo" type="text"/>
        <div class="border borderOff"></div>
    </div>
    
    <div class="col2">
        <label for="txtPass" class="labelOff">Contraseña</label>
        <input id="txtPass" class="txt titulo" type="#password"/>
        <div class="border borderOff"></div>
    </div>
    
    <div class="parentCenter col2">
    <input class="btn titulo open b700" type="button" value="Ingresar">
    </div>
    `
    
    main.appendChild(formProfesor);
    formProfesor.classList.add('log');
    formProfesor.classList.add('row');
    formProfesor.classList.add('formBody');
    formProfesor.classList.add('open');
}



function addFormProfesor(){

    formProfesor.classList.add('formBodyOpen');
    formHead.style.borderRadius = "20px 20px 0 0";
    opProfesor.classList.add('opSelected');
    logTitulo.parentNode.removeChild(logTitulo);
    logImagen.classList.add('col2');
}

loadPage();