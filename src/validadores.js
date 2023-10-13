const dbUsuarios = require("./models/usuarios");

async function validaCorreoExistente(correo) {
    const usuarioExiste = await dbUsuarios.findOne({
        email: correo,
    });
    if (!usuarioExiste) {
        return false;
    }
    return true;
}

function validarFormatoDeCorreo(email) {
    let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
}

function validarClaveSegura(clave) {
    let tieneLongitudValida = clave.length >= 8;
    let tieneMayusculas = /[A-Z]/.test(clave);
    let tieneMinusculas = /[a-z]/.test(clave);
    let tieneNumeros = /\d/.test(clave);
    let tieneCaracteresEspeciales = /[\W_]/.test(clave);

    return (
        tieneLongitudValida &&
        tieneMayusculas &&
        tieneMinusculas &&
        tieneNumeros &&
        tieneCaracteresEspeciales
    );
}

function validarClaveConClave(clave, clave2) {
    if (clave === clave2) {
        return true;
    }
    return false;
}

function validaCamposVacios2(objeto) {
    for (let atributo in objeto) {
        if (
            objeto[atributo] == null ||
            objeto[atributo] == undefined ||
            objeto[atributo] == ""
        ) {
            return false;
        }
    }
    return true;
}

async function validarCorreoDuplicado (correo, id){
    const encontrado = await dbUsuarios.findOne({CorreoElectronico : correo, _id : {$ne : id}});
    if (!encontrado){
        return false
    }
    return true
}

const validadores = {
    validarFormatoDeCorreo,
    validarClaveSegura,
    validarClaveConClave,
    validaCamposVacios2,
    validaCorreoExistente,
    validarCorreoDuplicado
};

module.exports = validadores;