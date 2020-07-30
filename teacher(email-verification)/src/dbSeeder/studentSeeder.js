const Student = require("../models/studentModel");

const studentData = [
  {
    firstName: "akash",
    lastName: "Kumar",
    age: 16,
    gender: "male",
    teacherId: 1
  },
  {
    firstName: "akshya",
    lastName: "ravi",
    age: 16,
    gender: "male",
    teacherId: 2
  },
  {
    firstName: "Rajesh",
    lastName: "kumar",
    age: 16,
    gender: "male",
    teacherId: 3
  },
  {
    firstName: "naveen",
    lastName: "Kumar",
    age: 16,
    gender: "male",
    teacherId: 3
  },
  {
    firstName: "Sachin",
    lastName: "Kumar",
    age: 16,
    gender: "male",
    teacherId: 3
  }
];

const studentSeeder = async () => {
  // `force: true` will clear existing tables
  await Student.sync({ force: true });

  studentData.forEach(async student => {
    try {
      const result = await Student.create(student);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};
studentSeeder();
