const express = require("express");
const datas = require("../models/data");
const teacher = require("../models/teacherModel");
const student = require("../models/studentModel");
const route = express.Router();

const getAllTeacher = async () => {
  const result = await teacher.findAll();
  // TODO: Find a better way to get plain json
  return JSON.parse(JSON.stringify(result));
};
const getAllStudent = async id => {
  const result = await student.findAll({
    where: {
      teacherId: id
    }
  });
  return JSON.parse(JSON.stringify(result));
};
const getTeachebyId = async id => {
  const result = await teacher.findByPk(id);
  // TODO: Find a better way to get plain json
  console.log(JSON.parse(JSON.stringify(result)));
  return JSON.parse(JSON.stringify(result));
};
const getStundentbyID = async id => {
  const result = await student.findByPk(id);
  // TODO: Find a better way to get plain json
  console.log(JSON.parse(JSON.stringify(result)));
  return JSON.parse(JSON.stringify(result));
};
route.post("/", async (req, res) => {
  try {
    if (req.body.firstName) {
      const result = await teacher.create(req.body);
      res.status(200).json({
        message: "Teacher added Successfully",
        data: result.get()
      });
    } else {
      res.status(400).send("Invalid student");
    }
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
});

route.post("/:id/students", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const teacherId = parseInt(id);
  try {
    if (req.body.firstName) {
      const result = await student.create({ ...req.body, teacherId });
      res.status(200).json({
        message: "Student added Successfully",
        data: result.get()
      });
    } else {
      res.status(400).send("Invalid student");
    }
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
});

route.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await teacher.update(req.body, {
      where: {
        id
      }
    });
    if (result.length) {
      res.status(200).json({ message: "Teacher Updated!" });
    } else {
      res.status(400).send("Teacher unavailable");
    }
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error");
  }
});

route.put("/:tid/students/:stuId", async (req, res) => {
  const { tid, stuId } = req.params;

  console.log(stuId);
  const teacherId = tid;
  const id = stuId;
  console.log({ ...req.body, teacherId });
  try {
    const result = await student.update(
      { ...req.body, teacherId },
      {
        where: {
          id
        }
      }
    );
    if (result.length) {
      res.status(200).json({ message: "Student Updated!" });
    } else {
      res.status(400).send("Studnent unavailable");
    }
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error");
  }
});

/////////////////////////////////
const getstubuid = (tid, id) => {
  const teacherId = parseInt(tid);
  const stuid1 = parseInt(id);
  let originalteacherIndex;
  for (var i = 0; i < datas.length; i++) {
    if (datas[i].id === teacherId) originalteacherIndex = i;
  }
  if (typeof originalteacherIndex !== "undefined") {
    return datas[originalteacherIndex].students.find(
      each => each.id === stuid1
    );
  }
};
const getallstud = id => {
  const teacherId = parseInt(id);
  let originalteacherIndex;
  for (var i = 0; i < datas.length; i++) {
    if (datas[i].id === teacherId) originalteacherIndex = i;
  }
  let stdata = [];
  if (typeof originalteacherIndex !== "undefined") {
    if (typeof datas[originalteacherIndex].students !== "undefined") {
      for (var j = 0; j < datas[originalteacherIndex].students.length; j++) {
        stdata.push(datas[originalteacherIndex].students[j]);
      }
    }
    return stdata;
  }
};
const getteacherById = id => {
  return datas.find(each => each.id === id);
};

route.get("/", (req, res) => {
  res.status(200).json({
    data: datas
  });
});
route.post("/", (req, res) => {
  let students = [];
  const id = datas.length + 1;
  if (req.body.firstName) {
    console.log({ id, ...req.body, students });
    datas.push({ id, ...req.body, students });
    res.status(200).json({
      message: " added Successfully",
      data: req.body
    });
  } else {
    res.status(400).send("Invalid ");
  }
  //console.log(body);
  res.send(req.body);
});
route.delete("/", (req, res) => {
  datas.splice(0, datas.length);
  res.status(200).send("All Deleted");
});

//// invidual record

route.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const tId = parseInt(id);
  console.log(tId);
  const requiredteacher = datas.find(each => each.id === tId);
  if (requiredteacher) {
    res.status(200).json({ data: requiredteacher });
  } else {
    res.status(400).send("teacher unavailable");
  }
});
route.put("/:id", (req, res) => {
  const { id } = req.params;
  const tId = parseInt(id);
  let requiredteacherIndex;
  for (let i = 0; i < datas.length; i++) {
    if (datas[i].id === tId) {
      requiredteacherIndex = i;
      break;
    }
  }
  console.log(requiredteacherIndex);
  if (typeof requiredteacherIndex !== "undefined") {
    const originalStudent = datas[requiredteacherIndex];
    const newStudent = {
      ...originalStudent,
      ...req.body
    };
    datas.splice(requiredteacherIndex, 1, newStudent);
    res.status(200).json({
      message: "teacher details updated!",
      data: newStudent
    });
  } else {
    res.status(400).send("teacher unvailable");
  }
});
route.delete("/:id", (req, res) => {
  const { id } = req.params;
  const tId = parseInt(id);
  let requiredteacherIndex;
  for (let i = 0; i < datas.length; i++) {
    if (datas[i].id === tId) {
      requiredteacherIndex = i;
      break;
    }
  }
  if (typeof requiredteacherIndex !== "undefined") {
    datas.splice(requiredteacherIndex, 1);
    res.status(200).json({
      message: "Teacher has been deleted"
    });
  } else {
    res.status(400).send("Invalid teacher");
  }
});
//// student record
route.get("/:id/students", (req, res) => {
  const { id } = req.params;
  const teacherId = parseInt(id);
  let originalteacherIndex;
  for (var i = 0; i < datas.length; i++) {
    if (datas[i].id === teacherId) originalteacherIndex = i;
  }
  let stdata = [];
  if (typeof originalteacherIndex !== "undefined") {
    for (var j = 0; j < datas[originalteacherIndex].students.length; j++) {
      stdata.push(datas[originalteacherIndex].students[j]);
    }
    res.status(200).json({
      message: "student has been retrived successfully!!",
      data: stdata
    });
  } else {
    res.status(400).send("Teacher id is invalid");
  }
});

route.get("/:id/students/:stuId", (req, res) => {
  const { id, stuId } = req.params;
  console.log(id);
  console.log(stuId);

  const teacherId = parseInt(id);
  const stuid1 = parseInt(stuId);
  let originalteacherIndex;
  for (var i = 0; i < datas.length; i++) {
    if (datas[i].id === teacherId) originalteacherIndex = i;
  }
  let stdindex;
  console.log(originalteacherIndex);
  if (typeof originalteacherIndex !== "undefined") {
    for (var j = 0; j < datas[originalteacherIndex].students.length; j++) {
      console.log(datas[originalteacherIndex].students[j].id);
      if (datas[originalteacherIndex].students[j].id === stuid1) {
        stdindex = j;
        break;
      }
    }
    console.log(stdindex);
    if (typeof stdindex !== "undefined") {
      res.status(200).json({
        message: "student has been retrived successfully!!",
        data: datas[originalteacherIndex].students[stdindex]
      });
    } else {
      res.status(400).send("Student id is invalid");
    }
  } else {
    res.status(400).send("Teacher id is invalid");
  }
});
route.put("/:id/students/:stuId", (req, res) => {
  const { id, stuId } = req.params;
  console.log(id);
  console.log(stuId);

  const teacherId = parseInt(id);
  const stuid1 = parseInt(stuId);
  let originalteacherIndex;
  for (var i = 0; i < datas.length; i++) {
    if (datas[i].id === teacherId) originalteacherIndex = i;
  }
  let stdindex;
  console.log(originalteacherIndex);
  if (typeof originalteacherIndex !== "undefined") {
    for (var j = 0; j < datas[originalteacherIndex].students.length; j++) {
      console.log(datas[originalteacherIndex].students[j].id);
      if (datas[originalteacherIndex].students[j].id === stuid1) {
        stdindex = j;
        break;
      }
    }
    console.log(stdindex);
    if (typeof stdindex !== "undefined") {
      let originalStudent = datas[originalteacherIndex].students[stdindex];
      let newStudent = { ...originalStudent, ...req.body };

      datas[originalteacherIndex].students.splice(stdindex, 1, newStudent);

      res.status(200).json({
        message: "student has been updated successfully!!",
        data: newStudent
      });
    } else {
      res.status(400).send("Student id is invalid");
    }
  } else {
    res.status(400).send("Teacher id is invalid");
  }
});

route.delete("/:id/students/:stuId", (req, res) => {
  const { id, stuId } = req.params;
  console.log(id);
  console.log(stuId);

  const teacherId = parseInt(id);
  const stuid1 = parseInt(stuId);
  let originalteacherIndex;
  for (var i = 0; i < datas.length; i++) {
    if (datas[i].id === teacherId) originalteacherIndex = i;
  }
  let stdindex;
  console.log(originalteacherIndex);
  if (typeof originalteacherIndex !== "undefined") {
    for (var j = 0; j < datas[originalteacherIndex].students.length; j++) {
      console.log(datas[originalteacherIndex].students[j].id);
      if (datas[originalteacherIndex].students[j].id === stuid1) {
        stdindex = j;
        break;
      }
    }
    console.log(stdindex);
    if (typeof stdindex !== "undefined") {
      datas[originalteacherIndex].students.splice(stdindex, 1);

      res.status(200).json({
        message: "student has been deleted successfully!!"
      });
    } else {
      res.status(400).send("Student id is invalid");
    }
  } else {
    res.status(400).send("Teacher id is invalid");
  }
});
route.post("/:id/students", (req, res) => {
  const { id } = req.params;
  console.log(id);

  const teacherId = parseInt(id);

  let originalteacherIndex;
  for (var i = 0; i < datas.length; i++) {
    if (datas[i].id === teacherId) originalteacherIndex = i;
  }

  console.log(originalteacherIndex);
  if (typeof originalteacherIndex !== "undefined") {
    const id = datas[originalteacherIndex].students.length + 1;
    datas[originalteacherIndex].students.push({ id, ...req.body });
    res.status(200).json({
      message: "student has been added successfully!!",
      data: req.body
    });
  } else {
    res.status(400).send("Teacher id is invalid");
  }
});

module.exports = {
  route,
  datas,
  getallstud,
  getteacherById,
  getstubuid,
  getAllTeacher,
  getAllStudent,
  getTeachebyId,
  getStundentbyID
};
