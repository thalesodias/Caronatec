'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Carona.init({
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    data: DataTypes.STRING,
    partida: DataTypes.STRING,
    chegada: DataTypes.STRING,
    tolerancia: DataTypes.STRING,
    local_encontro: DataTypes.STRING,
    vagas: DataTypes.INTEGER,
    valor: DataTypes.STRING,
    descricao: DataTypes.STRING,
    ativa: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    vehicleId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Carona',
  });
  return Carona;
};