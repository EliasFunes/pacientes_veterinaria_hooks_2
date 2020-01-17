import React, {Fragment, useState, useEffect} from "react";
import Formulario from "./components/Formulario";
import Citas from "./components/Citas";

function App() {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(!citasIniciales){
        citasIniciales = [];
    }

    const [citas,setCitas] = useState(citasIniciales);

    const crearCita = cita => setCitas([...citas, cita]);
    const eliminarCita = id => {
        const nuevasCitas = citas.filter(cita => cita.id !== id);
        setCitas(nuevasCitas);
    }
    const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

    useEffect(() => {
        if(citasIniciales){
            localStorage.setItem('citas', JSON.stringify(citas));
        } else {
            localStorage.setItem('citas', JSON.stringify([]));
        }
    }, [citas, citasIniciales]);

    return (
        <Fragment>
            <h1>Administrador de Pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario crearCita={crearCita}/>
                    </div>
                    <div className="one-half column">
                        <Citas
                            eliminarCita={eliminarCita}
                            citas={citas}
                            titulo={titulo}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
