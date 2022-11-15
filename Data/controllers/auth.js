const { response } = require('express');
const Usuario = require('../models/User')

const crearUsuario = async (req, res = response) => {

    //const { name, email, password } = req.body;

    try {

        const usuario = new Usuario( req.body );
        await usuario.save();
    
        res.status(201).json({
            ok: true,
            msg: 'regstro',
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Contactarse con el administrador del programa'
        })
    }

};


const loginUsuario = (req, res= response ) => {

    const { email, password } = req.body;

    res.status(200).json({
        msg: 'logindeuser',
        ok:true,
        email,
        password
    })
};

const revalidarToken = (req, res= response ) => {


    res.json({
        msg:'renew'
    })

};



module.exports = { 
    crearUsuario,
    loginUsuario,
    revalidarToken
}

//contra atlas
//aE0GO5LWkC2ICbDG