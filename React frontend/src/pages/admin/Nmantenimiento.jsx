import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from '../../components/Api';
const Nmantenimiento = ({ onNotify }) => {
    const [id_maquina, setIdMaquina] = useState('');
    const [fecha, setFecha] = useState('');
    const [comentarios, setComentarios] = useState('');
    const [tipo_mantenimiento, setTipoMantenimiento] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');
  
    const handleNotificarMantenimiento = async () => {
      try {
        const response = await Api.post('/Nmantenimiento', {
          id_maquina: id_maquina,
          fecha: fecha,
          comentarios: comentarios,
          tipo_mantenimiento: tipo_mantenimiento,
        });
  
        setMensaje(response.data.mensaje);
        setError('');
  
        toast.success('Mantenimiento notificado exitosamente!');
  
        if (onNotify && typeof onNotify === 'function') {
          onNotify({
            id: response.data.id,
            message: 'Nuevo mantenimiento registrado',
            timestamp: new Date().toLocaleString(),
          });
        }
      } catch (error) {
        setMensaje('');
        setError('Error al notificar mantenimiento');
        console.error('Error al notificar mantenimiento', error);
      }
    };


    return (
        <div className="text-black m-3 p-3">
            <h1 className="text-center font-bold text-3xl">Notificar Mantenimiento</h1>
            {mensaje && <p className="text-green-500">{mensaje}</p>}
            {error && <p className="text-red-500">{error}</p>}
            
            <div className="flex flex-col w-1/2 mx-auto mt-5">
                <label htmlFor="idMaquina" className="mb-2 font-bold">
                    ID de la Máquina:
                </label>
                <input
                    type="text"
                    id="idMaquina"
                    className="border border-gray-300 px-3 py-2 mb-3"
                    value={id_maquina}
                    onChange={(e) => setIdMaquina(e.target.value)}
                />

                <label htmlFor="fecha" className="mb-2 font-bold">
                    Fecha:
                </label>
                <input
                    type="date"
                    id="fecha"
                    className="border border-gray-300 px-3 py-2 mb-3"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />

                <label htmlFor="comentarios" className="mb-2 font-bold">
                    Comentarios:
                </label>
                <textarea
                    id="comentarios"
                    className="border border-gray-300 px-3 py-2 mb-3"
                    value={comentarios}
                    onChange={(e) => setComentarios(e.target.value)}
                />

                <label htmlFor="tipoMantenimiento" className="mb-2 font-bold">
                    Tipo de Mantenimiento:
                </label>
                <select
                    id="tipoMantenimiento"
                    className="border border-gray-300 px-3 py-2 mb-3"
                    value={tipo_mantenimiento}
                    onChange={(e) => setTipoMantenimiento(e.target.value)}
                >
                    <option value="">Seleccione...</option>
                    <option value="preventivo">Preventivo</option>
                    <option value="correctivo">Correctivo</option>
                </select>

                <button
                    onClick={handleNotificarMantenimiento}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Notificar Mantenimiento
                </button>
            </div>

            {/* Agrega el componente ToastContainer al final del componente */}
            <ToastContainer />
        </div>
    );
};

export default Nmantenimiento;