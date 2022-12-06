const express = require('express');

// import modular routes for /notes /index
const notesRouter = require('/notes')

const app = express();

app.use('/notes', notesRouter);
app.use();

module.exports = app;