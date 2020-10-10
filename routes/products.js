const express = require('express');
const router = express.Router();

const { list, create, remove, productById, photo} = require('../controllers/productsController');

router.get('/products', list);
router.post('/create', create);
router.get('/photo/:productId', photo);
router.delete('/:productId', remove);

router.param("productId", productById);

module.exports = router;