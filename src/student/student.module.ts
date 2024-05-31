/**
 * @module StudentModule
 * 
 * Este módulo encapsula la funcionalidad relacionada con los estudiantes.
 * 
 * Importaciones:
 * - **TypeOrmModule.forFeature([Student])**: Importa la entidad `Student` para usar con TypeORM.
 * 
 * Proveedores:
 * - **StudentService**: Proveedor del servicio para manejar la lógica de negocio relacionada con los estudiantes.
 * 
 * Controladores:
 * - **StudentController**: Controlador que maneja las solicitudes HTTP relacionadas con los estudiantes.
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}