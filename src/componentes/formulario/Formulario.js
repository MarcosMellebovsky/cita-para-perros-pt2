

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

    const handleChange = (e) => {
        setNuevaCita({
            ...nuevaCita,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        agregarCita(nuevaCita);
        setNuevaCita({
            mascota: '',
            dueño: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }

    return (
        <div>
            <form className="formulario" onSubmit={handleSubmit}>
                
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" value={nuevaCita.mascota} onChange={handleChange} placeholder="nombre de la mascota"/>
    
            <label>Nombre Dueño</label>
            <input className='input-class' id="dueño" type="text" name="dueño" placeholder="Nombre dueño de la mascota" onChange={handleChange}/>
    
            <label>Fecha</label>
            <input className='input-class' id="fecha" type="date" name="fecha" onChange={handleChange}/>
    
            <label>Hora</label>
            <input className='input-class' id="hora" name="hora" type="time" onChange={handleChange}/>
    
            <label>Sintomas</label>
            <textarea id="sintomas" name="sintomas"onChange={handleChange}></textarea>
            <div className='div-btn'>
                <button className='btn-form' type="submit">AGREGAR CITA</button>
            </div>
                
          
            </form>
        </div>
    );
}

export default Formulario;