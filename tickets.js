// FILAS DE SENHAS POR PRIORIDADE
let filaSP = [];
let filaSE = [];
let filaSG = [];

// Lista das últimas senhas chamadas (máximo 5)
let ultimasChamadas = [];

// Função para gerar código da senha
function gerarCodigo(tipo) {
    const agora = new Date();
    const YY = String(agora.getFullYear()).slice(2);
    const MM = String(agora.getMonth() + 1).padStart(2, "0");
    const DD = String(agora.getDate()).padStart(2, "0");

    // número sequencial simples
    const seq = Math.floor(Math.random() * 900 + 100);

    return `${YY}${MM}${DD}-${tipo}${seq}`;
}

// Emitir uma nova senha e colocar na fila
function emitirSenha(tipo) {
    const codigo = gerarCodigo(tipo);

    if (tipo === "SP") filaSP.push(codigo);
    if (tipo === "SE") filaSE.push(codigo);
    if (tipo === "SG") filaSG.push(codigo);

    alert("Senha emitida: " + codigo);
}

// Segue a regra SP → (SE|SG)
function chamarProximo() {

    let chamada = null;

    if (filaSP.length > 0) {
        chamada = filaSP.shift();
    }
    else if (filaSE.length > 0) {
        chamada = filaSE.shift();
    }
    else if (filaSG.length > 0) {
        chamada = filaSG.shift();
    }

    if (!chamada) {
        alert("Nenhuma senha na fila.");
        return;
    }

    // Guarda no painel (máximo 5)
    ultimasChamadas.unshift(chamada);
    if (ultimasChamadas.length > 5) ultimasChamadas.pop();

    atualizarPainel();
}

// Atualiza o painel visual
function atualizarPainel() {
    const painel = document.getElementById("listaChamadas");
    painel.innerHTML = "";

    ultimasChamadas.forEach(senha => {
        const li = document.createElement("li");
        li.textContent = senha;
        painel.appendChild(li);
    });
}
