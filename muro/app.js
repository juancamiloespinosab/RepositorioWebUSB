var timeline = document.getElementById('timeline');

var publicacion = new Publicacion("profesor", "20 Octubre 2019", "../profesor/img/user.png", "titulo", "                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita iste sed ipsum reprehenderit, corrupti dolore dolores quaerat quasi illum ad ipsam nulla odit molestias minus amet. Nemo autem corporis recusandae!", "tagMateria", "tagCarrera", "tagSemestre");

var publicacion2 = new Publicacion("profesor", "20 Octubre 2019", "../profesor/img/user.png", "titulo", "descripcion", "tagMateria", "tagCarrera", "tagSemestre");

var publicacion3 = new Publicacion("profesor", "20 Octubre 2019", "../profesor/img/user.png", "titulo", "descripcion", "tagMateria", "tagCarrera", "tagSemestre");

var publicacion4 = new Publicacion("profesor", "20 Octubre 2019", "../profesor/img/user.png", "titulo", "descripcion", "tagMateria", "tagCarrera", "tagSemestre");


timeline.appendChild(publicacion.getElement());
timeline.appendChild(publicacion2.getElement());
timeline.appendChild(publicacion3.getElement());
timeline.appendChild(publicacion4.getElement());




