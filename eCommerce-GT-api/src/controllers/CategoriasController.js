const Cateoria = require('../models/Categoria')

/**
 * funcion obtiene las categorias
 * @param {*} req 
 * @param {*} res 
 */
const getCategorias = async (req, res) => {
    const categorias = await Cateoria.find()
    res.json(categorias)
}

const getImgCategoria = async (req, res) => {
    res.set('Content-Type', 'image/jpg');
    const url = req.query.url
    res.sendFile(__dirname+url);
}



module.exports = {
    getCategorias:getCategorias,
    getImgCategoria:getImgCategoria
}