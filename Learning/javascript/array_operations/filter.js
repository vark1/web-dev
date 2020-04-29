
let arr = [1,2,3,4,5,6,7]

let arr2 = arr.filter(function(item){
    return (item % 3 === 0)
})

console.log(arr2)


/*filter_food*/

let menu = [
    "Paneer Tikka",
    "Onion Rings",
    "Garlic Naan",
    "Chicken Tandoor",
    "Egg Curry"
]

function isVeg(food){
    if (food.toLowerCase().indexOf("chicken") !== -1) return false;
    if (food.toLowerCase().indexOf("egg") !== -1) return false;
    return true
}

function onionGarlicFree (food){
    if (food.toLowerCase().indexOf("garlic") !== -1) return false;
    if (food.toLowerCase().indexOf("onion") !== -1) return false;
    return true;
}

let vegMenu = menu.filter(isVeg)
let jainMenu = menu.filter(isVeg).filter(onionGarlicFree)

console.log("Menu: " + menu)
console.log("Veg Menu: " + vegMenu)
console.log("Jain menu: " + jainMenu)