//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let novoAmigoDoCoffeasack = [];
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    if (nome != "") {
        novoAmigoDoCoffeasack.push(nome);
        alert("Amigo adicionado.");
        limparLinha();
        } else {
        alert("Parece que faltou um nome.");
    }
};

function limparLinha() {
    document.getElementById("amigo").value = "";
    listarAmigo();
};

function listarAmigo() {
    let textLista = "";
     for (let i = 0; i < novoAmigoDoCoffeasack.length; i++) {
       textLista += `<li>${novoAmigoDoCoffeasack[i]}</li>`;
    };
    document.getElementById("listaAmigos").innerHTML = textLista;
};

function sortearAmigo() {
    if (novoAmigoDoCoffeasack.length == 0) {
        alert("Não há amigos para sortear");
    } else {
        let amigoSorteado = novoAmigoDoCoffeasack[Math.floor(novoAmigoDoCoffeasack.length * Math.random())];
        alert(`Seu amigo sorteado foi: ${amigoSorteado}`);
        document.getElementById("resultado").innerHTML = `<p>Seu amigo sorteado foi: ${amigoSorteado}</p>`
    }
}