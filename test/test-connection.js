/**
 * Función para probar la conexión con un servidor MySQL utilizando la biblioteca mysql2/promise.
 * 
 * La función intenta conectarse al servidor MySQL especificado, imprime un mensaje si la conexión es exitosa y cierra la conexión.
 * Si ocurre un error durante el proceso de conexión, se imprime un mensaje de error.
 */

const mysql = require('mysql2/promise');

async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Capitanamerica123#',
      database: 'school',
    });
    console.log('Connected to the MySQL server.');
    await connection.close();
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

testConnection();