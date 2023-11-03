import  {Router} from 'express';
import  {validarToken} from '../controllers/autenticacion.controllers.js';

import  {actualizarMantenimiento,listarMantenimientos, registrarMantenimiento}  from '../controllers/mantenimiento.controllers.js';

const mantenimientoRouter= Router();

mantenimientoRouter.post('/registrar/',registrarMantenimiento);
mantenimientoRouter.get('/listar/',listarMantenimientos);
mantenimientoRouter.put('/actualizar/:id',validarToken,actualizarMantenimiento);


export default mantenimientoRouter;
