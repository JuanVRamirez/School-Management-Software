/**
 * Componente de encabezado que muestra un mensaje de bienvenida.
 * 
 * Este componente renderiza un mensaje de bienvenida centrado en la parte superior de la interfaz.
 */

import React from 'react';
import { Typography } from '@mui/material';
import './styles/Header.css';

const Header = () => {
  return (
    <div className='header-circle'>
    <Typography className='header-text' variant="h5" align="center" gutterBottom>
      Bienvenido
    </Typography>
    </div>
  );
};

export default Header;