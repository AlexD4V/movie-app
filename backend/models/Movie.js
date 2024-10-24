const { DataTypes, Sequelize } = require('sequelize');
const config = require('../config/db');

const sequelize = new Sequelize(config.development);

const Movie = sequelize.define('movie', {
  idmovie: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  platform: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'movies',
  timestamps: false,
});

module.exports = { 
  Movie, 
  sequelize 
};