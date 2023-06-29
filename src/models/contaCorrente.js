const Sequelize = require('sequelize');
const database = require('../db');

const ContaCorrente = database.define('contaCorrente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios', // Nome da tabela principal
          key: 'id' // Chave primária da tabela principal
        }
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dataAbertura: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    saldo: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
})
 
module.exports = ContaCorrente;