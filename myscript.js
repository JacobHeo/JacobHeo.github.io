function changeColor (){
  document.getElementById("content").style.color = "green";
}
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
           "https://signup.leagueoflegends.com/theme/signup_theme/img/signup_logo2_clean.png"
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