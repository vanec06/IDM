import  {Router} from 'express';
import  {actualizarAmbiente, buscarAmbientePorId, listarAmbientes, registrarAmbiente }  from '../controllers/ambiente.controllers.js';
import  {validarToken} from '../controllers/autenticacion.controllers.js';

const  ambienteRouter= Router();

ambienteRouter.get('/listar/',listarAmbientes);
ambienteRouter.post('/registrar', validarToken, registrarAmbiente);
ambienteRouter.get('/buscar/:id', validarToken, buscarAmbientePorId);
ambienteRouter.put('/actualizar/:id',validarToken,actualizarAmbiente);
export default ambienteRouter;