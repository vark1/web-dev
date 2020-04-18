let obj = {
    a: 10,
    b: "hello",
    c: true,
    d: {
        p: 10,
        q: 20,
        r: {
            x: "boyle"
        }
    }

}
//these objects are different from class based objects. Consider them as a bag of data
//a,b,c are properties in an object obj, they can be primitve or can be object themselves
//to access a, we use obj.a
//to access x, we use obj.d.r.x
console.log(obj.d.r.x)
console.log(obj)
obj.l = 1021; //New properties added to object obj
console.log(obj)
delete obj.b //removes properties
console.log(obj)