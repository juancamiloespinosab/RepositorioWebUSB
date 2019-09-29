var main = document.getElementById('main');

function createFormProfesor(){
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

function createFormEstudiante(){
    formEstudiante = document.createElement('div')
    formEstudiante.innerHTML = `
    
    <div class="col2">
    <label for="txtEmail" class="labelOff">Correo</label>
    <input id="txtEmail" class="txt titulo" type="text"/>
    <div class="border borderOff"></div>
    </div>

    <div class="parentCenter col2">
        <input class="btn titulo open b700" type="button" value="Enviar Código">
    </div>
    `

    main.appendChild(formEstudiante);
    formEstudiante.classList.add('log');
    formEstudiante.classList.add('row');
    formEstudiante.classList.add('formBody2');
    formEstudiante.classList.add('open');

    var txtEmail = document.getElementById('txtEmail');
    txtEmail.addEventListener('keypress', autoEmail);
    txtEmail.addEventListener('keydown', borrarEmail);
}

createFormProfesor();
createFormEstudiante();