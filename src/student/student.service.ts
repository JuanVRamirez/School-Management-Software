/**
 * @module StudentService
 * 
 * Este servicio maneja la lógica de negocio relacionada con los estudiantes.
 * 
 * Métodos:
 * - **findAll()**: Retorna una promesa que resuelve con un array de todos los estudiantes.
 * - **findOne(id: number)**: Retorna una promesa que resuelve con los detalles de un estudiante específico.
 * - **create(student: Student)**: Retorna una promesa que resuelve con el estudiante creado.
 * - **update(id: number, student: Student)**: Actualiza los detalles de un estudiante específico.
 * - **remove(id: number)**: Elimina un estudiante específico.
 */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  findOne(id: number): Promise<Student> {
    return this.studentRepository.findOne({ where: { id } });
  }

  create(student: Student): Promise<Student> {
    return this.studentRepository.save(student);
  }

  async update(id: number, student: Student): Promise<void> {
    await this.studentRepository.update(id, student);
  }

  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}