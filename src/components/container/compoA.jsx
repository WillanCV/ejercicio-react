import React from 'react';
import PropTypes from 'prop-types';
import CompoB from '../pure/compoB';
import { Contacto } from '../../model/contacto.class';


const CompoA = ({contacto}) => {
  return (
    <div>
      <h2> Nombre: { contacto.nombre }</h2>
      <h2> Apellido: { contacto.apellido }</h2>
      <h2> Email: { contacto.email}</h2>
      <CompoB></CompoB>
    </div>
  );
};


CompoA.propTypes = {

  contacto: PropTypes.instanceOf(Contacto)

};


export default CompoA;
