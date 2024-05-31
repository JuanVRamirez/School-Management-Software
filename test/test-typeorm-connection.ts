// test-typeorm-connection.ts
/**
 * Función para probar la conexión con una base de datos MySQL utilizando la biblioteca TypeORM.
 * 
 * La función intenta establecer una conexión con la base de datos MySQL especificada utilizando los parámetros proporcionados.
 * Si la conexión es exitosa, imprime un mensaje indicando que se ha conectado a la base de datos y cierra la conexión.
 * Si ocurre un error durante el proceso de conexión, se imprime un mensaje de error.
 */

import { createConnection } from 'typeorm';

async function testConnection() {
  try {
    const connection = await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Capitanamerica123#',
      database: 'school',
      entities: [],
      synchronize: true,
    });
    console.log('Connected to the database with TypeORM.');
    await connection.close();
  } catch (error) {
    console.error('Error connecting to the database with TypeORM:', error);
  }
}

testConnection();