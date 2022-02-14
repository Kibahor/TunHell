-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 12-12-2021 a las 17:12:15
-- Versión del servidor: 10.3.31-MariaDB-0+deb10u1
-- Versión de PHP: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `DB_Tunhell_Accounts`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Account`
--

CREATE TABLE `Account` (
  `ID` int(11) NOT NULL,
  `Pseudo` varchar(16) NOT NULL,
  `Avatar` varchar(16) NOT NULL,
  `Password` varchar(32) NOT NULL,
  `CreationDate` date NOT NULL,
  `NumberGames` int(11) NOT NULL,
  `NumberVictoires` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Games`
--

CREATE TABLE `Games` (
  `ID` int(11) NOT NULL,
  `Date` date NOT NULL,
  `IdHostAccount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Account`
--
ALTER TABLE `Account`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `Games`
--
ALTER TABLE `Games`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Games` (`IdHostAccount`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Games`
--
ALTER TABLE `Games`
  ADD CONSTRAINT `Games` FOREIGN KEY (`IdHostAccount`) REFERENCES `Account` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
