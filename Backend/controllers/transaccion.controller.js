const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

//devuelve todos los tickets
transaccionCtrl.getTransacciones = async (req, res) => {
    //populate es poblar manda todo los datos de responsable
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

//crea un ticket
transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Transaccion guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

transaccionCtrl.getTransaccionesFiltroEmail = async (req, res) => {
    try {
        const email = req.params.email;

        const transacciones = await Transaccion.find({ 'emailCliente': email })
        res.json(transacciones)

    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: '0',
            msg: 'Error al filtrar transacciones por Email',

        })
    }
}

transaccionCtrl.getTransaccionesFiltroMonedas = async (req, res) => {
    try {
        const monedaOrigen = req.params.monedaOrigen,
        monedaDestino = req.params.monedaDestino;

        var transacciones = await Transaccion.find({ monedaOrigen: monedaOrigen});
        transacciones = await Transaccion.find({ monedaDestino: monedaDestino })
        res.json(transacciones);

    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: '0',
            msg: 'Error al filtrar transacciones por Monedas',

        })
    }
}
//si o si exportar el modulo
module.exports = transaccionCtrl;