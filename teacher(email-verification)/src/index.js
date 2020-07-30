const express = require("express");
const bodyparser = require("body-parser");
const {
  troute,
  datas,
  getallstud,
  getteacherById,
  getstubuid,
  getAllTeacher,
  getAllStudent,
  getTeachebyId,
  getStundentbyID
} = require("./route/teacher");
const ifEquality = require("./views/helpers/ifequality");
const expressHbs = require("express-handlebars");
const path = require("path");
const app = express();
let id1;
////crateing handle bar
const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials"),
  helpers: { ifEquality }
});

///express for handlers

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(bodyparser.json());
app.get("/about", (req, res) => {
  res.status(200).send("hello");
});
app.use("/api/teachers", troute);
app.get("/", (req, res) => {
  res.status(200).render("home.hbs", {
    layout: "hero"
  });
});
app.get("/teachers", async (req, res) => {
  res.status(200).render("teachers.hbs", {
    layout: "navigation",
    title: "Teacher Details",
    data: await getAllTeacher()
  });
});
app.get("/:id/students", async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  id1 = id;
  res.status(200).render("students.hbs", {
    layout: "navigation",
    title: "students details",
    data: await getAllStudent(id)
  });

  app.get("/students/add-student", (req, res) => {
    console.log(id1);
    res.status(200).render("add-student.hbs", {
      layout: "navigation",
      title: "Add Student",
      tid: id1,
      action: "/api/teachers/" + id1 + "/students",
      method: "POST"
    });
  });

  app.get("/edit-student/:id", async (req, res) => {
    const { id } = req.params;
    const requiredstudent = await getStundentbyID(parseInt(id));
    console.log(requiredstudent.firstName);
    if (requiredstudent) {
      res.status(200).render("add-student.hbs", {
        layout: "navigation",
        title: "Edit Student",
        tid: id1,
        student: requiredstudent,
        action:
          "/api/teachers/" +
          requiredstudent.teacherId +
          "/students/" +
          requiredstudent.id,
        method: "PUT"
      });
    } else {
      res.status(404).send("Student not found");
    }
  });
});
app.get("/add-teacher", (req, res) => {
  res.status(200).render("add-teacher.hbs", {
    layout: "navigation",
    title: "Add teacher",
    action: "/api/teachers",
    method: "POST"
  });
});
app.get("/edit-teacher/:id", async (req, res) => {
  const { id } = req.params;
  const requiredteacher = await getTeachebyId(parseInt(id));
  console.log(requiredteacher.gender);
  console.log(requiredteacher.age);
  if (requiredteacher) {
    res.status(200).render("add-teacher.hbs", {
      layout: "navigation",
      title: "Edit Teacher",
      teacher: requiredteacher,
      action: "/api/teachers/" + requiredteacher.id,
      method: "PUT"
    });
  } else {
    res.status(404).send("Student not found");
  }
});
app.listen(8080);
