const { DataTypes } = require("sequelize");
const studentDb = require("../config/studentDb");

const Admin = studentDb.define("admin", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    },
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue("password", "12#%I@(%&");
    }
  }
});

// move to admin seeder
Admin.sync({ force: true })
  .then(() => {
    return Admin.create({
      email: "test@gmail.com",
      password: "123456"
    });
  })
  .then(result => {
    console.log(result.get());
  })
  .catch(console.error);
