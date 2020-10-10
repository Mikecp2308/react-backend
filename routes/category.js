const express = require('express');
const router = express.Router();

//MVC = Model View Controller

const  { list, create, remove, categoryById } = require('../controllers/categoryContriller');


router.get('/categories', list)
router.post('/create', create);
router.delete('/:categoryId', remove);
router.param('categoryId', categoryById);

module.exports = router;

