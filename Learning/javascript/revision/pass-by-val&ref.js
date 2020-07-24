
/*Normal pass by value*/
// var quidditchWinner = "harry"

// function changeWinner(winner){
//    console.log("Original winner: " + winner)
//    winner = "Draco"
//    console.log("Changed winner: " + winner)
// }

// console.log("The winner was " + quidditchWinner)

// changeWinner(quidditchWinner)

// console.log("Now the winner is " + quidditchWinner)


var quidditchWinners = [
   "Harry", "Ron", "Hermonie "
]

function changeWinners(winner){
   winner[0] = "Draco"
   winner[1] = "Goyle"
   winner[2] = "Pansy"
}

console.log("The winners were " + quidditchWinners)

changeWinners(quidditchWinners)

console.log("Now the winners are " + quidditchWinners)

//Even though this looks like pass by ref, js always passes by value