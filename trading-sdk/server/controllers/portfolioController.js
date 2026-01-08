const instruments = require('../data/instruments');
const portfolio = require('../data/portfolio');

exports.getPortfolio = (req, res) => {
    const result = Object.keys(portfolio).map(symbol => {
        const inst = instruments.find(i => i.symbol === symbol);
        return {
            symbol,
            quantity: portfolio[symbol].quantity,
            averagePrice: portfolio[symbol].avgPrice,
            currentValue: portfolio[symbol].quantity * inst.lastTradedPrice
        };
    });
    res.json(result);
};


