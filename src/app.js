const Express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const DB = require("./DB/mongodb");
const usuariosRouter = require("./controllers/routes/usuarios");
const reservacionesRouter = require("./controllers/routes/reservasiones");
const app = Express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Es lo mismo que la configuracion de CORS de abajo
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-access-token");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         credentials: true,
//     })
// );

app.use(cookieParser());
app.use(Express.json());
app.use(usuariosRouter);
app.use(reservacionesRouter);

app.get("/", (req, res) => {
    console.log("cookies: ", req.cookies);
    res.json({ mensaje: "hola viendo cookies" });
});

const puerto = 5000;

app.listen(puerto, () => {
    console.log(`Servidor iniciado en el puerto ${puerto}`);
});
