const express = require('express');
const router = express.Router();

const Paciente = require('../models/paciente');


router.get('/prueba', async (req, res) =>{

    try {
        const arrayPacientesDB = await Paciente.find()
        console.log(arrayPacientesDB)
    } catch (error) {
        console.log(error)
    }


    res.render("prueba", {pacientes: [
        {numero:"1", nombre: "Nicolás", apellido:"Rivero", fecha:"09/02/1994"},
        {numero:"2", nombre: "Sofia", apellido:"Correa", fecha: "19/01/1994"}
    ]})
})

module.export = router;