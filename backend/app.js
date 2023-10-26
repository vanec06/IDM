import express from 'express';
import body_parser from 'body-parser';
// import cors from 'cors'
import auRouter from './src/router/autenticacion.router.js';
import usuarioRouter from './src/router/usuariorouter.js';
import maquinaRouter from './src/router/maquina.router.js';
import mantenimientoRouter from './src/router/mantenimiento.router.js';
import ambienteRouter from './src/router/ambiente.router.js';
import areaRouter from './src/router/area.router.js';
const app = express();

// app.use(express.json());

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));

// app.use(cors());

app.set('views engine','ejs');
app.set('views','./views');

// este es para enlazar a el index.css
app.use(express.static('./public'));  


app.get('/document',(req,res)=> {
    res.render('index.ejs');
});

app.use(auRouter);
app.use('/usuario',usuarioRouter);
app.use('/maquina', maquinaRouter);
app.use('/mantenimiento', mantenimientoRouter);
app.use('/ambiente', ambienteRouter);
app.use('/area', areaRouter);

app.listen(4000,()=>{
    console.log("server in port 4000");
});