/**
 *
 * @param {String} url
 */
const isYoutubeUrl = (url) => {
  // Verifica se a URL é uma string válida
  if (typeof url !== "string" || url === null) {
    return false;
  }

  // Padrões comuns para URLs de vídeo do YouTube
  const youtubePatterns = [
    /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)(&.*)?$/,
    /^(https?:\/\/)?(www\.)?youtu\.be\/([a-zA-Z0-9_-]+)(\?.*)?$/,
    /^(https?:\/\/)?(www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)(\?.*)?$/,
    /^(https?:\/\/)?(www\.)?youtube\.com\/v\/([a-zA-Z0-9_-]+)(\?.*)?$/,
    /^(https?:\/\/)?(www\.)?youtube\.com\/live\/([a-zA-Z0-9_-]+)(\?.*)?$/, // Para links de lives
  ];

  // Itera sobre os padrões e verifica se a URL corresponde a algum deles
  for (const pattern of youtubePatterns) {
    if (pattern.test(url)) {
      return true;
    }
  }

  return false;
};

document.getElementById("load-video").addEventListener("click", () => {
  const url = document.getElementById("video-url").value;
  if (!url || !isYoutubeUrl(url)) {
    alert("Por favor, insira uma URL de vídeo válida.");
    return;
  }
  const root = JSON.parse(localStorage.getItem("root"));
  root.video.url = url;
  root.video.url = url;
  localStorage.setItem("root", JSON.stringify(root));
});
