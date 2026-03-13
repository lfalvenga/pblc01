import promptSync from 'prompt-sync';
const prompt = promptSync();
var i, j, lin, col;
var jogadas = 0;
var jogador1 = 'x';
var jogador2 = 'o';
var vencedor = ' ';
var fimJogo = false;
var tab = [3];

// (a)

while ((jogadas < 9) && (fimJogo ==false)){
    // (b)

    lin = parseInt(prompt(`${jogador1} em [linha]: `));
    col = parseInt(prompt(`${jogador1} em [coluna]: `));

    lin = parseInt(prompt(`${jogador2} em [linha]: `));
    col = parseInt(prompt(`${jogador2} em [coluna]: `));

    jogadas++;
    // (c)
}

// (d)

if (vencedor == ' '){
    console.log("empate\n");
} else {
    console.log(`${vencedor} venceu`);
}