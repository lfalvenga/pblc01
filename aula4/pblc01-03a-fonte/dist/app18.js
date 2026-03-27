class Aluno {
    _nome = '';
    _idade = 18;
    get idade() { return this._idade; }
    set idade(v) {
        if (v >= 18) {
            this._idade = v;
        }
    }
}
const a1 = new Aluno();
a1.idade = 22;
console.log(a1.idade);
export {};
//# sourceMappingURL=app18.js.map