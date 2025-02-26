// funções de data, moeda e strings

//objeto literal

const car = {
    marca: 'Ford',
    modelo: 'Focus',
    ano: 2014,

    // métodos
    buzinar(){
        return 'Beep! Beep!';
    }
}

console.log(car.marca, car.modelo, car.ano);
console.log(car.buzinar());

// classe
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // métodos
    buzinar(){
        return 'Beep! Beep!';
    }
}

const carroPopular = new Carro();
carroPopular.marca = 'Fiat';
carroPopular.modelo = 'Uno';
carroPopular.ano = 2012;
console.log(carroPopular.marca, carroPopular.modelo, carroPopular.ano, carroPopular.buzinar());

// Carro esportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = 'Chevrolet';
carroEsportivo.modelo = 'Camaro';
carroEsportivo.ano = 2020;
console.log(carroEsportivo.marca, carroEsportivo.modelo, carroEsportivo.ano, carroEsportivo.buzinar());

// manipulando datas com JavaScript
const dataAtual = new Date();
console.log(typeof(dataAtual));

// pegando o dia atual
const diaAtual = dataAtual.getDate();
console.log(diaAtual);

// pegando o mês atual
const mesAtual = dataAtual.getMonth();
console.log(mesAtual);

// pegando o ano atual
const anoAtual = dataAtual.getFullYear();
console.log(anoAtual);

// pegando o dia da semana atual
const diaSemanaAtual = dataAtual.getDay();
console.log(diaSemanaAtual);




// data atual formatada
const dataAtualFormatada = dataAtual.toLocaleDateString('pt-BR');
console.log(dataAtualFormatada);

// manipulando moedas com JavaScript
const valor = 123.456;
const valorFormatado = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(valorFormatado);

// manipulando strings com JavaScript
const nome = 'Matheus';
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(nome.charAt(0));
console.log(nome.indexOf('e'));
console.log(nome.lastIndexOf('e'));
