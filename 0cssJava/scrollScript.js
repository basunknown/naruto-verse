
window.oncontextmenu=disablerightclick;
let scrollcontentpLength= document.getElementsByClassName("scrollcontentp")[0];
let anchorLenth=document.getElementsByTagName("a").length;

for(let i=0; i<anchorLenth; i++){
document.getElementsByTagName("a")[i].setAttribute('draggable', false);
}



function disablerightclick(){
    return false;
}


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



