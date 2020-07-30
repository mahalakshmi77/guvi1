const { DataTypes } = require("sequelize");
const teacherDb = require("../config/teacherDb");
const Teacher = require("./teacherModel");

const Student = teacherDb.define("students", {
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
      min: 3,
      max: 23
    }
  },
  gender: {
    type: DataTypes.ENUM,
    values: ["male", "female"],
    allowNull: false
  },
  teacherId: {
    type: DataTypes.INTEGER,
    field: "teacher_id",
    allowNull: false,
    references: {
      model: Teacher,
      key: "id"
    }
  }
});

module.exports = Student;
