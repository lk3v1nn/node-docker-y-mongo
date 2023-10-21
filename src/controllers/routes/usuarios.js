const { Router } = require("express");
const dbusuarios = require("../../models/usuarios");
const jwt = require("jsonwebtoken");
const verificarToken = require("../verificaToken");
const validarDatosUsuario = require("../validarDatosUsuario");

const router = Router();

router.post("/api/login", async (req, res) => {
    // res.cookie('miCookie', 'Hola, mundo', { maxAge: 900000, httpOnly: true });
    const { email, clave } = req.body;
    try {
        const data = await dbusuarios.findOne({ email, clave });

        if (!data) {
            return res
                .status(400)
                .json({ Error: "Correo o contraseña no son correctos" });
        }

        const token = jwt.sign({ id: data._id }, "palabrasecreta", {
            expiresIn: 60 * 60 * 24 * 7,
        });

        res.cookie("myToken", token, {
            httpOnly: false,
            secure: false,
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: "/",
        });
        res.send("Sesion iniciada correctamente.");
    } catch (error) {
        console.log(error);
        res.status(500).json({ Error: "su solicitud no pudo se procesada" });
    }
});

router.get("/set-cookie", (req, res) => {
    // Establece una cookie llamada 'miCookie' con el valor 'Hola, mundo'
    res.cookie("miCookie", "Hola, mundo", { maxAge: 900000, httpOnly: true });
    res.send("Cookie establecida correctamente wuuuuuuuuuuuu.");
});

//RUTA DE REGISTRO DE USUARIOS
router.post("/api/registro", validarDatosUsuario, async (req, res) => {
    const datos = req.body;

    try {
        const nuevoUsuario = new dbusuarios({
            nombre: datos.nombre,
            email: datos.email,
            telefono: datos.telefono,
            clave: datos.clave,
        });
        nuevoUsuario.save();
        res.status(200).json({ mensaje: "Usuario creado exitosamente" });
    } catch {
        res.status(500).json({ Error: "No se pudo procesar su solicitud" });
    }
});

router.post(
    "/api/perfil",
    verificarToken,
    validarDatosUsuario,
    async (req, res) => {
        const data = req.body;
        try {
            await dbusuarios.updateOne({ _id: req.tokenId }, data);
            res.status(200).json({ Mensaje: "Datos actualizados con exito" });
        } catch {}
    }
);

module.exports = router;
