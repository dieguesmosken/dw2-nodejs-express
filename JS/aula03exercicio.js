// 1 Crie uma função que a partir da data atual, exiba no console uma nova data da seguinte forma:

// - Uma semana a mais do que o dia atual.

// - Cinco meses a mais do que o mês atual.

// - Dois anos a mais do que o ano atual.



function novaData() {
    const dataAtual = new Date();
    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth();
    const anoAtual = dataAtual.getFullYear();
    const novaData = new Date(anoAtual + 2, mesAtual + 5, diaAtual + 7);
    console.log(novaData);
}
novaData();



// 2 – Crie uma função que receba um determinado salário em real como parâmetro e converta esse salário para as moedas Dólar e Euro. Deverá ser feito a conversão de valores e formatação da moeda. 

// Considere:

// 1 real = 0.20 dólar

// 1 real = 0.19 euro


function conversaoSalario(salario) {
    const dolar = salario * 0.20;
    const euro = salario * 0.19;

    console.log(`Salário em real: ${salario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}\nSalário em dólar: ${dolar.toLocaleString('pt-br', { style: 'currency', currency: 'USD' })}\nSalário em euro: ${euro.toLocaleString('pt-br', { style: 'currency', currency: 'EUR' })}`);
}
conversaoSalario(1000);



// 3 – Crie uma função que receba um nome como parâmetro e 
// exiba no console este nome formatado somente com letras maiúsculas, 
// somente com letras minúsculas, e em seguida exiba o número de letras que esse nome possui.

function formatarNome(nome) {
    console.log(nome.toUpperCase());
    console.log(nome.toLowerCase());
    console.log('o nome ' + nome + ' possui ' + nome.length + ' letras');
}
formatarNome('Matheus');