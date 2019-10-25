-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3309
-- Generation Time: Oct 25, 2019 at 03:35 AM
-- Server version: 5.7.24
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `repositoriousbbog`
--
CREATE DATABASE IF NOT EXISTS `repositoriousbbog` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `repositoriousbbog`;

-- --------------------------------------------------------

--
-- Table structure for table `tb_usb_documentos`
--

CREATE TABLE `tb_usb_documentos` (
  `id_documento` int(11) NOT NULL,
  `id_publicacion` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `ruta` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_usb_documentos`
--

INSERT INTO `tb_usb_documentos` (`id_documento`, `id_publicacion`, `tipo`, `nombre`, `ruta`) VALUES
(1, 1, 'doc', 'historia del software', '../recursos/doc/1-1-historia del software.docx'),
(2, 1, 'img', 'diagrama uml', '../recursos/img/2-1-diagrama uml.png'),
(3, 1, 'pdf', 'logica de programación', '../recursos/pdf/3-1-logica de programación.pdf'),
(4, 2, 'pdf', 'manual de ASP.NET', '../recursos/pdf/4-2-introducción a Java.pdf'),
(5, 3, 'youtube', 'Curso Python para Principiantes', 'https://www.youtube.com/watch?v=chPhlsHoEPo'),
(6, 1, 'pdf', 'historia de internet', '../recursos/pdf/3-1-logica de programación.pdf'),
(7, 1, 'pdf', 'seguridad informatica', '../recursos/pdf/3-1-logica de programación.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `tb_usb_materia`
--

CREATE TABLE `tb_usb_materia` (
  `id_materia` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `id_programa` int(30) NOT NULL,
  `nombre` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_usb_materia`
--

INSERT INTO `tb_usb_materia` (`id_materia`, `id_profesor`, `id_programa`, `nombre`) VALUES
(1, 7, 1, 'Seminario en TIC'),
(2, 6, 1, 'Programación Orientada a Objetos'),
(3, 5, 1, 'Optativa II'),
(4, 5, 1, 'Optativa I'),
(5, 2, 1, 'Modelamiento de Bases de Datos'),
(6, 2, 1, 'Lenguaje Estructurado de Consulta (SQL)'),
(7, 4, 1, 'Introducción a la programación'),
(8, 6, 1, 'Gestión y Administración de Bases de Datos'),
(9, 6, 1, 'Estructura de Datos'),
(10, 5, 1, 'Procedimientos Almacenados'),
(11, 4, 1, 'Fundamentos de Proyectos'),
(12, 3, 1, 'Seguimiento a proyectos'),
(13, 3, 1, 'Implementación de Proyectos');

-- --------------------------------------------------------

--
-- Table structure for table `tb_usb_profesores`
--

CREATE TABLE `tb_usb_profesores` (
  `id_profesor` int(11) NOT NULL,
  `nombre` varchar(150) DEFAULT NULL,
  `correo` varchar(150) DEFAULT NULL,
  `contrasena` varchar(150) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `usuario` varchar(250) DEFAULT NULL,
  `avatar` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_usb_profesores`
--

INSERT INTO `tb_usb_profesores` (`id_profesor`, `nombre`, `correo`, `contrasena`, `descripcion`, `usuario`, `avatar`) VALUES
(1, 'Prueba', 'Prueba@hotmail.com', 'Prueba123', 'Prueba', 'Prueba', 'avatar/1.png'),
(2, 'YOVANY RUIZ GUERRERO', 'correo', '123', 'descripcion', 'yruizg', 'avatar/1.png'),
(3, 'OLGUER SEBASTIAN MORALES VALENZUELA', 'correo', '123', 'descripcion', 'osmoralesv', 'avatar/1.png'),
(4, 'GIOVANNI SÁNCHEZ PRIETO', 'correo', '123', 'descripcion', 'gsanchezp', 'avatar/4.png'),
(5, 'JOSE LUIS MUÑOZ RODRIGUEZ', 'correo', '123', 'descripcion', 'jlmunozr', 'avatar/5.png'),
(6, 'EDGAR JOSÉ CHAMORRO GUTIERREZ', 'correo', '123', 'descripcion', 'ejchamorrog', 'avatar/1.png'),
(7, 'JHONATAN PAOLO TOVAR SOTO', 'correo', '123', 'descripcion', 'jptovarsoto', 'avatar/7.png');

-- --------------------------------------------------------

--
-- Table structure for table `tb_usb_programas`
--

CREATE TABLE `tb_usb_programas` (
  `id_programa` int(11) NOT NULL,
  `nombre` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_usb_programas`
--

INSERT INTO `tb_usb_programas` (`id_programa`, `nombre`) VALUES
(1, 'Desarrollo de Software'),
(2, 'Automatización Industrial');

-- --------------------------------------------------------

--
-- Table structure for table `tb_usb_publicaciones`
--

CREATE TABLE `tb_usb_publicaciones` (
  `id_publicacion` int(11) NOT NULL,
  `id_profesor` int(11) NOT NULL,
  `id_materia` int(11) NOT NULL,
  `id_semestre` int(30) NOT NULL,
  `titulo` varchar(500) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `fecha` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_usb_publicaciones`
--

INSERT INTO `tb_usb_publicaciones` (`id_publicacion`, `id_profesor`, `id_materia`, `id_semestre`, `titulo`, `descripcion`, `fecha`) VALUES
(1, 7, 1, 1, 'Seminario en TIC', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos odit alias? Esse laborum, perspiciatis, distinctio, ut sed officiis quisquam necessitatibus nobis corporis assumenda voluptatum blanditiis voluptatem in asperiores omnis.\r\n               Eaque aspernatur magnam fugiat voluptatum odit ea perferendis velit fugit, tempora, magni ad incidunt necessitatibus rerum delectus fuga, sed quis suscipit sunt adipisci quidem minus blanditiis deserunt natus? Reiciendis, reprehenderit?', '20 Febrero 2019'),
(2, 5, 3, 2, 'Proyecto final: Veterinaria', 'proyecto de .net', '19 Septiembre 2019'),
(3, 4, 7, 2, 'Introducción a la programación', 'Aprendiendo python', '01 Octubre 2019'),
(4, 4, 4, 2, 'publicación de prueba', 'prueba', '24 Octubre 2019');

-- --------------------------------------------------------

--
-- Table structure for table `tb_usb_semestre`
--

CREATE TABLE `tb_usb_semestre` (
  `id_semestre` int(30) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_usb_semestre`
--

INSERT INTO `tb_usb_semestre` (`id_semestre`, `nombre`) VALUES
(1, '2019-1'),
(2, '2019-2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_usb_documentos`
--
ALTER TABLE `tb_usb_documentos`
  ADD PRIMARY KEY (`id_documento`),
  ADD KEY `documentos_publicacion_fk` (`id_publicacion`);

--
-- Indexes for table `tb_usb_materia`
--
ALTER TABLE `tb_usb_materia`
  ADD PRIMARY KEY (`id_materia`),
  ADD KEY `materia_profesores_fk` (`id_profesor`),
  ADD KEY `materia_programa_fk` (`id_programa`);

--
-- Indexes for table `tb_usb_profesores`
--
ALTER TABLE `tb_usb_profesores`
  ADD PRIMARY KEY (`id_profesor`);

--
-- Indexes for table `tb_usb_programas`
--
ALTER TABLE `tb_usb_programas`
  ADD PRIMARY KEY (`id_programa`);

--
-- Indexes for table `tb_usb_publicaciones`
--
ALTER TABLE `tb_usb_publicaciones`
  ADD PRIMARY KEY (`id_publicacion`),
  ADD KEY `modulos_materia_fk` (`id_materia`),
  ADD KEY `modulos_profesores_fk` (`id_profesor`),
  ADD KEY `modulos_semestres_fk` (`id_semestre`);

--
-- Indexes for table `tb_usb_semestre`
--
ALTER TABLE `tb_usb_semestre`
  ADD PRIMARY KEY (`id_semestre`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_usb_documentos`
--
ALTER TABLE `tb_usb_documentos`
  ADD CONSTRAINT `documentos_publicacion_fk` FOREIGN KEY (`id_publicacion`) REFERENCES `tb_usb_publicaciones` (`id_publicacion`);

--
-- Constraints for table `tb_usb_materia`
--
ALTER TABLE `tb_usb_materia`
  ADD CONSTRAINT `materia_profesores_fk` FOREIGN KEY (`id_profesor`) REFERENCES `tb_usb_profesores` (`id_profesor`),
  ADD CONSTRAINT `materia_programa_fk` FOREIGN KEY (`id_programa`) REFERENCES `tb_usb_programas` (`id_programa`);

--
-- Constraints for table `tb_usb_publicaciones`
--
ALTER TABLE `tb_usb_publicaciones`
  ADD CONSTRAINT `modulos_materia_fk` FOREIGN KEY (`id_materia`) REFERENCES `tb_usb_materia` (`id_materia`),
  ADD CONSTRAINT `modulos_profesores_fk` FOREIGN KEY (`id_profesor`) REFERENCES `tb_usb_profesores` (`id_profesor`),
  ADD CONSTRAINT `modulos_semestres_fk` FOREIGN KEY (`id_semestre`) REFERENCES `tb_usb_semestre` (`id_semestre`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
