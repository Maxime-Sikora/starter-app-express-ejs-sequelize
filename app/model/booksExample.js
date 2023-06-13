//Exemple de model

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); // ici on ne le précise pas mais on se réfère a index.js dans model

class Books extends Sequelize.Model {}


Books.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'books',
        }
    );

module.exports = Books;