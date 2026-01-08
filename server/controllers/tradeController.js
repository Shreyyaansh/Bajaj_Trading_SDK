const trades = require('../data/trades');

exports.getTrades = (req, res) => {
    res.json(trades);
};


