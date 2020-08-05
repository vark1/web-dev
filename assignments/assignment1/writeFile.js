const fs = require("fs");

fs.writeFile(
  __dirname + "/myfile.txt",
  `cat\ndog\ncat\nrat\nmonkey\ndog`,
  function (err) {
    if (err) throw err;

    console.log("File was written");
  }
);
