/**
 * @module Student
 * 
 * Esta entidad representa a un estudiante, incluyendo sus relaciones con las clases.
 * 
 * Atributos:
 * - **id**: Identificador único del estudiante. (PrimaryGeneratedColumn)
 * - **firstName**: Nombre del estudiante. (Column)
 * - **lastName**: Apellido del estudiante. (Column)
 * - **email**: Correo electrónico del estudiante. (Column)
 * - **classes**: Relación ManyToMany con la entidad Class. Representa las clases en las que está inscrito el estudiante.
 * 
 * Las relaciones están definidas utilizando los decoradores de TypeORM.
 */

import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Class } from '../class/class.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @ManyToMany(() => Class, (classEntity) => classEntity.students)
  classes: Class[];
}