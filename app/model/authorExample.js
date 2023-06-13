//Exemple de model

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); // ici on ne le précise pas mais on se réfère a index.js dans model

class Author extends Sequelize.Model {}


Author.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'author',
        }
    );

module.exports = Author;