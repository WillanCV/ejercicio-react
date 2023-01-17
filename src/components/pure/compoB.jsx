import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const CompoB = ({estado}) => {

  const [conectado, setConectado] = useState(estado)

  return (
    <div>
      <h3> Contacto: {conectado === false ? 'Contacto no disponible' : 'Contacto En linea'}</h3>
      <button onClick={() => setConectado(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}</button>
    </div>
  );
};

CompoB.propTypes = {
  estado: PropTypes.bool

};

export default CompoB;
