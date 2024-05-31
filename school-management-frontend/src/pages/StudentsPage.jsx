/**
 * Página de gestión de estudiantes.
 * 
 * Esta página permite ver, añadir, editar y eliminar estudiantes.
 * Incluye una tabla que muestra la lista de estudiantes y un formulario para añadir nuevos estudiantes.
 * Para la función de agregar se usa un form que se abre con un modal
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

const StudentsPage = ({ students }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
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
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Aquí puedes manejar el envío del formulario
    console.log(newStudent);
    handleClose();
  };

  const renderStudents = () => {
    if (students && students.length > 0) {
      return students.map((student) => (
        <TableRow key={student.id} className={classes.tableRow}>
          <TableCell>{student.id}</TableCell>
          <TableCell>{student.firstName}</TableCell>
          <TableCell>{student.lastName}</TableCell>
          <TableCell>{student.email}</TableCell>
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
      // Ejemplos de estudiantes si no hay estudiantes disponibles
      return (
        <>
          <TableRow className={classes.tableRow}>
            <TableCell>1</TableCell>
            <TableCell>Ejemplo</TableCell>
            <TableCell>Estudiante 1</TableCell>
            <TableCell>estudiante1@example.com</TableCell>
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
            <TableCell>Estudiante 2</TableCell>
            <TableCell>estudiante2@example.com</TableCell>
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
      <h1 className={classes.title}>GESTIONAR ESTUDIANTES</h1>
      <Button variant="contained" color="primary" className={classes.addButton} onClick={handleClickOpen}>
        Añadir estudiante
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
            {renderStudents()}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.formTitle}>AÑADIR ESTUDIANTE</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="firstName"
            label="Nombre"
            type="text"
            fullWidth
            variant="outlined"
            value={newStudent.firstName}
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
            value={newStudent.lastName}
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
            value={newStudent.id}
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
            value={newStudent.email}
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

export default StudentsPage;