function printString(myString){

    console.log(myString[0])

    if(myString.length > 1){
      let newString = myString.substring(1, myString.length )
      printString(newString)
    } else {
        return true
    }
}

function reverseString(){

}}