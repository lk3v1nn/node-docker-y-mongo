const Express = require ('express')
const DB = require('./DB/mongodb')
const router = require('./controllers/routes/usuarios')
const app = Express();  

app.use(Express.json());
app.use(router);

app.get('/', (req, res) =>{
    res.send('hola')
});


app.listen('3000', () => {
    console.log('Servidor iniciado en el puerto 3000');
})