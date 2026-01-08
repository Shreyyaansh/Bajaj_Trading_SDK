const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/api/v1/instruments', require('./routes/instruments'));
app.use('/api/v1/orders', require('./routes/orders'));
app.use('/api/v1/trades', require('./routes/trades'));
app.use('/api/v1/portfolio', require('./routes/portfolio'));

app.listen(3000, () => {
    console.log("Trading API running on http://localhost:3000");
});


