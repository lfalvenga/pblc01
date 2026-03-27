import promptSync from 'prompt-sync';
const prompt = promptSync();
function saudacao(pessoa) {
    return "Ola, " + pessoa;
}
const nome = prompt("nome: ");
console.log(saudacao(nome));
//# sourceMappingURL=app02.js.map