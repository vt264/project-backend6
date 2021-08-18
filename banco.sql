-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Aug 18, 2021 at 06:00 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `banco`
--

-- --------------------------------------------------------

--
-- Table structure for table `destinatario`
--

DROP TABLE IF EXISTS `destinatario`;
CREATE TABLE IF NOT EXISTS `destinatario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` int(11) NOT NULL,
  `rut` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `banco` varchar(255) NOT NULL,
  `tipoCuenta` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `destinatario`
--

INSERT INTO `destinatario` (`id`, `usuarioId`, `rut`, `nombre`, `apellido`, `banco`, `tipoCuenta`, `numero`, `createdAt`, `updatedAt`) VALUES
(1, 1, '3-3', 'pedro', '123', 'Banco Chile', 'corriente', 123, '2021-08-17 04:54:51', '2021-08-17 04:54:51'),
(2, 1, '2-2', 'juan', 'asd', 'Banco Chile', 'Corriente', 123, '2021-08-17 21:08:25', '2021-08-17 21:08:25'),
(3, 1, '2-2', 'juan', 'asd', 'Banco Chile', 'Corriente', 123, '2021-08-17 21:09:05', '2021-08-17 21:09:05');

-- --------------------------------------------------------

--
-- Table structure for table `transferencia`
--

DROP TABLE IF EXISTS `transferencia`;
CREATE TABLE IF NOT EXISTS `transferencia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` int(11) NOT NULL,
  `destinatarioId` int(11) NOT NULL,
  `monto` double NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rut` varchar(10) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `password` varchar(500) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `rut`, `nombre`, `apellido`, `password`, `createdAt`, `updatedAt`) VALUES
(1, '2-2', 'juan', 'asd', '$2b$10$JFcZQ0pnPQAyzKde7aZ6BOY5PLDGAjAeaOHw/ZPprjP3VM.KmaUx2', '2021-08-17 04:36:29', '2021-08-17 04:36:29');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
