/*
 Navicat Premium Data Transfer

 Source Server         : Farmram
 Source Server Type    : MySQL
 Source Server Version : 100421
 Source Host           : localhost:3306
 Source Schema         : usersdb

 Target Server Type    : MySQL
 Target Server Version : 100421
 File Encoding         : 65001

 Date: 15/02/2023 16:12:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_moderator
-- ----------------------------
DROP TABLE IF EXISTS `tb_moderator`;
CREATE TABLE `tb_moderator`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `lastname` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `userId` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_moderator
-- ----------------------------
INSERT INTO `tb_moderator` VALUES ('af49840d-d6e6-4820-8cf2-33f48dbcbd3f', 'Jhon', 'Joe', '3878e88b-052b-4a44-b77a-d96fdaceb58d');

-- ----------------------------
-- Table structure for tb_references
-- ----------------------------
DROP TABLE IF EXISTS `tb_references`;
CREATE TABLE `tb_references`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `affilies` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_references
-- ----------------------------

-- ----------------------------
-- Table structure for tb_role
-- ----------------------------
DROP TABLE IF EXISTS `tb_role`;
CREATE TABLE `tb_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(11) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 49 CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_role
-- ----------------------------
INSERT INTO `tb_role` VALUES (46, 'root');
INSERT INTO `tb_role` VALUES (47, 'user');
INSERT INTO `tb_role` VALUES (48, 'moderator');

-- ----------------------------
-- Table structure for tb_subscriber
-- ----------------------------
DROP TABLE IF EXISTS `tb_subscriber`;
CREATE TABLE `tb_subscriber`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `lastname` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `userId` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_subscriber
-- ----------------------------

-- ----------------------------
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE `tb_user`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `role` int(11) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `state` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_user
-- ----------------------------
INSERT INTO `tb_user` VALUES ('3878e88b-052b-4a44-b77a-d96fdaceb58d', 'jhon@gmail.com', '$2a$10$c3CAXGfzeiRNj8N/pgRvbuYQT3wJHNF1ZOgZbixntfJ.ziNVQk/Ky', 48, '2023-02-15 12:30:39.096951', 1);
INSERT INTO `tb_user` VALUES ('8cc5f33b-a246-4553-b6b9-c6840bf3103c', 'admin@admin.com', '$2a$10$b9wo8HC.zeSbYyQHJwKlrOeOA.nRiuMUht03lhgQgDiPW75MLQVFu', 46, '2023-02-15 12:17:34.159526', 1);

SET FOREIGN_KEY_CHECKS = 1;
