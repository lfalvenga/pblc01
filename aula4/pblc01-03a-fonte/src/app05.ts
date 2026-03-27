import promptSync from 'prompt-sync';
const userPrompt = promptSync();
let qtdText = userPrompt("Quantidade de notas:");
let qtd: number = Number(qtdText);
let soma: number = 0;
for (let i = 1; i <= qtd; i++) {
    let nTexto = userPrompt(`N ${i}: `);
    let n: number = Number(nTexto);
    soma += n;}
let media: number = soma / qtd;
console.log("A média do aluno é:", media);

