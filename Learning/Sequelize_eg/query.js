const { db, Student } = require("./model");

const task = async () => {
  try {
    await db.sync();

    const students = await Student.findAll({
      where: { age: { $gt: 15 } },
      order: [
        ["name", "ASC"],
        ["age", "DESC"],
      ],
    });
    students.forEach((student) =>
      console.log(
        `
       name: ${student.dataValues.name} \t \t age: ${student.dataValues.age}
       `
      )
    );
  } catch (e) {
    console.error(e);
  }
};

task();
