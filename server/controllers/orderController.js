const orders = require('../data/orders');
const { executeOrder } = require('../utils/orderExecutor');

exports.placeOrder = (req, res) => {
    const { symbol, quantity, orderType, orderStyle, price } = req.body;

    if (!symbol || !quantity || !orderType || !orderStyle)
        return res.status(400).json({ message: "Missing fields" });

    if (quantity <= 0)
        return res.status(400).json({ message: "Quantity must be > 0" });

    if (orderStyle === "LIMIT" && !price)
        return res.status(400).json({ message: "Price required for LIMIT order" });

    const order = {
        id: orders.length + 1,
        symbol,
        quantity,
        orderType,
        orderStyle,
        price,
        status: "NEW"
    };

    orders.push(order);

    order.status = "PLACED";
    executeOrder(order);

    res.json(order);
};

exports.getOrderStatus = (req, res) => {
    const order = orders.find(o => o.id == req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
};


