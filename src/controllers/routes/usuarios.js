const {Router} = require('express');
const jwt = require('jsonwebtoken');
const dbusuarios = require('../../models/reservas')

const router = Router();

router.post("/api/login", async (req, res) =>{
    const {email, clave} = req.body;
    try{
        const data = await dbusuarios.findOne({email, clave});
        if (!data){ return res.send({'Error':'Correo o contraseña no son correctos'})}
        
        res.send(data);
    }
    catch{
        res.json({"Error" : "su solicitud no pudo se procesada"});
    }
    
});

module.exports = router;