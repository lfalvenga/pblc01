let dado: unknown = "123";
//console.log(dado.toUpperCase()); // Erro
let texto: string = dado as string;
console.log("Texto (unknown → string):", texto.toUpperCase());