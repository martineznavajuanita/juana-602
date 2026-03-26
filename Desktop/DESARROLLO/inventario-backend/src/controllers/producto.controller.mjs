// este controlador obtiene los datos que te envia el cliente
// asi como los datos o las funciones para regresarle informacion
//librerias
import express from "express";
//manejador de base de datos o archivo que se encarga de comunicarse con la base de datos
import productoService from "../services/producto.service.mjs";

const router = express.Router();

//req - de aqui obtienes las parametros que te envia el usuario
//res - aqui se encuentran los metodos para regresar infromacion o responder
//next - llama el siguiente proceso, aqui se usa para devolver errores y pasarselos a error handler

function obtenerRegistros(req, res, next) {
    // Se cambió ClienteService por productoService
    productoService.obtenerRegistros()
        .then((registros) => res.json(registros))
        .catch((err) => next(err));
}

function crearRegistros(req, res, next) {
    const { nombre } = req.body;
    // Se cambió ClienteService por productoService
    productoService.crearRegistro(nombre)
        .then(() => {
            res.status(201).json({ mensaje: "Productos registrado correctamente." });
        })
        .catch((err) => next(err));
}

function editarRegistros(req, res, next) {
    const { id, nombre } = req.body;
    // Se cambió ClienteService por productoService
    productoService.editarRegistro(id, nombre)
        .then(() => {
            res.status(200).json({ mensaje: "Productos editado correctamente." });
        })
        .catch((err) => next(err));
}

function eliminarRegistros(req, res, next) {
    const { id } = req.params;
    // Se cambió ClienteService por productoService
    productoService.eliminarRegistro(id)
        .then(() => {
            res.status(200).json({ mensaje: "Productos eliminado correctamente." });
        })
        .catch((err) => next(err));
}

router.get("/", obtenerRegistros);
router.post("/", crearRegistros);
router.put("/", editarRegistros);
router.delete("/:id", eliminarRegistros);

export default router;