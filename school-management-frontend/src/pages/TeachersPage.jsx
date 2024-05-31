/**
 * Página de gestión de profesores.
 * 
 * Esta página permite ver, añadir, editar y eliminar profesores.
 * Incluye una tabla que muestra la lista de profesores y un formulario para añadir nuevos profesores.
 * Para agregar un nuevo profesor se usó un form que se abre con un Modal
 * 
 * SE AÑADIERON MANUALMENTE 2 FILAS EN LA TABLA COMO EJEMPLO VISUAL
 */

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#f5f5f5',
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#e0e0e0',
    },
  },
  headerRow: {
    backgroundColor: '#f5f5f5',
  },
  headerCell: {
    fontWeight: 'bold',
  },
  container: {
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  addButton: {
    marginBottom: '20px',
  },
  formTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  formButton: {
    backgroundColor: '#007bff',
    color: 'white',
  },
});

const TeachersPage = ({ teachers }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    firstName: '',
    lastName: '',
    id: '',
    email: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Aquí puedes manejar el envío del formulario
    console.log(newTeacher);
    handleClose();
  };

  const renderTeachers = () => {
    if (teachers && teachers.length > 0) {
      return teachers.map((teacher) => (
        <TableRow key={teacher.id} className={classes.tableRow}>
          <TableCell>{teacher.id}</TableCell>
          <TableCell>{teacher.firstName}</TableCell>
          <TableCell>{teacher.lastName}</TableCell>
          <TableCell>{teacher.email}</TableCell>
          <TableCell>
            <IconButton color="primary">
              <Edit />
            </IconButton>
            <IconButton color="secondary">
              <Delete />
            </IconButton>
          </TableCell>
        </TableRow>
      ));
    } else {
      // Ejemplos de Profesors si no hay Profesores disponibles
      return (
        <>
          <TableRow className={classes.tableRow}>
            <TableCell>1</TableCell>
            <TableCell>Ejemplo</TableCell>
            <TableCell>Profesor 1</TableCell>
            <TableCell>Profesor1@example.com</TableCell>
            <TableCell>
              <IconButton color="primary">
                <Edit />
              </IconButton>
              <IconButton color="secondary">
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow className={classes.tableRow}>
            <TableCell>2</TableCell>
            <TableCell>Ejemplo</TableCell>
            <TableCell>Profesor 2</TableCell>
            <TableCell>Profesor2@example.com</TableCell>
            <TableCell>
              <IconButton color="primary">
                <Edit />
              </IconButton>
              <IconButton color="secondary">
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        </>
      );
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>GESTIONAR PROFESORES</h1>
      <Button variant="contained" color="primary" className={classes.addButton} onClick={handleClickOpen}>
        Añadir profesor
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className={classes.headerRow}>
              <TableCell className={classes.headerCell}>ID</TableCell>
              <TableCell className={classes.headerCell}>Nombre</TableCell>
              <TableCell className={classes.headerCell}>Apellido</TableCell>
              <TableCell className={classes.headerCell}>Email</TableCell>
              <TableCell className={classes.headerCell}>Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderTeachers()}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.formTitle}>AÑADIR PROFESOR</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="firstName"
            label="Nombre"
            type="text"
            fullWidth
            variant="outlined"
            value={newTeacher.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            margin="dense"
            name="lastName"
            label="Apellido"
            type="text"
            fullWidth
            variant="outlined"
            value={newTeacher.lastName}
            onChange={handleChange}
            required
          />
          <TextField
            margin="dense"
            name="id"
            label="ID"
            type="text"
            fullWidth
            variant="outlined"
            value={newTeacher.id}
            onChange={handleChange}
            required
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={newTeacher.email}
            onChange={handleChange}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} className={classes.formButton}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TeachersPage;