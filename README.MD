# Catálogo da Livraria Página Viva

Página de cadastro de livro desenvolvida para a atividade prática de
HTML, CSS e JavaScript.

## Estrutura do projeto
```
projeto/
├── index.html
├── css/
│   └── estilo.css
├── imagens/
│   └── capa-livro.png
├── js/
│   └── script.js
└── README.md
```
## Respostas

**1. Qual é o papel de um servidor Web ao carregar esta página?**

O servidor Web recebe a requisição HTTP enviada pelo navegador por exemplo,
um pedido pelo arquivo index.html e devolve os recursos solicitados —
o HTML, o CSS css/estilo.css, o JavaScript js/script.js e a imagem
imagens/capa-livro.png — para que o navegador possa montar e exibir a
página completa.

**2. Caminho relativo a partir de paginas/sobre.html até imagens/capa-livro.png**

O caminho correto seria:


../imagens/capa-livro.png

Isso acontece porque sobre.html está dentro da pasta paginas/ um nível
abaixo da raiz do projeto. O ../ sobe um nível na árvore de pastas,
saindo de paginas/ e voltando para a raiz projeto de onde é
possível entrar em imagens/ e alcançar o arquivo capa-livro.png. Sem o
../ o navegador procuraria por uma pasta imagens/ dentro de
paginas/ que não existe

**3. Boas práticas de escrita HTML aplicadas na Etapa 1**

- Todas as tags foram corretamente aninhadas e fechadas, mantendo uma
  hierarquia clara entre header main article section e footer
- Nenhum id foi repetido na página cada id como btn-adicionar
  carrinho contador e contato, aparece uma única vez
- A indentação segue a hierarquia dos elementos, facilitando a leitura da
  estrutura aninhada por exemplo, os campos do formulário dentro de
  #contato dentro de <main>.

Essas práticas foram aplicadas porque tornam o código mais legível para
outros desenvolvedores reduzem erros de renderização e facilitam a
manutenção futura da página.
