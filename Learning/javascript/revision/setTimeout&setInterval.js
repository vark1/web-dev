
var intervalId;
var runCount = 0;
function sayHello(){
   runCount++;
   if(runCount > 5){
      clearInterval(intervalId)
   }
   console.log("Hello !")
}
console.log("Waiting...")
// setTimeout(sayHello, 1000) //runs code after a certain delay, here 1000ms aka 1sec

intervalId = setInterval(sayHello, 1000)     //runs code after every certain delay and keeps on running until stopped, here it will only run 5 times