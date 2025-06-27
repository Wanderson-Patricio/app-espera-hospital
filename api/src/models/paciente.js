import mongoose from "mongoose";
import enderecoSchema from "./endereco.js";

const pacienteSchema = new mongoose.Schema(
    {
        id: {type: Number},
        nome: {
            type: String,
            required: [true, "O nome do paciente é obrigatório."]
        },
        dataNascimento: {
            type: String,
            required: [true, "A data de nascimento do paciente é obrigatória."]
        },
        genero: {
            type: String,
            required: [true, "O gênero do paciente é obrigatório"],
            enum: ["Masculino", "Feminino", "Outro"]
        },
        cpf: {
            type: String,
            required: [true, "O cpf do paciente é obrigatório"]
        },
        telefone: {
            type: String,
            required: [true, "O telefone do paciente é obrigatório"]
        },
        email: {type: String},
        endereco: enderecoSchema,
        observacoes: {type: String}
    },
    {versionKey: false}
)

const paciente = mongoose.model("pacientes", pacienteSchema);

export default paciente;