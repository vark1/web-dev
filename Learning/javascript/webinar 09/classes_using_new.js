function Person (name, age){
    this.firstName = name.split(" ")[0]
    this.lastName = name.split(" ")[1]
    //now age is like a private variable because its available in the closure
    this.isAdult = function(){
        return age > 18
    }
}
let p = new Person ("John Smith" ,20)
let h = new Person ("Harry Potter", 14)
console.log(p) //age acts as private as its scope remains only inside the function
console.log(p.isAdult())
console.log(h.isAdult())
