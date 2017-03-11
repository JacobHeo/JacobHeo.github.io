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

 function checkWinner(){
  var r1c1 = document.getElementById("row1col1").innerHTML;
  var r1c2 = document.getElementById("row1col2").innerHTML;
  var r1c3 = document.getElementById("row1col3").innerHTML;
  var r1c4 = document.getElementById("row1col4").innerHTML;
  var r1c5 = document.getElementById("row1col5").innerHTML;
  var r1c6 = document.getElementById("row1col6").innerHTML;
  var r1c7 = document.getElementById("row1col7").innerHTML;
  var r2c1 = document.getElementById("row2col1").innerHTML;
  var r2c2 = document.getElementById("row2col2").innerHTML;
  var r2c3 = document.getElementById("row2col3").innerHTML;
  var r2c4 = document.getElementById("row2col4").innerHTML;
  var r2c5 = document.getElementById("row2col5").innerHTML;
  var r2c6 = document.getElementById("row2col6").innerHTML;
  var r2c7 = document.getElementById("row2col7").innerHTML;
  var r3c1 = document.getElementById("row3col1").innerHTML;
  var r3c2 = document.getElementById("row3col2").innerHTML;
  var r3c3 = document.getElementById("row3col3").innerHTML;
  var r3c4 = document.getElementById("row3col4").innerHTML;
  var r3c5 = document.getElementById("row3col5").innerHTML;
  var r3c6 = document.getElementById("row3col6").innerHTML;
  var r3c7 = document.getElementById("row3col7").innerHTML;
  var r4c1 = document.getElementById("row4col1").innerHTML;
  var r4c2 = document.getElementById("row4col2").innerHTML;
  var r4c3 = document.getElementById("row4col3").innerHTML;
  var r4c4 = document.getElementById("row4col4").innerHTML;
  var r4c5 = document.getElementById("row4col5").innerHTML;
  var r4c6 = document.getElementById("row4col6").innerHTML;
  var r4c7 = document.getElementById("row4col7").innerHTML;
  var r5c1 = document.getElementById("row5col1").innerHTML;
  var r5c2 = document.getElementById("row5col2").innerHTML;
  var r5c3 = document.getElementById("row5col3").innerHTML;
  var r5c4 = document.getElementById("row5col4").innerHTML;
  var r5c5 = document.getElementById("row5col5").innerHTML;
  var r5c6 = document.getElementById("row5col6").innerHTML;
  var r5c7 = document.getElementById("row5col7").innerHTML;
  var r6c1 = document.getElementById("row6col1").innerHTML;
  var r6c2 = document.getElementById("row6col2").innerHTML;
  var r6c3 = document.getElementById("row6col3").innerHTML;
  var r6c4 = document.getElementById("row6col4").innerHTML;
  var r6c5 = document.getElementById("row6col5").innerHTML;
  var r6c6 = document.getElementById("row6col6").innerHTML;
  var r6c7 = document.getElementById("row6col7").innerHTML;
   

if(r1c1 == r1c2 && r1c1 == r1c3 && r1c1 !== "" ||
     r2c1 == r2c2 && r2c1 == r2c3 && r2c1 !== "" ||
     r3c1 == r3c2 && r3c1 == r3c3 && r3c1 !== "" ||
     r1c1 == r2c1 && r1c1 == r3c1 && r1c1 !== "" ||
     r1c2 == r2c2 && r1c2 == r3c2 && r1c2 !== "" ||
     r1c3 == r2c3 && r1c3 == r3c3 && r1c3 !== "" ||
     r1c1 == r2c2 && r1c1 == r3c3 && r1c1 !== "" ||
     r1c3 == r2c2 && r1c3 == r3c3 && r1c3 !== "" ){
    return true;
  }
  else{
    return false;
  }
 }