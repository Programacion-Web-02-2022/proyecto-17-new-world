 const { Router } = require('express');
 const { check } = require('express-validator');
 const { validation } = require('../middleware/Validation');
 const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

 const router = Router();
 
 router.post('/newuser', 
 [ 
    check('name','el nombre es obligatorio').not().isEmpty(),
    check('email','el correo es obligatorio').isEmail(),
    check('password','la contraseña es obligatorio').isLength({ min: 6 }),
    validation
] ,
 crearUsuario ); 

 router.post('/login',
 [
    check('email','Debe ser una direccion de correo valida').isEmail(),
    check('password','la contraseña es obligatorio').isLength({ min: 6 }),
    validation
 ], loginUsuario ); 

 router.get('/renew', revalidarToken ); 


module.exports = router;