
function firstLetterName(name) {
  alert("The name " + name + " starts with the letter " + name[0]);
}

function divisibleByTwo(number){
  if(number % 2){
    return("false")
  }
  else {
    return("true")
  }
}

function largestNum(arr){
  return(Math.max(...arr))
}

firstLetterName("Belle");
divisibleByTwo();
largestNum([1,2,3,4,42]);