
var tituloDoLivro = "O Rei de Amarelo";
var totalItens = 0;

var botao = document.getElementById("btn-adicionar");
var carrinho = document.getElementById("carrinho");
var contador = document.getElementById("contador");

function adicionarAoCarrinho() {
  var item = document.createElement("li");
  item.textContent = "1x " + tituloDoLivro;
  carrinho.appendChild(item);

  totalItens = totalItens + 1;
  contador.textContent = totalItens;
}

botao.addEventListener("click", adicionarAoCarrinho);
