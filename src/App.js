import './App.css';
import React, { useState } from 'react';
import Titulo from './componentes/titulo/Titulo';
import Subtitulo from './componentes/subtitulo/Subtitulo';
import Formulario from './componentes/formulario/Formulario';
import Turno from './componentes/turno-final/Turno';

function App() {
    const [citas, setCitas] = useState([]);

    const agregarCita = (nuevaCita) => {
        setCitas([...citas, nuevaCita]);
    }

    const eliminarCita = (e) => {
        const nuevasCitas = citas.filter((cita, index) => index !== e);
        setCitas(nuevasCitas);
    }

    return (
        <>
            <div className='div-titulo'>
                <Titulo />
            </div>

            <div className='padre container'>
                <div className='primeraColumna'>
                    <Subtitulo texto={"CREAR MI CITA"} />
                    <Formulario agregarCita={agregarCita} />
                </div>

                <div className='segundaColumna'>
                    <Subtitulo texto={"ADMINISTRA TUS CITAS"} />
                    <Turno citas={citas} eliminarCita={eliminarCita} />
                </div>
            </div>
        </>
    );
}

export default App;
