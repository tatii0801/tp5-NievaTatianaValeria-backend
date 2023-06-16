//defino controlador para el manejo de CRUD
const ticketCtrl = require('./../controllers/ticket.controller');
//creamos el manejador de rutas
const express = require('express');

const router = express.Router();
//definimos las rutas para la gestion de espectador
// creo un espectador
router.post('/', ticketCtrl.createTicket);
//trae los espectador de la bd
router.get('/', ticketCtrl.getTickets);
router.get('/:id', ticketCtrl.getTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/:id', ticketCtrl.editTicket);
router.get('/filtro/:categoria', ticketCtrl.getEspectadorXcategoria);

//exportamos el modulo de rutas
module.exports = router;