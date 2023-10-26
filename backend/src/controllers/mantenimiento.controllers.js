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

