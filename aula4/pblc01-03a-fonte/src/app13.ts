enum CorFavorita {Vermelho = "vermelho",Azul = "azul",}
function mostrar(cor: CorFavorita) {
    console.log("Sua cor favorita é:", cor);
}
let minhaCor: CorFavorita = CorFavorita.Azul;
mostrar(minhaCor);

