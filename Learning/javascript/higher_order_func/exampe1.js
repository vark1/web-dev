function greet(){
    console.log("Hello")
}

let sayhello = greet;
console.log(sayhello == greet)

sayhello();