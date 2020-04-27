/*If a function takes a function as an argument or returns another function, it is a higher order function*/


// function using another function as an argument
// function getFirstName (fullName){
//     return fullName.split(" ")[0]
// }

// function greet (findName, fullName){
//     let firstName = findName (fullName);
//     console.log("Hey " + firstName)

// }

// greet(getFirstName, "Varun Kumar")


/*Replacing findName with getFirstName as both of them are the same. We were just using findName to use getFirstName as an object*/

function getFirstName (fullName){
    return fullName.split(" ")[0]
}

function greet (getFirstName, fullName){
    let firstName = getFirstName (fullName);
    console.log("Hey " + firstName)

}

greet(getFirstName, "Varun Kumar")