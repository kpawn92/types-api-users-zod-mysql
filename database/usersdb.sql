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

 Date: 22/02/2023 07:22:56
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
INSERT INTO `tb_moderator` VALUES ('4361e41f-f562-45d5-bfcc-a82177be5278', 'Christina', 'D. Higdon', '0ed3ae53-3e3b-4348-8a9a-228a222576e0');
INSERT INTO `tb_moderator` VALUES ('44ab0cbb-ba2e-4d3b-8ea1-9efb60857dbf', 'Franciscon', 'T. Schulz', '5e8d06b2-9ed1-4719-a0b7-17753ade2814');
INSERT INTO `tb_moderator` VALUES ('831803a9-30b7-457c-9ece-117b8210175f', 'Jhon', 'Dae Got', '3ce32e87-6ce6-4247-b118-15c5cdba9f6a');

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
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_references
-- ----------------------------
INSERT INTO `tb_references` VALUES (5, '3ce32e87-6ce6-4247-b118-15c5cdba9f6a', '[{\"idAffilies\":\"97c1fcf6-75ac-4d43-998a-d3d7a6c4a70d\",\"createdAt\":\"2023-02-19T16:37:20.021Z\"}]', '2023-02-19 11:37:20.085681');
INSERT INTO `tb_references` VALUES (6, '0ed3ae53-3e3b-4348-8a9a-228a222576e0', '[{\"idAffilies\":\"7fd282e1-1ef5-4cf9-a343-a6fcda42de12\",\"createdAt\":\"2023-01-19T16:40:07.366Z\"},{\"idAffilies\":\"e1378352-81b0-49e6-b910-a2e397ddb8a6\",\"createdAt\":\"2023-01-19T16:42:27.778Z\"},{\"idAffilies\":\"bd574621-0f68-4edd-9ec8-c77ef02877bf\",\"createdAt\":\"2023-02-19T16:43:05.012Z\"},{\"idAffilies\":\"69bc4b64-f524-4a67-b0f7-e40514a2dc09\",\"createdAt\":\"2023-02-19T21:00:34.760Z\"},{\"idAffilies\":\"e7f971d1-cfbe-4a83-8c91-36ad56b9b01d\",\"createdAt\":\"2023-02-19T21:36:02.083Z\"}]', '2023-02-19 18:29:27.385446');

-- ----------------------------
-- Table structure for tb_role
-- ----------------------------
DROP TABLE IF EXISTS `tb_role`;
CREATE TABLE `tb_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(11) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 52 CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tb_role
-- ----------------------------
INSERT INTO `tb_role` VALUES (49, 'root');
INSERT INTO `tb_role` VALUES (50, 'user');
INSERT INTO `tb_role` VALUES (51, 'moderator');

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
INSERT INTO `tb_subscriber` VALUES ('69bc4b64-f524-4a67-b0f7-e40514a2dc09', 'Shane', 'V. Martin', '1ae399e9-a193-4fdf-bf3b-30df294166c0');
INSERT INTO `tb_subscriber` VALUES ('7fd282e1-1ef5-4cf9-a343-a6fcda42de12', 'Mary', 'T. Graham', '2e4992ec-954b-4230-9a2f-9ffd6443f5ee');
INSERT INTO `tb_subscriber` VALUES ('8b1c9e90-51eb-4b89-a9a5-da619ab33765', 'Francisco', 'T. Schulz', 'ebc109ae-3134-426f-a928-300cc46261f2');
INSERT INTO `tb_subscriber` VALUES ('97c1fcf6-75ac-4d43-998a-d3d7a6c4a70d', 'Diane', 'D. Masters', '71f2cc5f-2773-4dd4-940c-d40e4619b798');
INSERT INTO `tb_subscriber` VALUES ('bd574621-0f68-4edd-9ec8-c77ef02877bf', 'Andy', 'T. Burnell', '1d310b3b-148f-421a-80da-eb6142fd3b62');
INSERT INTO `tb_subscriber` VALUES ('e1378352-81b0-49e6-b910-a2e397ddb8a6', 'Susan', 'R. Rogers', 'cf3d1afc-3479-4bd9-b9fd-7fdb1d04069b');
INSERT INTO `tb_subscriber` VALUES ('e7f971d1-cfbe-4a83-8c91-36ad56b9b01d', 'Marshall', 'A. Shinault', '77c19a5d-2a2f-4f6f-ab64-2c6160ae589c');

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
INSERT INTO `tb_user` VALUES ('0ed3ae53-3e3b-4348-8a9a-228a222576e0', 'chris@gmail.com', '$2a$10$fsea8PYOUon271LYvfR2EOXvKiBDqGPUdDWrPJLYfCSOK2UMSimsO', 51, '2023-02-19 11:36:10.281893', 1);
INSERT INTO `tb_user` VALUES ('1ae399e9-a193-4fdf-bf3b-30df294166c0', 'shane@gmail.com', '$2a$10$TlrvSBd3OghBUc3OVHhzz.gDjRRfgat4dQ1qmfokzKpbQYP78W3Se', 50, '2023-02-19 16:00:34.587878', 1);
INSERT INTO `tb_user` VALUES ('1d310b3b-148f-421a-80da-eb6142fd3b62', 'andy@gmail.com', '$2a$10$GmO0RqOeZIk3dHvCSFp3JejtNzskrHcMrJvyHQBALUFa0dpvQYivO', 50, '2023-02-19 11:43:04.812793', 1);
INSERT INTO `tb_user` VALUES ('2e4992ec-954b-4230-9a2f-9ffd6443f5ee', 'mary@gmail.com', '$2a$10$JH5FTEbrR8KWfdBnSdJTPeQxys4q/UolZEftjCghRnTg4Q4d9CBa6', 50, '2023-02-19 11:40:07.250581', 1);
INSERT INTO `tb_user` VALUES ('3ce32e87-6ce6-4247-b118-15c5cdba9f6a', 'jhon@gmail.com', '$2a$10$KTBVFY9DQBr0Db0dQO8WjOvVFhvzxyzSsi40ENltWSXklXIVVTkrq', 51, '2023-02-19 11:35:27.497167', 1);
INSERT INTO `tb_user` VALUES ('5e8d06b2-9ed1-4719-a0b7-17753ade2814', 'francn@gmail.com', '$2a$10$VdkUxG/7ptAwtzU.BJviHuWHIhekaPElMxeU9sDCu8wnYg6owxYw2', 51, '2023-02-21 20:55:55.817648', 1);
INSERT INTO `tb_user` VALUES ('71f2cc5f-2773-4dd4-940c-d40e4619b798', 'diane@gmail.com', '$2a$10$QpgdH60h3AWerxmgfBInBeulCFPVNXIO7k0zRiUF2TMwG8Rs4Lqi2', 50, '2023-02-19 11:37:19.810542', 1);
INSERT INTO `tb_user` VALUES ('77c19a5d-2a2f-4f6f-ab64-2c6160ae589c', 'marsh@gmail.com', '$2a$10$s6kWU4IWdNDpsRB2kqjetOrwnA6UfqmmaoW3tpupdggPq1lldd8s6', 50, '2023-02-19 16:36:01.903814', 1);
INSERT INTO `tb_user` VALUES ('88aec833-c301-4bc8-9cbd-dde5f2a30d03', 'admin@admin.com', '$2a$10$sYKd3ZRQKZtfrNhonFPAO.DuwIiW8E3QYNkOepNF3hqB2B/HXdtDy', 49, '2023-02-19 11:22:47.535449', 1);
INSERT INTO `tb_user` VALUES ('cf3d1afc-3479-4bd9-b9fd-7fdb1d04069b', 'sussan@gmail.com', '$2a$10$3O08c0PJwD3TOknz3ShvduZX/n7n6/nHB5PPY4OIZlW3mFRhvlB5S', 50, '2023-02-19 11:42:27.585618', 1);
INSERT INTO `tb_user` VALUES ('ebc109ae-3134-426f-a928-300cc46261f2', 'franc@gmail.com', '$2a$10$S5ajAd0rg5Iin8Qdro7ULOINn1yoEy3sLuYyWRBqog4onB2W5jLLC', 50, '2023-02-21 20:26:35.822732', 1);

SET FOREIGN_KEY_CHECKS = 1;
