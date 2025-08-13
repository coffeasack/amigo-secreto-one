//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let novoAmigoDoCoffeasack = [];
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    if (nome != "") {
        novoAmigoDoCoffeasack.push(nome);
        limparLinha();
        } else {
        alert("Parece que faltou um nome.");
    }
};
//Nesta função, nós pegamos o valor do elemento "amigo" no HTML e o inserimos no array novoAmigoDoCoffeasack, mas só caso o nome não esteja vazio. Depois, limpamos a linha com a função abaixo.

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

//Desta vez, a função limpa a barra de digitação de nomes para que haja uma nova entrada no futuro. Depois, chama a função listarAmigo, que adiciona um nome na lista logo depois que a barra de digitação é limpa.

function sortearAmigo() {
    if (novoAmigoDoCoffeasack.length == 0) {
        alert("Não há amigos para sortear");
    } else {
        let amigoSorteado = novoAmigoDoCoffeasack[Math.floor(novoAmigoDoCoffeasack.length * Math.random())];
        alert(`Seu amigo sorteado foi: ${amigoSorteado}`);
        document.getElementById("resultado").innerHTML = `<p>Seu amigo sorteado foi: ${amigoSorteado}</p>`
    }
};

//Aqui nós usamos o Math.floor para arredondar o número de indices(index ou "slots" do array) que o Math.random define ao multiplicá-lo pelo número de slots do novoAmigoDoCoffeasack. Não adicionei o método para impedir que o último sorteado seja novamente sorteado.