import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
    const initialState = {
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    }
    const [cita, actualizarCita] = useState(initialState);
    const [error, actualizarError] = useState(false);
    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        });
    }
    const {mascota, propietario, fecha, hora, sintomas} = cita;
    const handleSubmit = e => {
        e.preventDefault();
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        actualizarError(false);
        cita.id = uuid();
        crearCita(cita);
        actualizarCita(initialState);
    }
    const mensajeError = error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null;

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {mensajeError}
            <form onSubmit={handleSubmit}>
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    placeholder="Nombre Mascota"
                    className="u-full-width"
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    placeholder="Nombre del dueño"
                    className="u-full-width"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                >
                </textarea>

                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </Fragment>
    );
};

Formulario.propTypes = {
    crearCita : PropTypes.func.isRequired
}

export default Formulario;