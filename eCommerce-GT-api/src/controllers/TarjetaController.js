const Tarjeta = require('../models/Tarjeta')

const getTarjetas = async (req, res) => {
    const DPI = req.query.DPI
    const tarjets = await Tarjeta.find({"usuario.DPI":Number(DPI)})
    res.json(tarjets)
}

const saveTarjeta = async (req, res)=> {
    const insertTarjeta = new Tarjeta({
        fecha_vencimiento: req.body.fecha_vencimiento,
        codigo_seguridad: req.body.codigo_seguridad,
        numero_tarjeta: req.body.numero_tarjeta,
        usuario: req.body.usuario,
        alias:req.body.alias
    });
    const newTarjeta = await insertTarjeta.save();
    res.json(newTarjeta)

}

module.exports = {
    getTarjetas:getTarjetas,
    saveTarjeta:saveTarjeta
}
