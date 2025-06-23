const setLocalStorage = () => {
  localStorage.setItem(
    "root",
    JSON.stringify({
      isFirstLogin: false,
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

document.addEventListener("DOMContentLoaded", () => {
  const isFirstLogin = JSON.parse(
    localStorage.getItem('root')
  ).isFirstLogin

  if(isFirstLogin === undefined || isFirstLogin){
    setLocalStorage()
  }
});
