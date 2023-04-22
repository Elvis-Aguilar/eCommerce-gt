const express = require ('express')
const mongoose = require('mongoose')
const usersRoutes = require('./routes/users.routes')
const categoriasRoutes = require('./routes/categorias.routes')
const productosRoutes = require('./routes/productos.routes')
const ventasRoutes = require('./routes/ventarProducto.routes')
const gananciaRoutes = require('./routes/ganancias.routes')
const peticionRoutes = require('./routes/peticiones.routes')
const controllerProducto = require('./controllers/ProductoController')




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
        //controllerProducto.descontarProducto(3235494450901,1,"Laptop Lenovo 15´ 15ITL5 Core i3 de 8GB Ram 256GB SSD")
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