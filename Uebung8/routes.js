// wurde reinkopiert aus script -- REST-API (PostgreSQL)
const express = require('express');
const router = express.Router();
// für DB-Verbindung den db.js importieren
const client = require('./db'); 

// test
router.get('/test', async(req, res) => {
    //Hier wird die Tabelle erstellt:
    const anfragen = //"DROP TABLE IF EXISTS users; " +
                     "CREATE TABLE users(id serial PRIMARY KEY, name VARCHAR(50), password VARCHAR(255), email VARCHAR(50), role VARCHAR(50))"
    client.query(anfragen);
    
    res.send({ message: "jetzt mit PostgreSQL" });
});

// CRUD
// router.METHOD(PATH, HANDLER)
router.post('/piri_users',async(req, res) => {
    let username = req.body.username; // username aus dem Body
    let role = req.body.role; // role aus dem Body

    // Varinate1: const anfragen = `INSERT INTO users(name, role) VALUES('${username}', '${role}')`;
    // Variante2: prepared statement (in array füllen)
    const anfragen = "INSERT INTO users(name, role) VALUES($1, $2) RETURNING *";
    let result = await client.query(anfragen, [username, role]);
    console.log('result', result);
    res.send({message: "Datensatz erzeugt"});
})
module.exports = router;