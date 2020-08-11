//Concurrency eg

function helloSayer(times, name) {
  let count = 0;
  let loopId = setInterval(() => {
    count++;
    console.log("Hello " + name);
    if (count === times) {
      clearInterval(loopId);
    }
  }, 100);
}

//This runs concurrently (not parallely, but concurrently)
helloSayer(3, "varun");
helloSayer(2, "Aman");

module.exports = {
  helloSayer,
};
