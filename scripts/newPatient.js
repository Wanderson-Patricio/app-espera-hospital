document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const genero = document.getElementById("genero").value
  const cpf = document.getElementById("cpf").value
  const telefone = document.getElementById("telefone").value
  const email = document.getElementById("email").value
  const rua = document.getElementById("rua").value
  const numero = document.getElementById("numero").value
  const complemento = document.getElementById("complemento").value
  const cidade = document.getElementById("cidade").value
  const estado = document.getElementById("estado").value
  const cep = document.getElementById("cep").value
  const prioridade = document.getElementById("prioridade").value
  const observacoes = document.getElementById("observacoes").value
  

  const dadosPaciente = {
    nome,
    dataNascimento,
    genero,
    cpf,
    contato: {
        telefone,
        email
    },
    endereco: {
        rua,
        numero,
        complemento,
        cidade,
        estado,
        cep
    },
    prioridade,
    observacoes
  };

  //TODO: Implementar função que salva o novo paciente
});