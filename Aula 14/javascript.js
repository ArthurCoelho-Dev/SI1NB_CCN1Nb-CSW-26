var IssoEumaString = 'Isso é uma String';
let IssoEumNumero = 42;
const IssoEumBooleano = true;
let IssoTambemEumaString = '42';

if (IssoEumNumero === IssoTambemEumaString) {
    console.log("As String são Iguais");
} else {
    console.log("As Strings são Diferentes");
}

console.log(IssoEumNumero + IssoTambemEumaString);

console.log(IssoEumNumero + IssoEumNumero)

var IssoEumaGlobal = "Eu sou uma variável Global";
{
let IssoEumaLocal = "Eu sou uma variávek Local"
console.log(IssoEumaGlobal)
console.log(IssoEumaLocal)
}

console.log(IssoEumaGlobal);

let floatvalue1 = 0.06
let floatvalue2 = 0.01
let sum = floatvalue1 + floatvalue2;

console.log(sum. toPrecision(2))

for (let numeros = 0; numeros < 5; numeros ++) {
  console.log(numeros);
  console.log(numeros*2);
}

let j = 0;
while (j < 5) {
console.log(j*2+1);
j++;
}
