window.oncontextmenu=disablerightclick;

function disablerightclick(){
      return false;
}





window.addEventListener('load' , function(){
 let preloader= document.getElementsByClassName('fullpage')[0];
 preloader.classList.add('iframeloader1');
//  preloader.style.display='none';
document.getElementsByTagName('body')[0].style.overflowY='scroll';

let  userAgent=navigator.userAgent;
if(userAgent.indexOf("Firefox") > -1){
document.getElementsByClassName('introinfoP')[0].style.scrollbarWidth="thin";
document.getElementsByClassName('hiddenvillagep')[0].style.scrollbarWidth="thin";
 }
});


let iframecover= document.getElementsByClassName("iframeCover")[0];

let overlay= document.getElementsByClassName("filteroverlay")[0];

let buttono= document.getElementById('characterlistAOcontainer');
buttono.onclick= displaychatacterListO;

let buttonc= document.getElementsByClassName("characterlistA")[0];
buttonc.onclick= displaychatacterListC;



let hand = document.getElementsByClassName('handpointed')[0];

let clanname = document.getElementsByClassName('clanname');

for(let a=0; a<clanname.length; a++){
clanname[a].onmouseover=handgone;

function handgone(){
  hand.style.display='none';
}}


function displaychatacterListO(){
  iframecover.style.display="block";
  buttonc.style.display="block";
  buttono.style.display="none";
 }
 
 
 for(let i=0; i<6; i++){
   document.getElementById('forCharacterRemoval'+i).onclick=displaychatacterListC;
   document.getElementById('forCharacterRemoval'+i).onclick=unckeck;
 
 }
 
 
  function displaychatacterListC(){

  iframecover.style.display="none";
   buttono.style.display="block";

 }
 
 function unckeck(){
  iframecover.style.display="none";
  buttono.style.display="block";
   document.getElementById("verifiedIf").checked=false;
 }



let clansbutton = document.getElementsByClassName('fclansbutton');
let slideimages =document.getElementsByClassName("slideimages");



for (let i = 0; i < slideimages.length; i++) {


  clansbutton[i].onclick=clickslide;

  function clickslide(){
    clearTimeout(myTimeout);

    for (let x = 0; x< slideimages.length; x++) {
      slideimages[x].style.display = "none";  
      clansbutton[x].style.backgroundColor= "";
    }

    slideimages[slideimages.length-1-i].style.display = "block";
    clansbutton[i].style.backgroundColor= "grey"; 

    myTimeout= setTimeout(slideshow, 8000)
  }



  let add=0;
  window.onload=slideshow;

  function slideshow(){


  for (let o = 0; o < slideimages.length; o++) {
    slideimages[o].style.display = "none";  
    clansbutton[o].style.backgroundColor= ""; 
  }

  add++;
  if (add > slideimages.length) {add = 1}

  // slideimages[add-1].classList.add("sliding")
  slideimages[add-1].style.display = "block";
  clansbutton[slideimages.length-add].style.backgroundColor= "grey";


  myTimeout = setTimeout(slideshow, 4000);
  }
}

// let thisimages=document.getElementsByTagName('img');
// for(let u=0; u<thisimages.length; u++){
//   thisimages[u].src.toLowerCase();
// }




