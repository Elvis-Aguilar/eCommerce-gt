const Ganancia = require('../models/Ganancias')

/**
 * guarda un nuevo Ganancia
 * @param {*} req 
 * @param {*} res 
 */
const saveGanancia = async (req, res)=> {
    const insertGanancia = new Ganancia({
        fecha: req.body.fecha,
        ganancia_empresa: req.body.ganancia_empresa,
        ganancia_vendedor: req.body.ganancia_vendedor,
        vendedor: req.body.vendedor
    });
    const newGanancia = await insertGanancia.save();
    res.json(newGanancia)
}

module.exports = {
    saveGanancia:saveGanancia
}