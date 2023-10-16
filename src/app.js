const Express = require ('express')
const DB = require('./DB/mongodb')
const usuariosRouter = require('./controllers/routes/usuarios')
const reservacionesRouter = require('./controllers/routes/reservasiones')
const app = Express();  

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
  next();
});

app.use(Express.json());
app.use(usuariosRouter);
app.use(reservacionesRouter);

app.get('/', (req, res) =>{
    res.json({"mensaje": "hola"})
})

app.listen('3000', () => {
    console.log('Servidor iniciado en el puerto 4000');
})