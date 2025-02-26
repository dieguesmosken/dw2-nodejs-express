// Importando o Express com ES6 Modules
import express from 'express'
// Iniciando o Express na variável app
const app = express()

// Importando o Sequelize
import connection from './config/sequelize-config.js'
// Importando os Models
// import Cliente from './models/Cliente.js'
// import Pedido from './models/Pedido.js'
// import Produto from './models/Produto.js'
// Sincronizando os Models com o Banco de Dados
// Importando os Controllers (onde estão as rotas) 
import PedidosController from "./controllers/PedidosController.js" 
import ClientesController from "./controllers/ClientesController.js"
import ProdutosController from "./controllers/ProdutosController.js"

//realizando a conexão com o banco de dados
connection.authenticate()
    .then(()=>{
        console.log("Conexão com o banco de dados realizada com sucesso!")
    })
    .catch((erro)=>{
        console.log("Ocorreu um erro ao se conectar com o banco de dados! \nErro: "+erro)
    })

//Criando o banco de dados se ele não existir
connection.query(`CREATE DATABASE IF NOT EXISTS loja;`).then(()=>{
        console.log("Banco de dados criado com sucesso!")
    }).catch((erro)=>{
        console.log("Ocorreu um erro ao criar o banco de dados! \nErro: "+erro)
    })
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))
// configurando o express para receber dados de formulários
app.use(express.urlencoded({extended:false}))

// Definindo o uso das rotas dos Controllers
app.use("/", PedidosController)
app.use("/", ClientesController)
app.use("/", ProdutosController)


// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})




// INICIA O SERVIDOR NA PORTA 8080
app.listen(8080,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})