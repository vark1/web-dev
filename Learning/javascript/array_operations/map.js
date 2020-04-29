
let arr = [12,56,135,73,13,468]

let arr2 = arr.map(function (item){ 
    return 100 - item
})
console.log(arr2)
/*
map takes a function as an argument and implements that function on array (here arr)
and then stores it onto another array (ie arr2)
ie function is applied on every item of arr and stored in arr2
*/


let a = [1,2,3,4,5,6]

let a2 = a.map(function (item){
    return item*item
})

let a3 = a.map(Math.sqrt) //here we already use a predefined function instead of defining squareroot again

console.log(a2)
console.log(a3)