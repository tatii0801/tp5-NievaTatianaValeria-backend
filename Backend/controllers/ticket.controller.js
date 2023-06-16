const Ticket = require('../models/ticket');
const ticketCtrl = {}

//crea un ticket
ticketCtrl.createTicket = async (req, res) => {
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Ticket guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

//devuelve todos los tickets
ticketCtrl.getTickets = async (req, res) => {
    //populate es poblar manda todo los datos de responsable
    var tickets = await Ticket.find().populate("espectador");
    res.json(tickets);
}

ticketCtrl.getTicket = async (req, res) => {
    const ticket = await Ticket.findById(req.params.id).populate("espectador");
    res.json(ticket);
}

ticketCtrl.editTicket = async (req, res) => {
    const editTicke = new Ticket(req.body);
    try {
        await Ticket.updateOne({ _id: req.body._id }, editTicke);
        res.json({
            'status': '1',
            'msg': 'Ticket updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Ticket removed'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

ticketCtrl.getEspectadorXcategoria = async (req, res) => {
    try {
        const categoria = req.params.categoria;
        if (categoria != 'l' && categoria != 'e' && categoria != 'local' && categoria!= 'extranjero')
            throw new Error('Categoria de Espectador invalida')

        const tickets = await Ticket.find({ categoriaEspectador: categoria }).populate("espectador");
        res.json(tickets);

    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: '0',
            msg: 'Error al filtrar Espectador'
        })
    }
}
//si o si exportar el modulo
module.exports = ticketCtrl;