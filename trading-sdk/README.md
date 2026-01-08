# Trading SDK – Simplified Trading API

Small Node.js + Express demo that keeps everything in memory (no database).

## Setup
1) Install deps  
```
npm install
```
2) Start the server  
```
npm start
```
Server runs at http://localhost:3000

## Key Endpoints (JSON)
- GET  /api/v1/instruments
- POST /api/v1/orders
  - Body example:
    ```json
    {
      "symbol": "AAPL",
      "quantity": 5,
      "orderType": "BUY",
      "orderStyle": "MARKET"
    }
    ```
- GET  /api/v1/orders/:id
- GET  /api/v1/trades
- GET  /api/v1/portfolio

Rules: MARKET executes at last traded price. LIMIT executes if limit price >= LTP.

## SDK Usage (quick)
```js
const TradingSDK = require('./sdk/TradingSDK');
const sdk = new TradingSDK('http://localhost:3000');
sdk.getInstruments().then(r => console.log(r.data));
```

Everything resets on server restart (in-memory only).



