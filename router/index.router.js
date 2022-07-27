const { Router } = require('express');
const prouctRoutes = require('./collections/product.routes');

const router = Router();

// Routes
router.use('/product', prouctRoutes);

module.exports = router;