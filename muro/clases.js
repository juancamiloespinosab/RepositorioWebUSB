

class Publicacion {
    constructor(profesor, fecha, imagen, titulo, descripcion, tagMateria, tagCarrera, tagSemestre){
        
        this.profesor = profesor;
        this.fecha = fecha;
        this.imagen = imagen;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.tagMateria = tagMateria;
        this.tagCarrera = tagCarrera;
        this.tagSemestre = tagSemestre;

        this.publicacion = document.createElement('div');
        this.publicacion.classList.add('publicacion')

            this.publicacionInner = document.createElement('div');
            this.publicacionInner.classList.add('publicacion-inner')

                this.publiHead = document.createElement('div');
                this.publiHead.classList.add('publiHead');
                this.publiHead.innerHTML = `
                    <img class="avatar" src="${this.imagen}">
                    <p class="txt-profesor open b400">${this.profesor}</p>
                    <p class="txt-fecha open b400">${this.fecha}</p>
                `;

                this.publiBody = document.createElement('div');
                this.publiBody.id = 'publiBody';
                this.publiBody.classList.add('publiBody');

                    this.documentos = document.createElement('div');
                    this.documentos.classList.add('documentos');
                    this.documentos.classList.add('parentCenter');

                        this.documentosInner = document.createElement('div');
                        this.documentosInner.id = "doc-inner";
                        this.documentosInner.classList.add('documentos-inner');

                            this.flecha = document.createElement('img');
                            this.flecha.id = "flecha";
                            this.flecha.classList.add('flecha');
                            this.flecha.src = "img/flecha.png";
                            this.flecha.alt = ">";

                    this.contenidoPublicacion = document.createElement('div');
                    this.contenidoPublicacion.classList.add('contenido-publicacion');
                    this.contenidoPublicacion.innerHTML = `
                        <div class="titulo">
                        <p class="txt-titulo open b700">${this.titulo}</p>
                        </div>

                        <div class="descripcion">
                            <p class="txt-descripcion open">${this.descripcion}</p>
                            
                        </div>

                        <p class="txt-verMas open b600">Ver más</p>
                    `

                this.publiFoot = document.createElement('div');
                this.publiFoot.classList.add('publiFoot');
                this.publiFoot.innerHTML = `
                    <p class="tag tag-materia open">${this.tagMateria}</p>
                    <p class="tag tag-carrera open">${this.tagCarrera}</p>
                    <p class="tag tag-semestre open">${this.tagSemestre}</p>
                `

        this.flecha.addEventListener("click", () => this.flechaOn());
    
        this.documentosInner.appendChild(this.flecha);
        this.documentos.appendChild(this.documentosInner);
        this.publiBody.appendChild(this.documentos);
        this.publiBody.appendChild(this.contenidoPublicacion);
        this.publicacionInner.appendChild(this.publiHead);
        this.publicacionInner.appendChild(this.publiBody);
        this.publicacionInner.appendChild(this.publiFoot);
        this.publicacion.appendChild(this.publicacionInner);
        
    }
    flechaOn(){
        this.documentosInner.classList.toggle('documentos-inner-on');
        this.publiBody.classList.toggle('publiBody-on');
        this.flecha.classList.toggle("flecha-on");
    }
    getElement(){
        return this.publicacion;
    }
}