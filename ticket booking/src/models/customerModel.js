const { DataTypes } = require("sequelize");
const studentDb = require("../config/studentDb");

const customer = studentDb.define("customers", {
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
  userName: {
    type: DataTypes.STRING,
    field: "user_name"
  },
  password: {
    type: DataTypes.STRING,
    field: "password"
  }
});
const newcustomer = {
  firstName: "te",
  lastName: "test",
  userName: "test",
  password: "ts"
};
const teacherSeeder = async () => {
  await customer.sync({ force: true });

  try {
    const result = await customer.create(newcustomer);
    console.log(result.get());
    const { id } = result.get();
  } catch (e) {
    console.error(e);
  }
};

module.exports = customer;
