let opProfesor = document.getElementById('opProfesor');
opEstudiante = document.getElementById('opEstudiante');
formHead = document.getElementById('formHead');
logImagen = document.getElementById('logImagen');
logTitulo = document.getElementById('logTitulo');
logImg = document.getElementById('logImg');
main = document.getElementById('main');
row1 = document.getElementById('row1');
row1sub = document.getElementById('row1sub');
txtCuenta = document.getElementById('txtCuenta');

var formProfesor, formEstudiante, formEstudianteValidar, logProfesor, enviarEstudiante, logEstudiante, btnEnviarCorreo, btnIngresarProfesor, btnValidarCodigo, txtUser, txtPass, txtEmail, txtCodigo;
const cuentaGeneral = 300;
var timerCuenta, accesKey, cuenta;

var divContador = document.getElementById('contador');
btnCancelarCuenta = document.getElementById('btnCancelarCuenta');

document.addEventListener('click', op);
document.addEventListener('keypress', validarKey);

function op(e) {
    var obj = null;

    if (e.target == opProfesor) {
        obj = e.target;
        addFormProfesor();
        opProfesor.classList.add('opSelected');
        opEstudiante.classList.remove('opSelected');
    }

    if (e.target == opEstudiante) {
        obj = e.target;
        addFormEstudiante();
        opProfesor.classList.remove('opSelected');
        opEstudiante.classList.add('opSelected');
    }

    if (e.target == btnEnviarCorreo) {
        obj = e.target;
        enviarCorreo();
    }

    if (e.target == btnIngresarProfesor) {
        obj = e.target;
        validarLoginProfesor();
    }

    if (e.target == btnIngresarProfesor) {
        obj = e.target;
        validarLoginProfesor();
    }

    if (e.target == btnValidarCodigo) {
        obj = e.target;
        ValidarCodigo();
    }

    if (e.target == btnCancelarCuenta) {
        obj = e.target;
        cancelarCuenta();
    }

    if (obj != null) {
        logImg.classList.add('imgOn');
        main.classList.add('mainOn');
        row1.classList.add('row1Active');
        row1sub.classList.add('row1subActive');
        formHead.style.borderRadius = "20px 20px 0 0";
        formHead.style.boxShadow = "0 0 5px var(--bgVerde)";
        textoArray = [];
    }
}

function addFormProfesor() {

    formEstudianteValidar.parentNode.removeChild(formEstudianteValidar);
    formEstudiante.parentNode.removeChild(formEstudiante);
    formProfesor.classList.add('formBodyOpen');
    createFormEstudiante();
    createFormEstudianteValidar();
}

function addFormEstudiante() {

    formEstudianteValidar.parentNode.removeChild(formEstudianteValidar);
    formProfesor.parentNode.removeChild(formProfesor);
    formEstudiante.classList.add('formBody2Open');
    createFormProfesor();
    createFormEstudianteValidar();
}

function addFormEstudianteValidar() {

    formEstudiante.parentNode.removeChild(formEstudiante);
    formEstudianteValidar.classList.add('formBody2Open');
    createFormEstudiante();
}

function validarLoginProfesor() {
    if (txtUser.value == "" || txtPass.value == "") {
        modal.mostrar(1);
    } else {
        var data = { usuario: txtUser.value, clave: txtPass.value };

        fetch('php/logProfesor.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (miRes) {
                if (miRes == "true") {
                    modal.mostrar(3);
                    setTimeout(irPerfil, 3000);
                } else {
                    modal.mostrar(2);
                }
            });
    }
}

function enviarCorreo() {

    if (txtEmail.value == "") {
        modal.mostrar(1);
    } else {
        if (txtEmail.value.includes("@academia.usbbog.edu.co")) {
            var data = { correo: txtEmail.value };

            modal.mostrar(4);

            fetch('php/enviarCodigo.php', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (res) {
                    return res.json();
                })
                .then(function (miRes) {
                    console.log(miRes);
                    if (miRes.envio) {
                        accesKey = miRes.accesKey;
                        console.log(">" + accesKey);
                        timerCuenta = setInterval(cuentaRegresiva, 1000);
                        cuenta = cuentaGeneral;
                        divContador.style.visibility = "visible";
                        formHead.classList.add('formHeadOff');
                        modal.ocultar(1);
                        modal.mostrar(5);
                        addFormEstudianteValidar();
                    } else {
                        modal.mostrar(6);
                    }
                });
        } else {
            modal.mostrar(7);
        }

    }

}

function ValidarCodigo() {
    if (txtCodigo.value == accesKey) {
        console.log("bien");
        modal.mostrar(3);
        cancelarCuenta();
        setTimeout(irMuro, 3000);
    } else {
        console.log("mal");
        modal.mostrar(9);
    }
}

function resetAccesKey() {
    accesKey = '';
    console.log('reset..');
    addFormEstudiante();
    opProfesor.classList.remove('opSelected');
    opEstudiante.classList.add('opSelected');
}

function cuentaRegresiva() {
    cuenta--;

    var showCuenta;
    var unidad;

    if (cuenta >= 120) {
        showCuenta = Math.floor(cuenta / 60);
        unidad = "minutos";
    } else {
        if (cuenta >= 60 && cuenta <= 120) {
            showCuenta = Math.floor(cuenta / 60);
            unidad = "minuto";
        } else {
            showCuenta = cuenta;
            unidad = "segundos";
        }
    }

    txtCuenta.innerHTML = showCuenta + " " + unidad;

    if (cuenta == 0) {
        cancelarCuenta();
        modal.mostrar(8);
    }
}

function cancelarCuenta() {
    divContador.style.visibility = "hidden";
    clearInterval(timerCuenta);
    resetAccesKey();
    cuenta = cuentaGeneral;
    formHead.classList.remove('formHeadOff');
}

function irPerfil() {
    location.href = "../profesor";
}

function irMuro() {
    location.href = "../muro";
}

var textoArray = [];
var textoFinal = "";

function autoEmail(e) {

    e.preventDefault();

    if (IsValidKey(e.keyCode)) {
        var letraActual = e.key;
        textoArray.push(letraActual);

        for (var i = 0; i < textoArray.length; i++) {
            textoFinal = textoFinal + textoArray[i];
        }

        e.target.value = textoFinal + "@academia.usbbog.edu.co";

        setCaretPosition('txtEmail', textoArray.length);

        textoFinal = "";
    }


}

function borrarEmail(e) {

    if (e.keyCode == 46) {
        e.preventDefault();
        textoArray = [];
        e.target.value = "";

    } else {
        if (e.keyCode == 8) {
            e.preventDefault();

            if (textoArray.length >= 1) {

                textoArray.pop();

                for (var i = 0; i < textoArray.length; i++) {
                    textoFinal = textoFinal + textoArray[i];
                }

                e.target.value = textoFinal + "@academia.usbbog.edu.co";

                setCaretPosition('txtEmail', textoArray.length);

                textoFinal = "";
            } else {
                e.target.value = "";
            }


        }
    }


}

function validarKey(e) {

    if (!IsValidKey(e.keyCode)) {
        e.preventDefault();
    }
}

function noPaste(e) {
    e.preventDefault();
}

/* VALIDA TECLAS: 0-9, a-z, ñ, Ñ, A-Z*/
function IsValidKey(key) {
    if (key >= 48 && key <= 57 || key >= 97 && key <= 122 || key == 241 || key == 209 || key >= 65 && key <= 90) {
        return true;
    }
}
