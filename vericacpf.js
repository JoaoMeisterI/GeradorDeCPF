var cont1 = 10;
var somaCPF = 0;
var res = 0;
var multiplicaCpf = 0;
var primeiro_digito = 0;
var cpf = "12937861954";

//GERANDO O PRIMEIRO DIGITO DO CPF

var cpf_nove = cpf.substring(0, 9);

var cpf_espaco = cpf_nove.split("").join(" ");

var lista_cpf = cpf_espaco.split(" ");

for (var i = 0; i < lista_cpf.length; i++) {
var n = parseInt(lista_cpf[i]);
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

//GERANDO O SEGUNDO DIGITO DO CPF

var cont2 = 11;
var somaCPF2 = 0;
var res2 = 0;
var n2 = 0;
var multiplicaCpf2 = 0;
var segundo_digito = 0;

lista_cpf.push(primeiro_digito);

for (var j = 0; j < lista_cpf.length; j++) {
n2 = parseInt(lista_cpf[j]);
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

//VALIDANDO O CPF
var cpf_validado = "";
for (var k = 0; k < lista_cpf.length; k++) {
cpf_validado += String(lista_cpf[k]);
}

if (cpf_validado == cpf) {
console.log(`O cpf ${cpf_validado} é Válido`);
} else {
console.log(`O cpf ${cpf} informado é inválido`);
}