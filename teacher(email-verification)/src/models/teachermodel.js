const { DataTypes } = require("sequelize");
const teacherDb = require("../config/teacherDb");

const Teacher = teacherDb.define("teachers", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name"
  },
  lastName: {
    type: DataTypes.STRING,
    field: "last_name"
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 21
    }
  },
  gender: {
    type: DataTypes.ENUM,
    values: ["male", "female"],
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  }
});

module.exports = Teacher;
