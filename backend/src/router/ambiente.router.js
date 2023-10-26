import  {Router} from 'express';
import  {buscarAmbientePorId, listarAmbientes, registrarAmbiente }  from '../controllers/ambiente.controllers.js';
import  {validarToken} from '../controllers/autenticacion.controllers.js';

const  ambienteRouter= Router();

ambienteRouter.get('/listar/',listarAmbientes);
ambienteRouter.post('/registrar', validarToken, registrarAmbiente);
ambienteRouter.get('/buscar/:id', validarToken, buscarAmbientePorId);

export default ambienteRouter;