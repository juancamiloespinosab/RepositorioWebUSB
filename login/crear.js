var main = document.getElementById('main');

class Modal {
    constructor(){
        this.estado = "normal";
        this.modalContainer = document.getElementById('modalContainer');
        this.modal = document.getElementById('modal');
        this.imgModal = document.getElementById('imgModal');
        this.txtModal = document.getElementById('txtModal');

        this.modalContainer.addEventListener('click', () => this.ocultar());
        this.imgModal.addEventListener('click', () => this.ocultar());
        this.txtModal.addEventListener('click', () => this.ocultar());
    }
    mostrar(tipo){
        this.modalContainer.classList.add('modalContainerOn');
        this.imgModal.src = this.tipoMsj(tipo)[0];
        this.txtModal.innerHTML = this.tipoMsj(tipo)[1];
        this.modal.style.boxShadow = `0 0 5px var(--${this.tipoMsj(tipo)[2]})`;

        if (tipo == 3){
            this.modal.classList.add('modalOn');
            this.estado = "logeando";
        }

        setTimeout(this.ocultar,6000);
    }
    ocultar(){
        if (this.estado == "normal"){
            this.modalContainer.classList.remove('modalContainerOn');
        }
    }
    tipoMsj(tipo){
        switch(tipo){
            case 1:
                return ['img/alerta.png','Los campos no pueden estar vacios.','Naranja'];
            case 2:
                return ['img/error.png','Usuario o contraseña incorrectos.','rojo'];
            case 3:
                return ['img/smile.png','Bienvenido.','bgVerde'];
            default:
                return '';
        }
    }
}

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
    <input id="btnIngresarProfesor" class="btn titulo open b700" type="button" value="Ingresar">
    </div>
    `
    
    main.appendChild(formProfesor);
    formProfesor.classList.add('log');
    formProfesor.classList.add('row');
    formProfesor.classList.add('formBody');
    formProfesor.classList.add('open');

    btnIngresarProfesor = document.getElementById('btnIngresarProfesor');
    txtUser = document.getElementById('txtUser');
    txtPass = document.getElementById('txtPass');

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
        <input id="btnEnviarCorreo" class="btn titulo open b700" type="button" value="Enviar Código">
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
    txtEmail.addEventListener('paste', noPaste);
    txtEmail.addEventListener('cut', noPaste);

    btnEnviarCorreo = document.getElementById('btnEnviarCorreo');
}

function createFormEstudianteValidar(){
    formEstudianteValidar = document.createElement('div');
    formEstudianteValidar.innerHTML = `
    
    <div class="col2">
        <label for="txtCodigo" class="labelOff">Código</label>
        <input id="txtCodigo" class="txt titulo" type="text"/>
        <div class="border borderOff"></div>
        </div>
    
        <div class="parentCenter col2">
            <input class="btn titulo open b700" type="button" value="Validar Código">
        </div>

    </div>
    `

    main.appendChild(formEstudianteValidar);
    formEstudianteValidar.classList.add('log');
    formEstudianteValidar.classList.add('row');
    formEstudianteValidar.classList.add('formBody2');
    formEstudianteValidar.classList.add('open');
}

createFormProfesor();
createFormEstudiante();
createFormEstudianteValidar();
var modal = new Modal();