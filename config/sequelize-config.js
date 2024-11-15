//Importando o sequelize
import Sequelize from "sequelize";

//criando os dados de conexão com o banco de dados
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '', 
    //inicie com essa linha comentada pois o banco não está criado 
    database: 'galeriaFilmes',
    timezone: '-03:00'
})

export default connection;