document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("msg").value;
    alert("Boa Sorte");
});
function redirecionar() {
    window.location.href = "https://www.globo.com";
}
