const { Router } = require("express");
const verificaToken = require('../verificaToken');
const dbReservaciones = require('../../models/reservaciones')

const router = Router()

router.get('/api/reservaciones', verificaToken, async (req, res) => {
    try{
        const data = await dbReservaciones.find({usuario: req.tokenId})
        if(data.length == 0){return res.status(200).json({"mensaje": "No tiene reservas"})}
        res.json(data)
    }
    catch{
        res.status(500).json({"Error" : "su solicitud no pudo se procesada"})
    }
})

router.post('/api/reservaciones', verificaToken, async (req, res) => {

})


module.exports = router;