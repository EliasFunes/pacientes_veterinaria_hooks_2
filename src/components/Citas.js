import React, {Fragment} from 'react';
import Cita from "./Cita";
import PropTypes from 'prop-types';

const Citas = ({citas, eliminarCita, titulo}) => {
    return (
        <Fragment>
            <h2>{titulo}</h2>
            {citas.map(cita => (
                <Cita
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                />
            ))}
        </Fragment>
    );
};

Citas.propTypes = {
    citas : PropTypes.array.isRequired,
    eliminarCita : PropTypes.func.isRequired,
    titulo : PropTypes.string.isRequired
}

export default Citas;