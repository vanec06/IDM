import  {Router} from 'express';
import  { registrarUsuario, buscarusuarios, listarusuarios,eliminarUsuario,actualizarUsuario,cambiarEstadoUsuario }  from '../controllers/usuario.controllers.js';
import  {validarToken} from '../controllers/autenticacion.controllers.js';


const usuarioRouter = Router();

usuarioRouter.post('/registrar', validarToken, registrarUsuario);
usuarioRouter.get('/buscar/:id',buscarusuarios);
usuarioRouter.get('/listar',listarusuarios);
usuarioRouter.put('/actualizar/:id',validarToken,actualizarUsuario);
usuarioRouter.delete('/eliminar/:id',validarToken,eliminarUsuario);
usuarioRouter.put('/cambiarestado',validarToken,cambiarEstadoUsuario)

export default usuarioRouter;
