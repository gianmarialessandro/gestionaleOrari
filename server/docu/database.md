

-- Crea il database
CREATE DATABASE IF NOT EXISTS gestione_orari_lavoro;

-- Seleziona il database
USE gestione_orari_lavoro;

-- Tabella per gli utenti
CREATE TABLE IF NOT EXISTS utenti (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  cognome VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  telefono VARCHAR(15),
  conferma_registrazione BOOLEAN DEFAULT false
);

-- Tabella per le aziende
CREATE TABLE IF NOT EXISTS aziende (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome_proprietario VARCHAR(50) NOT NULL,
  cognome_proprietario VARCHAR(50) NOT NULL,
  email_proprietario VARCHAR(100) NOT NULL UNIQUE,
  telefono_proprietario VARCHAR(15),
  nome_azienda VARCHAR(100) NOT NULL,
  UNIQUE KEY (nome_azienda)
);

-- Tabella per gli orari di lavoro
CREATE TABLE IF NOT EXISTS orari_lavoro (
  id INT AUTO_INCREMENT PRIMARY KEY,
  dipendente_id INT NOT NULL,
  azienda_id INT NOT NULL,
  data DATE NOT NULL,
  ore_lavorate DECIMAL(5,2) NOT NULL,
  FOREIGN KEY (dipendente_id) REFERENCES utenti(id),
  FOREIGN KEY (azienda_id) REFERENCES aziende(id)
);
