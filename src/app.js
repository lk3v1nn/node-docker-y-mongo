const Express = require ('express')

const app = Express();  

app.use(Express.json());

app.get('/', (req, res) =>{
    res.json('hola')
});


app.listen('3000', () => {
    console.log('Servidor iniciado en el puerto 3000');
})