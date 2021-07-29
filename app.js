
const express = require('express');
const app = express();

//coneccion a base de datos
const mongoose = require('mongoose');

//
require('dotenv').config()
module.exports = async () =>{
    await mongoose.connect(process.env.DB_URL,
        {useNewUrlParser: true,
        useUnifiedTopology: true}
    )
        .then(() => console.log("base de datos conectada"))
        .catch(e => console.log(e))
}

const port = process.env.PORT || 3000;




// const user = "nicorive";
// const password ="lasheras88";
// const uri = `mongodb+srv://${user}:${password}@cluster0.f0gix.mongodb.net/sofi?retryWrites=true&w=majority`;

// const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.f0gix.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;




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

