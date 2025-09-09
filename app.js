let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value.trim();
  let mensagemErro = document.getElementById("mensagemErro");

  if (nome === "") {
    mensagemErro.innerText = "⚠️ Digite um nome válido antes de adicionar!";
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = "";
  mensagemErro.innerText = ""; // limpa mensagem de erro
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach(amigo => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    document.getElementById("resultado").innerText = "⚠️ Adicione pelo menos um nome!";
    return;
  }
  let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById("resultado").innerText = "🎉 Sorteado: " + sorteado;
}