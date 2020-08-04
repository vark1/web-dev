function downloadPromise() {
  return new Promise(function (resolve, reject) {
    console.log("Starting to download the file");
    setTimeout(function () {
      console.log("Download is complete");
      resolve();
      //This resolve is called here because ideally when resolve is called, the 'then' function is run.
      //Promise's state has been changed from pending to resolved
      //But when the object (here downloadedFile) does not have a 'then', javascript waits until you have a 'then'
      //We can call 'then' later (ie get the result later) even if the task is completed
      //this is known as deferred resolve
    }, 3000);
  });
}

let downloadedFile = downloadPromise(); //The result is stored in downloaded file

setTimeout(function () {
  downloadedFile.then(function () {
    //Even after the function has been executed, we can still get the result
    console.log("After Download");
  });
}, 5000);
