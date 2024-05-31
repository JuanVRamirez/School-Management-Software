/**
 * Componente de tarjeta de opción que muestra un ícono y un título con un enlace.
 * 
 * Este componente renderiza una tarjeta con un ícono, un título y un enlace.
 * El enlace redirige a una ubicación especificada.
 */

import { Card, CardContent, Typography, CardActionArea, Container } from '@mui/material';
import './styles/OptionCard.css';
import { Link } from 'react-router-dom';


const OptionCard = ({ icon, title, to }) => {
  return (
    <Container style={{display:"flex", justifyContent:"center"}}>
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit', display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      <Card className='card'>
        <CardActionArea>
          <CardContent className='card-content'>
            <img src={icon} alt={title} style={{ width: '50px', height: '50px'}} />
          </CardContent>
        </CardActionArea>
      </Card>
      <Typography variant="h6" className='card-title'>
        {title}
      </Typography>
    </Link>
    </Container>
  );
};

export default OptionCard;