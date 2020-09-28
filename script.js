
//declare global variables
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppers =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var spChar =["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


//function to verify user selection
function getPasswordOptions() {

   var pLen = (prompt("How many characters would you like your password?  enter between 8 and 128"));  //ask user how long they want password
           
    if (isNaN(pLen) || pLen < 8 || pLen > 128) {
            alert("Minimum password length is 8 characters and max is 128 characters. Please enter a number.");  //alert when user enters less than 8 or greater than 128
            return
        } 
       

 var specChar = confirm("Would you like special characters?");
 var numberChar = confirm("Would you like numbers?" );
 var upperChar =confirm("Would you like uppercase letters?");
 var lowerChar =confirm("Would you like lowercase letters?");
    
    if (lowerChar === false && upperChar === false && numberChar === false && specChar === false) {
        alert("You must select at least one parameter")                                                 // alert user at least one parameter is required.
    return                                                                                              //returns value and if no return breaks the function and starts over.
  }
// object to be used in generatePassword function
  var passwordOptions = {
      pLen: pLen,
      specChar: specChar,
      upperChar: upperChar,
      lowerChar: lowerChar,
      numberChar: numberChar
  }
  return passwordOptions
}

//  function to randomize the values in the arrays
function getRandom(arr){       
        
    var randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex]

}
// function to generate Password   
function generatePassword(){
   var result=[]                                                                                         //random values of what user asked for
   var possibleChar=[]                                                                                   //all the possible values of what the user has selected
   var gauranteeChar=[]                                                                                  //guarantee a min of 1 of each type, so a repeating pswd doesn't occur.
   var options = getPasswordOptions()                                                                     

if (options.specChar === true) {                                                                         //these if conditions take the values from generatePassword function,
    possibleChar=possibleChar.concat(spChar)                                                             //concatentates and tells getRandom function to perform the randomizing.
    gauranteeChar.push(getRandom(spChar))
}
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

 for(var i=0; i < options.pLen; i++) {                                                                  //this for loop will take values and increment creating a result array.        
     result.push(getRandom(possibleChar))
 }

 for(var i=0; i < gauranteeChar.length; i++) {
    result[i]=gauranteeChar[i]
}
  return result.join("")                                                                                //joining the result array to a string.
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

      



