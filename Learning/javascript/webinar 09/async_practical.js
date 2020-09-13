function downloadFile(url, downloaded) {
  //We are downloading files here
  //assuming it takes 3 sec to download
  //we use setTimeout to generate fake delay
  console.log("Downloading file: " + url);
  setTimeout(function () {
    let filePath = "C:\\Downloads\\" + url.split("/").pop();
    console.log("File was downloaded to: " + filePath);
    downloaded(filePath);
  }, 3000);
}

function resizeFile(filePath, resized) {
  //We are resizing the file. it takes 2 sec
  //we again use a fake setTimeout Delay
  console.log("resizing: " + filePath);
  setTimeout(function () {
    let newPath = filePath.split(".")[0] + "-resized" + filePath.split(".")[1];
    resized(newPath);
  }, 2000);
}

function uploadFile(diskPath, uploaded) {
  //we will upload this file, it takes 3 sec
  //using another fake setTimeout delay logic
  setTimeout(function () {
    let uploadedPath =
      "http://ewaeawe.com/dadadsad/" + diskPath.split("\\").pop();
    console.log("we uploaded to : " + uploadedPath);
    uploaded(uploadedPath);
  }, 3000);
}

downloadFile("http://google.com/logo.png", function (downloadedPath) {
  resizeFile(downloadedPath, function (resizedpath) {
    uploadFile(resizedpath, function (uploadedUrl) {
      console.log("Uploaded successfully to:" + uploadedUrl);
    });
  });
});
