//Arrays

let arr = [1,2,3]
console.log(arr[2])

let arr2 = [1, 'hello', false, [2,3], a = {x:1, y:2}]
console.log(arr2)
console.log(typeof(arr2[4]))

/*loops*/

/*for loop*/
// for (let i = 0; i < arr2.length; i++){
//     console.log(arr2[i])
// }

/*for-of loop*/
// for (let val of arr2){
//     console.log(val)
// }

/*for-in loop*/
for (let index in arr2){
    console.log(arr2[index])
}

console.log("\n")

/* Arrays part2- Add or remove items */

//in js, arrays are dynamic in nature

let fruit = ["apple","mango"]

//push and pop, used for the end of an array
fruit.push("melon")
console.log(fruit)

fruit.pop()
console.log(fruit)

//shift and unshift, used for the beginning of an array
fruit.shift(); //apple gets shifted out
console.log(fruit)

fruit.unshift("melon", "kiwi") //"melon" and "kiwi" gets unshifted in
console.log(fruit)

console.log('\n')
/*Arrays part 3 - Data changing*/

// let notes = ['do' , 're' , 'mi' , 'fa' , 'so' , 'la' , 'ti']

//slice
//notes.slice(4,6)
//console.log(notes) /* NON DESTRUCTIVE */

//splice
// omit = notes.splice(4,2)
// console.log(omit)
// console.log(notes) /* DESTRUCTIVE, mutates the array*/

//splice part2 - replacing items with splice
// notes.splice(0,3,'sa', 're', 'ga')
// console.log(notes)

//concat
let notes = ['do' , 're' , 'mi']
console.log(notes.concat('fa'))
console.log(notes) /* NON DESTRUCTIVE, doesnt mutate original array*/