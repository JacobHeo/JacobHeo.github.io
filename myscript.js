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
}