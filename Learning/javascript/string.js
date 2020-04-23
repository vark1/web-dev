let str="ASdasdasdas"

console.log(str.indexOf("a"))  //position of "a"

console.log(str.indexOf("a",4))  //position of "a" after the 4th position

console.log(str.substr(3))  //3rd position ke aage ki string ko kaat leta h

console.log(str.substr(3,5)) //3 se 5 letters ko kaat leta h

console.log(str.substring(3))    //3rd position ke aage ki string ko kaat leta h (same as str.substr(3))

console.log(str.substring(3,5))  //3rd position se 5th position tk kaat ta h

console.log(str.slice(4,5))  //4th aur 5th wale position ke beech ko slice krta h

console.log(str.substring(-5,-3))    //-5,-3 pe hi dekhta h which in this case is " " ie empty

console.log(str.slice(-5,-3))    //ulta count krta h ie "as"

console.log(str.split("a"))  //jaha jaha "a" h vaha split