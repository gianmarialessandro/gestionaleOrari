-- Crea il database
CREATE DATABASE IF NOT EXISTS gestione_orari_lavoro;

-- Seleziona il database
USE gestione_orari_lavoro;


-- Tabella per le aziende
CREATE TABLE IF NOT EXISTS azienda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cognome VARCHAR(50) NOT NULL,
    passwort VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(15),
    nome_azienda VARCHAR(100) NOT NULL UNIQUE,
    creato TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    conferma_registrazione BOOLEAN DEFAULT false
);

-- Tabella per gli utenti
CREATE TABLE IF NOT EXISTS utenti (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_utente VARCHAR(255) NOT NULL,
    cognome_utente VARCHAR(255) NOT NULL,
    email_utente VARCHAR(100) NOT NULL UNIQUE,
    telefono_utente VARCHAR(15),
    creato TIMESTAMP NOT NULL DEFAULT NOw(),
    conferma_registrazione BOOLEAN DEFAULT false
);

-- Tabella per gli orari di lavoro
CREATE TABLE IF NOT EXISTS orari_lavoro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dipendente_id INT NOT NULL,
    azienda_id INT NOT NULL,
    data DATE NOT NULL,
    ore_lavorate DECIMAL(5, 2) NOT NULL,
    FOREIGN KEY (dipendente_id) REFERENCES utenti(id),
    FOREIGN KEY (azienda_id) REFERENCES aziende(id)
);