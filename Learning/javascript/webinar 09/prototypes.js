//prototypes are a way to implement inheritance in js
let p = {
    a: 10
}

let q = Object.create(p)
q.b = 20;

let r = Object.create(q)
r.c = 30;

console.log(p)
console.log(q)
console.log(r)
console.log(r.a)
console.log(r.__proto__ === q)
q.a++; // q.a = q.a + 1; prototype is read only. When we try to access a through q it creates a copy. It is known as COW (copy on write)
console.log(q.a)
console.log(p)
console.log(q) //q now has q.a which is not inside the proto but the actual q