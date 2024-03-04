const express = require('express');
const mysql =require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gestionale_orari"
})

// Parsing del corpo incorporato in Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    return res.json("ciao del Server");
})

app.get('/utenti', (req, res) => {
    const sql = "SELECT * FROM azienda";
    db.query(sql, (err, data) => {
        if(err) return console.log(res.json(err));
        return res.json(data)
    })
})

// Endpoint POST per aggiungere utenti
app.post('/signup', (req, res) => {
    const { nome, cognome, email, password, telefono, azienda } = req.body;
    const sql = `INSERT INTO azienda (nome, cognome, email, passwort, telefono, nome_azienda) VALUES (?, ?, ?, ?, ?, ?)`;
  
    db.query(sql, [nome, cognome, email, password, telefono, azienda], (err, result) => {
      if (err) {
        res.status(500).send(`Errore durante linserimento dell utente ${req.body}`);
      } else {
        res.status(200).send('Utente aggiunto con successo');
      }
    });
  });

app.listen(8081, () => {
    console.log('in ascolto dalla porta 8081')
})