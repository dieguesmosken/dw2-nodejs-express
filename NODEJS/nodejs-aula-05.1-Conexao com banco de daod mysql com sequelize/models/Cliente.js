import { Sequelize } from "sequelize";
import connection from '../config/sequelize-config.js';
//Criando o Model Cliente
const Cliente = connection.define('clientes',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false
    }
})
//Sincronizando o Model com o Banco de Dados
Cliente.sync({force:false})
    .then(()=>{
        console.log("Tabela Clientes criada com sucesso!")
    })
    .catch((erro)=>{
        console.log("Ocorreu um erro ao criar a tabela Clientes! \nErro: "+erro)
    })
export default Cliente;