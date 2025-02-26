// arrays (vetor ou lista)

let produto = "Computador";
console.log(typeof(produto));

let produtos = []
console.log(typeof(produtos));

let Produtos = ['Computador','Notebook','Celular',"Tablet"];

console.log(Produtos);

for (let c in produtos) {
    console.log(`${Number(c)} - ${Produtos[c]}`);
};

Produtos.forEach((produto, i) => {
    console.log(i, produto); 
});


/////////////////////////////////////////////////////////////////////////////

// OBJETOS LITERAIS

console.log('OBJETOS LITERAIS');

const product = {};
console.log(typeof(product));

const Product = {
    nome: 'Computador',
    marca: 'Lenovo',
    preco: 3000,
    descricao: 'PC moderno com bom desempenho'
};

console.log(Product);
console.log(`O ${Product.nome} da marca ${Product.marca} custa apenas R$ ${Product.preco} e é um ${Product.descricao}`);


const productList = [{
    nome: 'Computador',
    marca: 'Lenovo',
    preco: 3000,
    descricao: 'PC moderno com bom desempenho'
},{
    nome: 'Notebook',
    marca: 'Dell',
    preco: 4000,
    descricao: 'Notebook moderno com bom desempenho'
},{
    nome: 'Celular',
    marca: 'Samsung',
    preco: 2000,
    descricao: 'Celular moderno com bom desempenho'
}];
console.log(productList);