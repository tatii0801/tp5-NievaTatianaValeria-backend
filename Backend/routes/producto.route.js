//defino controlador para el manejo de CRUD
const productoCtrl = require('./../controllers/producto.controller');
//creamos el manejador de rutas
const express = require('express');

const router = express.Router();
//definimos las rutas para la gestion de producto
// creo un producto
router.post('/', productoCtrl.createProducto);
//trae los producto de la bd
router.get('/', productoCtrl.getProductos);
router.delete('/:id', productoCtrl.deleteProducto);
router.put('/:id', productoCtrl.editProducto);
router.get('/destacado', productoCtrl.getProductoDestacados);

//exportamos el modulo de rutas
module.exports = router;