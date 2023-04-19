/*
1 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10 //declarando variável a e atribuindo valor de 10
let b = 10 //declarando variável b e atribuindo valor de 10

console.log(b) //exibindo valor da variável b

b = 5  //modificando o valor da variável b para 5
console.log(a, b) //exibindo valores de variáveis a (10) e b (5)
_________________________________________________________________________________________________
2 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10 //declarando variável a e atribuindo valor de 10
let b = 20 //declaranod variavel b e atribuindo valor de 20
c = a //criando variável c e atribuindo o mesmo valor de a (10)
b = c //criando variável b e atribuindo o mesmo valor de c (10)
a = b //criando variável a e atrbuindo o mesmo valor de b (10)

console.log(a, b, c) //exibindo os valores das variáveis a, b e c, todas de 10
_________________________________________________________________________________________________
3 - Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes 
significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?") // let horasDiarias = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?") // let pagamentoDiario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`) // alert(`Voce recebe ${pagamentoDiario/horasDiarias} por hora`)
*/ 

/*
//1 .Construa um programa, seguindo os seguintes passos.. :

let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade); //os dois comandos retornam 'undefined', pois as duas variáveis criadas ainda não tiveram nenhum valor (como string ou number) atribuido

nome = prompt('Informe seu nome: ');
idade = Number(prompt('Informe sua idade: ')); //Number antes de prompt para converter a idade para número

console.log(typeof nome); //retorna string
console.log(typeof idade); //retorna number

console.log("Olá " +nome+ ", você tem " +idade+ " anos");
*/

/*
//2. Escreva um programa que faça 3 perguntas de Sim ou Não ...

let resposta1 = prompt('Você gosta de JavaScript? (sim ou não)');
let resposta2 = prompt('Você mora em São Leopoldo? (sim ou não)');
let resposta3 = prompt('Você vem de carro para a universidade? (sim ou não)');

console.log('Você gosta de JavaScript? '+resposta1);
console.log('Você mora em São Leopoldo? '+resposta2);
console.log('Você vem de carro para a universidade? '+resposta3);
*/

/*
//3. Suponha que temos duas variáveis a e b...

let a = 10;
let b = 25;

let aux = a;

a = b;
b = aux;

console.log ("O novo valor de a é: "+a);
console.log("O novo valor de b é: "+b);
*/

//DESAFIO
//1. Faça um programa que receba dois números do usuário e faça as seguintes operações ...

valor1 = Number(prompt('Informe primeiro valor: '));
valor2 = Number(prompt('Informe segundo valor: '));

x = valor1 + valor2;
y = valor1 * valor2;

console.log('O primeiro número somado ao segundo número resulta em: '+x)
console.log('O primeiro número multiplicado pelo segundo número resulta em: '+y)