const axios = require('axios');

class TradingSDK {
    constructor(baseURL) {
        this.client = axios.create({ baseURL });
    }

    getInstruments() {
        return this.client.get('/api/v1/instruments');
    }

    placeOrder(order) {
        return this.client.post('/api/v1/orders', order);
    }

    getOrderStatus(id) {
        return this.client.get(`/api/v1/orders/${id}`);
    }

    getTrades() {
        return this.client.get('/api/v1/trades');
    }

    getPortfolio() {
        return this.client.get('/api/v1/portfolio');
    }
}

module.exports = TradingSDK;


