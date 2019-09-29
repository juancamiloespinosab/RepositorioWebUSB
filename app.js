let opProfesor = document.getElementById('opProfesor');
    opEstudiante = document.getElementById('opEstudiante');
    formHead = document.getElementById('formHead');
    logImagen = document.getElementById('logImagen');
    logTitulo = document.getElementById('logTitulo');

var formProfesor, formEstudiante;

var test = "";

document.addEventListener('click', op);
document.addEventListener('keypress', validarKey);

function op(e){
    if (e.target == opProfesor){
        opProfesor.classList.add('opSelected');
        opEstudiante.classList.remove('opSelected');
        addFormProfesor();
    }

    if (e.target == opEstudiante){
        opProfesor.classList.remove('opSelected');
        opEstudiante.classList.add('opSelected');
        addFormEstudiante();
    }
}

function addFormProfesor(){

    formEstudiante.parentNode.removeChild(formEstudiante);

    formProfesor.classList.add('formBodyOpen');
    formHead.style.borderRadius = "20px 20px 0 0"

    createFormEstudiante();
}

function addFormEstudiante(){

    formProfesor.parentNode.removeChild(formProfesor);

    formEstudiante.classList.add('formBody2Open');
    formHead.style.borderRadius = "20px 20px 0 0";

    createFormProfesor();
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

/* VALIDA TECLAS: 0-9, a-z, ñ, Ñ, A-Z*/
function IsValidKey(key){
    if(key >=48 && key <=57 || key >=97 && key <=122 || key ==241 || key ==209 || key >=65 && key <=90){
        return true;
    }
}