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
  await helloSayer(3, "varun"); //If something is a promise object, we can await a promise object
  await helloSayer(2, "tiwari"); //As we await something, the execution stops till the promise is resolved, and only when the promise is
  //resolved, the next line of the code is executed
  await helloSayer(3, "aman");
}

task();
//await task(); //This gives error as await cannot be used in the global scope, you can only use it when in an async function

module.exports = {
  helloSayer,
};
