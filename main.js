import promptSync from 'prompt-sync';
const prompt = promptSync();
var i, j, lin, col;
var jogadas = 0;
var jogador1 = 'x';
var jogador2 = 'o';
var vencedor = ' ';
var fimJogo = false;
var tab = [3];

for(i = 0; i<3; i++){
    tab[i] = [3];
    for(j = 0; j<3;j++){
        tab[i][j] = ' ';
    }
}

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