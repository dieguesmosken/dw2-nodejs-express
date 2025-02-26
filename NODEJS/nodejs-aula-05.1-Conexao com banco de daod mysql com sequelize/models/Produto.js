import { Sequelize } from "sequelize";
import connection from '../config/sequelize-config.js';
//Criando o Model Produto
const Produto = connection.define('produtos',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    preco:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    categoria:{
        type: Sequelize.STRING,
        allowNull: false
    }
})
//Sincronizando o Model com o Banco de Dados
Produto.sync({force:false})
    .then(()=>{
        console.log("Tabela Produtos criada com sucesso!")
    })
    .catch((erro)=>{
        console.log("Ocorreu um erro ao criar a tabela Produtos! \nErro: "+erro)
    })

export default Produto;