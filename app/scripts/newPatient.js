const tratarDados = (dados) => {
  const { rua, numero, complemento, ...restante } = dados;

  const dadosTratados = {
    endereco: {
      rua,
      numero,
      complemento,
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
    "observacoes",
  ];

  const dados = {};
  for (let info of informacoesAPegar) {
    dados[info] = document.getElementById(info).value;
  }

  return tratarDados(dados);
};

document
  .getElementById("formulario")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const dados = getDadosPaciente();

    await fetch("http://localhost:3000/api/pacientes", {
      method: "POST",
      body: dados,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na requisição: " + response.status);
        }
        return response.json(); // Converte a resposta em JSON
      })
      .then((data) => {
        alert("Paciente cadastrado com sucesso:", data);
      })
      .catch((error) => {
        alert("Erro:", error);
      });
  });
