const router = require('express').Router();
const { getTrades } = require('../controllers/tradeController');

router.get('/', getTrades);

module.exports = router;


