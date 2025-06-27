const tratarDados = (dados) => {
  const { rua, numero, complemento, telefone, email, ...restante } = dados;

  const dadosTratados = {
    endereco: {
      rua,
      numero,
      complemento,
    },
    contato: {
      telefone,
      email,
    },
    ...restante,
  };

  return dadosTratados;
};

const getDadosPaciente = () => {
  const informacoesAPegar = [
    "nome",
    "dataNascimento",
    "genero",
    "cpf",
    "telefone",
    "email",
    "rua",
    "numero",
    "complemento",
    "cidade",
    "estado",
    "cep",
    "prioridade",
    "observacoes",
  ];

  const dados = {};
  for (let info of informacoesAPegar) {
    dados[info] = document.getElementById(info).value;
  }

  return tratarDados(dados);
};

document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();

  const dadosPaciente = getDadosPaciente();
  alert(JSON.stringify(dadosPaciente));


  
});
