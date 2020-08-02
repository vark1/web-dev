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

async function task() {
  //first three promises run concurrently and then the next three run concurrently
  await Promise.all([
    //You can take promises and put it in a promise.all array and await that promise.all array
    helloSayer(6, "varun"),
    helloSayer(2, "tiwari"),
    helloSayer(3, "aman"),
  ]);

  console.log("----------First batch over-------------");
  await Promise.all([
    helloSayer(4, "prateek"),
    helloSayer(6, "anmol"),
    helloSayer(2, "vishal"),
  ]);
}

task();

module.exports = {
  helloSayer,
};
