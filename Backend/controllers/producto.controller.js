const Producto = require('../models/producto');
const productoCtrl = {}

productoCtrl.createProducto = async (req, res) => {
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Producto guardado.'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
            
        })
    }
}

productoCtrl.getProductos = async (req, res) => {
    var productos = await Producto.find();
    res.json(productos);
}

productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Producto Borrado'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

productoCtrl.editProducto = async (req, res) => {
    const editProduc = new Producto(req.body);
    try {
        await Producto.updateOne({ _id: req.body._id }, editProduc);
        res.json({
            'status': '1',
            'msg': 'Producto Editado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

productoCtrl.getProductoDestacados = async (req, res) => {
    var criteria = { 'destacado': true };
    var productos = await Producto.find(criteria);
    res.json(productos);
}
//si o si exportar el modulo
module.exports = productoCtrl;