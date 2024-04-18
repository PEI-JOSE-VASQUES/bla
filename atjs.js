
const larguraTela = window.innerWidth;
console.log(larguraTela);
var nome_titulo = window.document.getElementById("nome_titulo");
var caixa_tabela = window.document.getElementById("caixa_tabela");
var inputAluno  = window.document.getElementById("inputAluno");

if (larguraTela < 1317 && larguraTela > 1223) {
    nome_titulo.style.fontSize = "80px";
}
else if (larguraTela < 1223 && larguraTela > 1116) {
    nome_titulo.style.fontSize = "70px";
}
else if (larguraTela < 1116 && larguraTela > 1051) {
    nome_titulo.style.fontSize = "60px";
}
else if (larguraTela < 1051) {
    nome_titulo.style.fontSize = "15px";
    caixa_tabela.style.width = "700px";
    inputAluno.style.width = "400px";
}
