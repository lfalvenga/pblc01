type Nome = string;
type Idade = number;
type Pessoa = {
  nome: Nome;
  idade: Idade;
};
const aluno: Pessoa = {
  nome: "Ana",
  idade: 22
};
console.log("Aluno:", aluno);