const Sequelize = require('sequelize');
const database = require('../db');
const Pessoa = require('./pessoa');

const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    pessoa_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

Usuario.belongsTo(Pessoa, {
     foreignKey: 'pessoa.id',
});
 
module.exports = Usuario;