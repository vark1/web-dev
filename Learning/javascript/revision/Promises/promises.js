// function fakeDownload (){
//    setTimeout(function(){
//       let downloadedData = "Some data we ripped of the interwebs"
//       done(downloadedData)
//    },1000)
// }

// fakeDownload(function (data){
//    console.log("We downloaded a file, which had this data ----> ")
//    console.log(data)
// })

function fakeDownloadPromise (correct){
   return new Promise(function (resolve, reject){

      setTimeout(function(){
         let downloadedData = "Some data from the net"
         console.info("Downloading has completed")
         if(correct){
            resolve(downloadedData)
         }
         else{
            reject(new Error ("could not download file"))
         }
         resolve(downloadedData)
      },1000)
   })
}

// fakeDownloadPromise(false).then(function (data){
//    console.log("the data that we downloaded is --> ")
//    console.log(data)
// }).catch(function (err){
//    console.log(err)
// })

let downloaded = fakeDownloadPromise(true)
downloaded.catch(function(err){
   console.log(err)
})

setTimeout(function(){
   downloaded.then(function(data){
      console.info("The data that was downloaded is ---->")
      console.info(data)
   })
},3000)