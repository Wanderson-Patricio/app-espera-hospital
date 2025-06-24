const setLocalStorage = () => {
  localStorage.setItem(
    "root",
    JSON.stringify({
      video: {
        url: "",
      },
      senha: {
        atual: {
          senha: "",
          guiche: "",
        },
        passadas: [
          {
            senha: "",
            guiche: "",
          },
          {
            senha: "",
            guiche: "",
          },
          {
            senha: "",
            guiche: "",
          },
        ],
      },
    })
  );


};

const goTo = (endpoint) => {
  const url = `templates/${endpoint}.html`
  if(endpoint === 'chamada') window.open(url, '_blank')
  else location.href = url
}

document.addEventListener("DOMContentLoaded", () => {
  const root = JSON.parse(
    localStorage.getItem('root')
  )
  
  if(root === null){
    setLocalStorage()
  }
});
