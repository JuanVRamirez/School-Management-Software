
/**
 * @module ClassController
 * 
 * Este controlador maneja las operaciones CRUD para las clases, así como la asignación de profesores y estudiantes.
 * 
 * Rutas:
 * - **GET /classes**: Lista todas las clases.
 * - **GET /classes/:id**: Obtiene los detalles de una clase específica.
 * - **POST /classes**: Crea una nueva clase.
 * - **PUT /classes/:id**: Actualiza los detalles de una clase específica.
 * - **DELETE /classes/:id**: Elimina una clase específica.
 * - **POST /classes/:id/assign-teacher**: Asigna un profesor a una clase.
 * - **POST /classes/:id/assign-students**: Asigna varios estudiantes a una clase.
 * - **GET /classes/:id/students**: Obtiene los estudiantes y el profesor asignados a una clase específica.
 * 
 * Cada ruta está documentada con Swagger para facilitar la generación de documentación y el uso de la API.
 */


import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { ClassService } from './class.service';
import { Class } from './class.entity';

@ApiTags('Classes')
@Controller('classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @ApiOperation({ summary: 'Listar todas las clases' })
  @Get()
  findAll(): Promise<Class[]> {
    return this.classService.findAll();
  }

  @ApiOperation({ summary: 'Obtener los detalles de una clase específica' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Class> {
    return this.classService.findOne(id);
  }

  @ApiOperation({ summary: 'Crear una nueva clase' })
  @Post()
  create(@Body() classEntity: Class): Promise<Class> {
    return this.classService.create(classEntity);
  }

  @ApiOperation({ summary: 'Actualizar los detalles de una clase' })
  @ApiParam({ name: 'id', type: Number })
  @Put(':id')
  update(@Param('id') id: number, @Body() classEntity: Class): Promise<void> {
    return this.classService.update(id, classEntity);
  }

  @ApiOperation({ summary: 'Eliminar una clase' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.classService.remove(id);
  }

  @ApiOperation({ summary: 'Asignar un profesor a una clase' })
  @ApiParam({ name: 'id', type: Number })
  @Post(':id/assign-teacher')
  assignTeacher(@Param('id') classId: number, @Body('teacherId') teacherId: number): Promise<void> {
    return this.classService.assignTeacher(classId, teacherId);
  }

  @ApiOperation({ summary: 'Asignar estudiantes a una clase' })
  @ApiParam({ name: 'id', type: Number })
  @Post(':id/assign-students')
  assignStudents(@Param('id') classId: number, @Body('studentIds') studentIds: number[]): Promise<void> {
    return this.classService.assignStudents(classId, studentIds);
  }

  @ApiOperation({ summary: 'Visualizar los estudiantes y el profesor asignados a una clase' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id/students')
  getClassStudents(@Param('id') classId: number): Promise<any[]> {
    return this.classService.getClassStudents(classId);
  }
}