
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views',__dirname + '/vistas')

app.use(express.static(__dirname + "/public"))


app.use("/", require('./router/rutasWeb'))

app.use((req,res,next) =>{
    res.status(404).render("404", {titulo: "titulo 404", descripcion:"descripción 404"})
})

app.listen(port, () =>{
    console.log(`Servidor en el puerto ${port} a su servicio`)
})

