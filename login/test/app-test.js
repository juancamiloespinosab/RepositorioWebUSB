let root, app, logHead;

window.onload = () => {
    root = document.getElementById('root');

    app = new App(['imagen','img/fondo.jpg'], '0.7');
    root.appendChild(app.getThis());

    logHead = new Tarjeta('logHead', [10,'1fr'], [10,'1fr'], [ [ [1,5],[1,8],'var(--Naranja-7)',['center','center'] ], [ [5,11],[1,8],'var(--Naranja-7)',['center','center'] ], [ [1,11],[8,11],'black',['center','center'] ] ], '150px');
    app.addChild(logHead.getThis(),[11,15]);

    var imgLogo = new Imagen('logo', 'img/logo.png');
    logHead.addChild(imgLogo.getThis(), 'sec0');

    var txtTituloUSB = new Texto('txtTituloUSB', 'crim', '100%', '700', 'Universidad de San Buenaventura', 'white');
    logHead.addChild(txtTituloUSB.getThis(),'sec1');
    
}