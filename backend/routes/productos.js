const express = require('express');
const router = express.Router();

const { list, create, remove, productoById: productoById } = require('../controllers/productosController');

// list 
router.get('/productos', list);
router.post('/create', create)
router.delete('/:productoId', remove)

router.param("productoId", productoById);
module.exports = router;