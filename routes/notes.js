const notes = require('express').Router();
const uuid = require('./helpers/uuid');
const fs = require('fs');

notes.get('/', (req, res) => {
    fs.readFile('./db/db.json', { encoding: 'utf8' }, (err, db) => {
        res.json(JSON.parse(db));
    });
});

notes.post('/', (req,res) => {
    fs.readFile('./db/db.json', { encoding: 'utf8' }, (err, db) => {
        const db_json = JSON.parse(db);
        const { title, text } = req.body;
        const newNote = {
            id: uuid(),
            title: title,
            text: text
        }
        db_json.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(db_json), (err) => {
            res.send(err ? err : 'note saved successfully');
        });
    });
});

module.exports = notes;

