var CorFavorita;
(function (CorFavorita) {
    CorFavorita["Vermelho"] = "vermelho";
    CorFavorita["Azul"] = "azul";
})(CorFavorita || (CorFavorita = {}));
function mostrar(cor) {
    console.log("Sua cor favorita é:", cor);
}
let minhaCor = CorFavorita.Azul;
mostrar(minhaCor);
export {};
//# sourceMappingURL=app13.js.map