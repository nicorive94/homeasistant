const express = require('express');
const router = express.Router();
const Paciente = require('../models/paciente');


router.get('/', (req, res)=>{
    res.render("index", {titulo: "index"});
})

router.get('/interruptores', (req, res) =>{
    res.render("interruptores", {tituloInterruptores: "Interruptores"})
})

router.get('/sensores', (req, res) =>{
    res.render("sensores", {tituloSensores: "Sensores"})
})

router.get('/prueba', async (req, res) =>{

    try {
        const arrayPacientesDB = await Paciente.find()
        console.log(arrayPacientesDB)
        res.render("prueba", {array: arrayPacientesDB})
    } catch (error) {
        console.log(error)
    }
})


// const Paciente = require('../models/paciente');




module.exports = router;