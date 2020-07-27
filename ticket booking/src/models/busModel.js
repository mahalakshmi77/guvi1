const { DataTypes } = require("sequelize");
const studentDb = require("../config/studentDb");

const buses = studentDb.define("buses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  busno: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "bus_no"
  },
  from: {
    type: DataTypes.STRING,
    field: "from"
  },
  to: {
    type: DataTypes.STRING,
    field: "to"
  },
  date: {
    type: DataTypes.STRING,
    field: "date"
  },
  ticket: {
    type: DataTypes.INTEGER,
    field: "ticket"
  }
});

module.exports = buses;
