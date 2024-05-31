/**
 * @module ClassService
 * 
 * Este servicio maneja la lógica de negocio relacionada con las clases.
 * 
 * Métodos:
 * - **findAll()**: Retorna una promesa que resuelve con un array de todas las clases, incluyendo los profesores y estudiantes asociados.
 * - **findOne(id: number)**: Retorna una promesa que resuelve con los detalles de una clase específica, incluyendo el profesor y los estudiantes asociados.
 * - **create(classEntity: Class)**: Retorna una promesa que resuelve con la clase creada.
 * - **update(id: number, classEntity: Class)**: Actualiza los detalles de una clase específica.
 * - **remove(id: number)**: Elimina una clase específica.
 * - **assignTeacher(classId: number, teacherId: number)**: Asigna un profesor a una clase.
 * - **assignStudents(classId: number, studentIds: number[])**: Asigna estudiantes a una clase.
 * - **getClassStudents(classId: number)**: Retorna una promesa que resuelve con los estudiantes asignados a una clase específica.
 */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from './class.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
  ) {}

  findAll(): Promise<Class[]> {
    return this.classRepository.find({ relations: ['teacher', 'students'] });
  }

  findOne(id: number): Promise<Class> {
    return this.classRepository.findOne({ where: { id }, relations: ['teacher', 'students'] });
  }

  create(classEntity: Class): Promise<Class> {
    return this.classRepository.save(classEntity);
  }

  async update(id: number, classEntity: Class): Promise<void> {
    await this.classRepository.update(id, classEntity);
  }

  async remove(id: number): Promise<void> {
    await this.classRepository.delete(id);
  }

  async assignTeacher(classId: number, teacherId: number): Promise<void> {
    const classEntity = await this.classRepository.findOne({ where: { id: classId } });
    classEntity.teacher = { id: teacherId } as any;
    await this.classRepository.save(classEntity);
  }

  async assignStudents(classId: number, studentIds: number[]): Promise<void> {
    const classEntity = await this.classRepository.findOne({ where: { id: classId }, relations: ['students'] });
    classEntity.students = studentIds.map(id => ({ id } as any));
    await this.classRepository.save(classEntity);
  }
  async getClassStudents(classId: number): Promise<any[]> {
    const classEntity = await this.classRepository.findOne({ where: { id: classId }, relations: ['students'] });
    return classEntity.students;
  }
}
