import  {Router} from 'express';

import  {listarMantenimientos, registrarMantenimiento}  from '../controllers/mantenimiento.controllers.js';

const mantenimientoRouter= Router();

mantenimientoRouter.post('/registrar/',registrarMantenimiento);
mantenimientoRouter.get('/listar/',listarMantenimientos);




export default mantenimientoRouter;
