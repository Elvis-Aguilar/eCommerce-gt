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

const getClienteMasGanancias = async (req, res)=> {
    const fechaI = new Date(req.query.fechaI);
    const fechaF = new Date(req.query.fechaF);
    const ganancia = await Ganancia.aggregate([{$match: {fecha: {$gte: fechaI,$lt: fechaF}}},
    {$group: {_id: "$vendedor.DPI",vendedor: { $first: "$vendedor" },ganancia_empresa: { $sum: "$ganancia_empresa" },ganancia_vendedor: { $sum: "$ganancia_vendedor" },cantidad: { $sum: 1 }}},
    {$sort: {cantidad: -1}},{$sort: {ganancia_empresa: -1}},{$limit: 5}])
    res.json(ganancia)
}

module.exports = {
    saveGanancia:saveGanancia,
    getClienteMasGanancias:getClienteMasGanancias
}