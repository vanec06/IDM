import  {Router} from 'express';
import  {buscarAreaPorId, listarArea, registrarArea }  from '../controllers/area.controllers.js';
import  {validarToken} from '../controllers/autenticacion.controllers.js';

const  areaRouter= Router();

areaRouter.get('/listar/',listarArea);
areaRouter.post('/registrar', validarToken, registrarArea);
areaRouter.get('/buscar/:id', validarToken, buscarAreaPorId);

export default areaRouter;