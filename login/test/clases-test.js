class App {
    constructor(fondo, filter){
        this.app = document.createElement('div');
        this.app.id = "app";
        this.app.classList.add('app');
        this.app.style.width = "100vw";
        this.app.style.height = "100vh";
        this.app.style.overflow = "hidden";
        this.app.style.display = "grid";
        this.app.style.gridTemplateColumns = "repeat(24, 1fr)";
        this.app.style.gridTemplateRows = "auto";
        this.app.style.gridTemplateAreas = `"1-2 2-3 3-4 4-5 5-6 6-7 7-8 8-9 9-10 10-11 11-12 12-13 13-14 14-15 15-16 16-17 17-18 18-19 19-20 20-21 21-22 22-23 23-24 24-25"`;
        this.app.style.justifyContent = 'center';
        this.app.style.alignItems = 'center';

       var bgFilter = document.createElement('div');
        bgFilter.style.position = "absolute";
        bgFilter.style.width = "100vw";
        bgFilter.style.height = "100vh";
        bgFilter.style.background = `rgba(0, 0, 0, ${filter})`;
        this.app.appendChild(bgFilter);
        
        if(fondo[0] == 'color'){
            this.app.style.background = fondo[1];
        }

        if(fondo[0] == 'imagen'){
            this.app.style.background = `url(${fondo[1]}) 0px 0px/100vw 100vh`;
        }
    }
    addChild(child, pos){
        child.style.gridColumn = `${pos[0]}/${pos[1]}`
        this.app.appendChild(child);
    }
    getThis(){
        return this.app;
    }
}

class Tarjeta{

    constructor(id, col, fil, secciones, alto){
        this.tarjeta = document.createElement('div');
        this.tarjeta.id = id;
        this.tarjeta.style.display = "grid";
        this.tarjeta.style.gridTemplateColumns = `repeat(${col[0]},${col[1]})`;
        this.tarjeta.style.gridTemplateRows = `repeat(${fil[0]},${fil[1]})`;
        this.tarjeta.style.zIndex = '10';
        this.tarjeta.style.width = "100%";
        this.tarjeta.style.height = alto;

        for(var i = 0; i < secciones.length; i++){
            var seccion = document.createElement('div');
            seccion.id = `sec${i}`;
            seccion.style.width = "100%";
            seccion.style.height = "100%"
            seccion.style.gridColumn = `${secciones[i][0][0]}/${secciones[i][0][1]}`;
            seccion.style.gridRow = `${secciones[i][1][0]}/${secciones[i][1][1]}`;
            seccion.style.background = secciones[i][2];
            seccion.style.display = "flex";
            seccion.style.justifyContent = secciones[i][3][0];
            seccion.style.alignItems = secciones[i][3][1];
            this.tarjeta.appendChild(seccion)
        }

    }
    addChild(child, sec){
        this.getSeccion(sec).appendChild(child);
    }
    getSeccion(idSec){
        return document.getElementById(idSec);
    }
    getThis(){
        return this.tarjeta;
    }

}

class Boton {
    constructor(){

    }
}

class Texto {
    constructor(id, tipo, tam, bold, valor, color){
        this.txt = document.createElement('p');
        this.txt.id = id;
        this.txt.style.fontFamily = this.getTipo(tipo);
        this.txt.style.fontSize = tam;
        this.txt.innerText = valor;
        this.txt.style.fontWeight = bold;
        this.txt.style.color = color;
    }
    getTipo(tipo){
        switch(tipo){
            case 'open':
                return `'Open Sans', sans-serif`;
            case 'crim':
                return `'Crimson Text', serif`;
        }

    }
    getThis(){
        return this.txt;
    }
}

class CajaTexto {
    constructor(){

    }
}

class CheckSubrayado {
    constructor(){

    }
}

class EtiquetaTag {
    constructor(){

    }
}

class Filtrador {
    constructor(){

    }
}

class CajaBusqueda {
    constructor(){

    }
}

class Imagen{
    constructor(id, url){
        this.img = document.createElement('div');
        this.img.id = id;
        this.img.style.background = `url(${url}) 0 0/100% 100%`;
        this.img.style.width = "100%";
        this.img.style.height = "100%";
    }
    getThis(){
        return this.img;
    }
}

