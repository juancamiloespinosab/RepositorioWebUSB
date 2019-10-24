

class Publicacion {
    constructor(profesor, fecha, imagen, titulo, descripcion, tagMateria, tagCarrera, tagSemestre, docList){
        
        this.profesor = profesor;
        this.fecha = fecha;
        this.imagen = imagen;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.tagMateria = tagMateria;
        this.tagCarrera = tagCarrera;
        this.tagSemestre = tagSemestre;
        this.docList = docList;
        this.count = docList.length;

        this.flechaStatus = "closed";

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

                            this.txtFlecha = document.createElement('h1');
                            this.txtFlecha.classList.add('txt-flecha');
                            this.txtFlecha.classList.add('open');
                            this.txtFlecha.innerText = "Documentos";

                            this.documentosGrilla = document.createElement('div');
                            this.documentosGrilla.classList.add("documentos-grilla");

                                this.documentosGrillaInner = document.createElement('div');
                                this.documentosGrillaInner.classList.add('documentos-grilla-inner');
                                this.documentosGrillaInner.classList.add('parentCenter');

                                    this.carpeta = document.createElement('img');
                                    this.carpeta.classList.add('carpeta');
                                    this.carpeta.src = "../recursos/iconos/carpeta.png";

                                    this.carpetaCount = document.createElement('div');
                                    this.carpetaCount.classList.add('carpeta-count');
                                    this.carpetaCount.classList.add('parentCenter');
                                    
                                        this.txtCount = document.createElement('h1');
                                        this.txtCount.classList.add('open');
                                        this.txtCount.innerText = this.count;

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
    
        this.carpetaCount.appendChild(this.txtCount);
        this.documentosGrillaInner.appendChild(this.carpeta);
        this.documentosGrillaInner.appendChild(this.carpetaCount);
        this.documentosGrilla.appendChild(this.documentosGrillaInner);
        this.documentosInner.appendChild(this.flecha);
        this.documentosInner.appendChild(this.documentosGrilla);
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
        this.documentosGrilla.classList.toggle('documentos-grilla-on');
        this.documentosGrillaInner.classList.toggle('documentos-grilla-inner-on');
        this.txtFlecha.classList.toggle('txt-flecha-on');

        if(this.flechaStatus == "closed"){
            this.flechaStatus = "open";
            this.carpeta.parentNode.removeChild(this.carpeta);
            this.carpetaCount.parentNode.removeChild(this.carpetaCount);
            this.documentosInner.appendChild(this.txtFlecha);
            this.addDocuments();
        } else {
            this.flechaStatus = "closed";
            this.removeDocuments();
            this.txtFlecha.parentNode.removeChild(this.txtFlecha);
            this.documentosGrillaInner.appendChild(this.carpeta);
            this.documentosGrillaInner.appendChild(this.carpetaCount);
        }
    }
    getElement(){
        return this.publicacion;
    }
    addDocuments(){

        for(var i = 0; i < this.count; i++){
            this.doc = document.createElement('a');
            this.doc.classList.add('doc');
            this.doc.style.background = `url('../recursos/iconos/${this.docList[i].tipo}.png') 0 0/100% 100%`;
            this.doc.href = `${this.docList[i].ruta}`;
            this.doc.target = "_blank";
    
            this.txtDoc = document.createElement('h1');
            this.txtDoc.classList.add('open');
            this.txtDoc.classList.add('txt-doc');
            this.txtDoc.innerText = this.docList[i].nombre;
    
            this.documentosGrillaInner.appendChild(this.doc);
            this.documentosGrillaInner.appendChild(this.txtDoc);
        }
    }

    removeDocuments(){
        this.documentosGrillaInner.innerHTML = "";
    }
}