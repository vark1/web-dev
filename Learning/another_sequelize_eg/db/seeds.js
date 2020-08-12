const { db, Center, Season, Batch, Course, Teacher } = require("./models");

const seed = async () => {
  try {
    db.sync({ alter: true });
    await Center.bulkCreate(
      [
        { id: "PP", name: "Pitampura", city: "New Delhi" },
        { id: "NO", name: "Dwarka", city: "New Delhi" },
        { id: "DW", name: "Noida", city: "New Delhi" },
        { id: "DD", name: "Dehradun", city: "Dehradun" },
        { id: "OL", name: "Online", city: "New Delhi" },
      ],
      {
        ignoreDuplicates: true,
      }
    );

    await Season.bulkCreate(
      [
        { id: "S", name: "Summer" },
        { id: "F", name: "Fall" },
        { id: "W", name: "Winter" },
        { id: "P", name: "Spring" },
      ],
      {
        ignoreDuplicates: true,
      }
    );

    await Course.bulkCreate(
      [
        { id: "LP", name: "LaunchPad" },
        { id: "CX", name: "Crux" },
        { id: "IB", name: "Interview Bootcamp" },
        { id: "AD", name: "Android Development" },
        { id: "WD", name: "Web Development" },
      ],
      {
        ignoreDuplicates: true,
      }
    );
  } catch (e) {
    console.log(e);
  }
};

seed();
