-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-02-2023 a las 21:35:04
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usersdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_moderator`
--

CREATE TABLE `tb_moderator` (
  `id` varchar(36) COLLATE utf8_spanish_ci NOT NULL,
  `name` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `lastname` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `userId` varchar(36) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_references`
--

CREATE TABLE `tb_references` (
  `id` int(11) NOT NULL,
  `userId` varchar(36) COLLATE utf8_spanish_ci NOT NULL,
  `affilies` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_role`
--

CREATE TABLE `tb_role` (
  `id` int(11) NOT NULL,
  `name` varchar(11) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_subscriber`
--

CREATE TABLE `tb_subscriber` (
  `id` varchar(36) COLLATE utf8_spanish_ci NOT NULL,
  `name` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `lastname` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `userId` varchar(36) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_user`
--

CREATE TABLE `tb_user` (
  `id` varchar(36) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(36) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `role` int(11) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `state` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=DYNAMIC;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tb_moderator`
--
ALTER TABLE `tb_moderator`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `tb_references`
--
ALTER TABLE `tb_references`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `tb_role`
--
ALTER TABLE `tb_role`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `tb_subscriber`
--
ALTER TABLE `tb_subscriber`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tb_references`
--
ALTER TABLE `tb_references`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tb_role`
--
ALTER TABLE `tb_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
