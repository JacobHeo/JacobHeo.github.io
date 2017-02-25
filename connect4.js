var chosenColor;

function chooseColor(color){
  chosenColor = color;
}

function makeMove(divID, col, row){
  
  if(col == 1){
  }
  
  
  fill(divID);
}

  
  function isFilled(divLocation){
    
    var chosenDiv=document.getElementById(divLocation).style.backgroundColor;
    if(chosenDiv === "black" || chosenDiv === "red"){
      return true;
    }
    else{
      return false;
    }
  }

function fill(divLocation){
  document.getElementById(divLocation).style.backgroundColor=chosenColor
}