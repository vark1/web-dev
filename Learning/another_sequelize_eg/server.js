const express = require("express");
const path = require("path");
const { Center, Season, Course } = require("./db/models");
const app = express();

app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/batchcode", async (req, res) => {
  try {
    const centers = await Center.findAll();
    const seasons = await Season.findAll();
    const courses = await Course.findAll();
    const years = [2017, 2018, 2019, 2020, 2021];

    res.render("batchcode", {
      centers,
      seasons,
      courses,
      years,
    });
  } catch (e) {
    console.log(e);
  }
});

app.post("/batchcode", async (req, res) => {
  let batchcode = ""; //WDPP18S1
  batchcode += req.body.course;
  batchcode += req.body.center;
  batchcode += req.body.year.substr(2);
  batchcode += req.body.season;
  batchcode += req.body.batchno;

  res.send(batchcode);
});

module.exports = { app };
