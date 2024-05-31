/**
 * @module Teacher
 * 
 * Esta entidad representa a un profesor, incluyendo sus relaciones con las clases.
 * 
 * Atributos:
 * - **id**: Identificador único del profesor. (PrimaryGeneratedColumn)
 * - **firstName**: Nombre del profesor. (Column)
 * - **lastName**: Apellido del profesor. (Column)
 * - **email**: Correo electrónico del profesor. (Column)
 * - **classes**: Relación OneToMany con la entidad Class. Representa las clases que tiene asignadas el profesor.
 * 
 * Las relaciones están definidas utilizando los decoradores de TypeORM.
 */

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Class } from '../class/class.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @OneToMany(() => Class, (classEntity) => classEntity.teacher)
  classes: Class[];
}