/**
 * Declaração de variáveis
 * CONST X LET X VAR
 * var -> escopo global -> pode ser redeclarada -> pode ser inicializada
 * let -> escopo local -> não pode ser redeclarada -> pode ser inicializada
 * const -> constante -> não pode ser redeclarada -> precisa ser inicializada
 */

/**
 * Nome do aluno
 * @type {string}
 */
const nome = "matheus diegues";

/**
 * Idade do aluno
 * @type {number}
 */
let idade = 21;

console.log(nome);

/**
 * Retorna o tipo da variável
 * @param {any} variable - A variável a ser verificada
 * @returns {string} - O tipo da variável
 */
console.log(typeof nome);

console.log(`O nome do aluno é ${nome} e ele tem ${nome.length} letras`); //template string

console.log(nome.toUpperCase());

console.log(nome.toLowerCase());

console.log(nome.charAt(0));

console.log(nome.indexOf("d"));

console.log(nome.lastIndexOf("e"));

console.log(nome.replace("e", "a"));

console.log(nome.slice(0, 7));

console.log(nome.split(" "));
console.log(nome.split("")[0]);

console.log(nome.substring(0, 7));

console.log(nome.trim());

console.log(nome.repeat(2));

/**
 * Função simples que exibe uma saudação no console
 */
function saudacao() {
    console.log("Olá, bem-vindo!");
}
saudacao();

/**
 * Função que exibe uma saudação com nome no console
 * @param {string} nome - O nome da pessoa a ser saudada
 */
function saudacaoComNome(nome) {
    console.log(`Olá, ${nome}, bem-vindo!`);
}
saudacaoComNome("Matheus");

/**
 * Função que exibe uma saudação com nome e idade no console
 * @param {string} nome - O nome da pessoa a ser saudada
 * @param {number} idade - A idade da pessoa a ser saudada
 */
function saudacaoComNomeEIdade(nome, idade) {
    console.log(`Olá, ${nome}, bem-vindo! Você tem ${idade} anos.`);
}
saudacaoComNomeEIdade("Matheus", 21);

/**
 * Função que exibe uma saudação com nome e idade padrão no console
 * @param {string} [nome="visitante"] - O nome da pessoa a ser saudada
 * @param {number} [idade=99] - A idade da pessoa a ser saudada
 */
function saudacaoComNomeEIdadePadrao(nome = "visitante", idade = 99) {
    console.log(`Olá, ${nome}, bem-vindo! Você tem ${idade} anos.`);
}
saudacaoComNomeEIdadePadrao();

/**
 * Função que retorna a soma de dois números
 * @param {number} a - O primeiro número
 * @param {number} b - O segundo número
 * @returns {number} - A soma dos dois números
 */
function soma(a, b) {
    return a + b;
}
console.log(`A soma de 2 e 3 é ${soma(2, 3)}`);

/**
 * Função que retorna a soma de dois números com valores padrão
 * @param {number} [a=0] - O primeiro número
 * @param {number} [b=0] - O segundo número
 * @returns {number} - A soma dos dois números
 */
function somaPadrao(a = 0, b = 0) {
    return a + b;
}
console.log(`A soma de 2 e 3 é ${somaPadrao(2, 3)}`);
console.log(`A soma de 2 e 3 é ${somaPadrao(2)}`);
console.log(`A soma de 2 e 3 é ${somaPadrao()}`);

/**
 * Função que verifica se um número é par ou ímpar
 * @param {number} numero - O número a ser verificado
 * @returns {string} - "par" se o número for par, "ímpar" se o número for ímpar
 */
function parimpar(numero) {
    if (numero % 2 == 0) {
        return "par";
    } else {
        return "ímpar";
    }
}
let num = 3;
console.log(`O número ${num} é ${parimpar(num)}`);
console.log(`O número 4 é ${parimpar(4)}`);
console.log(`O número 5 é ${parimpar(5)}`);

/**
 * Função anônima que retorna a multiplicação de dois números
 * @param {number} a - O primeiro número
 * @param {number} b - O segundo número
 * @returns {number} - A multiplicação dos dois números
 */
const multiplicacao = function(a, b) {
    return a * b;
}
console.log(`A multiplicação de 2 e 3 é ${multiplicacao(2, 3)}`);

/**
 * Arrow function que exibe uma saudação no console
 */
const ola = () => console.log("Olá, bem-vindo!");
ola();

/**
 * Arrow function que retorna o quadrado de um número
 * @param {number} a - O número a ser elevado ao quadrado
 * @returns {number} - O quadrado do número
 */
const quadrado = a => a * a;
console.log(`O quadrado de 3 é ${quadrado(3)}`);

/**
 * Arrow function que retorna a divisão de dois números
 * @param {number} a - O primeiro número
 * @param {number} b - O segundo número
 * @returns {number} - A divisão dos dois números
 */
const divisao = (a, b) => a / b;
console.log(`A divisão de 2 e 3 é ${divisao(2, 3)}`);

/**
 * Função que calcula uma operação matemática usando eval
 * @param {number} num1 - O primeiro número
 * @param {string} operador - O operador matemático
 * @param {number} num2 - O segundo número
 * @returns {number} - O resultado da operação
 */
const calc = function(num1, operador, num2) {
    return eval(`${num1} ${operador} ${num2}`);
}
console.log(`A soma de 2 e 3 é ${calc(2, "+", 3)}`);
console.log(`A multiplicação de 5 e 5 é ${calc(5, "*", 5)}`);



//iife
(function() {
    console.log("IIFE");
})();

//iife com parâmetros
(function(a, b) {
    console.log(a + b);
})(2, 3);
