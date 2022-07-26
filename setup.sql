-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 18. Jul 2022 um 08:06
-- Server-Version: 10.4.24-MariaDB
-- PHP-Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `luxknives`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `antworten`
--

CREATE TABLE `antworten` (
  `aId` int(11) NOT NULL,
  `nId` int(11) NOT NULL,
  `antwort` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `antworten`
--

INSERT INTO `antworten` (`aId`, `nId`, `antwort`) VALUES
(5, 29, 'Antwort 1'),
(6, 30, 'Antwort 2'),
(8, 34, 'Antwort 6'),
(9, 31, 'Antwort 3'),
(10, 35, 'Testantwort an einen Testkunden'),
(11, 36, 'testantwort');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `benutzer`
--

CREATE TABLE `benutzer` (
  `uId` int(11) NOT NULL,
  `vName` varchar(100) NOT NULL,
  `nName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `passwort` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `benutzer`
--

INSERT INTO `benutzer` (`uId`, `vName`, `nName`, `email`, `passwort`) VALUES
(2, 'Alex', 'Schine', 'a.schine@outlook.com', '123'),
(3, 'Dima', 'Skorbyashchenskyy', 'dimaschine@outlook.com', '123'),
(4, 'Boss', 'der Bosse', 'anbieter@boss.com', '123'),
(9, 'f', 'f', 't@t.de', '123');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `nachrichten`
--

CREATE TABLE `nachrichten` (
  `nId` int(11) NOT NULL,
  `uId` int(11) DEFAULT NULL,
  `vName` varchar(100) NOT NULL,
  `nNAme` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `betreff` varchar(100) NOT NULL,
  `nachricht` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `nachrichten`
--

INSERT INTO `nachrichten` (`nId`, `uId`, `vName`, `nNAme`, `email`, `betreff`, `nachricht`) VALUES
(30, 3, 'Dmytro', 'Skorbyashchenskyy', 'dimaschine@outlook.com', 'Betreff', 'Frage 2'),
(31, 3, 'Dmytro', 'Skorbyashchenskyy', 'dimaschine@outlook.com', 'Betreff', 'Frage 3'),
(32, 3, 'Dmytro', 'Skorbyashchenskyy', 'dimaschine@outlook.com', 'Betreff', 'Frage 4'),
(33, 3, 'Dmytro', 'Skorbyashchenskyy', 'dimaschine@outlook.com', 'Betreff', 'Frage 5'),
(35, NULL, 'TestkundenVorname', 'TestkundenName', 'testkunde@ohneaccount.de', 'Testbetreff', 'Testnachricht');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `zuordnung benutzer nachrichten`
--

CREATE TABLE `zuordnung benutzer nachrichten` (
  `zID` int(11) NOT NULL,
  `uId` int(11) NOT NULL,
  `nId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `antworten`
--
ALTER TABLE `antworten`
  ADD PRIMARY KEY (`aId`);

--
-- Indizes für die Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  ADD PRIMARY KEY (`uId`);

--
-- Indizes für die Tabelle `nachrichten`
--
ALTER TABLE `nachrichten`
  ADD PRIMARY KEY (`nId`),
  ADD KEY `uId` (`uId`);

--
-- Indizes für die Tabelle `zuordnung benutzer nachrichten`
--
ALTER TABLE `zuordnung benutzer nachrichten`
  ADD PRIMARY KEY (`zID`),
  ADD KEY `uId` (`uId`),
  ADD KEY `nId` (`nId`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `antworten`
--
ALTER TABLE `antworten`
  MODIFY `aId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT für Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  MODIFY `uId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT für Tabelle `nachrichten`
--
ALTER TABLE `nachrichten`
  MODIFY `nId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT für Tabelle `zuordnung benutzer nachrichten`
--
ALTER TABLE `zuordnung benutzer nachrichten`
  MODIFY `zID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
