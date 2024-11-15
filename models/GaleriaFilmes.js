import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Filme = connection.define('imagens', {
    file: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    titulo:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    ano: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})

Filme.sync({force: false})
export default Filme;