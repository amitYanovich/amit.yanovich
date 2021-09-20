-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: localhost    Database: amit_yanovich
-- ------------------------------------------------------
-- Server version	8.0.20
use `amit_yanovich`;

-- Table structure for table `users`
--
;
CREATE TABLE `users` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `userID` int(100) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `userEmail` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)) 
  ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `users` VALUES ("1,206026924,amit,amit@gmail.com");

