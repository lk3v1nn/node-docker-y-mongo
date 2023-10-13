const validadores = require('../validadores')

async function validarDatosUsuario(req, res, next){
    const datos = req.body;
    //VALIDADORES DE DATOS
    if (!validadores.validarFormatoDeCorreo(datos.email)) {
        return res.status(400).json({ Error: "Formato del correo no valido" });
    }
    if (await validadores.validaCorreoExistente(datos.email)) {
        return res.status(400).json({ Error: "El Correo electronico ingresado ya existe" });
    }
    if (!validadores.validarClaveSegura(datos.clave)) {
        return res.status(400).json({
            Error: "La clave debe contener 8 caracteres, mayúsculas, minúsculas, números y caracteres especiales",
        });
    }
    if (!validadores.validaCamposVacios2(datos)) {
        return res.status(400).json({ Error: "No se permiten campos vacios" });
    }
    if(datos.nombre==undefined || datos.email==undefined || datos.telefono == undefined || datos.clave == undefined){
        return res.status(400).json({Error: "Datos requeridos incompletos"})
    }

    next();
}

module.exports = validarDatosUsuario