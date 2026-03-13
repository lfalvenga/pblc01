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
    
    for(i = 0; i<1; i++){
        lin = parseInt(prompt(`${jogador1} em [linha]: `));
        col = parseInt(prompt(`${jogador1} em [coluna]: `));

        if(lin < 0 || lin > 2 || col < 0 || col > 2){
            console.log("Linha ou coluna escolhida não existe, tente novamente.");
            i--;
        } else {
            if(tab[lin][col] != ' '){
                console.log("Linha e coluna escolhida já foram preenchidas, tente novamente.");
                i--;
            } else{
            tab[lin][col] = 'x';
            }
        }
    }

    for(i = 0; i < 3; i++){
    for(j = 0; j < 3; j++){
        process.stdout.write(`[${tab[i][j]}]`);
    }
    console.log();
    }

    for(i = 0; i<1; i++){
        lin = parseInt(prompt(`${jogador2} em [linha]: `));
        col = parseInt(prompt(`${jogador2} em [coluna]: `));

        if(lin < 0 || lin > 2 || col < 0 || col > 2){
            console.log("Linha ou coluna escolhida não existe, tente novamente.");
            i--;
        } else {
            if(tab[lin][col] != ' '){
                console.log("Linha e coluna escolhida já foram preenchidas, tente novamente.");
                i--;
            } else{
            tab[lin][col] = 'o';
            }
        }
    }

    for(i = 0; i < 3; i++){
    for(j = 0; j < 3; j++){
        process.stdout.write(`[${tab[i][j]}]`);
    }
    console.log();
    }

    jogadas++;

}

// (d)

if (vencedor == ' '){
    console.log("empate\n");
} else {
    console.log(`${vencedor} venceu`);
}