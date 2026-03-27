import promptSync from 'prompt-sync';
const prompt = promptSync();
function saudacao(pessoa: string|null) {
    return "Ola, " + pessoa;
}
const nome = prompt("nome: ");
console.log(saudacao(nome));