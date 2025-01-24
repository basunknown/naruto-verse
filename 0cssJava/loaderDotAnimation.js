let dot = document.getElementById('dot');
// alert(dot.textContent.split("").length);

  setInterval(function (){
  
  if(dot.textContent.split("").length<3){
  dot.innerHTML+=".";
  }else{
  dot.innerHTML="";
  }
  
  }, 370);