const router = require('express').Router();
const { getInstruments } = require('../controllers/instrumentController');

router.get('/', getInstruments);

module.exports = router;


