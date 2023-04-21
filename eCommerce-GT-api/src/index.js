const express = require ('express')
const mongoose = require('mongoose')
const usersRoutes = require('./routes/users.routes')
const categoriasRoutes = require('./routes/categorias.routes')
const productosRoutes = require('./routes/productos.routes')
const ventasRoutes = require('./routes/ventarProducto.routes')
const gananciaRoutes = require('./routes/ganancias.routes')
const peticionRoutes = require('./routes/peticiones.routes')




const cors = require('cors');

const app = express()

app.use(express.json())

// Configuración del CORS
app.use(cors());


async function start(){
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/ecommerce_gt',{
            useNewUrlParser:true,
            useUnifiedTopology: true,
            family: 4
        });
        console.log('conectado a la base de datos: ', db.connection.name)
    } catch (error) {
        console.log(error)
    }
}

start()

app.use('/api/users', usersRoutes)

app.use('/api/categorias', categoriasRoutes)

app.use('/api/productos',productosRoutes)

app.use('/api/ventas', ventasRoutes)

app.use('/api/ganancias', gananciaRoutes)

app.use('/api/peticiones', peticionRoutes)



app.listen(3000)

console.log('servidor htpp en el puerto 3000')