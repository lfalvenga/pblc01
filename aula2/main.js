import promptSync from 'prompt-sync';
const prompt = promptSync();
var i, j, lin, col;
var jogadas = 0;
var jogador1 = 'x';
var jogador2 = 'o';
var vencedor = ' ';
var fimJogo = false;
var tab = [3];

initTable();

while ((fimJogo ==false)){
    
    for(i = 0; i<1; i++){
        lin = parseInt(prompt(`${jogador1} em [linha]: `));
        col = parseInt(prompt(`${jogador1} em [coluna]: `));

        if (!isPositionValid(lin, col)) { 
            console.log("Posição inválida, digite novamente.");
            i--;
            continue;
        }

        if (!isPositionBlank(tab, lin, col)) {
            console.log("Posição já ocupada, escolha outra.");
            i--;
            continue;
        }

        tab[lin][col] = 'x';
        jogadas++;
    }

    if (winCondition(tab)) {
        vencedor = 'x';;
        fimJogo = true;
        continue;
    }

    if (jogadas >= 9) {
        fimJogo = true;
        break;
    }

    printTable();

    for(i = 0; i<1; i++){
        lin = parseInt(prompt(`${jogador2} em [linha]: `));
        col = parseInt(prompt(`${jogador2} em [coluna]: `));

        if (!isPositionValid(lin, col)) {
            console.log("Posição inválida, digite novamente.");
            i--;
            continue;
        }

        if (!isPositionBlank(tab, lin, col)) {
            console.log("Posição já ocupada, escolha outra.");
            i--;
            continue;
        }

        tab[lin][col] = 'o';
        jogadas++;
        
    }

    if (winCondition(tab)) {
        vencedor = 'o';;
        fimJogo = true;
        continue;
    }

    if (jogadas >= 9) {
        fimJogo = true;
        break;
    }

    printTable();
}


if (vencedor == ' '){
    console.log("empate\n");
} else {
    console.log(`${vencedor} venceu!`);
}

printTable();


function isPositionValid(lin, col) {
    if (Number.isNaN(lin) || Number.isNaN(col)) {
        return false;
    }

    return lin >= 0 && lin <= 2 && col >= 0 && col <= 2;
}

function isPositionBlank(tab, lin, col) {
    return tab[lin][col] == ' ';
}

function winCondition(tab) {
    if ((tab[0][0] == 'o' && tab[0][1] == 'o' && tab[0][2] == 'o') ||
        (tab[1][0] == 'o' && tab[1][1] == 'o' && tab[1][2] == 'o') ||
        (tab[2][0] == 'o' && tab[2][1] == 'o' && tab[2][2] == 'o') ||

        (tab[0][0] == 'o' && tab[1][0] == 'o' && tab[2][0] == 'o') ||
        (tab[0][1] == 'o' && tab[1][1] == 'o' && tab[2][1] == 'o') ||
        (tab[0][2] == 'o' && tab[1][2] == 'o' && tab[2][2] == 'o') ||

        (tab[0][0] == 'o' && tab[1][1] == 'o' && tab[2][2] == 'o') ||
        (tab[2][0] == 'o' && tab[1][1] == 'o' && tab[0][2] == 'o')
    ) { return true; }

    if ((tab[0][0] == 'x' && tab[0][1] == 'x' && tab[0][2] == 'x') ||
        (tab[1][0] == 'x' && tab[1][1] == 'x' && tab[1][2] == 'x') ||
        (tab[2][0] == 'x' && tab[2][1] == 'x' && tab[2][2] == 'x') ||

        (tab[0][0] == 'x' && tab[1][0] == 'x' && tab[2][0] == 'x') ||
        (tab[0][1] == 'x' && tab[1][1] == 'x' && tab[2][1] == 'x') ||
        (tab[0][2] == 'x' && tab[1][2] == 'x' && tab[2][2] == 'x') ||

        (tab[0][0] == 'x' && tab[1][1] == 'x' && tab[2][2] == 'x') ||
        (tab[2][0] == 'x' && tab[1][1] == 'x' && tab[0][2] == 'x')
    ) { return true; }

    return false;
}

function printTable() {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            process.stdout.write(`[${tab[i][j]}]`);
        }
        console.log();
    }
}

function initTable() {
    for (i = 0; i < 3; i++) {
        tab[i] = [3];
        for (j = 0; j < 3; j++) {
            tab[i][j] = ' ';
        }
    }
}