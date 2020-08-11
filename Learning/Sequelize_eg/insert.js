const { db, Student } = require("./model");

const task = async () => {
  try {
    await db.sync();

    //Insert a student
    for (let i = 0; i < 30; i++) {
      await Student.create({
        name: [
          "Tom",
          "Harry",
          "Shyam",
          "Ram",
          "Nancy",
          "Riddle",
          "Aja",
          "Steve",
        ][parseInt(Math.random() * 10)],
        age: 10 + parseInt(Math.random() * 10),
      });
    }
  } catch (e) {
    console.error(e);
  }
};

task();
