
function createCounter(initVal, delta){
    let val = initVal;

    let counter = {
        incr: function (){
            val += delta ;
        },
        decr: function (){
            val -= delta;
        },
        show: function (){
            console.log(val)
        }
    }

    return counter;
}

let a = createCounter (50, 5)
a.show();
a.incr();
a.incr();
a.show();

console.log(typeof a);
console.log(typeof a.show);
console.log(typeof a.show());
