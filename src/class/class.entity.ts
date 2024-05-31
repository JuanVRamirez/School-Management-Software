/**
 * @module Class
 * 
 * Esta entidad representa una clase, incluyendo sus relaciones con profesores y estudiantes.
 * 
 * Atributos:
 * - **id**: Identificador único de la clase. (PrimaryGeneratedColumn)
 * - **name**: Nombre de la clase. (Column)
 * - **description**: Descripción de la clase. (Column)
 * - **teacher**: Relación ManyToOne con la entidad Teacher. Representa al profesor asignado a la clase.
 * - **students**: Relación ManyToMany con la entidad Student. Representa a los estudiantes asignados a la clase. Utiliza un JoinTable para la relación.
 * 
 * Las relaciones están definidas utilizando los decoradores de TypeORM.
 */

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Teacher } from '../teacher/teacher.entity';
import { Student } from '../student/student.entity';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.classes)
  teacher: Teacher;

  @ManyToMany(() => Student, (student) => student.classes)
  @JoinTable()
  students: Student[];
}