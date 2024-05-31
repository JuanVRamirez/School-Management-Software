/**
 * @module AppModule
 * 
 * Módulo principal de la aplicación.
 * 
 * Importaciones:
 * - **TypeOrmModule.forRoot()**: Configura la conexión a la base de datos MySQL y la integración con TypeORM.
 * - **TeacherModule**: Módulo que encapsula la funcionalidad relacionada con los profesores.
 * - **StudentModule**: Módulo que encapsula la funcionalidad relacionada con los estudiantes.
 * - **ClassModule**: Módulo que encapsula la funcionalidad relacionada con las clases.
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { ClassModule } from './class/class.module';
import { createConnection } from 'mysql2';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'school',
      autoLoadEntities: true,
      synchronize: true,
      driver: createConnection,
    }),
    TeacherModule,
    StudentModule,
    ClassModule,
  ],
})
export class AppModule {}