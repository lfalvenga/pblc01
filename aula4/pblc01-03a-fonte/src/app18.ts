class Aluno{
    public _nome : string = '';
    public _idade : number = 18;
    get idade(): number { return this._idade;}
    set idade(v:number) {
        if (v >= 18){
            this._idade = v;
        }
    }
}

const a1 : Aluno = new Aluno();

a1.idade = 22;
console.log(a1.idade);


