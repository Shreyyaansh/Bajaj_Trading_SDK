const instruments = require('../data/instruments');

exports.getInstruments = (req, res) => {
    res.json(instruments);
};


