import promptSync from 'prompt-sync';
const userPrompt = promptSync();
let qtdText = userPrompt("Quantidade de notas:");
let qtd = Number(qtdText);
let soma = 0;
for (let i = 1; i <= qtd; i++) {
    let nTexto = userPrompt(`N ${i}: `);
    let n = Number(nTexto);
    soma += n;
}
let media = soma / qtd;
console.log("A média do aluno é:", media);
//# sourceMappingURL=app05.js.map