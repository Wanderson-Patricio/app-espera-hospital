import express from "express";
import paginate from "../middlewares/paginate.js";
import PacienteController from "../controllers/pacienteController.js";

const router = express.Router();

router.get("/api/pacientes", PacienteController.listasTodosPacientes, paginate)
router.post("/api/pacientes", PacienteController.inserirPaciente)

export default router;