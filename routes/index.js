const router = require('express').Router();

// import modular routes for /notes /index
const notesRouter = require('./notes')

router.use('/notes', notesRouter)


module.exports = router; 