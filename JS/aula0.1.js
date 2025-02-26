// declaração de variáveis
// CONST X LET X VAR
// var -> escopo global -> pode ser redeclarada -> pode ser inicializada
// let -> escopo local -> não pode ser redeclarada -> pode ser inicializada
// const -> constante -> não pode ser redeclarada -> precisa ser inicializada


const nome = "matheus diegues"
let idade = 21

console.log(nome)

//Typeof -> retorna o tipo da variável
console.log(typeof nome)

console.log(`O nome do aluno é ${nome} e ele tem ${nome.length} letras`) //template string
//console.log("O nome do aluno é " + nome + " e ele tem " + nome.length + " letras") //concatenação

//toUpperCase -> transforma a string em maiúscula
console.log(nome.toUpperCase())

//toLowerCase -> transforma a string em minúscula
console.log(nome.toLowerCase())

//charAt -> retorna o caractere na posição informada
console.log(nome.charAt(0))

//indexOf -> retorna a posição da primeira ocorrência do caractere informado
console.log(nome.indexOf("d"))

//lastIndexOf -> retorna a posição da última ocorrência do caractere informado
console.log(nome.lastIndexOf("e"))

//replace -> substitui a primeira ocorrência do primeiro parâmetro pelo segundo parâmetro
console.log(nome.replace("e", "a"))

//slice -> retorna a parte da string que começa na posição informada
console.log(nome.slice(0, 7))

//split -> divide a string em um array de substrings
console.log(nome.split(" "))
console.log(nome.split("")[0])

//substring -> retorna a parte da string entre os índices informados
console.log(nome.substring(0, 7))

//trim -> remove os espaços em branco do início e do fim da string
console.log(nome.trim())

//repeat -> repete a string o número de vezes informado
console.log(nome.repeat(2))


//tipos de funções
// funçao simples
function saudacao() {
    console.log("Olá, bem-vindo!")
}
saudacao()

// funçao com parâmetro / argumento
function saudacaoComNome(nome) {
    console.log(`Olá, ${nome}, bem-vindo!`)
    //${} -> placeholder
}
saudacaoComNome("Matheus")
// parametros são as variáveis que a função espera receber
// argumentos são os valores que são passados para a função

// função com mais de um parâmetro
function saudacaoComNomeEIdade(nome, idade) {
    console.log(`Olá, ${nome}, bem-vindo! Você tem ${idade} anos.`)
}
saudacaoComNomeEIdade("Matheus", 21)

// função com parâmetro padrão
function saudacaoComNomeEIdadePadrao(nome = "visitante", idade = 99) {
    console.log(`Olá, ${nome}, bem-vindo! Você tem ${idade} anos.`)
}
saudacaoComNomeEIdadePadrao()


// funçao com retorno
function soma(a, b) {
    return a + b
}
console.log(`A soma de 2 e 3 é ${soma(2, 3)}`)

// funçao com retorno padrão
function somaPadrao(a = 0, b = 0) {
    return a + b
}
console.log(`A soma de 2 e 3 é ${somaPadrao(2, 3)}`)
console.log(`A soma de 2 e 3 é ${somaPadrao(2)}`)
console.log(`A soma de 2 e 3 é ${somaPadrao()}`)

// funçao com mais de um retorno
function parimpar(numero) {
    if (numero % 2 == 0) {
        return "par"
    } else {
        return "ímpar"
    }
}
let num = 3
console.log(`O número ${num} é ${parimpar(num)}`)
console.log(`O número 4 é ${parimpar(4)}`)
console.log(`O número 5 é ${parimpar(5)}`)

// função anônima
const multiplicacao = function(a, b) {
    return a * b
}
console.log(`A multiplicação de 2 e 3 é ${multiplicacao(2, 3)}`)

// arrow function (sem parâmetro)
const ola = () => console.log("Olá, bem-vindo!")
ola()

// arrow function (com um parâmetro)
const quadrado = a => a * a
console.log(`O quadrado de 3 é ${quadrado(3)}`)
// arrow function (com mais de um parâmetro)
const divisao = (a, b) => a / b
console.log(`A divisão de 2 e 3 é ${divisao(2, 3)}`)

// função eval
const calc = function(num1, operador, num2) {
    return eval(`${num1} ${operador} ${num2}`)
}
console.log(`A soma de 2 e 3 é ${calc(2, "+", 3)}`)
// 5 * 5
console.log(`A multiplicação de 5 e 5 é ${calc(5, "*", 5)}`)




