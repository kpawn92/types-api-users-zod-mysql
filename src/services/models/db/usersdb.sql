/*
 Navicat Premium Data Transfer

 Source Server         : FarmaRAM
 Source Server Type    : MySQL
 Source Server Version : 100419
 Source Host           : localhost:3306
 Source Schema         : usersdb

 Target Server Type    : MySQL
 Target Server Version : 100419
 File Encoding         : 65001

 Date: 02/02/2023 08:42:46
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
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_moderator
-- ----------------------------

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_role
-- ----------------------------
INSERT INTO `tb_role` VALUES (15, 'root');
INSERT INTO `tb_role` VALUES (16, 'user');
INSERT INTO `tb_role` VALUES (17, 'moderator');

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
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_user
-- ----------------------------
INSERT INTO `tb_user` VALUES ('2434c0d3-b806-41ef-ad31-a1946b199f53', 'admin@admin.com', '$2a$10$Szb3G91wTWzvAW3M0i5/rugIZxjaEh5ThImgU7jvp7MpsRHW33YfS', 15, '2023-02-01 18:10:44.939138', 1);

SET FOREIGN_KEY_CHECKS = 1;
