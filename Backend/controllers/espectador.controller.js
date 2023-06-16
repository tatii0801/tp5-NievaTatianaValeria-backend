const Espectador = require('../models/espectador');
const espectadorCtrl = {}

//crea un agente
espectadorCtrl.createEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Espectador guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

//devuelve todos los Espectadores
espectadorCtrl.getEspectadores = async (req, res) => {
    //populate es poblar manda todo los datos de responsable
    var espectadores = await Espectador.find();
    res.json(espectadores);
}

espectadorCtrl.getEspectador = async (req, res) => {
    const espectador = await Espectador.findById(req.params.id);
    res.json(espectador);
}

//si o si exportar el modulo
module.exports = espectadorCtrl;