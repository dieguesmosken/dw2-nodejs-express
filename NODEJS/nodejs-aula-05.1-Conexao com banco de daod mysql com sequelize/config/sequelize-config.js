//Importando o Sequelize
import Sequelize from "sequelize";

//Criando a conexão com o banco de dados
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'loja',
    timezone: '-03:00'
})

//Exportando a conexão
export default connection;