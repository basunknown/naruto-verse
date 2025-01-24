window.oncontextmenu=disablerightclick;
let scrollcontentpLength= document.getElementsByClassName("scrollcontentp")[0];
let anchorLenth=document.getElementsByTagName("a").length;

for(let i=0; i<anchorLenth; i++){
document.getElementsByTagName("a")[i].setAttribute('draggable', false);
}


    let minColumnWidth=250;
    let minWords=45;
    let numberOfWords = scrollcontentpLength.textContent.split(" ").length;
    
    let columnNumber=Math.trunc(numberOfWords/minWords);
    let clalcColumnNumber=(numberOfWords/minWords)-columnNumber;
    let with1ColumnNumber=1-((numberOfWords/minWords)-columnNumber);
    let no1ColumnNumber=(numberOfWords/minWords)-columnNumber;
    let pColumnwidth;
    if(numberOfWords<=65){
      pColumnwidth=minColumnWidth;
    }else{
      pColumnwidth=minColumnWidth*(columnNumber+with1ColumnNumber+no1ColumnNumber);
    }

    
if(clalcColumnNumber==0){
    document.getElementsByClassName("scrollcontentp")[0].style.width=pColumnwidth+"px";
    document.getElementsByClassName("scrollcontentp")[0].style.columnCount=columnNumber;
}else{
  document.getElementsByClassName("scrollcontentp")[0].style.width=pColumnwidth+"px";
  document.getElementsByClassName("scrollcontentp")[0].style.columnCount=columnNumber+with1ColumnNumber+no1ColumnNumber;
}


function disablerightclick(){
        return false;
}


document.getElementsByClassName('door1')[0].style.animationPlayState = "paused";
document.getElementsByClassName('door2')[0].style.animationPlayState = "paused";
document.getElementsByClassName('gate')[0].style.animationPlayState = "paused";
document.getElementsByClassName('containerscroll')[0].style.animationPlayState = "paused";
document.getElementsByClassName('scrollcontent')[0].style.animationPlayState = "paused";
document.getElementsByClassName('scrollimg')[0].style.animationPlayState = "paused";


let image=document.getElementsByClassName('clanImg');
let p=document.getElementsByClassName('classimgname');

window.addEventListener('load' , function(){
  
let userAgent=navigator.userAgent;
if(userAgent.indexOf("Firefox") > -1){
document.getElementsByClassName('tablecontainer')[0].style.scrollbarWidth="thin";

document.getElementsByClassName('scrollcontent')[0].style.scrollbarWidth="none";


// document.getElementsByClassName('scrollcontentp')[0].style.columnWidth="300px";
}

  let preloader= document.getElementsByClassName('fullpage')[0];
  preloader.classList.add('iframeloader1');
  document.getElementsByClassName('door1')[0].style.animationPlayState = "running";

document.getElementsByClassName('door2')[0].style.animationPlayState = "running";

document.getElementsByClassName('gate')[0].style.animationPlayState = "running";

// document.getElementsByTagName('html')[0].style.animationPlayState = "running";
document.getElementsByTagName('body')[0].style.overflowY='scroll';


document.getElementsByClassName('containerscroll')[0].style.animationPlayState = "running";

document.getElementsByClassName('scrollcontent')[0].style.animationPlayState = "running";

document.getElementsByClassName('scrollimg')[0].style.animationPlayState = "running";
 //  preloader.style.display='none';



 
 });



for(let i=0; i<image.length; i++){
  image[i].onmouseover=displaypname;
  image[i].onmouseout=displayrname;

function displaypname(){
  p[i].classList.add('classimgnamed');
  image[i].style.boxShadow= "0px 0px 8px";
}

function displayrname(){
  image[i].style.boxShadow= "0 0 #0000";
  p[i].classList.remove('classimgnamed');
   p[i].add('classimgname');

}}



{

 
  let scrollMessageContent=document.getElementsByClassName("scrollcontent")[0];
  
  let pos={ x:0, left:0};
  scrollMessageContent.style.cursor = 'grab';
  let mouseDown= function(e){
    scrollMessageContent.style.cursor="grabbing";
    pos={
      x:e.clientX,
      left:scrollMessageContent.scrollLeft
    }
  
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup',mouseUp);
  }
  
  
  let mouseMove= function(e){
    let updatePosLeft=e.clientX - pos.x;
  
    scrollMessageContent.scrollLeft=pos.left - updatePosLeft;
  //   if(scrollMessageContent.scrollLeft==0||scrollMessageContent.scrollleft==scrollMessageContent.scrollWidth){
    
  // }else{
  scrollMessageContent.style.backgroundPositionX=-(scrollMessageContent.scrollLeft)+"px";
  // }

  }
  
  
  let mouseUp=function(){
    scrollMessageContent.style.cursor="grab";
    
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup',mouseUp);
  }
  
  scrollMessageContent.addEventListener('mousedown',mouseDown);


 
  }

 