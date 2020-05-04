let obj = {
    aNumber: 32,
    aString: "asadsdasd",
    aFunction: function (){
        return this.aNumber + this.aString      //we use "this" to refer to the items inside the object
    }
}

console.log(obj.aFunction())