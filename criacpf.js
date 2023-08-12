let num = 0;
let cpf_nove_aleatorio = '';

for (let i = 1; i < 10; i++) {
    let numAleatorio = Math.floor(Math.random() * 10);
    cpf_nove_aleatorio += numAleatorio.toString();
}

let cont1 = 10;
let somaCPF = 0;
let res = 0;
let multiplicaCpf = 0;
let primeiro_digito = 0;
let cpf = cpf_nove_aleatorio;

// GERANDO O PRIMEIRO DIGITO DO CPF
let cpf_nove = cpf.substring(0, 9);
let lista_cpf = cpf_nove.split(' ');

for (let numeros of lista_cpf) {
    let n = parseInt(numeros);
    res = n * cont1;
    somaCPF += res;
    cont1 -= 1;
}

multiplicaCpf = somaCPF * 10;
primeiro_digito = multiplicaCpf % 11;

if (primeiro_digito > 9) {
    primeiro_digito = 0;
} else {
    primeiro_digito = primeiro_digito;
}

// GERANDO O SEGUNDO DIGITO DO CPF
let cont2 = 11;
let somaCPF2 = 0;
let res2 = 0;
let n2 = 0;
let multiplicaCpf2 = 0;
let segundo_digito = 0;
lista_cpf.push(primeiro_digito);

for (let numeros of lista_cpf) {
    n2 = parseInt(numeros);
    res2 = n2 * cont2;
    somaCPF2 += res2;
    cont2 -= 1;
}

multiplicaCpf2 = somaCPF2 * 10;
segundo_digito = multiplicaCpf2 % 11;

if (segundo_digito > 9) {
    segundo_digito = 0;
} else {
    segundo_digito = segundo_digito;
}

lista_cpf.push(segundo_digito);

let cpf_validado = '';
for (let numeros of lista_cpf) {
    cpf_validado += numeros
}

console.log(cpf_validado);
