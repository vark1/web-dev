class Person {
   constructor(name, age){
      this.name = name
      this.age = age
   }

   isAdult(){
      return this.age >= 18
   }
}

let p1 = new Person('John Doe', 22) //In 'class', it is necessary to call the Person function with 'new'
let p2 = new Person('Bron Doe', 13) //It is not allowed to call these function without 'new'

console.log(typeof Person)    //function; there is NO new datatype called 'class'
console.log(p1.__proto__ == Person.prototype)    //true
console.log(p1.__proto__.__proto__ == Object.prototype)    //true


class Student extends Person {      //why is this running as there is no class to class inheritance in js. go to line 30
   constructor(name, age, grade){
      super(name, age)
      this.grade = grade //current constructor me this use krne ke lie super call karna pdta hai
   }
}

let s1 = new Student ('Harry Potter', 13)
let s2 = new Student ('Ron weasley', 14)

console.log(s1.__proto__ == Student.prototype)
console.log(s1.__proto__.__proto__ == Person.prototype)
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)

//inheritance chain
//Object.prototype --> Person.prototype --> Student.prototype

//no inheritance between the classes (actually they are functions)
// Object -x-> Person -x-> Student