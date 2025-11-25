// Captura o formulário
const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede recarregamento da página

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    // Validação extremamente simples
    if (usuario === "admin" && senha === "1234") {
        // Se login correto → redireciona para tickets.html
        window.location.href = "tickets.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
});

