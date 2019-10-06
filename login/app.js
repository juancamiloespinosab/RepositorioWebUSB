let opProfesor = document.getElementById('opProfesor');
    opEstudiante = document.getElementById('opEstudiante');
    btnIngresarProfesor = document.getElementById('btnIngresarProfesor');
    btnValidarCodigo = document.getElementById('btnValidarCodigo')
    formHead = document.getElementById('formHead');
    logImagen = document.getElementById('logImagen');
    logTitulo = document.getElementById('logTitulo');
	logImg = document.getElementById('logImg');
    main = document.getElementById('main');
    row1 = document.getElementById('row1');
    row1sub = document.getElementById('row1sub');

var formProfesor, formEstudiante, formEstudianteValidar, logProfesor, enviarEstudiante, logEstudiante, btnEnviarCorreo, btnIngresarProfesor, txtUser, txtPass;

document.addEventListener('click', op);
document.addEventListener('keypress', validarKey);

function op(e){
    var obj = null;
    
    if (e.target == opProfesor){
        obj = e.target;
        addFormProfesor();
        opProfesor.classList.add('opSelected');
        opEstudiante.classList.remove('opSelected');
    } 

    if (e.target == opEstudiante){
        obj = e.target;
        addFormEstudiante();
        opProfesor.classList.remove('opSelected');
        opEstudiante.classList.add('opSelected');
    }

    if (e.target == btnEnviarCorreo){
        obj = e.target;
        addFormEstudianteValidar();
    }

    if (e.target == btnIngresarProfesor){
        obj = e.target;
        validarLoginProfesor();
    }

    if (obj != null){
		logImg.classList.add('imgOn');
		main.classList.add('mainOn');
        row1.classList.add('row1Active');
        row1sub.classList.add('row1subActive');
        formHead.style.borderRadius = "20px 20px 0 0";
        formHead.style.boxShadow = "0 0 5px var(--bgVerde)" ;
        textoArray = [];
    }
}

function addFormProfesor(){

    formEstudianteValidar.parentNode.removeChild(formEstudianteValidar);
    formEstudiante.parentNode.removeChild(formEstudiante);
    formProfesor.classList.add('formBodyOpen');
    createFormEstudiante();
    createFormEstudianteValidar();
}

function addFormEstudiante(){

    formEstudianteValidar.parentNode.removeChild(formEstudianteValidar);
    formProfesor.parentNode.removeChild(formProfesor);
    formEstudiante.classList.add('formBody2Open');
    createFormProfesor();
    createFormEstudianteValidar();
}

function addFormEstudianteValidar(){
    
    formEstudiante.parentNode.removeChild(formEstudiante);
    formEstudianteValidar.classList.add('formBody2Open');
    createFormEstudiante();
}

function validarLoginProfesor(){
    if(txtUser.value == "" || txtPass.value == ""){
        modal.mostrar(1);
    } else {
        var data = {usuario: txtUser.value, clave: txtPass.value};

        fetch('php/logProfesor.php',{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{'Content-Type': 'application/json'}
        })
        .then(function(res){
            return res.json();
        })
        .then(function(miRes){
            if(miRes == "true"){
                modal.mostrar(3);
                setTimeout(irPerfil,3000);
            }else{
                modal.mostrar(2);
            }
        })
        ;
    }
}

function irPerfil(){
    location.href = "../profesor";
}

var textoArray = [];
var textoFinal = "";

function autoEmail(e){
    
    e.preventDefault();

    if(IsValidKey(e.keyCode)){
        var letraActual = e.key;
        textoArray.push(letraActual);
    
        for(var i = 0; i < textoArray.length; i++){
            textoFinal = textoFinal + textoArray[i];
        }
    
        e.target.value = textoFinal + "@usbbog.edu.co";
    
        setCaretPosition('txtEmail', textoArray.length);
    
        textoFinal = "";
    }


}

function borrarEmail(e){

    if(e.keyCode == 46){
        e.preventDefault();
        textoArray = [];
        e.target.value = "";

    } else {
        if (e.keyCode == 8){
            e.preventDefault();
        
            if(textoArray.length >= 1){
    
                textoArray.pop();
        
                for(var i = 0; i < textoArray.length; i++){
                    textoFinal = textoFinal + textoArray[i];
                }
            
                e.target.value = textoFinal + "@usbbog.edu.co";
    
                setCaretPosition('txtEmail', textoArray.length);
            
                textoFinal = "";
            } else {
                e.target.value = "";
            }
    
        
        }
    }


}

function validarKey(e){

    if(!IsValidKey(e.keyCode)){
        e.preventDefault();
    }
}

function noPaste(e){
    e.preventDefault();
}

/* VALIDA TECLAS: 0-9, a-z, ñ, Ñ, A-Z*/
function IsValidKey(key){
    if(key >=48 && key <=57 || key >=97 && key <=122 || key ==241 || key ==209 || key >=65 && key <=90){
        return true;
    }
}
