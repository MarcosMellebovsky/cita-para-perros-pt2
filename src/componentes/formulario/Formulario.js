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

        if (!nuevaCita.mascota || !nuevaCita.dueño || !nuevaCita.fecha || !nuevaCita.hora || !nuevaCita.sintomas) {
            alert('Por favor completa todos los campos.');
            return;
        }

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
            <input className='input-class' type="text" name="mascota" value={nuevaCita.mascota} onChange={citaNueva} placeholder="nombre de la mascota"/>
    
            <label>Nombre Dueño</label>
            <input className='input-class' id="dueño" type="text" name="dueño" value={nuevaCita.dueño}  placeholder="Nombre dueño de la mascota" onChange={citaNueva}/>
    
            <label>Fecha</label>
            <input className='input-class' id="fecha" type="date" name="fecha"value={nuevaCita.fecha} onChange={citaNueva}/>
    
            <label>Hora</label>
            <input className='input-class' id="hora" name="hora" type="time" value={nuevaCita.hora}onChange={citaNueva}/>
    
            <label>Síntomas</label>
            <textarea id="sintomas" name="sintomas"value={nuevaCita.sintomas} onChange={citaNueva}></textarea>
            <div className='div-btn'>
                <button className='btn-form' type="submit">AGREGAR CITA</button>
            </div>
                
            </form>
        </div>
    );
}

export default Formulario;