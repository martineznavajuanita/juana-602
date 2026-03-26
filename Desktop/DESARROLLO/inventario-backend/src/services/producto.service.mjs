// archivo de configuración de la base de datos
import connect from "../middlewares/db.mjs";

async function obtenerRegistros() {
// Establecemos la conexión a la base de datos
const db = await connect();

try {
// Consulta para obtener todos los registros
const [rows] = await db.execute("SELECT * FROM productos");

// Se retornan los registros
return Promise.resolve(rows);

} catch (error) {
// Se muestra el error y se retorna un mensaje de error
console.log("Error:", error);
return Promise.reject("Ocurrio un error al intentar obtener los datos");

} finally {
// Cerramos la conexión a la base de datos,
// independientemente del resultado
db.end();
}
}

async function crearRegistro(nombre) {
// Establecemos la conexión a la base de datos
const db = await connect();

try {
// Ejecutamos la consulta SQL para insertar datos
const [result] = await db.execute("INSERT INTO productos (nombre) VALUES (?)", [nombre]);

// Se devuelve el resultado de la operación
console.log("Insertado: ", result);
return Promise.resolve("OK");

} catch (error) {
// Se muestra el error y se retorna un mensaje de error
console.log("Error:", error);
return Promise.reject("Ocurrio un error al intentar agregar registros");

} finally {
// Cerramos la conexión a la base de datos,
// independientemente del resultado
db.end();
}
}

async function editarRegistro(id, nombre) {
// Establecemos la conexión a la base de datos
const db = await connect();

try {
// Ejecutamos la consulta SQL para actualizar datos
const [result] = await db.execute("UPDATE productos SET nombre = ? WHERE id = ?", [nombre, id]);

// Se devuelve el resultado de la operación
console.log("Editado: ", result);
return Promise.resolve("OK");

} catch (error) {
// Se muestra el error y se retorna un mensaje de error
console.log("Error:", error);
return Promise.reject("Ocurrio un error al intentar editar registros");

} finally {
// Cerramos la conexión a la base de datos,
// independientemente del resultado
db.end();
}
}

async function eliminarRegistro(id) {
// Establecemos la conexión a la base de datos
const db = await connect();

try {
// Ejecutamos la consulta SQL para eliminar datos
const [result] = await db.execute("DELETE FROM productos WHERE id = ?", [id]);

// Se devuelve el resultado de la operación
console.log("Eliminado: ", result);
return Promise.resolve("OK");

} catch (error) {
// Se muestra el error y se retorna un mensaje de error
console.log("Error:", error);
return Promise.reject("Ocurrio un error al intentar eliminar registros");

} finally {
// Cerramos la conexión a la base de datos,
// independientemente del resultado
db.end();
}
}

export default {
obtenerRegistros,
crearRegistro,
editarRegistro,
eliminarRegistro
}