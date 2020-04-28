/*If a function takes a function as an argument or returns another function, it is a higher order function*/

//Function returning another function
function createGreeter (name){
    let firstName = name.split(" ")[0]
    function greeter() {
        console.log("Hey " + firstName);
    }

    return greeter;
}

let johngreeter = createGreeter("John Doe");
let harrygreeter = createGreeter("Harry Potter");

johngreeter();
harrygreeter();  
/*we use 'harrygreeter()' and not 'harrygreeter' because we are calling it as a function, 
by just writing 'harrygreeter' we treat it as an object
for eg,
    let a = 10
    a();
this will not work
but,
    let a = function (){}
    a();
this will work

*/