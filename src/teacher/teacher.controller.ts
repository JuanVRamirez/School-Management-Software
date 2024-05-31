/**
 * @module TeacherController
 * 
 * Este controlador maneja las operaciones CRUD para los profesores.
 * 
 * Rutas:
 * - **GET /teachers**: Lista todos los profesores.
 * - **GET /teachers/:id**: Obtiene los detalles de un profesor específico.
 * - **POST /teachers**: Crea un nuevo profesor.
 * - **PUT /teachers/:id**: Actualiza los detalles de un profesor específico.
 * - **DELETE /teachers/:id**: Elimina un profesor específico.
 * 
 * Cada ruta está documentada con Swagger para facilitar la generación de documentación y el uso de la API.
 */

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { TeacherService } from './teacher.service';
import { Teacher } from './teacher.entity';

@ApiTags('Teachers')
@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @ApiOperation({ summary: 'Listar todos los profesores' })
  @Get()
  findAll(): Promise<Teacher[]> {
    return this.teacherService.findAll();
  }

  @ApiOperation({ summary: 'Obtener los detalles de un profesor específico' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Teacher> {
    return this.teacherService.findOne(id);
  }

  @ApiOperation({ summary: 'Crear un nuevo profesor' })
  @ApiBody({ type: Teacher })
  @Post()
  create(@Body() teacherEntity: Teacher): Promise<Teacher> {
    return this.teacherService.create(teacherEntity);
  }

  @ApiOperation({ summary: 'Actualizar los detalles de un profesor' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: Teacher })
  @Put(':id')
  update(@Param('id') id: number, @Body() teacherEntity: Teacher): Promise<void> {
    return this.teacherService.update(id, teacherEntity);
  }

  @ApiOperation({ summary: 'Eliminar un profesor' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.teacherService.remove(id);
  }
}