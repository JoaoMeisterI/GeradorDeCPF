# letras = "aaaa"

# primeiro = letras[0]

# print(primeiro*len(letras))



"""

CPF: 746.824.890-70

Colete a soma dos 9 primeiros dígitos do cpf
multiplicando cada um dos valores por uma 
contagem regressiva de 10

EX: 746.824.890-70 (746824890)
    
   10  9   8   7   6   5   4   3   2  
   7   4   6   8   2   4   8   9   0
   70  36  48  56  12  20  32  27  0

Somar todos os resultado
70+36+48+56+12+20+32+27+0 = 301
Multiplica o resultado por 10
301*10 = 3010
pega o resto da divisão do valor obtido anteriormente por 11
3010 % 11 = 7
Se o resultado obtido for maior que 9 
resultado = 0
se o resultado for menor que nove
resultado = valor da conta

o primério digito do Cpf é 7


"""

#GERANDO CPF ALEATÓRIO

import random


num = 0
cpf_nove_aleatorio = ''

for i in range(1,10):
    numAleatorio = str(random.randint(1,9))
    cpf_nove_aleatorio+=numAleatorio



cont1 = 10
somaCPF = 0
res = 0
multiplicaCpf = 0
primeiro_digito = 0
cpf = cpf_nove_aleatorio

#GERANDO O PRIMEIRO DIGITO DO CPF

cpf_nove = cpf[:9]



cpf_espaco = (" ").join(cpf_nove)

lista_cpf = cpf_espaco.split()

for numeros in lista_cpf:
    n = int(numeros)
    
    res = n*cont1
    
    somaCPF += res
    
    cont1-=1
    
    
    
multiplicaCpf = somaCPF * 10


primeiro_digito = multiplicaCpf % 11

if primeiro_digito > 9:
    primeiro_digito = 0
else:
    primeiro_digito = primeiro_digito
    



#GERANDO O SEGUNDO DIGITO DO CPF

cont2 = 11
somaCPF2 = 0
res2 = 0
n2 = 0
multiplicaCpf2 = 0
segundo_digito = 0


lista_cpf.append(primeiro_digito)

for numeros in lista_cpf:
    n2 = int(numeros)
    
    res2 = n2*cont2
    
    somaCPF2 += res2
    
    cont2-=1
    
    

multiplicaCpf2 = somaCPF2*10
segundo_digito = multiplicaCpf2 % 11

if segundo_digito > 9:
    segundo_digito = 0
else:
    segundo_digito = segundo_digito

lista_cpf.append(segundo_digito)



cpf_validado = ''
for numeros in lista_cpf:
    numeros = str(numeros)
    
    cpf_validado += numeros
    
    
print(cpf_validado)