

const productos = require('../models/Productos');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : 'asc'
  let sortBy = req.query.sortBy ? req.query.sortBy : 'name'

  productos.find()
    .populate('category')
    .sort([[sortBy, order]])
    .exec((err, productos) => {
      if (err) {
        return res.status(400).json({
          error: "productos not found"
        })
      }
      res.json(productos);
    })
}

exports.create = (req, res) => {
  const producto = new Category(req.body)
  producto.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({data});
  })
}

exports.remove = (req, res) => {
  let productos = req.productos
  productos.remove((err, deletedProductos) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({
      message: "Producto was deleted succesfully"
    })
  })
}

exports.productoById = (req, res, next, id) => {
  productos.findById(id)
    .populate("category")
    .exec((err, productos) => {
      if (err || !productos) {
        return res.status(400).json({
          error: "Producto not found"
        });
      }
      req.productos = productos;
      next();
    })
}
