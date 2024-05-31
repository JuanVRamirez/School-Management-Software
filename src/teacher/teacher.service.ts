/**
 * @module TeacherService
 * 
 * Este servicio maneja la lógica de negocio relacionada con los profesores.
 * 
 * Métodos:
 * - **findAll()**: Retorna una promesa que resuelve con un array de todos los profesores.
 * - **findOne(id: number)**: Retorna una promesa que resuelve con los detalles de un profesor específico.
 * - **create(teacher: Teacher)**: Retorna una promesa que resuelve con el profesor creado.
 * - **update(id: number, teacher: Teacher)**: Actualiza los detalles de un profesor específico.
 * - **remove(id: number)**: Elimina un profesor específico.
 */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  findAll(): Promise<Teacher[]> {
    return this.teacherRepository.find();
  }

  findOne(id: number): Promise<Teacher> {
    return this.teacherRepository.findOne({ where: { id } });
  }

  create(teacher: Teacher): Promise<Teacher> {
    return this.teacherRepository.save(teacher);
  }

  async update(id: number, teacher: Teacher): Promise<void> {
    await this.teacherRepository.update(id, teacher);
  }

  async remove(id: number): Promise<void> {
    await this.teacherRepository.delete(id);
  }
}