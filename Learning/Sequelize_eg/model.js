const Sequelize = require("sequelize");

const DataTypes = Sequelize.DataTypes;

const db = new Sequelize("sampledb1", "sampleuser1", "samplepass1", {
  host: "localhost",
  dialect: "mysql",
});

const Student = db.define("student", {
  //creating models
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER(2),
    allowNull: false,
    default: -1,
  },
});

// db.sync({ alter: true })
//   //alter: true is used to make changes to existing table as without it it will only make changes if table does not exist
//   //if force: true is used, it will drop the table and create a new table
//   .then(() => console.log("Database synced"))
//   .catch(console.error);

module.exports = {
  db,
  Student,
};
