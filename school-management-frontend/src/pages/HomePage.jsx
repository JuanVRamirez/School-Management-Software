/**
 * Página de inicio.
 * 
 * Esta página muestra un encabezado, círculos de fondo y tarjetas de opciones para gestionar estudiantes, profesores y clases.
 * Cada tarjeta de opción redirige a una página específica para gestionar la entidad correspondiente.
 */

import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from '../components/Header';
import OptionCard from '../components/OptionCard';
import BackgroundCircles from '../components/BackgroundCircles';
import studentIcon from '../assets/student-icon.png';
import teacherIcon from '../assets/teacher-icon.png';
import classIcon from '../assets/class-icon.png';

const HomePage = () => {
  return (
    <Container>
      <Header />
      <BackgroundCircles />
      <Grid container rowSpacing={4} columnSpacing={-2} justifyContent="center" alignItems="center" columns={4} style={{marginTop:"150px"}}>
        <Grid item xs={2} >
          <OptionCard icon={studentIcon} title="Gestionar estudiantes" to="/gestionar-estudiantes" />
        </Grid>
        <Grid item xs={2}>
          <OptionCard icon={teacherIcon} title="Gestionar profesores" to="/gestionar-profesores" />
        </Grid>
        <Grid item xs={2}>
          <OptionCard icon={classIcon} title="Gestionar clases" to="/gestionar-clases" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;