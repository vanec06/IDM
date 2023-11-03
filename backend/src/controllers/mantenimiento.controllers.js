import { pool } from '../database/conexion.js';


export const registrarMantenimiento = async (req, res) => {
  try {
      let { fecha_mantenimiento,hora_mantenimiento, descripcion, tipo_mantenimiento,id_maquina,id_usuario } = req.body;
      let sql = `insert into mantenimiento(fecha_mantenimiento,hora_mantenimiento, descripcion, tipo_mantenimiento,id_maquina,id_usuario)values ('${fecha_mantenimiento}','${hora_mantenimiento}','${descripcion}','${tipo_mantenimiento}','${id_maquina}','${id_usuario}')`;
      const [rows] = await pool.query(sql);

      if (rows.affectedRows > 0) {
          res.status(200).json({ "status": 200, "mesaje": "se registro con exito " });
      } else {
          res.status(401).json({ "status": 401, "mesaje": "no se registro" });
      }

  } catch (e) {
      res.status(500).json({ "status": 500, "messaje": "error en el servidor: " + e });
  }
};

export const listarMantenimientos = async (req,res) => {
  try {
      const [result] = await pool.query('select * from mantenimiento');
      res.status(200).json(result);

        } catch (e) {
      res.status(500).json({ massage: 'Error en el controlador mantenimiento:' +e });
    }
};

export const actualizarMantenimiento = async (req, res) => {
  try{ 
      let id = req.params.id;
      let{fecha_mantenimiento,hora_mantenimiento,descripcion,tipo_mantenimiento,id_maquina,id_usuario} =req.body;

      let sql = `UPDATE mantenimiento SET fecha_mantenimiento='${fecha_mantenimiento}',hora_mantenimiento='${hora_mantenimiento}', descripcion='${descripcion}', tipo_mantenimiento='${tipo_mantenimiento}', id_maquina= '${id_maquina}', id_usuario='${id_usuario}'
      WHERE id_mantenimiento= ${id}`;

      const [rows] = await pool.query(sql);
      
      if (rows.affectedRows > 0)
          return res.status(200).json({ 
              'status':"200 OK",
              'message':'Se actualizo con exito la maquina',
          });
      else
          return res.status(404).json({ 
              'status':"404 Not Found",
              'message':'No se actualizo la maquina' 
          });
  } catch (err) {
      res.status(500).json({
          'status':"500 Internal Server Error",
          'message':'Error en el servidor' + err
      });
  }
};

