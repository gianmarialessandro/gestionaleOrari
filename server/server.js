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

app.listen(8081, () => {
    console.log('in ascolto dalla porta 8081')
})