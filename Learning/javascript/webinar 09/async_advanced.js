
let a = false;

setTimeout(function(){ //this doesnt execute as when the while loop runs after setTimeout is initiated, the while loop 
    //goes into a infinite loop hence giving 
    //setTimeout no chance to execute completely
    a = True
},1000)

while(!a){
    console.log(1)
}

