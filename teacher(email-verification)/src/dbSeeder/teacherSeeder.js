const Teacher = require("../models/teacherModel");

const newTeacher = [
  {
    firstName: "A",
    lastName: "B",
    age: 30,
    gender: "male",
    email: "AB@gmail.com"
  },

  {
    firstName: "C",
    lastName: "D",
    age: 36,
    gender: "male",
    email: "CD@gmail.com"
  },

  {
    firstName: "E",
    lastName: "F",
    age: 30,
    gender: "male",
    email: "EF@gmail.com"
  },

  {
    firstName: "G",
    lastName: "H",
    age: 40,
    gender: "male",
    email: "GH@gmail.com"
  },

  {
    firstName: "I",
    lastName: "J",
    age: 35,
    gender: "male",
    email: "IJ@gmail.com"
  }
];

const teacherSeeder = async () => {
  await Teacher.sync({ force: true });
  newTeacher.forEach(async teacher => {
    try {
      const result = await Teacher.create(teacher);
      console.log(result.get());
      const { id } = result.get();
      console.log(id);
    } catch (e) {
      console.error(e);
    }
  });
};

teacherSeeder();
