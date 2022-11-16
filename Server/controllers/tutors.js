//lleva todo el codigo de los eventos
const { response } = require('express');

const getTutor = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'obteniendo eventos'
    })
};

const crearTutor = (req, res = response) => {

    console.log( req.body );
    
    res.json({
        ok: true,
        msg: 'creando eventos'
    })
}

const actualizarTutor = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizando eventos'
    })
}

const eliminarTutor = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminando eventos'
    })
}

module.exports = {
    getTutor,
    crearTutor,
    actualizarTutor,
    eliminarTutor
}