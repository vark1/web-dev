
let arr = [6,3,9,1,7,2,14,26,35]
// console.log(ar.sort());
// Js bydefault does lexicographical sort

// function compare(a, b){
//     return (a%10) - (b%10); 
// }
//this is sorting by unit digits

// function compare(a, b){
//     console.log(arr)
//     console.log(a + " " + b)
//     return a - b
// }
//this is mathematical sorting

arr.sort(compare)
console.log(arr);