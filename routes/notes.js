const router = require('express').Router();
const fs = require('fs');
const uuid = require('./helpers/uuid')


router.get('/notes', (req,res) => {

    const file = './db/db.json'

    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            res.json(parsedData)
        }
    });

});


router.post('/notes', (req,res) => {
    const { title, text } = req.body;

    const newNote = {
        title,
        text,
        id: uuid(),
    };

    const file = './db/db.json'

    const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => 
    err ? console.error(err) : console.info(`/nData written to ${destination}`));

    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(newNote);
            writeToFile(file, parsedData);
            res.json(parsedData)
        }
    });
});

module.exports = router;