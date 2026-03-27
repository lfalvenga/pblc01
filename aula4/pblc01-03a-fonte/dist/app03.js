let maxNumber = Number.MAX_SAFE_INTEGER; // 9007199254740991
console.log(maxNumber + 1); // 9007199254740992
console.log(maxNumber + 2); // 9007199254740992 (erro de precisão!)
let bigInt = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
console.log(bigInt); // 9007199254740993n (preciso)
export {};
//# sourceMappingURL=app03.js.map