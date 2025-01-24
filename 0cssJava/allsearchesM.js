
window.oncontextmenu=disablerightclick;

function disablerightclick(){
        return false;
}

let allSearchHeight=document.getElementById('allSearchHeight');

let box=document.getElementById('searchbox');
let databoxlist=document.getElementById("divdatalist");
box.onkeydown=selecting;
box.oninput=keysof;
box.onfocus=keysof;



// top.window.alert(allSearchHeight.offsetHeight);

let datalis=document.getElementsByClassName('optionlist')




//anything that matches search appears in here
function keysof(){

    let e=0;
    databoxlist.style.display="block";
    
    for(let o=0; o<datalis.length; o++){

        datalis[o].style.display="none";
        }

for(let i=0; i<datalis.length; i++){
    
let showsits=datalis[i].getAttribute('value');
datalis[i].style.backgroundColor="";
if(box.value.trimStart()==""||box.value.trimStart()==" "){
    databoxlist.style.display="none";
        
}
else if(showsits.toLowerCase().includes(box.value.toLowerCase().trimStart())){
    
    
   

    datalis[i].style.display="block";


e++;

    if(e>=6){
        break;   
    }


    
}else{
    datalis[i].style.display="none";
}
}
window.parent.document.getElementById('iframesearch').style.height=allSearchHeight.offsetHeight+"px";
error();

}

box.onblur=delaying;

function delaying(){ 
    setTimeout(iframeParentHeight, 250);
}




function selecting(){

    let mydatas=databoxlist;
    let key = event.key || event.keyCode;
    let choose, next, prev,ini,ini2, lastup, selectval,len,cmfirst, overalllast;


//                arrow down
//               --------------
if(key=="ArrowDown"&&mydatas.style.display=='block'){
   


    //if selects exist choose
for(let a=0; a<datalis.length; a++){
if(datalis[a].style.display=='block'&&datalis[a].style.backgroundColor=='rgb(221, 222, 226)'){
  choose=a;
   next=choose;
//alert(a);
}else if(datalis[a].style.display=='block'){
    //highest index block
    len=a;
 }
}

//if bloock
if(choose<datalis.length){
    
    datalis[choose].style.backgroundColor='';

    //if choose is lesser than highest index
    if(choose<=len){   

   next++ 
    for(next; next<datalis.length; next++){
        
if(datalis[next].style.display=='block'){
           datalis[next].style.backgroundColor='rgb(221, 222, 226)';
           selectval= datalis[next].getAttribute('value');
           box.value=selectval;
            break;
  }
 }
}else{

    //if index greater than the highest index
    for(gtfirst=0; gtfirst<datalis.length; gtfirst++){
    
if(datalis[gtfirst].style.display=='block'){
   datalis[gtfirst].style.backgroundColor='rgb(221, 222, 226)';
   selectval= datalis[gtfirst].getAttribute('value');
   box.value=selectval;
    break;
   }
  }
 }
}else{
    //begin if there is no selection
    for(ini=0; ini<datalis.length; ini++){

        
        if(datalis[ini].style.display=='block'){
           datalis[ini].style.backgroundColor='rgb(221, 222, 226)';
           selectval= datalis[ini].getAttribute('value');
           box.value=selectval;
            break;
        }   
      }
   }  
}


//             ON KEY UP
//           --------------
if(key=="ArrowUp"&&mydatas.style.display=='block'){
    for(let i=0; i<datalis.length; i++){
        if(datalis[i].style.display=="block"){
        overalllast=i;
        }
    }

         //if selects exist
        //and  which index to choose
        for(let o=0; o<datalis.length; o++){
            
      if(datalis[o].style.display=='block'&&datalis[o].style.backgroundColor=='rgb(221, 222, 226)'){ 
           choose=o;
           prev=choose;
        }
         }

         //if block
      if(choose<datalis.length){

    datalis[choose].style.backgroundColor='';
    

    //get the first block
    for(cmfirst=0; cmfirst<datalis.length; cmfirst++){
    if(datalis[cmfirst].style.display=="block"){
        break;
    }}
    
    //if prev is the same index as the first block,
    //select the last block
    if(prev==cmfirst){
    
         datalis[overalllast].style.backgroundColor='rgb(221, 222, 226)';
           selectval= datalis[overalllast].getAttribute('value');
           box.value=selectval;
 
       }else{
        //else select move upwards
        prev--
    for(prev; prev<datalis.length; prev--){
  if(datalis[prev].style.display=='block'){
      //alert(next);
      datalis[prev].style.backgroundColor='rgb(221, 222, 226)';
             selectval= datalis[prev].getAttribute('value');
             box.value=selectval;
     break;
    }
   }
  }
}
else{
    //begin if there is no selection
  //----------------------------------
    for(ini2=0; ini2<datalis.length; ini2++){
        
        if(datalis[ini2].style.display=='block'){
             lastup=ini2;
        }   
    }
    datalis[lastup].style.backgroundColor='rgb(221, 222, 226)';
           selectval= datalis[lastup].getAttribute('value');
           box.value=selectval;
 }
}


//              ENTER
//            ----------
if(key=='Enter'){
    databoxlist.style.display="none";
    locatedata()
 }
}



let ptions=document.getElementsByClassName('optionlist');
//loop

for(let a=0; a<ptions.length; a++){
    // make option appear in search when clicked or when an event is triggered
ptions[a].onclick=clicksfd;
ptions[a].onmouseover=rbluruse;
ptions[a].onmouseout=abluruse;
function clicksfd(){
   
   
            box.value=ptions[a].getAttribute('value');
            databoxlist.style.display="none"
            locatedata()
        


}}





box.addEventListener("blur",hidetime)
function hidetime(){
    setTimeout(notseen, 10);
}

function notseen(){
    databoxlist.style.display="none"
}

function rbluruse(){
    box.removeEventListener("blur",hidetime)
}

function abluruse(){
    box.addEventListener("blur",hidetime)
}


function error(){
top.document.getElementById('searcherror').style.display='none';
}


function iframeParentHeight(){
    window.parent.document.getElementById('iframesearch').style.height=32+"px";    
 }

// function increase(){

//   }

//creat links
function locatedata(){
    
    
     let searchvalue=box.value.trim().toLowerCase();
            let index=".html"

   
 

let inlocations;
    let result;
    let fileName;
for(let e=0; e<datalis.length; e++){
    
    result=datalis[e].getAttribute('value');
    fileName=datalis[e].getAttribute('name');
    let dash="/";
    inlocations=".."+dash+fileName+dash;
    if(searchvalue==result){ 
        break;
        }
    }

 

    if(searchvalue==result){
    //   alert(top.window.location = inlocations+searchvalue+index);  
        top.window.location = inlocations+searchvalue+index;
        
        }else if(searchvalue==""){

           error();  
        
        }
       else {

        let first='your search:'; 
        let last='was not found';
        top.document.getElementById('searcherror').style.display='block';

        top.document.getElementById('negativedisplay').innerHTML=first;
       top.document.getElementById('errormessage').innerHTML='"'+searchvalue+'"';
       top.document.getElementById('negativedisplayConfirmed').innerHTML=last;
       iframeParentHeight();



    }

}
// 
iframeParentHeight();


