const instruments = require('../data/instruments');
const trades = require('../data/trades');
const portfolio = require('../data/portfolio');

function executeOrder(order) {
    const instrument = instruments.find(i => i.symbol === order.symbol);
    if (!instrument) return;

    const ltp = instrument.lastTradedPrice;

    // Market executes instantly
    if (order.orderStyle === "MARKET") {
        finalize(order, ltp);
    }
    // Limit executes if price >= LTP
    else if (order.orderStyle === "LIMIT" && order.price >= ltp) {
        finalize(order, order.price);
    }
}

function finalize(order, execPrice) {
    order.status = "EXECUTED";

    trades.push({
        orderId: order.id,
        symbol: order.symbol,
        quantity: order.quantity,
        price: execPrice
    });

    if (!portfolio[order.symbol]) {
        portfolio[order.symbol] = { quantity: 0, avgPrice: 0 };
    }

    const p = portfolio[order.symbol];

    if (order.orderType === "BUY") {
        p.avgPrice = ((p.avgPrice * p.quantity) + (execPrice * order.quantity)) /
                     (p.quantity + order.quantity);
        p.quantity += order.quantity;
    }

    if (order.orderType === "SELL") {
        p.quantity -= order.quantity;
    }
}

module.exports = { executeOrder };


