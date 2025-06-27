import NotFoundError from "../errors/notFoundError.js";
import paciente from "../models/paciente.js";
import paginate from "../middlewares/paginate.js";

class PacienteController {
    static listasTodosPacientes = async (req, res, next) => {
        try {
            const pacientes = await paciente.find({}, {_id: 0});
            req.result = pacientes;

            paginate(req, res, next);
        } catch (err) {
            next(err)
        }
    }

    static inserirPaciente = async (req, res, next) =>{
        try {
            let novoPaciente = new paciente(req.body);
            novoPaciente = novoPaciente.save();

            res.status(201).json(novoPaciente.toJSON());
        } catch (err) {
            next(err)
        }
    }
}

export default PacienteController;