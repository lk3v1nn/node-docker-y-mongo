const Express = require ('express')
const DB = require('./DB/mongodb')
const usuariosRouter = require('./controllers/routes/usuarios')
const reservacionesRouter = require('./controllers/routes/reservasiones')
const app = Express();  

app.use(Express.json());
app.use(usuariosRouter);
app.use(reservacionesRouter);

app.listen('3000', () => {
    console.log('Servidor iniciado en el puerto 3000');
})