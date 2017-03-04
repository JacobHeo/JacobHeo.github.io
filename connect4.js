// this holds either black or red
var chosenColor;

function chooseColor(color){
  chosenColor = color;
}

//handles the general logic of making a move
function makeMove(divID, col, row){

  

    var rowIndex = 6;
    //variable to hold circle location
    var circle = "row" + rowIndex + col;
    
    checkRow(circle, rowIndex, col);

       //if the circle is already filled
    if(tryFilling(circle) === false){
      rowIndex = rowIndex - 1;
    }
}

function checkRow(circle, rowIndex, col){
  
  var stop = false;
  while(!stop){
 circle = "row" +rowIndex + col;
  
    //if the circle is already filled
    if(tryFilling(circle) === false){
    rowIndex = rowIndex - 1
   }
  else{
    stop = true;
  }
  }

  return rowIndex;
}
//this tries filling in a circle if not filled
  function tryFilling(divID){
  //create variable to hold true of false if filled
  var isDivFilled = isFilled(divID);
  
  if(isDivFilled === true){
    return false;
  }
  
    fill(divID);

}

function tryFilling(divID){
    //create variable to hold true of false if filled
  var isDivFilled = isFilled(divID);
  if(isDivFilled === true){
    return false;
  }
  else{
    fill(divID);
    return true;
}
}
  // support function that checks if a circle is filled
  function isFilled(divLocation){
    
    //get the circle color info
    var chosenDiv=document.getElementById(divLocation).style.backgroundColor;
  
    //if the current circle is filled, return true
    if(chosenDiv === "black" || chosenDiv === "red"){
      return true;
    }
    else{
      return false;
    }
  }

//support function that fills the circle
function fill(divLocation){
  document.getElementById(divLocation).style.backgroundColor=chosenColor
}