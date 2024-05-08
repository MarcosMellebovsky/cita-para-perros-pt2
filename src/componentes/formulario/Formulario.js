import './Formulario.css';
import { useState } from 'react';

function Formulario({ agregarCita }) {
    const [nuevaCita, setNuevaCita] = useState({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const citaNueva = (e) => {
        setNuevaCita({
            ...nuevaCita,
            [e.target.name]: e.target.value
        });
    }

    const citaFin = (e) => {
        e.preventDefault();
        const confirmacion = window.confirm("¿Estás seguro de hacer esta consulta?");
        if (confirmacion) {
            agregarCita(nuevaCita);
            setNuevaCita({
                mascota: '',
                dueño: '',
                fecha: '',
                hora: '',
                sintomas: ''
            });
        }
    }

    return (
        <div>
            <form className="formulario" onSubmit={citaFin}>
                
            <label>Nombre Mascota</label>
            <input className='input-class' type="text" name="mascota" value={nuevaCita.mascota} onChange={citaNueva} placeholder="nombre de la mascota" required/>
    
            <label>Nombre Dueño</label>
            <input className='input-class' id="dueño" type="text" name="dueño" placeholder="Nombre dueño de la mascota" onChange={citaNueva} required/>
    
            <label>Fecha</label>
            <input className='input-class' id="fecha" type="date" name="fecha" onChange={citaNueva} required/>
    
            <label>Hora</label>
            <input className='input-class' id="hora" name="hora" type="time" onChange={citaNueva} required/>
    
            <label>Síntomas</label>
            <textarea id="sintomas" name="sintomas" onChange={citaNueva} required></textarea>
            <div className='div-btn'>
                <button className='btn-form' type="submit">AGREGAR CITA</button>
            </div>
                
            </form>
        </div>
    );
}

export default Formulario;