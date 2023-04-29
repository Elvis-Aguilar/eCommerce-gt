const Peticion = require('../models/Peticiones')

/**
 * guarda un nuevo Peticion
 * @param {*} req 
 * @param {*} res 
 */
const savePeticion = async (req, res)=> {
    const insertPeticion = new Peticion({
        estado: req.body.estado,
        fecha_venta: req.body.fecha_venta,
        fecha_entrega: req.body.fecha_entrega,
        productos: req.body.productos,
        comprador: req.body.comprador
    });
    const newPeticion = await insertPeticion.save();
    res.json(newPeticion)

}

const getPeticionEnCuros = async (req, res)=> {
    const DPI = req.query.DPI
    const peticiones = await Peticion.find({estado:"En Curso","comprador.DPI":Number(DPI)});
    res.json(peticiones)
}

const getPeticionEnCurosAll = async (req, res)=> {
    const peticiones = await Peticion.find({estado:"En Curso"});
    res.json(peticiones)
}

const getPeticionEntregado = async (req, res)=> {
    const DPI = req.query.DPI
    const peticiones = await Peticion.find({estado:"Entregado","comprador.DPI":Number(DPI)});
    res.json(peticiones) 
}

const setEstadoEntregado = async (req, res )=> {
    const peticonUpadte = await Peticion.updateMany({_id:req.body._id},{$set: {estado:'Entregado'}})
    res.json(req.body)
}

const getClienteMasPedidos = async (req, res)=> {
    const fechaI = new Date(req.query.fechaI);
    const fechaF = new Date(req.query.fechaF);
    const peticiones = await Peticion.aggregate([{$match: {fecha_venta: {$gte: fechaI,$lt: fechaF}}},
    {$group: {_id: "$comprador.DPI",comprador: { $first: "$comprador" },estado: { $sum: 1 }}},
    {$sort: {estado: -1}},{$limit: 10}]);
    res.json(peticiones)
}


module.exports = {
    savePeticion:savePeticion,
    getPeticionEnCuros:getPeticionEnCuros,
    getPeticionEntregado:getPeticionEntregado,
    getPeticionEnCurosAll:getPeticionEnCurosAll,
    setEstadoEntregado:setEstadoEntregado,
    getClienteMasPedidos:getClienteMasPedidos
}