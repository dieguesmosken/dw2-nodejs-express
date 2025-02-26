import { Sequelize } from "sequelize";
import connection from '../config/sequelize-config.js';
//Criando o Model Pedido
const Pedido = connection.define('pedidos',{
    numero:{
        type: Sequelize.STRING,
        allowNull: false
    },
    valor:{
        type: Sequelize.FLOAT,
        allowNull: false
    }
})
//Sincronizando o Model com o Banco de Dados
Pedido.sync({force:false})
    .then(()=>{
        console.log("Tabela Pedidos criada com sucesso!")
    })
    .catch((erro)=>{
        console.log("Ocorreu um erro ao criar a tabela Pedidos! \nErro: "+erro)
    })

export default Pedido;