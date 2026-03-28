// script.js

function chamarViado() {
    const nomeInput = document.getElementById('nomeInput').value.trim();
    const nomeDisplay = document.getElementById('nomeDisplay');
    const mensagem = document.getElementById('mensagem');

    if (nomeInput === "") {
        nomeDisplay.innerHTML = "??";
        mensagem.innerHTML = "Digita o nome, porra!";
        return;
    }

    const nomeLower = nomeInput.toLowerCase();

    // Só esses dois nomes são viado
    if (nomeLower === "danilo" || nomeLower === "lierk") {
        
        nomeDisplay.classList.add('viado');
        nomeDisplay.innerHTML = nomeInput.toUpperCase() + " É VIADO!!!";

        const mensagens = [
            "CONFIRMADO PELO DETECTOR 3000 🔥",
            "SEM CHANCE DE ERRO, É VIADO MESMO KKKK",
            "O RADAR NUNCA ERRA",
            "VIADÃO LEVEL MAX",
            "TODO MUNDO JÁ SABIA",
            "ACEITA QUE DÓI MENOS",
            "VIADO COM ORGULHO",
            "O MAIOR VIADO DA QUEBRADA"
        ];

        const msgAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        mensagem.innerHTML = msgAleatoria;

        criarConfetes();
    } 
    else {
        // QUALQUER OUTRO NOME → não é viado
        nomeDisplay.classList.remove('viado');
        nomeDisplay.innerHTML = nomeInput.toUpperCase();
        mensagem.innerHTML = "NÃO É VIADO ✅";
    }
}

// Função de confetes (só quando é viado)
function criarConfetes() {
    const cores = ['#ff0000', '#00ff00', '#ffff00', '#00ffff', '#ff00ff'];
    const emojis = ['🟥', '🟩', '🟨', '🟦', '🟪', '🌈', '🔥'];

    for (let i = 0; i < 100; i++) {
        const confete = document.createElement('div');
        confete.className = 'confete';
        confete.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        confete.style.left = Math.random() * 100 + 'vw';
        confete.style.animationDuration = (Math.random() * 3 + 3) + 's';
        confete.style.opacity = Math.random() * 0.7 + 0.5;
        confete.style.color = cores[Math.floor(Math.random() * cores.length)];
        confete.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
        
        document.body.appendChild(confete);

        setTimeout(() => {
            confete.remove();
        }, 7000);
    }
}

// Enter para confirmar
document.getElementById('nomeInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        chamarViado();
    }
});