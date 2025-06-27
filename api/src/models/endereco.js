import mongoose from "mongoose";


const enderecoSchema = new mongoose.Schema(
  {
    rua: {
      type: String,
      required: [true, "A rua é obrigatória ao cadastrar um endereço."],
    },
    numero: {
      type: Number,
      required: [
        true,
        "O número da casa é obrigatório ao cadastrar um endereço.",
      ],
    },
    complemento: {
      type: String,
    },
    cidade: {
      type: String,
      required: [true, "A cidade é obrigatória ao cadastrar um endereço."],
    },
    estado: {
      type: String,
      required: [true, "O estado é obrigatório ao cadastrar um endereço."],
    },
    cep: {
      type: String,
      validate: {
        validator: (cep) => {
          // Remove espaços e hífens
          const cepLimpo = cep.trim().replace("-", "");

          // Verifica se tem exatamente 8 dígitos numéricos
          const regex = /^[0-9]{8}$/;
          return regex.test(cepLimpo);
        },
        message: "O CEP informado é inválido.",
      },
    },
  },
  { versionKey: false }
);

export default enderecoSchema;