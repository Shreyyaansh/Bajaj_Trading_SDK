const router = require('express').Router();
const { placeOrder, getOrderStatus } = require('../controllers/orderController');

router.post('/', placeOrder);
router.get('/:id', getOrderStatus);

module.exports = router;


