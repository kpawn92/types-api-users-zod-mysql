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

 Date: 15/02/2023 09:14:43
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
INSERT INTO `tb_moderator` VALUES ('85e5b43e-0ab4-4db2-8374-dc753ecf5ca5', 'Yara', 'Joe Wash', '798b6d8f-6e73-47a4-a4d4-405953d23f84');
INSERT INTO `tb_moderator` VALUES ('dc5ffee1-0464-419a-afeb-1898ee1cdcbb', 'Anara', 'Joe Wash', '871aca74-b608-44fa-9d4c-bc154c0575d2');
INSERT INTO `tb_moderator` VALUES ('f8a9b9b3-c64e-4ada-bb80-56178c652c47', 'Yara', 'Joe Wash', 'b7ac528f-e483-406c-99cd-7e8e92bf159a');

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 46 CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_role
-- ----------------------------
INSERT INTO `tb_role` VALUES (43, 'root');
INSERT INTO `tb_role` VALUES (44, 'user');
INSERT INTO `tb_role` VALUES (45, 'moderator');

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
INSERT INTO `tb_subscriber` VALUES ('615a41bf-a739-4e7e-a477-b4c6a3cca87f', 'Vegui', 'Joe Wash', 'b1df6a91-1533-4c9d-a89c-9a00d520e8a0');
INSERT INTO `tb_subscriber` VALUES ('95fe05af-daa6-4493-bb27-d910867329d6', 'Johne', 'Joe Wash', 'ead0d474-288f-4ae5-93db-81cfa533d8b3');
INSERT INTO `tb_subscriber` VALUES ('d6773340-9e45-4404-b2ee-61d7a767f3c5', 'Vegui', 'Joe Wash', '03c9b483-3fda-4ec5-b8f2-d8b3632f5da2');
INSERT INTO `tb_subscriber` VALUES ('f3fd25cc-08ef-4462-b175-9f618177a486', 'Vegui', 'Joe Wash', '2e931379-0dc2-4279-98ee-8905ffeda019');

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
INSERT INTO `tb_user` VALUES ('03c9b483-3fda-4ec5-b8f2-d8b3632f5da2', 'jhpn@gmail.com', '$2a$10$ZkSJnLkTfpkEj3kcDucbreCbyGs4.xRr67JJ.ivOZZFs9GaQH2bZ.', 44, '2023-02-05 12:33:38.022712', 1);
INSERT INTO `tb_user` VALUES ('2e931379-0dc2-4279-98ee-8905ffeda019', 'vegui@gmail.com', '$2a$10$2JKbzzFUO82v1dY7Y55xHek822SkIQy.d2CQeTxmbhGxCnq/OviKe', 44, '2023-02-05 12:11:54.834704', 1);
INSERT INTO `tb_user` VALUES ('723edfba-a32b-40b0-ad65-67e48f65b95d', 'admin@admin.com', '$2a$10$0wJLv8KpgDud0mCEWDmnvO5sjhnfCIwd210pyikVIVUzP8paf3zou', 43, '2023-02-04 19:34:49.734601', 1);
INSERT INTO `tb_user` VALUES ('798b6d8f-6e73-47a4-a4d4-405953d23f84', 'otro@gmail.com', '$2a$10$oDsQ7uhMi9pgMuVnqUxZ7ussGqy5.2lD.1G7AvdkZat.qrTrIW1kS', 45, '2023-02-05 11:54:40.957476', 1);
INSERT INTO `tb_user` VALUES ('871aca74-b608-44fa-9d4c-bc154c0575d2', 'anar@gmail.com', '$2a$10$nyF7X9g8BApsbN4QTX0B.uYFB4QAh9vhJi9SEz364379/l.3qZY3m', 45, '2023-02-05 13:16:58.179809', 1);
INSERT INTO `tb_user` VALUES ('b1df6a91-1533-4c9d-a89c-9a00d520e8a0', 'op@gmail.com', '$2a$10$E1bGc0VAK9qmMPlPKOjCquASQL3Fy4WOp8piaqtvskAtK0WUfblc2', 44, '2023-02-05 12:18:49.788611', 1);
INSERT INTO `tb_user` VALUES ('b7ac528f-e483-406c-99cd-7e8e92bf159a', 'yara@gmail.com', '$2a$10$qQVFQWq2b43mw4rODs1CEurJvCTl4OFh9briNLF3EJD3W1sZp2Gh.', 45, '2023-02-04 20:39:43.714624', 1);
INSERT INTO `tb_user` VALUES ('ead0d474-288f-4ae5-93db-81cfa533d8b3', 'jhone@gmail.com', '$2a$10$of/ypaakTlYLTakCtdREs.HtZCbeicX1oqPg4gC72j6YpifROrn6S', 44, '2023-02-05 14:41:04.749145', 1);

SET FOREIGN_KEY_CHECKS = 1;
