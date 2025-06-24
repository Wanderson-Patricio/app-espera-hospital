document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault()

    const nome = document.getElementById("nome").value
    alert(nome)
})