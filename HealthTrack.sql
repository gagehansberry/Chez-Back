-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: HealthTrack
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `encounter_info`
--

DROP TABLE IF EXISTS `encounter_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `encounter_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `time` varchar(20) DEFAULT NULL,
  `physician` varchar(100) NOT NULL,
  `pat_complaints` varchar(300) DEFAULT NULL,
  `vitals` varchar(100) DEFAULT NULL,
  `notes` varchar(100) DEFAULT NULL,
  `lab_orders` varchar(100) DEFAULT NULL,
  `pharmacy_orders` varchar(100) DEFAULT NULL,
  `diangnosis` varchar(100) DEFAULT NULL,
  `treament_plan` varchar(100) DEFAULT NULL,
  `referral` varchar(60) DEFAULT NULL,
  `follow_up` varchar(45) DEFAULT NULL,
  `patient_record_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_encounter_info_patient_record_idx` (`patient_record_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encounter_info`
--

LOCK TABLES `encounter_info` WRITE;
/*!40000 ALTER TABLE `encounter_info` DISABLE KEYS */;
INSERT INTO `encounter_info` VALUES (4,'1492-04-20 00:00:00',NULL,'FDSFDFSDF',NULL,'dead',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `encounter_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipment`
--

DROP TABLE IF EXISTS `equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipment` (
  `idequipment` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `department` varchar(45) DEFAULT NULL,
  `owned_leased` varchar(45) DEFAULT NULL,
  `warranty` varchar(200) DEFAULT NULL,
  `lease_terms` varchar(200) DEFAULT NULL,
  `vendors_idvendors` int(11) NOT NULL,
  PRIMARY KEY (`idequipment`),
  KEY `fk_equipment_vendors1_idx` (`vendors_idvendors`),
  CONSTRAINT `fk_equipment_vendors1` FOREIGN KEY (`vendors_idvendors`) REFERENCES `vendors` (`idvendors`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipment`
--

LOCK TABLES `equipment` WRITE;
/*!40000 ALTER TABLE `equipment` DISABLE KEYS */;
INSERT INTO `equipment` VALUES (1,NULL,NULL,NULL,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `equipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lab_order`
--

DROP TABLE IF EXISTS `lab_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lab_order` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `physician` varchar(45) DEFAULT NULL,
  `lab_test` varchar(45) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `technician` varchar(100) DEFAULT NULL,
  `result` varchar(45) DEFAULT NULL,
  `patient_record_id` int(11) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `fk_lab_order_patient_record_idx` (`patient_record_id`),
  CONSTRAINT `fk_lab_order_patient_record` FOREIGN KEY (`patient_record_id`) REFERENCES `patient_record` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lab_order`
--

LOCK TABLES `lab_order` WRITE;
/*!40000 ALTER TABLE `lab_order` DISABLE KEYS */;
INSERT INTO `lab_order` VALUES (1,'John','Angela',NULL,NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `lab_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lab_test`
--

DROP TABLE IF EXISTS `lab_test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lab_test` (
  `lab_test_id` int(11) NOT NULL AUTO_INCREMENT,
  `test_type` varchar(45) DEFAULT NULL,
  `normal_results` varchar(45) DEFAULT NULL,
  `bad_results` varchar(60) DEFAULT NULL,
  `lab_order_order_id` int(11) NOT NULL,
  PRIMARY KEY (`lab_test_id`),
  KEY `fk_lab_test_lab_order1_idx` (`lab_order_order_id`),
  CONSTRAINT `fk_lab_test_lab_order1` FOREIGN KEY (`lab_order_order_id`) REFERENCES `lab_order` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lab_test`
--

LOCK TABLES `lab_test` WRITE;
/*!40000 ALTER TABLE `lab_test` DISABLE KEYS */;
INSERT INTO `lab_test` VALUES (1,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `lab_test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maintenance`
--

DROP TABLE IF EXISTS `maintenance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `maintenance` (
  `problem` varchar(100) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `resolution` varchar(45) DEFAULT NULL,
  `equipment_idequipment` int(11) NOT NULL,
  KEY `fk_maintenance_equipment1_idx` (`equipment_idequipment`),
  CONSTRAINT `fk_maintenance_equipment1` FOREIGN KEY (`equipment_idequipment`) REFERENCES `equipment` (`idequipment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maintenance`
--

LOCK TABLES `maintenance` WRITE;
/*!40000 ALTER TABLE `maintenance` DISABLE KEYS */;
/*!40000 ALTER TABLE `maintenance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicine`
--

DROP TABLE IF EXISTS `medicine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine` (
  `medication_id` int(11) NOT NULL AUTO_INCREMENT,
  `med_name` varchar(45) DEFAULT NULL,
  `med_descrip` varchar(45) DEFAULT NULL,
  `med_rec_use` varchar(45) DEFAULT NULL,
  `side_effects` varchar(45) DEFAULT NULL,
  `adverse_meds` varchar(45) DEFAULT NULL,
  `pharmacy_prescription_id` int(11) NOT NULL,
  PRIMARY KEY (`medication_id`,`pharmacy_prescription_id`),
  KEY `fk_medicine_pharmacy1_idx` (`pharmacy_prescription_id`),
  CONSTRAINT `fk_medicine_pharmacy1` FOREIGN KEY (`pharmacy_prescription_id`) REFERENCES `pharmacy` (`prescription_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicine`
--

LOCK TABLES `medicine` WRITE;
/*!40000 ALTER TABLE `medicine` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_record`
--

DROP TABLE IF EXISTS `patient_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `insurance` varchar(45) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `care_taker` varchar(45) DEFAULT NULL,
  `medications` varchar(45) DEFAULT NULL,
  `appointments` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_record`
--

LOCK TABLES `patient_record` WRITE;
/*!40000 ALTER TABLE `patient_record` DISABLE KEYS */;
INSERT INTO `patient_record` VALUES (1,'James',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'Gage','123',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'Gage','123',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'Gage','123',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'Gage','123',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,'Gage','123',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,'Gage','123',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,'Gage','123',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,'Evan Kosmos','123',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `patient_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pharmacy`
--

DROP TABLE IF EXISTS `pharmacy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pharmacy` (
  `prescription_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `medication` varchar(45) DEFAULT NULL,
  `dosage` varchar(45) DEFAULT NULL,
  `usage_amount` varchar(45) DEFAULT NULL,
  `date_filled` datetime DEFAULT NULL,
  `pharmacist` varchar(45) DEFAULT NULL,
  `patient_record_id` int(11) NOT NULL,
  PRIMARY KEY (`prescription_id`),
  KEY `fk_pharmacy_patient_record1_idx` (`patient_record_id`),
  CONSTRAINT `fk_pharmacy_patient_record1` FOREIGN KEY (`patient_record_id`) REFERENCES `patient_record` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pharmacy`
--

LOCK TABLES `pharmacy` WRITE;
/*!40000 ALTER TABLE `pharmacy` DISABLE KEYS */;
/*!40000 ALTER TABLE `pharmacy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `physician`
--

DROP TABLE IF EXISTS `physician`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `physician` (
  `Name` varchar(60) NOT NULL,
  `physician_id` varchar(45) NOT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `schedule` varchar(200) DEFAULT NULL,
  `appointments` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`physician_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `physician`
--

LOCK TABLES `physician` WRITE;
/*!40000 ALTER TABLE `physician` DISABLE KEYS */;
INSERT INTO `physician` VALUES ('James','1','661-312-6966','8/17, 8/19, 8/20','None upcoming');
/*!40000 ALTER TABLE `physician` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendors`
--

DROP TABLE IF EXISTS `vendors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendors` (
  `idvendors` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `ven_address` varchar(100) DEFAULT NULL,
  `type_equip` varchar(45) DEFAULT NULL,
  `preferred` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`idvendors`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendors`
--

LOCK TABLES `vendors` WRITE;
/*!40000 ALTER TABLE `vendors` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'HealthTrack'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-06 11:26:06
