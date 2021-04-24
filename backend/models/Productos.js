const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const productosSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true, 
      requrie: true,
      maxlength: 32,
    },
    price: {
      type: Number,
      trim: true,
      require: true,
      maxlength: 32,
    },
    salePrice:{
      type: Number,
      trim: true,
      require: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: 'Category',
      require: true
    },
    quantity: {
      type: Number,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("Productos", productosSchema);