//passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body

const body = document.querySelector("body");

const imagemTrocarTema = document.querySelector(".imagem-botao");
//passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema

botaoAlterarTema.addEventListener("click", () => {
  //passo 6 - verificar se a classe do body tem "modo-escuro"
  const modoEscuroAtivo = body.classList.contains("modo-escuro");

  //passo 4 - adicionar a classe modo-escuro no body
  //passo 7 - remover a classe "modo-escuro" do body
  body.classList.toggle("modo-escuro");

  if (modoEscuroAtivo) {
    imagemTrocarTema.setAttribute(
      "src",
      "./projeto-listagem-jogos/src/image/sun.png"
    );
  } else {
    //passo 5 - trocar a imagem do botão de alterar tema para lua

    imagemTrocarTema.setAttribute(
      "src",
      "./projeto-listagem-jogos/src/image/moon.png"
    );
  }
});
