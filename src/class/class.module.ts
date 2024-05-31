/**
 * @module ClassModule
 * 
 * Este módulo encapsula la funcionalidad relacionada con las clases.
 * 
 * Importaciones:
 * - **TypeOrmModule.forFeature([Class])**: Importa la entidad `Class` para usar con TypeORM.
 * 
 * Proveedores:
 * - **ClassService**: Proveedor del servicio para manejar la lógica de negocio relacionada con las clases.
 * 
 * Controladores:
 * - **ClassController**: Controlador que maneja las solicitudes HTTP relacionadas con las clases.
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from './class.entity';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  providers: [ClassService],
  controllers: [ClassController],
})
export class ClassModule {}