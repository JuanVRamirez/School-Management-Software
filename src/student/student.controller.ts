/**
 * @module StudentController
 * 
 * Este controlador maneja las operaciones CRUD para los estudiantes.
 * 
 * Rutas:
 * - **GET /students**: Lista todos los estudiantes.
 * - **GET /students/:id**: Obtiene los detalles de un estudiante específico.
 * - **POST /students**: Crea un nuevo estudiante.
 * - **PUT /students/:id**: Actualiza los detalles de un estudiante específico.
 * - **DELETE /students/:id**: Elimina un estudiante específico.
 * 
 * Cada ruta está documentada con Swagger para facilitar la generación de documentación y el uso de la API.
 */

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@ApiTags('Students')
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @ApiOperation({ summary: 'Listar todos los estudiantes' })
  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @ApiOperation({ summary: 'Obtener los detalles de un estudiante específico' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Student> {
    return this.studentService.findOne(id);
  }

  @ApiOperation({ summary: 'Crear un nuevo estudiante' })
  @Post()
  create(@Body() studentEntity: Student): Promise<Student> {
    return this.studentService.create(studentEntity);
  }

  @ApiOperation({ summary: 'Actualizar los detalles de un estudiante' })
  @ApiParam({ name: 'id', type: Number })
  @Put(':id')
  update(@Param('id') id: number, @Body() studentEntity: Student): Promise<void> {
    return this.studentService.update(id, studentEntity);
  }

  @ApiOperation({ summary: 'Eliminar un estudiante' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.studentService.remove(id);
  }
}