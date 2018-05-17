

var textarea= document.querySelector(".text");
var comp=document.querySelector("#typetext").textContent;
var wrongEntry=false;
var flag=0;
var i=-1;
var timeInSecs
var timeleft;
var ticker;
var wrongType=0;
var cps;
var accuracy;

function startTimer(secs){
timeInSecs = parseInt(secs)-1;
ticker = setInterval("tick()",1000);  
}

function tick() {
var secs = timeInSecs;
 if (secs>0){ 
   timeInSecs--;
 }
 else {
   clearInterval(ticker);
   textarea.setAttribute("disabled",true);
   calculate(); 
 }

document.getElementById("countdown").innerHTML = "Time Left : " + secs;
}

textarea.addEventListener("keydown", function(k){

  if(i==-1 && flag==0)
     { startTimer(5);    textarea.style.background="#2be22e"; flag=1;}
  
  if(k.key=='Backspace'){
    if(i!=-1)
       i--;
    
    wrongEntry=false;
    textarea.style.background="#2be22e";
  }
  
  else{
        i++;
        if(wrongEntry==true){
           i--;      
           k.preventDefault();
          }
        else if(k.key!=comp[i]){
           wrongEntry=true;
           textarea.style.background="#c3001d";
           wrongType++; } 
   } 
})

textarea.addEventListener("keyup", function()
{
  if(textarea.value.length == comp.length && !wrongEntry)
     {  textarea.setAttribute("disabled",true);
        clearInterval(ticker);
        calculate(); }
})

function calculate(){
  cps = i/60;
  accuracy = i / (i+wrongType) * 100;

  document.getElementById("results").innerHTML = "Your Result - \n";
  document.getElementById("results1").innerHTML = "Characters per second : " + cps.toFixed(2);
  document.getElementById("results2").innerHTML = "Accuracy : " + accuracy.toFixed(2) + " %";
}