/**
 * Componente de fondo que muestra círculos.
 * 
 * Este componente renderiza círculos de diferentes tamaños como parte del fondo de la interfaz.
 */

import React from 'react';
import './styles/BackgroundCircles.css';

const BackgroundCircles = () => {
  return (
    <>
      <div className="circle-large" />
      <div className="circle-small" />
    </>
  );
};

export default BackgroundCircles;