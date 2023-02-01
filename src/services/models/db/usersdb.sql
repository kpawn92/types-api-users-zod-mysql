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

 Date: 01/02/2023 16:51:47
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_role
-- ----------------------------
INSERT INTO `tb_role` VALUES (9, 'root');
INSERT INTO `tb_role` VALUES (10, 'moderator');
INSERT INTO `tb_role` VALUES (11, 'user');

-- ----------------------------
-- Table structure for tb_subscriber
-- ----------------------------
DROP TABLE IF EXISTS `tb_subscriber`;
CREATE TABLE `tb_subscriber`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `lastname` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `user_id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_user
-- ----------------------------
INSERT INTO `tb_user` VALUES ('23cb3930-a0c7-4c9d-8428-e9486a258228', 'admin@admin.com', '$2a$10$r.EXtKS7LOPj0bSjwLKaQe0Ou9tPnI0wCnv0VzpKgBYEIzRieNwzS', 9, '2023-02-01 15:59:18.803899');

SET FOREIGN_KEY_CHECKS = 1;
