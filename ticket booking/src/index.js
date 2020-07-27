const express = require("express");
const bodyParser = require("body-parser");
const {
  studentsRouter,
  getAllStudents,
  getStudentById,
  getallCustomer,
  getallbuses
} = require("./routes/studentsRouter");
const ifEquality = require("./views/helpers/ifEquality");
const expressHbs = require("express-handlebars");
const path = require("path");

const app = express();

// Creating handlebars engine
const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials"),
  helpers: {
    ifEquality
  }
});

// Let express know to use handlebars
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (request, response) => {
  const t = await getallCustomer();
  console.log(t);
  response.status(200).render("home", {
    layout: "hero",
    title: "Home",
    action: "/journey",
    data: t
  });
});
app.get("/journey", (req, res) => {
  res.status(200).render("Journey", {
    layout: "navigation",
    title: "Add Journey",
    action: "/Buses"
  });
});
app.get("/Buses", async (req, res) => {
  const bus = await getallbuses();
  res.status(200).render("Buses", {
    layout: "navigation",
    title: "Buses",
    data: bus
  });
});
app.get("/addcustomer", (req, res) => {
  res.status(200).render("addcustomers", {
    layout: "navigation",
    title: "Add Customer",
    action: "/api/students",
    method: "POST"
  });
});
app.get("/students", async (req, res) => {
  try {
    res.status(200).render("students", {
      layout: "navigation",
      title: "Student Details",
      data: await getAllStudents()
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server error");
  }
});

app.get("/add-student", (req, res) => {
  res.status(200).render("addStudents", {
    layout: "navigation",
    title: "Add Student",
    action: "/api/students",
    method: "POST"
  });
});

app.get("/edit-student/:id", async (req, res) => {
  const { id } = req.params;
  const requiredStudent = await getStudentById(parseInt(id));
  if (requiredStudent) {
    res.status(200).render("addStudents.hbs", {
      layout: "navigation",
      title: "Add Student",
      student: requiredStudent,
      action: "/api/students/" + requiredStudent.id,
      method: "PUT"
    });
  } else {
    res.status(404).send("Student not found");
  }
});

app.get("/teachers", (req, res) => {
  res.send("WIP");
});

app.get("/about", (request, response) => {
  response.status(200).render("home.hbs", {
    message: "About this page"
  });
});

app.use("/api/students", studentsRouter);

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.get("*", (req, res) => {
  res.status(404).send("404 Page not found");
});

app.listen(8080, () => {
  console.log("server running");
});
