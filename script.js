
//declare global variables
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppers =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var spChar =["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];



function getPasswordOptions() {

   var pLen = (prompt("How many characters would you like your password?  enter between 8 and 128"));  //ask user how long they want password
           
    if (pLen < 8 || pLen > 128) {
            alert("Minimum password length is 8 characters and max is 128 characters");  //alert when user enters less than 8 or greater than 128
            return
        } 
       


 var specChar = confirm("Would you like special characters?");
 var upperChar = confirm("Would you like numbers?" );
 var lowerChar =confirm("Would you like uppercase characters?");
 var numberChar =confirm("Would you like lowercase characters?");
    
    if (lowerChar === false && upperChar === false && numberChar === false && specChar === false) {
        alert("You must select at least one parameter")                                                 // alert user at least one parameter is required.
    return                                                                                          //returns value and if no return breaks the function and starts over.
  }
  
  var passwordOptions = {
      pLen: pLen,
      specChar: specChar,
      upperChar: upperChar,
      lowerChar: lowerChar,
      numberChar: numberChar
  }
  return passwordOptions
}

function getRandom(arr){       //one random per 
        
    var randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex]

}
// function to generate Password   -- Ask the user length of password from 8 to 128 chars
function generatePassword(){
   var result=[]                        //random chars of what user asked for
   var possibleChar=[]                  //all the possible chars of what the user has ok'd
   var gauranteeChar=[]                 //guarantee a min of 1 of each type, so user doesn't get all numbers etc..
   var options = getPasswordOptions()    //the one object above

if (options.specChar === true) {
    possibleChar=possibleChar.concat(spChar)
    gauranteeChar.push(getRandom(spChar))
    
}
 // do this 3x for the others.   
 if (options.upperChar === true) {
    possibleChar=possibleChar.concat(uppers)
    gauranteeChar.push(getRandom(uppers))
    
}
if (options.lowerChar === true) {
    possibleChar=possibleChar.concat(lowers)
    gauranteeChar.push(getRandom(lowers))
    
}
if (options.numberChar === true) {
    possibleChar=possibleChar.concat(nums)
    gauranteeChar.push(getRandom(nums))
    
}

 for(var i=0; i < options.pLen; i++) {
     result.push(getRandom(possibleChar))
 }

 for(var i=0; i < gauranteeChar.length; i++) {
    result[i]=gauranteeChar[i]
}
  return result.join("")                            //joining the result array to a string.
}   

           
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

      





  // Write password to the #password input
 


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
