import  {Router} from 'express';
import  {actualizarArea, buscarAreaPorId, listarArea, registrarArea }  from '../controllers/area.controllers.js';
import  {validarToken} from '../controllers/autenticacion.controllers.js';

const  areaRouter= Router();

areaRouter.get('/listar/',listarArea);
areaRouter.post('/registrar', validarToken, registrarArea);
areaRouter.get('/buscar/:id', validarToken, buscarAreaPorId);
areaRouter.put('/actualizar/:id',validarToken,actualizarArea);

export default areaRouter;