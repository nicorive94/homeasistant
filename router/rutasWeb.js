const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.render("index", {titulo: "index"});
})

router.get('/interruptores', (req, res) =>{
    res.render("interruptores", {tituloInterruptores: "Interruptores"})
})

router.get('/sensores', (req, res) =>{
    res.render("sensores", {tituloSensores: "Sensores"})
})

module.exports = router;