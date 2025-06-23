/**
 * Carrega dados de um arquivo JSON local.
 * Esta função é assíncrona e espera pela resposta da requisição e pela conversão para JSON.
 *
 * @returns {Promise<Object>} Uma Promise que resolve para o objeto JavaScript contendo os dados do arquivo `data.json`.
 * A Promise será rejeitada se houver um erro na requisição (por exemplo, arquivo não encontrado,
 * problemas de rede ou JSON inválido).
 */
const loadData = () => {
  // const dataPath = "../data/data.json";
  // const response = await fetch(dataPath);
  // const data = await response.json();
  // return data;
  return JSON.parse(localStorage.getItem("root"));
};

/**
 * Formata uma URL de vídeo (presumivelmente do YouTube) para um formato de incorporação (embed).
 * Isso permite que a URL seja usada diretamente em um `<iframe>` para exibir o vídeo.
 *
 * @param {string} url A URL original do vídeo (ex: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=10s").
 * @returns {string} A URL formatada para incorporação (ex: "https://www.youtube.com/embed/dQw4w9WgXcQ").
 */
const formatVideoUrl = (url) => {
  const newUrl = url.replace("watch?v=", "embed/").split("&")[0];
  return newUrl;
};

/**
 * Atualiza a fonte (src) de um elemento de vídeo (assumindo um `<iframe>` ou `<video>` com o ID "video")
 * para uma nova URL, mas apenas se a nova URL for diferente da atual.
 * Isso ajuda a evitar recarregamentos desnecessários do vídeo.
 *
 * @param {string} url A nova URL do vídeo a ser definida. Esta URL será formatada internamente.
 */
const updateVideo = (url) => {
  const videoElement = document.getElementById("video");
  const currentSrc = videoElement.src;
  const newSrc = formatVideoUrl(url);
  if (currentSrc !== newSrc) {
    videoElement.src = newSrc;
  }
};

/**
 * Atualiza a exibição da senha e do número do guichê na interface do usuário.
 * Esta função localiza elementos HTML específicos pelo seu ID e classe,
 * e atualiza o conteúdo de texto deles apenas se o novo valor for diferente do atual,
 * otimizando assim as atualizações do DOM.
 *
 * @param {string} senha O novo número da senha a ser exibido (por exemplo, "A015", "B003").
 * @param {string} guiche O novo número do guichê a ser exibido (por exemplo, "1", "2A").
 */
const callNewPatient = (senha, guiche) => {
  const senhaDiv = document.querySelector("#senha .value");
  if (senhaDiv.innerHTML !== senha) {
    senhaDiv.innerHTML = senha;
  }
  const guicheDiv = document.querySelector("#guiche .value");
  if (guicheDiv.innerHTML !== guiche) {
    guicheDiv.innerHTML = guiche;
  }
};

/**
 * Atualiza a exibição das últimas três senhas chamadas e seus respectivos guichês na interface do usuário.
 * Esta função espera um array de objetos, onde cada objeto contém uma 'senha' e um 'guiche'.
 * Ela localiza elementos HTML específicos pelos seus IDs ('senha-1' a 'senha-3' e 'guiche-1' a 'guiche-3')
 * e preenche seus conteúdos com os dados fornecidos.
 *
 * É importante que os elementos HTML com esses IDs existam no DOM e que o array `lastCalled`
 * contenha pelo menos três objetos para evitar erros de índice.
 *
 * @param {Array<Object>} lastCalled Um array de objetos, onde cada objeto representa uma chamada anterior.
 * Espera-se que cada objeto tenha as propriedades `senha` (string) e `guiche` (string).
 * Exemplo: `[{ senha: "A001", guiche: "1" }, { senha: "B002", guiche: "2" }, { senha: "C003", guiche: "3" }]`
 */
const updateLastCalled = (lastCalled) => {
  const senha1 = document.getElementById("senha-1");
  const senha2 = document.getElementById("senha-2");
  const senha3 = document.getElementById("senha-3");
  const guiche1 = document.getElementById("guiche-1");
  const guiche2 = document.getElementById("guiche-2");
  const guiche3 = document.getElementById("guiche-3");

  if (senha1 && guiche1) {
    senha1.innerHTML = lastCalled[0].senha;
    guiche1.innerHTML = lastCalled[0].guiche;
  }
  if (senha2 && guiche2) {
    senha2.innerHTML = lastCalled[1].senha;
    guiche2.innerHTML = lastCalled[1].guiche;
  }
  if (senha3 && guiche3) {
    senha3.innerHTML = lastCalled[2].senha;
    guiche3.innerHTML = lastCalled[2].guiche;
  }
};

/**
 * Configura um intervalo que carrega dados do arquivo `data.json` a cada segundo (1000ms)
 * e, em seguida, usa a URL do vídeo obtida desses dados para atualizar o player de vídeo na página.
 *
 * Este intervalo continuará a ser executado indefinidamente até que seja explicitamente parado
 * com `clearInterval()`.
 */
const PatientInterval = setInterval(() => {
  const data = loadData();
  callNewPatient(data.senha.atual.senha, data.senha.atual.guiche);
  updateLastCalled(data.senha.passadas);
  updateVideo(data.video.url);
}, 1000);
