import { check } from 'express-validator';

export const validarorUser = [
                            check('correo','el correo es incorrecto!!').isEmail(),
                            check('nombres','el nombre es requerido y maximo 50 caracteres').isLength({max:50}).notEmpty(),
                            check('rol','rol incorrecto!!').isIn(['administrador','usuario'])
                            ];
                        



                        
                            
