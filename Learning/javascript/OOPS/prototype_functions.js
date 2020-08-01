function Person(name, age) {
  this.name = name;
  this.age = age;
  //   this.isAdult = function () {
  //     return this.age >= 18;
  //   };
  return 10;
}

Person.prototype.isAdult = function () {
  return this.age >= 18;
};
Person.prototype.city = "Delhi";

let p = new Person("Harry Potter", 15);
let p2 = new Person("John Doe", 30);

console.log(p.isAdult());
console.log(p2.isAdult());

console.log(p.isAdult == p2.isAdult);
//This is false when, isAdult function is inside the function Person as logic for p and p2 is differently stored when in function
//This is true when, isAdult is outside the function Person as, p and p2 are both inheriting from Person.prototype

console.log(p.city);
console.log(p2.city);
console.log(Person.prototype);
