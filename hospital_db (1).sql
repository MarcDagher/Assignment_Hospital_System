-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2023 at 10:17 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospital_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `ad_username` varchar(50) NOT NULL,
  `ad_password` varchar(200) NOT NULL,
  `ad_login_time` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ad_username`, `ad_password`, `ad_login_time`) VALUES
('Admin123', '$2y$10$4w/NlUVgH40PTufVN2y0Fuicgalct7PTB6UGwAvc/FqEV8vvQVjHK', '2023-12-05');

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `app_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `app_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `room_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `room_type` varchar(50) NOT NULL,
  `room_status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`room_id`, `user_id`, `room_type`, `room_status`) VALUES
(1, 21, 'emergency', 'empty'),
(2, 21, 'emergency', 'empty'),
(3, 21, 'emergency', 'empty'),
(4, 21, 'emergency', 'empty'),
(5, 21, 'emergency', 'empty'),
(6, 21, 'emergency', 'empty'),
(7, 21, 'emergency', 'empty'),
(8, 21, 'emergency', 'empty'),
(9, 21, 'emergency', 'empty'),
(10, 21, 'patient', 'empty'),
(11, 21, 'patient', 'empty'),
(12, 21, 'patient', 'empty'),
(13, 21, 'patient', 'empty'),
(14, 21, 'patient', 'empty'),
(15, 21, 'patient', 'empty'),
(16, 21, 'patient', 'empty'),
(17, 21, 'patient', 'empty'),
(18, 21, 'patient', 'empty'),
(19, 21, 'patient', 'empty');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_password` varchar(200) NOT NULL,
  `user_type` varchar(50) NOT NULL,
  `department` varchar(50) DEFAULT NULL,
  `patient_case` varchar(200) DEFAULT NULL,
  `medication` varchar(200) DEFAULT NULL,
  `join_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_password`, `user_type`, `department`, `patient_case`, `medication`, `join_date`) VALUES
(11, 'joe', '$2y$10$b.xqNX5kHGRa5I6Ev3PAu.xK6oWQ5blIB6UVINfeWfri2cn9gb3v6', 'patient', NULL, NULL, NULL, '2023-12-05 06:51:13'),
(12, 'marc', '$2y$10$C0FiLZWT/wPDaNrP5S0y9OMFk4h5KVZAbpw8OeoZxsLVeHrfd.udm', 'patient', NULL, NULL, NULL, '2023-12-05 06:51:26'),
(13, 'rita', '$2y$10$j3PLn5i6gXZc7nG8GH9VC.WRfl4ww1JIHTZVOOpHYL2ewbByJSXE6', 'patient', NULL, NULL, NULL, '2023-12-05 06:51:37'),
(14, 'Dr. Rabih', '$2y$10$tBUG5t2RgIHODXxmCwPmCusFSfIIHBCSnR6Q1nlHx2KfqRCvTbS8q', 'doctor', 'cancer', NULL, NULL, '2023-12-05 07:26:13'),
(15, 'sabah', '$2y$10$7BJr/0.it9r3hP/4QwNIgOdLosUprEmAuqh2TayiCpJC9I/WbBkLq', 'patient', NULL, NULL, NULL, '2023-12-05 07:41:06'),
(16, 'sabah fakhre', '$2y$10$DElOXYvNr4jrIhxck7uQKufsbBb/ClAFrpsb6ZV/OVKmzccQitY7y', 'patient', NULL, NULL, NULL, '2023-12-05 08:10:16'),
(18, 'Dr. Marwa', '$2y$10$9bZR6x4IecHyHYWaZgJoTOeOeSPH6D2vQ6jUjCjx0qBdbLp/P8eKW', 'doctor', 'Psychiatry', NULL, NULL, '2023-12-05 08:48:23'),
(20, 'defaukt', '$2y$10$DWnixo1KH.zYIrYXGLKAi.sCnOE.uwO5EFIn9beRQBuzkrZmXnpEe', 'patient', NULL, NULL, NULL, '2023-12-05 19:48:14'),
(21, 'default', '$2y$10$oDO5QKKHIbnyP6AGtvlcxu4lBGKPVPuhV0ObnAzGiW/uGhjK/KTWS', 'patient', NULL, NULL, NULL, '2023-12-05 19:48:36'),
(22, 'nikaragwa', '$2y$10$.6i4ckhpiIkqq3vl6LkTbu4uE6l/GfsRFdPd2LV7V6nePM..1vkSe', 'patient', NULL, NULL, NULL, '2023-12-06 03:01:34'),
(23, 'axios', '$2y$10$M/SKYYslWCxIy.OP1E/8fOxZoaXEQxgk8nFue0hAGwbwGzJ4KwEtS', 'patient', NULL, NULL, NULL, '2023-12-06 03:24:44'),
(24, 'marc dagher', '$2y$10$90HlWDb5gv2.CDF2.Uzx5uBF0XaSaOCQZpPDEn3TSjaNvqfz0kF3y', 'patient', NULL, NULL, NULL, '2023-12-06 03:52:04'),
(25, 'm1', '$2y$10$gg/vwvTdhawC7fV189i0gO4lL2aasnTjRcM93vJUMZc1F6h6y2gTO', 'patient', NULL, NULL, NULL, '2023-12-06 03:55:12'),
(26, 'marc21', '$2y$10$hBef8FXyac9gM9IhtBGSs.lvsN/HGbN/CqLv5.dvJz4BSq7BTn2de', 'patient', NULL, NULL, NULL, '2023-12-06 03:57:05'),
(27, 'marc22', '$2y$10$1hlO0dSh9.fF6t1EeyjZFu4DURVqZZ3QOTxX1gmGQrM6sAzhcVTUq', 'patient', NULL, NULL, NULL, '2023-12-06 04:07:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ad_username`);

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`app_id`),
  ADD KEY `dr_id_fk` (`user_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`room_id`),
  ADD KEY `user_id_fk` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `app_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `room_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
