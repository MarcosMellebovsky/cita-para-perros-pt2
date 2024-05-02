import './turno.css';

function Turno({ citas, eliminarCita }) {
    return (
        <div className="padre-turnos">
            {citas.map((cita, index) => (
                <div key={index} className='cartita'>
                    <p><span className='span-p'>Mascota:</span> {cita.mascota}</p>
                    <p><span className='span-p'>Dueño:</span> {cita.dueño}</p>
                    <p><span className='span-p'>Fecha:</span> {cita.fecha}</p>
                    <p><span className='span-p'>Hora:</span> {cita.hora}</p>
                    <p><span className='span-p'>Síntomas:</span> {cita.sintomas}</p>
                    <button className='btn-turno' onClick={() => eliminarCita(index)}>Eliminar × </button>
                </div>
            ))}
        </div>
    );
}

export default Turno;

