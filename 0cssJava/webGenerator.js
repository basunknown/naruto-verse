 let fileName=window.location.pathname;
  let lastPath=fileName.substring(fileName.lastIndexOf('/')+1);
  let characterFiltered=lastPath.replace(".html","").replaceAll("%20"," ");
  document.title=characterFiltered;
let removeFirstWord=characterFiltered.split(' ').slice(1);
let newName=removeFirstWord.join().replace(/,/g," ");


let id="";
let name="";
let lands=""
let bio="";
let generalSkill="";
let jutsuList="";
let jutsu="";
let clans="";
let LastClanName="";
let imageBuilt="";
let filterVillage="";

let imageForm='<img draggable="false" class="images" src="../formsImage/';

let endForm='">';

let fullname="";
let firstHref='<a href="';
let endHref='</a>';
let html='.html';
let png='.png';
let logoBuild="";
let buildClanLogo="";


  // let titled=document.title;
let lastNumber=characterFiltered.split(' ').length-1;

//generate character info
for(let i=0; i<character.length; i++){

if(characterFiltered.toLowerCase()==character[i].name){
id=character[i];
name=id.name;
bio=id.bio;
clans=id.clan
lands=id.land;
jutsu=id.jutsu;
jutsuInfo=id.jutsuInfo;
generalSkill=id.generalSkill;
fullname=name;


}else{


  if(newName==character[i].name && character[i].clan[0]!==""){

  for(let last=0; last<character[i].clan.length; last++){

if(characterFiltered.split(' ')[0].toLowerCase()==character[i].clan[last]){
// console.log(character[i].clan[last])
// console.log(characterFiltered.split(' ')[0])

LastClanName=character[i].clan[last];

id=character[i];
name=id.name;
clans=id.clan
bio=id.bio;
jutsuInfo=id.jutsuInfo;
lands=id.land;
jutsu=id.jutsu;
generalSkill=id.generalSkill;
fullname=LastClanName+' '+newName;

break;



}


   }





    }
  }}

 

//generate logo for clan and village
for(let l=0; l<lands.length; l++){

filterVillage=lands[l][lands[l].length-1].replace(" village","")

logoBuild+=firstHref+lands[l][0]+html+endForm+' <img draggable="false" title="'+lands[l][0]+'" class="iconInMBar" draggable="false" src="../00symbol/landSymbol/'+filterVillage+png+endForm+endHref;


}



let instead="this.onerror=null; this.src='../00symbol/clanSymbol/knowsybol.png'"

let filteredClan="";
for(let cs=0; cs<clans.length; cs++){
           

        buildClanLogo+=firstHref+clans[cs]+html+endForm+'<img draggable="false" title="'+clans[cs]+'" onerror="'+instead+'"  class="iconInMBar" draggable="false" src="../00symbol/clanSymbol/'+clans[cs]+png+endForm+endHref;
        // console.log(clans[cs])

      if(clans[0]==""){
      
      buildClanLogo="";
      

    }

  }


//generate character picture
let getLast=fullname.split(' ').length-1;
for(let m=0; m<charForms.length; m++){



if(charForms[m].replace('(','').replace(')','').match(fullname.replace('(','').replace(')',''))){

if(charForms[m].split(' ')[getLast]==fullname.split(' ')[getLast].replace('(','').replace(')','')){
imageBuilt+='<img draggable="false" class="images" title="'+fullname.toUpperCase()+'" src="../formsImage/'+charForms[m]+endForm;
  }
}
}





document.getElementsByClassName('touch')[0].onmouseover=touch;
document.getElementsByClassName('iconRight')[0].onmouseover=touch;
document.getElementsByClassName('iconLeft')[0].onmouseover=touch;



document.getElementsByClassName('iconRight')[0].onclick=iconLeft;

document.getElementsByClassName('iconLeft')[0].onclick=iconRight;

document.getElementsByClassName('closeJutsu')[0].onclick=closeJutsu;

document.getElementsByClassName('closeInfo')[0].onclick=closeInfo;


function closeJutsu(){
document.getElementsByClassName('jutsuContainer')[0].style.display="none"
document.body.style.overflow="auto";
}

function closeInfo(){
document.getElementsByClassName('info')[0].style.display="none"
document.body.style.overflow="auto";

}

function touch(){
document.getElementsByClassName('touch')[0].style.display="none"
}

function iconLeft(){
document.getElementsByClassName('jutsuContainer')[0].style.display="block";
document.body.style.overflow="hidden";
}

function iconRight(){
document.getElementsByClassName('info')[0].style.display="block";
document.body.style.overflow="hidden";
}



//generate link for character name
let fullText="";
let text=bio.split(' ');
let triming="";
let u=0;
let exclude="";

for(let b=0; b<text.length; b++){


  if(text[b].toLowerCase().replace("’s","").replace('.','').replace(',','')!==name){
    if((text[b]+' '+text[b+1]).toLowerCase().replace("’s","").replace('.','').replace(',','')!==name){
      if((text[b]+' '+text[b+1]).toLowerCase().replace("’s","").replace('.','').replace(',','')!==name.split(' ')[0]){
      if(text[b].toLowerCase().replace("’s","").replace('.','').replace(',','')!==name.split(' ')[0]){
        

    for(let char=0; char<character.length; char++){

if(text[b].toLowerCase().replace("’s","").replace('.','').replace(',','')==character[char].name&&character[char].clan==""){
  triming=text[b].slice(character[char].name.split('').length);

  text[b]=' '+'<a href="'+character[char].name+'.html">'+text[b].replace("’s","").replace('.','').replace(',','')+'</a>'+triming;

}



if(text[b].toLowerCase().replace("’s","").replace('.','').replace(',','')==character[char].name && text[b+1].toLowerCase().replace("’s","").replace('.','').replace(',','')!==character[char].clan[0]){

  for(let c=0; c<clan.length; c++){
  if(text[b+1].toLowerCase().replace("’s","").replace('.','').replace(',','')==clan[c]){
    exclude=text[b];
    break;
  }
}

if(text[b]!==exclude){
triming=text[b].slice(character[char].name.split('').length);
text[b]=' '+'<a href="'+character[char].clan[0]+' '+character[char].name+'.html">'+text[b].replace("’s","").replace('.','').replace(',','')+'</a>'+triming;
}
}

if((text[b]+' '+text[b+1]).toLowerCase().replace("’s","").replace('.','').replace(',','')==character[char].name){

   triming=text[b+1].slice(character[char].name.split(' ')[1].length);

  text[b]=' '+'<a href="'+character[char].name+'.html">'+text[b]+' '+text[b+1].replace("’s","").replace('.','').replace(',','')+'</a>'+triming;
  text[b+1]="";
}




if(text[b].toLowerCase().replace("’s","").replace('.','').replace(',','')==character[char].name && text[b+1].toLowerCase().replace("’s","").replace('.','').replace(',','')==character[char].clan[0]){
    
  triming=text[b+1].slice(character[char].clan[0].split('').length);

      text[b]=' '+'<a href="'+character[char].clan[0]+' '+character[char].name+'.html">'+text[b]+' '+text[b+1].replace("’s","").replace('.','').replace(',','')+'</a>'+triming;
      text[b+1]="";

}



    }
}
  }}
}

fullText+=text[b]+' ';

}




let characterjutsu="";

for(let js=0; js<srcLink.length; js++){
  if(srcLink[js].name==fullname){

characterjutsu=srcLink[js];
  }
}


for(let j=0; j<jutsu.length; j++){

          jutsuList+='<div onclick="clickJutsu()" class="jutsuCard" name="'+jutsu[j]+'" id="'+j+'" ><video  autoplay muted loop class="jutsu" src="'+characterjutsu.jutsu[j]+'"></video><p class="jutsuTitle">'+jutsu[j]+'</p></div>';
  
    }
  







if(jutsu[0]==""){
  document.getElementsByClassName('iconRight')[0].style.display="none";
  document.getElementsByClassName('touch')[0].style.marginTop="24px";

}


 
//display


document.getElementById('link').href='../00symbol/landSymbol/'+lands[0][0].replaceAll(' village','')+png;

// console.log(lands[0][0].replaceAll(' village',''))

document.getElementById('displaybio').innerHTML=fullText;
// comsole.log(fullText);

document.getElementById('image').innerHTML=imageBuilt;
document.getElementById('menuLog').innerHTML=logoBuild+buildClanLogo;
document.getElementById('generalSkill').innerHTML=generalSkill;
document.getElementById('jutsus').innerHTML=jutsuList;


document.getElementById('jutsuTitle').innerHTML=jutsu[0];
  document.getElementById('jutsuInfo').innerHTML=jutsuInfo[0];
  document.getElementById('jutsuInfoDisplay').innerHTML='<video autoplay muted loop class="videoInfo" src="../jutsu/'+characterjutsu.jutsu[0]+'"></video>';


  {let scrollMessageContent=document.getElementsByClassName("imageDisplay")[0];

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

scrollMessageContent.addEventListener('mousedown',mouseDown);}


// comsole.log(clans);
function clickJutsu(){
  let thisName=event.target.getAttribute('id');
  let thisTitle=event.target.getAttribute('name');
  let thisVideo=event.target.childNodes[0].getAttribute('src');
  
  document.getElementById('jutsuTitle').innerHTML=thisTitle;
  document.getElementById('jutsuInfo').innerHTML=jutsuInfo[thisName];
  document.getElementById('jutsuInfoDisplay').innerHTML='<video autoplay muted loop class="videoInfo" src="../jutsu/'+thisVideo+'"></video>';


  // //console.log(event.target.getAttribute('name'))

}