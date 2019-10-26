<?php
	$conn = new mysqli("localhost","root","") or die (Mysqli_error());
	echo "<br>Conecto Correctamente";
	
	$sql="create database repositoriousbbog";
	//sentencia en sql
	mysqli_query($conn,$sql) or die("<br>no se pudo crear la BD");
	//mysqli_query(Cadena de conexion, sentencia sql )
	echo "<br>Se ha creado la Base de Datos correctamente";
	mysqli_select_db($conn,"repositoriousbbog") or die ("br".mysqli_error()."no se pudo seleccionar");
	
	$sql=
"CREATE TABLE tb_usb_control_acceso (
    id_control    Int NOT NULL,
    id_profesor   Int NOT NULL,
    fecha         DATE,
    tipo_accion   VARCHAR (150)
);

ALTER TABLE tb_usb_control_acceso ADD CONSTRAINT tb_usb_control_acceso_pk PRIMARY KEY ( id_control );

CREATE TABLE tb_usb_materia (
    id_materia    Int NOT NULL,
    id_profesor   Int NOT NULL,
    nombre        VARCHAR (150) NOT NULL,
    semestre      VARCHAR (200) NOT NULL
);

ALTER TABLE tb_usb_materia ADD CONSTRAINT tb_usb_materia_pk PRIMARY KEY ( id_materia );

CREATE TABLE tb_usb_profesores (
    id_profesor   Int NOT NULL,
    nombre        VARCHAR(150),
    correo        VARCHAR(150),
    contrasena    VARCHAR(150),
    descripcion   VARCHAR(500),
    usuario       VARCHAR(250)
);

ALTER TABLE tb_usb_profesores ADD CONSTRAINT tb_usb_profesores_pk PRIMARY KEY ( id_profesor );

CREATE TABLE tb_usb_programas (
    id_programa      int NOT NULL,
    id_profesor      INT NOT NULL,
    nombre           VARCHAR(250),
    ciclo_electivo   VARCHAR(500)
);

ALTER TABLE tb_usb_programas ADD CONSTRAINT tb_usb_programas_pk PRIMARY KEY ( id_programa );

CREATE TABLE tb_usb_publicaciones (
    id_modulo     INT NOT NULL,
    id_profesor   INT NOT NULL,
    id_materia    INT NOT NULL,
    imagen        VARCHAR(250),
    link_video    VARCHAR(500),
    pdf           VARCHAR(250),
    audio         VARCHAR(250),
    word          VARCHAR(250),
    titulo        VARCHAR(500),
    descripcion   VARCHAR(500)
);

ALTER TABLE tb_usb_publicaciones ADD CONSTRAINT tb_usb_modulos_pk PRIMARY KEY ( id_modulo );

ALTER TABLE tb_usb_materia
    ADD CONSTRAINT materia_profesores_fk FOREIGN KEY ( id_profesor )
        REFERENCES tb_usb_profesores ( id_profesor );

ALTER TABLE tb_usb_publicaciones
    ADD CONSTRAINT modulos_materia_fk FOREIGN KEY ( id_materia )
        REFERENCES tb_usb_materia ( id_materia );

ALTER TABLE tb_usb_publicaciones
    ADD CONSTRAINT modulos_profesores_fk FOREIGN KEY ( id_profesor )
        REFERENCES tb_usb_profesores ( id_profesor );

ALTER TABLE tb_usb_control_acceso
    ADD CONSTRAINT profesores_fk FOREIGN KEY ( id_profesor )
        REFERENCES tb_usb_profesores ( id_profesor );

ALTER TABLE tb_usb_programas
    ADD CONSTRAINT profesores_fkv2 FOREIGN KEY ( id_profesor )
        REFERENCES tb_usb_profesores ( id_profesor );";
	mysqli_query($conn,$sql) or die("<br>no se pudo Ejecutar el programa");
	//mysqli_query(Cadena de conexion, sentencia sql)
	echo "<br>Se ha ejecutado correctamente";
	
	$sql="insert into tb_usb_profesores values('','Prueba','Prueba@hotmail.com','Prueba123','Prueba','Prueba')";
	mysqli_query($conn,$sql) or die("<br>no se pudo ingresar los datos");
	//mysqli_query(Cadena de conexion, )
	echo "<br>Se ha ingresado el usuario correctamente";
	
	$sql="select * from tb_usb_profesores";
	$result= mysqli_query($conn,$sql) or die("<br>no se pudo consultar");
	//mysqli_query(Cadena de conexion, )
		echo $sql;
	
?>