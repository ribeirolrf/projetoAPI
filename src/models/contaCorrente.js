const Sequelize = require('sequelize');
const database = require('../db');

const ContaCorrente = database.define('contaCorrente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    numero: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        autoIncrement: true,
        allowNull: false,
    },
    dataAbertura: {
        type: Sequelize.DATE,
        autoIncrement: true,
        allowNull: false,
    },
    saldo: {
        type: Sequelize.DOUBLE,
        autoIncrement: true,
        allowNull: false,
    },
})
 
module.exports = ContaCorrente;