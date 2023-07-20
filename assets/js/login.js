let acoes = document.querySelectorAll(".acao");
let paineis = document.querySelectorAll(".painel");

acoes.forEach((acao, index) => {
  acao.addEventListener("click", () => {
    paineis.forEach((painel) => {
      painel.classList.remove("active")
    });
    acoes.forEach((acao) => {
      acao.classList.remove("active");
    });
    paineis[index].classList.add("active");
    acoes[index].classList.add("active");
  });
});

