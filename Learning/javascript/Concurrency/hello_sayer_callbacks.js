function helloSayer(times, name, doneSaying) {
  let count = 0;
  let loopId = setInterval(() => {
    count++;
    console.log("Hello " + name);
    if (count === times) {
      clearInterval(loopId);
      doneSaying();
    }
  }, 100);
}

//This prints serially rather than the one in hello_sayer.js where is runs concurrently
//Use callback functions to remove concurrency. After the async part of your code has executed, you call another function from there
//This is not very efficient way (ie using callback functions) as there is a problem of variable shadowing.
//ie if you declare a variable in the first function (eg err), it will be available in the next function, and if err is declared in the
//next function, the next function will take the new err instead of the one declared in the previous function
helloSayer(3, "varun", () => {
  helloSayer(2, "Aman", () => {
    helloSayer(3, "prateek", () => {});
  });
});

module.exports = {
  helloSayer,
};
