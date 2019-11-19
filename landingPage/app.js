let root = document.getElementById('root');
let nav = document.getElementById("nav");

let inicio = document.getElementById('inicio');
inicio.dataset.on = 'false';

let acerca = document.getElementById('acerca');
acerca.dataset.on = 'false';

let contacto = document.getElementById('contacto');
contacto.dataset.on = 'false';


let productos = document.getElementById('productos');
productos.dataset.on = 'false';
let listaProductos;
let prodActual;
let puntoActual;
let puntos = [];

let listaSecciones = [inicio, acerca, productos, contacto];

let menu = document.getElementById('menu');
let menuOn = false;

let mainData;

/* Ejecuta funciones de arranque */
window.onload = () => {
    fetch('assets/src.json').then(
        response => response.json()
    ).then(
        res => {
            mainData = res;
            cargarFondos();
            cargarOpcioneMenu();
            cargarAnimacionSecciones();

            menu.addEventListener("click", clickMenu);
        }
    )
}

/* Detecta el scroll para cambiar el posicionamiento de la barra de navegacion */
window.onscroll = () => {
    var blank = document.getElementById('blank');
    if (innerWidth > 768) {
        if (scrollY > innerHeight) {
            nav.classList.add('nav-fixed');
            blank.style.display = "block";

        } else {
            nav.classList.remove('nav-fixed');
        }

    }
}

/* Funciones para el menu hamburguesa */
function clickMenu() {
    if (innerWidth < 768) {

        if (menuOn) {
            menu.nextElementSibling.classList.remove('contenedor-opciones-on');
            root.style.overflow = "scroll";
            menu.src = `icon/${'ham.png'}`;
            menu.style.animation = "none";

            menuOn = false;
        } else {
            menu.nextElementSibling.classList.add('contenedor-opciones-on');
            root.style.overflow = "hidden";
            menu.style.animation = "loadCruz .5s";
            menu.src = `icon/${'cruz.png'}`;

            menuOn = true;

        }

    } 
        listaSecciones.forEach(el => {
            el.style.position = "relative";
            el.style.animation = "none";
            setTimeout( () => {
                el.style.position = "sticky";
                if (el == acerca) {
                    el.style.position = "relative";
                }
                // el.style.animation = "fade .3s";
                return

            }, 100)
        })
}

function cargarOpcioneMenu() {
    var list = menu.nextElementSibling.childNodes;

    list.forEach(element => {

        element.addEventListener('click', clickMenu);
    });
}

function cargarFondos() {
    inicio.childNodes[1].style.background = `url(assets/${mainData.inicio.fondo})`;
    acerca.childNodes[1].style.background = `white`;
    productos.childNodes[1].style.background = `url(assets/${mainData.productos.fondo})`;
    contacto.childNodes[1].style.background = `url(assets/${mainData.contacto.fondo})`;
}

function cargarListaProductos() {
    var data = mainData.productos.lista;
    var contador = document.getElementById("slide-count");
    var lim;

    if (innerWidth < 768) {
        lim = data.length;
    } else {
        lim = 3;
    }

    for (var i = 0; i < lim; i++) {
        var prod = document.createElement('div');
        prod.classList.add('producto-item');
        prod.innerHTML = `
            <h1 class="font-title">${data[i].header}</h1>
            <div>
                <img src="assets/${data[i].body}">
            </div>
        `;

        listaProductos.appendChild(prod);
    }

    prodActual = i;

    for (var o = 0; o < (data.length / 3); o++) {
        var point = document.createElement('div');
        point.classList.add('point');
        point.id = o;
        point.addEventListener("click", onClickPunto);
        contador.appendChild(point);
        puntos.push(point);
    }

    puntos[0].style.background = "white";

}

function moverListaProductos(cant, anim) {
    var data = mainData.productos.lista;
    var mod = data.length%3;

    if (cant == 1) {
        if(puntoActual == (puntos.length -1)){
            cant = 3;
        } else {
            cant = 6;
        }
    }

    if ((prodActual - cant) > 0) {
        prodActual = prodActual - cant;
    } else {
        prodActual = 0;
    }


    if (prodActual >= 0 && prodActual < data.length) {

        listaProductos.innerHTML = "";

        for (var i = prodActual; i < prodActual + 3; i++) {
            if (i == data.length) {
                return
            }

            moverPuntos(i);

            var prod = document.createElement('div');
            prod.classList.add('producto-item');
            prod.innerHTML = `
            <h1 class="font-title">${data[i].header}</h1>
            <div>
            <img src="assets/${data[i].body}">
            </div>
            `;

            prod.style.animation = `${anim} .5s`;
            listaProductos.appendChild(prod);
        }

        prodActual = i;
    }

}

function moverPuntos(i) {
    puntos.forEach(el => {
        el.style.background = "none";
    });

    var pt = puntos[Math.floor(i / (3))];
    pt.style.background = "white";
    puntoActual = pt.id;

}

function onClickPunto(e) {
    prodActual = e.target.id * 3;
    moverListaProductos(0, "move-up");
}

function cargarAnimacionSecciones() {
    window.addEventListener("scroll", onScroll);
}

function onScroll() {
    listaSecciones.forEach(el => {
        var per = screenPercentage(el);
        if (innerWidth > 768) {
            el.style.opacity = per + 0.3;

        }

        if (el == acerca && per > 0.5 && el.dataset.on == 'false') {
            el.childNodes[3].innerHTML = `
            <h1 class="font-title">Conocenos</h1>
            <p class="font-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium eaque provident velit nisi recusandae, ad minus voluptate temporibus rerum dolor quaerat voluptatum eveniet vitae a quod ex, facere necessitatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, recusandae! At tempora accusantium voluptatem atque earum maxime id animi veritatis dolor, quas ab sit provident, molestiae, sint aspernatur? Beatae, consequatur.
            <br><br>
            <input class="font-body btn" type="button" value="Lorem">
            </p>
            <div>
                <img class="phone" src="assets/phone.png">
                <img class="pantalla" src="assets/logo.png" alt="">
            </div>
            `;
            el.dataset.on = 'true';


        }

        if (el == productos && per > 0.5 && el.dataset.on == 'false') {
            el.childNodes[3].innerHTML = `
            <h1 class="font-title">Nuestros productos</h1>
            <div class="slide">
                <img id="flecha-prev" class="flecha" src="icon/flecha.png">
                <div id="slide-list" class="slide-list">

                </div>
                <img id="flecha-next" class="flecha" src="icon/flecha.png">
                </div>
                <div id="slide-count" class="slide-count"></div>
            </div>
            `;
            el.dataset.on = 'true';
            listaProductos = document.getElementById('slide-list');
            cargarListaProductos();
            var flechaNext = document.getElementById('flecha-next');
            flechaNext.addEventListener("click", () => { moverListaProductos(0, "move-left") });

            var flechaPrev = document.getElementById('flecha-prev');

            flechaPrev.addEventListener("click", () => { moverListaProductos( 1 , "move-right") });


        }

        if (el == contacto && per > 0.5 && el.dataset.on == 'false') {
            el.childNodes[3].innerHTML = `
            <h1 class="font-title">Contacto</h1>
            <form>
                <h2 class="font-body">Nombre:</h2>
                <input class="font-coffee" type="text">
                <h2 class="font-body">Correo:</h2>
                <input class="font-coffee" type="email">
                <h2 class="font-body">Mensaje</h2>
                <textarea class="font-coffee" ></textarea>
                <input class="btn font-body" type="button" value="Enviar">
            </form>
    
            `;
            el.dataset.on = 'true';

        }




    });
}


/* Retorna el porcentaje que ocupa un elemento en la pantalla */
function screenPercentage(element) {
    let posTop = element.getBoundingClientRect().top;
    return (100 - ((posTop * 100) / innerHeight)) / 100;
}