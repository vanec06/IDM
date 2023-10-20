import  {Router} from 'express';
import  { cargarImagen,registrarMaquina,buscarMaquina,listarMaquinas, actualizarMaquina, darDeBajaMaquina  }  from '../controllers/maquina.controllers.js';
import  {validarToken} from '../controllers/autenticacion.controllers.js';

const maquinaRouter= Router();

maquinaRouter.post('/registrar',validarToken,cargarImagen, registrarMaquina);
maquinaRouter.get('/buscar/:id',buscarMaquina);
maquinaRouter.get('/listar/', listarMaquinas);
maquinaRouter.put('/debaja/:id',validarToken,darDeBajaMaquina);
maquinaRouter.put('/actualizar/:id',validarToken, cargarImagen,actualizarMaquina);



export default maquinaRouter;