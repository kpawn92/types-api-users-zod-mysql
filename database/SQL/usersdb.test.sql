-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-02-2023 a las 21:32:24
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

--
-- Volcado de datos para la tabla `tb_moderator`
--

INSERT INTO `tb_moderator` (`id`, `name`, `lastname`, `userId`) VALUES
('4361e41f-f562-45d5-bfcc-a82177be5278', 'Christina', 'D. Higdon', '0ed3ae53-3e3b-4348-8a9a-228a222576e0'),
('44ab0cbb-ba2e-4d3b-8ea1-9efb60857dbf', 'Franciscon', 'T. Schulz', '5e8d06b2-9ed1-4719-a0b7-17753ade2814'),
('831803a9-30b7-457c-9ece-117b8210175f', 'Jhon', 'Dae Got', '3ce32e87-6ce6-4247-b118-15c5cdba9f6a');

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

--
-- Volcado de datos para la tabla `tb_references`
--

INSERT INTO `tb_references` (`id`, `userId`, `affilies`, `createdAt`) VALUES
(5, '3ce32e87-6ce6-4247-b118-15c5cdba9f6a', '[{\"idAffilies\":\"97c1fcf6-75ac-4d43-998a-d3d7a6c4a70d\",\"createdAt\":\"2023-02-19T16:37:20.021Z\"}]', '2023-02-19 16:37:20.085681'),
(6, '0ed3ae53-3e3b-4348-8a9a-228a222576e0', '[{\"idAffilies\":\"7fd282e1-1ef5-4cf9-a343-a6fcda42de12\",\"createdAt\":\"2023-01-19T16:40:07.366Z\"},{\"idAffilies\":\"e1378352-81b0-49e6-b910-a2e397ddb8a6\",\"createdAt\":\"2023-01-19T16:42:27.778Z\"},{\"idAffilies\":\"bd574621-0f68-4edd-9ec8-c77ef02877bf\",\"createdAt\":\"2023-02-19T16:43:05.012Z\"},{\"idAffilies\":\"69bc4b64-f524-4a67-b0f7-e40514a2dc09\",\"createdAt\":\"2023-02-19T21:00:34.760Z\"},{\"idAffilies\":\"e7f971d1-cfbe-4a83-8c91-36ad56b9b01d\",\"createdAt\":\"2023-02-19T21:36:02.083Z\"},{\"idAffilies\":\"6cd5714d-c596-4fac-bcf7-dc0724848102\",\"createdAt\":\"2023-02-22T16:00:24.597Z\"}]', '2023-02-22 16:00:24.598653');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_role`
--

CREATE TABLE `tb_role` (
  `id` int(11) NOT NULL,
  `name` varchar(11) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci ROW_FORMAT=DYNAMIC;

--
-- Volcado de datos para la tabla `tb_role`
--

INSERT INTO `tb_role` (`id`, `name`) VALUES
(49, 'root'),
(50, 'user'),
(51, 'moderator');

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

--
-- Volcado de datos para la tabla `tb_subscriber`
--

INSERT INTO `tb_subscriber` (`id`, `name`, `lastname`, `userId`) VALUES
('69bc4b64-f524-4a67-b0f7-e40514a2dc09', 'Shane', 'V. Martin', '1ae399e9-a193-4fdf-bf3b-30df294166c0'),
('6cd5714d-c596-4fac-bcf7-dc0724848102', 'Francisco', 'T. Schulz', '2300d2f1-0d5b-492e-ace5-9341ede63092'),
('7fd282e1-1ef5-4cf9-a343-a6fcda42de12', 'Mary', 'T. Graham', '2e4992ec-954b-4230-9a2f-9ffd6443f5ee'),
('8b1c9e90-51eb-4b89-a9a5-da619ab33765', 'Francisco', 'T. Schulz', 'ebc109ae-3134-426f-a928-300cc46261f2'),
('97c1fcf6-75ac-4d43-998a-d3d7a6c4a70d', 'Diane', 'D. Masters', '71f2cc5f-2773-4dd4-940c-d40e4619b798'),
('bd574621-0f68-4edd-9ec8-c77ef02877bf', 'Andy', 'T. Burnell', '1d310b3b-148f-421a-80da-eb6142fd3b62'),
('e1378352-81b0-49e6-b910-a2e397ddb8a6', 'Susan', 'R. Rogers', 'cf3d1afc-3479-4bd9-b9fd-7fdb1d04069b'),
('e7f971d1-cfbe-4a83-8c91-36ad56b9b01d', 'Marshall', 'A. Shinault', '77c19a5d-2a2f-4f6f-ab64-2c6160ae589c');

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
-- Volcado de datos para la tabla `tb_user`
--

INSERT INTO `tb_user` (`id`, `email`, `password`, `role`, `createdAt`, `state`) VALUES
('0ed3ae53-3e3b-4348-8a9a-228a222576e0', 'chris@gmail.com', '$2a$10$fsea8PYOUon271LYvfR2EOXvKiBDqGPUdDWrPJLYfCSOK2UMSimsO', 51, '2023-02-19 16:36:10.281893', 1),
('1ae399e9-a193-4fdf-bf3b-30df294166c0', 'shane@gmail.com', '$2a$10$TlrvSBd3OghBUc3OVHhzz.gDjRRfgat4dQ1qmfokzKpbQYP78W3Se', 50, '2023-02-25 22:46:03.285289', 1),
('1d310b3b-148f-421a-80da-eb6142fd3b62', 'andy@gmail.com', '$2a$10$GmO0RqOeZIk3dHvCSFp3JejtNzskrHcMrJvyHQBALUFa0dpvQYivO', 50, '2023-02-19 16:43:04.812793', 1),
('2300d2f1-0d5b-492e-ace5-9341ede63092', 'francy@gmail.com', '$2a$10$0ucls/gzd7AfLbr/RYINauv3nf./Te650VJnJEHYjZdj1AWeAlp4G', 50, '2023-02-22 16:00:24.379984', 1),
('2e4992ec-954b-4230-9a2f-9ffd6443f5ee', 'mary@gmail.com', '$2a$10$JH5FTEbrR8KWfdBnSdJTPeQxys4q/UolZEftjCghRnTg4Q4d9CBa6', 50, '2023-02-19 16:40:07.250581', 1),
('3ce32e87-6ce6-4247-b118-15c5cdba9f6a', 'jhon@gmail.com', '$2a$10$KTBVFY9DQBr0Db0dQO8WjOvVFhvzxyzSsi40ENltWSXklXIVVTkrq', 51, '2023-02-19 16:35:27.497167', 1),
('5e8d06b2-9ed1-4719-a0b7-17753ade2814', 'francn@gmail.com', '$2a$10$VdkUxG/7ptAwtzU.BJviHuWHIhekaPElMxeU9sDCu8wnYg6owxYw2', 51, '2023-02-22 01:55:55.817648', 1),
('71f2cc5f-2773-4dd4-940c-d40e4619b798', 'diane@gmail.com', '$2a$10$QpgdH60h3AWerxmgfBInBeulCFPVNXIO7k0zRiUF2TMwG8Rs4Lqi2', 50, '2023-02-19 16:37:19.810542', 1),
('77c19a5d-2a2f-4f6f-ab64-2c6160ae589c', 'marsh@gmail.com', '$2a$10$s6kWU4IWdNDpsRB2kqjetOrwnA6UfqmmaoW3tpupdggPq1lldd8s6', 50, '2023-02-19 21:36:01.903814', 1),
('88aec833-c301-4bc8-9cbd-dde5f2a30d03', 'admin@admin.com', '$2a$10$sYKd3ZRQKZtfrNhonFPAO.DuwIiW8E3QYNkOepNF3hqB2B/HXdtDy', 49, '2023-02-19 16:22:47.535449', 1),
('cf3d1afc-3479-4bd9-b9fd-7fdb1d04069b', 'sussan@gmail.com', '$2a$10$3O08c0PJwD3TOknz3ShvduZX/n7n6/nHB5PPY4OIZlW3mFRhvlB5S', 50, '2023-02-19 16:42:27.585618', 1),
('ebc109ae-3134-426f-a928-300cc46261f2', 'franc@gmail.com', '$2a$10$S5ajAd0rg5Iin8Qdro7ULOINn1yoEy3sLuYyWRBqog4onB2W5jLLC', 50, '2023-02-22 01:26:35.822732', 1);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tb_role`
--
ALTER TABLE `tb_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
