/**
 * @module TeacherModule
 * 
 * Este módulo encapsula la funcionalidad relacionada con los profesores.
 * 
 * Importaciones:
 * - **TypeOrmModule.forFeature([Teacher])**: Importa la entidad `Teacher` para usar con TypeORM.
 * 
 * Proveedores:
 * - **TeacherService**: Proveedor del servicio para manejar la lógica de negocio relacionada con los profesores.
 * 
 * Controladores:
 * - **TeacherController**: Controlador que maneja las solicitudes HTTP relacionadas con los profesores.
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './teacher.entity';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher])],
  providers: [TeacherService],
  controllers: [TeacherController],
})
export class TeacherModule {}