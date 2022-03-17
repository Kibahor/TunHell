-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-02-2022 a las 19:34:24
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_tunhell_accounts`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `account`
--

DROP TABLE IF EXISTS `account`;
CREATE TABLE IF NOT EXISTS `account` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Pseudo` varchar(16) NOT NULL,
  `Avatar` varchar(16) NOT NULL,
  `Password` varchar(60) NOT NULL,
  `CreationDate` date NOT NULL,
  `NumberGames` int(11) NOT NULL,
  `NumberVictoires` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `account`
--

INSERT INTO `account` (`ID`, `Pseudo`, `Avatar`, `Password`, `CreationDate`, `NumberGames`, `NumberVictoires`) VALUES
(1, 'Pedro', 'avatar1', '$2y$10$ALcW2L3knFkPlqNzKrc5LuRfA10V065EfaBYbVkHo0.z4swnsjCmK', '2022-02-24', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `games`
--

DROP TABLE IF EXISTS `games`;
CREATE TABLE IF NOT EXISTS `games` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Date` date NOT NULL,
  `IdHostAccount` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Games` (`IdHostAccount`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `Games` FOREIGN KEY (`IdHostAccount`) REFERENCES `account` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
