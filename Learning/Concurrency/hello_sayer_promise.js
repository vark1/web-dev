function helloSayer(times, name) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let loopId = setInterval(() => {
      count++;
      console.log("Hello " + name);
      if (count === times) {
        clearInterval(loopId);
        resolve();
      }
    }, 100);
  });
}

// console.log(helloSayer(3,"varun"))      //we get a promise object

//sequential execution
helloSayer(3, "varun")
  .then(() => helloSayer(2, "aman"))
  .then(() => helloSayer(3, "prateek"));

//concurrent execution
// helloSayer(3, "varun")
//   .then(helloSayer(2, "aman"))
//   .then(helloSayer(3, "prateek"));

module.exports = {
  helloSayer,
};
