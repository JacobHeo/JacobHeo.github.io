//JS for Tic Tac Toe
var character = "";

function chooseX(){
  character = 'X';
}

function chooseO(){
  character = 'O';
}

function makeMove(divLocation){
  
  var insideDiv = document.getElementById(divLocation).innerHTML;
  
  if(insideDiv === ""){
    document.getElementById(divLocation).innerHTML=character;
    document.getElementById("notes").innerHTML="";
  }
  else{
    document.getElementById("notes").innerHTML="Already made a move here" +
      "<p> Try another spot!</p>"
  }
  
  if(checkWinner()){
    document.getElementById("notes").innerHTML=character + "wins!";
  } 
}

function checkWinner(){
  var r1c1 = document.getElementById("row1col1").innerHTML;
  var r1c2 = document.getElementById("row1col2").innerHTML;
  var r1c3 = document.getElementById("row1col3").innerHTML;
  var r2c1 = document.getElementById("row2col1").innerHTML;
  var r2c2 = document.getElementById("row2col2").innerHTML;
  var r2c3 = document.getElementById("row2col3").innerHTML;
  var r3c1 = document.getElementById("row3col1").innerHTML;
  var r3c2 = document.getElementById("row3col2").innerHTML;
  var r3c3 = document.getElementById("row3col3").innerHTML;

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
//JS for Flash Card App
var operand1;
var operand2;

function getNumbers(){
  operand1 = Math.floor(Math.random() * 20) + 1;
  operand2 = Math.floor(Math.random() * 20) + 1;
  document.getElementById("operand1").innerHTML=operand1;
  document.getElementById("operand2").innerHTML=operand2;
  document.getElementById("results").innerHTML="";
  document.getElementById("userAnswer").value="";
}

function checkAnswer(){
  var userSum = document.getElementById("userAnswer").value;
  var sum = operand1 + operand2;
  
  if(userSum == sum){
    document.getElementById("results").innerHTML="Correct!";
  }
  else{
    document.getElementById("results").innerHTML="Incorrect!";
  }
}

//this is a list of urls of photos
var pics = [
           "http://www.flags.net/images/largeflags/SKOR0001.GIF",
           "https://sc-news.s3.amazonaws.com/18988/KGS+violin2.jpg",
           "https://signup.leagueoflegends.com/theme/signup_theme/img/signup_logo2_clean.png",
           "http://www.showchoir.com/choirs/media/school_images/s6.jpg?1485744351"
           ];

var picIndex = 0;

function goLeft(){
  
  if(picIndex > 0 ){
    picIndex = picIndex - 1;
    document.getElementById("pic").src=pics[picIndex];
  }
  
}//end of function

function goRight(){
  if(picIndex < (pics.length - 1)){
    picIndex = picIndex + 1;
    document.getElementById("pic").src=pics[picIndex];
  }
}

//JS for Connect 4
var character = ""

function chooseBlack(){
  color = 'Black'
}

function chooseRed(){
  color = 'Red'
}