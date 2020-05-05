
function task (done){
    console.log("we are doing a task")
    setTimeout(done, 1000)
}

//settimeout calls the function written init after the amount of time written in it (1000ms = 1s)
//this delay is async in nature. ie other parts of the program can run during this delay


task (function(){
    console.log("task was done")
})

console.log("we did a task")