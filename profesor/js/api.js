
 
function consultar_materias(){
     // este id es solo a modo de prueba :D
    var id = 2020; // aqui deberia estar el id del profesor para realizar la consulta debe traerlo desde el HTML o una variable session php
    var formdata = new FormData();
    formdata.append('id_profesor',id);

    fetch('Consulta_Materia_Profesor.php',{
        method: 'POST',
        body:formdata
    })
        .then(res => res.json())
        .then( respuesta => {
            console.log(respuesta);// respuesta es el JSON que debe manipularse para mostrar en HTML.
    })
}

function consulta_info_profesor(){
    
    var id = 2020; 
    var formdata = new FormData();
    formdata.append('id_profesor',id);

    fetch('Consulta_Informacion_Profesor.php',{
        method: 'POST',
        body:formdata
    })
        .then(res => res.json())
        .then( respuesta => {
            console.log(respuesta);
    })
}
function consultar_publicaciones_profesor(){
     
     var id = 2020; 
     var formdata = new FormData();
     formdata.append('id_profesor',id);
 
     fetch('Consultar_Publicaciones_Profesor.php',{
         method: 'POST',
         body:formdata
     })
        .then(res => res.json())
        .then( respuesta => {
            console.log(respuesta);
     })
}    