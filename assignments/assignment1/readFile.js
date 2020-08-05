const fs = require("fs");

fs.readFile(__dirname + "/myfile.txt", function (err, data) {
  if (err) throw err;
  let a = data.toString().split(`\n`);
  let dog = 0;
  let cat = 0;
  let rat = 0;
  let monkey = 0;
  for (var i = 0; i < a.length; i++) {
    //probably can be done without using loop by using map or filter but its whatever
    if (a[i] == "dog") dog++;
    if (a[i] == "cat") cat++;
    if (a[i] == "rat") rat++;
    if (a[i] == "monkey") monkey++;
  }
  fs.writeFile(
    __dirname + "/newfile.txt",
    `dog: ${dog} \n cat: ${cat} \nrat: ${rat} \nmonkey: ${monkey} \n`,
    function (err) {
      if (err) throw err;
    }
  );
});
