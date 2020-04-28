/*Closure - The scope of an outer function is preserved inside an inner function*/

function createCounter(initVal, Delta) {
    let val = initVal;
    function counter() {
        val = val + Delta;
        return val;
    }
    return counter;
}

let fiveCount = createCounter(5, 5);
let anotherCount = createCounter(6, 3);

console.log(fiveCount());
console.log(fiveCount());
console.log(fiveCount());

console.log(anotherCount());
console.log(anotherCount());
console.log(anotherCount());
