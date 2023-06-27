//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');

const router = express.Router();
//definimos las rutas para la gestion de espectador
// creo un espectador
router.post('/', transaccionCtrl.createTransaccion);
//trae los espectador de la bd
router.get('/', transaccionCtrl.getTransacciones);
router.get('/filtro/:email', transaccionCtrl.getTransaccionesFiltroEmail);
router.get('/filtro/:monedaOrigen/:monedaDestino', transaccionCtrl.getTransaccionesFiltroMonedas);
///filtro/origen/:monedaOrigen/destino/:monedaDestino'
//el de arriba es una ruta de ejemplo pero no siempre util por si tenemos varios parametros 

//cuando se hacer un filtro sin determinar el nombre tengo que llamarlo al momento de hacer el controllers
//exportamos el modulo de rutas
module.exports = router;