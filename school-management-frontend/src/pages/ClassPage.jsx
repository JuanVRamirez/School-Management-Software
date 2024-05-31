/**
 * Página de gestión de clases.
 * 
 * Esta página permite ver, agregar, editar y eliminar clases.
 * Se muestra una tabla con información sobre cada clase, incluyendo su ID, nombre, descripción, profesor y estudiantes.
 * Los usuarios pueden ver los detalles del profesor y los estudiantes de cada clase, así como agregar nuevas clases.
 * Para la función de agregar se usó un modal
 * 
 * SE AÑADIERON MANUALMENTE 2 FILAS EN LA TABLA COMO EJEMPLO VISUAL
 */

import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button,
  Dialog, DialogActions, DialogContent, DialogTitle, TextField
} from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';
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
});

const ClassesPage = () => {
  const classes = useStyles();
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const classesData = [
    {
      id: '#20462',
      className: 'Math 101',
      description: 'Basic Math Class',
      teacher: 'Mr. Smith',
      students: ['Alice', 'Bob', 'Charlie'],
    },
    {
      id: '#20463',
      className: 'Science 101',
      description: 'Basic Science Class',
      teacher: 'Ms. Johnson',
      students: ['Dave', 'Eve', 'Frank'],
    },
  ];

  const handleViewOpen = (classData) => {
    setSelectedClass(classData);
    setOpenViewModal(true);
  };

  const handleViewClose = () => {
    setOpenViewModal(false);
  };

  const handleAddOpen = () => {
    setOpenAddModal(true);
  };

  const handleAddClose = () => {
    setOpenAddModal(false);
  };

  const renderClasses = () => {
    if (classesData && classesData.length > 0) {
      return classesData.map((classData) => (
        <TableRow key={classData.id} className={classes.tableRow}>
          <TableCell>{classData.id}</TableCell>
          <TableCell>{classData.className}</TableCell>
          <TableCell>{classData.description}</TableCell>
          <TableCell>
            {classData.teacher}
            <IconButton onClick={() => handleViewOpen({ type: 'teacher', data: [classData.teacher] })}>
              <Visibility />
            </IconButton>
          </TableCell>
          <TableCell>
            {classData.students.length} Estudiantes
            <IconButton onClick={() => handleViewOpen({ type: 'students', data: classData.students })}>
              <Visibility />
            </IconButton>
          </TableCell>
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
      // Example rows if no classes are available
      return (
        <>
          <TableRow className={classes.tableRow}>
            <TableCell>#00001</TableCell>
            <TableCell>Ejemplo 1</TableCell>
            <TableCell>Descripción 1</TableCell>
            <TableCell>
              Profesor Ejemplo 1
              <IconButton>
                <Visibility />
              </IconButton>
            </TableCell>
            <TableCell>
              3 Estudiantes
              <IconButton>
                <Visibility />
              </IconButton>
            </TableCell>
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
            <TableCell>#00002</TableCell>
            <TableCell>Ejemplo 2</TableCell>
            <TableCell>Descripción 2</TableCell>
            <TableCell>
              Profesor Ejemplo 2
              <IconButton>
                <Visibility />
              </IconButton>
            </TableCell>
            <TableCell>
              5 Estudiantes
              <IconButton>
                <Visibility />
              </IconButton>
            </TableCell>
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
      <h1 className={classes.title}>GESTIONAR CLASES</h1>
      <Button variant="contained" color="primary" className={classes.addButton} onClick={handleAddOpen}>
        Añadir clase
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className={classes.headerRow}>
              <TableCell className={classes.headerCell}>ID</TableCell>
              <TableCell className={classes.headerCell}>Nombre de la clase</TableCell>
              <TableCell className={classes.headerCell}>Descripción</TableCell>
              <TableCell className={classes.headerCell}>Profesor</TableCell>
              <TableCell className={classes.headerCell}>Estudiantes</TableCell>
              <TableCell className={classes.headerCell}>Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderClasses()}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openViewModal} onClose={handleViewClose}>
        <DialogTitle>{selectedClass?.type === 'teacher' ? 'Profesor(es)' : 'Estudiantes'}</DialogTitle>
        <DialogContent>
          {selectedClass?.type === 'teacher' ? (
            <div>{selectedClass?.data}</div>
          ) : (
            <ul>
              {selectedClass?.data.map((student, index) => (
                <li key={index}>{student}</li>
              ))}
            </ul>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleViewClose} color="primary">Cerrar</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openAddModal} onClose={handleAddClose}>
        <DialogTitle>Añadir Clase</DialogTitle>
        <DialogContent>
          <form>
            <TextField label="Nombre de la clase" fullWidth margin="normal" />
            <TextField label="Descripción" fullWidth margin="normal" />
            <TextField label="Profesor" fullWidth margin="normal" />
            <TextField label="Estudiantes" fullWidth margin="normal" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClose} color="primary">Cancelar</Button>
          <Button onClick={handleAddClose} color="primary">Guardar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ClassesPage;