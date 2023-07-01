const Sequelize = require('sequelize');
const database = require('../db');

const Movimento = database.define('movimento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    contaCorrenteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'contaCorrentes', // Nome da tabela principal
            key: 'id' // Chave primária da tabela principal
          }
        },
    data_Movimento: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    contaCorrente_Origem: {
        type: Sequelize.BIGINT,
    },
    contaCorrente_Destino: {
        type: Sequelize.BIGINT,
    },
    observacao: {
        type: Sequelize.STRING,
    },
})
 
module.exports = Movimento;