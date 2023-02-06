import axios from "axios";
import {useLocation} from "react-router-dom";

export const Case = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('caseId');
 
  axios.get('https://wondercase.net/casePageData.php?name='+name).then((response) => {
    if (  !document.getElementById('possible-drop').classList.contains('did')) {
    document.getElementById('case-price').textContent = response.data[0].price;
    document.getElementById('case-pricing').textContent = response.data[0].price;
    document.getElementById('case-image').src = response.data[0].image+'';
    var gold_items = [];
    var red_items = [];
    var pink_items = [];
    var purple_items = [];
    var blue_items = [];   
    var gray_items = [];
    var classification = ['AWP','AK-47','M4A1-S','M4A4','Desert Eagle','Glock-18','USP-S','P2000','SSG 08','P250','Tec-9','Five-SeveN','CZ75-Auto','Dual Berettas','FAMAS','Автомат «Галиль»','UMP-45',
  'P90','AUG','SG 553','MP9','MAC-10','MP7','MP5-SD','ПП-19 «Бизон»','MAG-7','Nova','XM1014','Sawed-Off','Револьвер R8','SCAR-20','G3SG1','Негев','M249'];

    for (var i = 0; i < response.data[0].items.length; i++){
     
      switch (response.data[0].items[i].color) {
      
        default: 
        gray_items.push(response.data[0].items[i]);
        break;
        case 'gray':
          console.log(response.data[0].items[i].color);
          gray_items.push(response.data[0].items[i]);
          break;
          case 'blue': console.log(response.data[0].items[i].color);
            blue_items.push(response.data[0].items[i]);
            break;
            case 'purple': console.log(response.data[0].items[i].color);
              purple_items.push(response.data[0].items[i]);
              break;
              case 'pink': console.log(response.data[0].items[i].color);
                pink_items.push(response.data[0].items[i]);
                break;
                case 'red': console.log(response.data[0].items[i].color);
                  red_items.push(response.data[0].items[i]);
                  break;
                  case 'gold': console.log(response.data[0].items[i].color);
                    gold_items.push(response.data[0].items[i]);
                    break;
      }
    }
    for (var ins = 0; ins < classification.length; ins++){
    for (var i = 0; i < gray_items.length; i++){
      if (gray_items[i].name.replace('StatTrak™ ','').startsWith(classification[ins])){
  document.getElementById('possible-drop').innerHTML =   document.getElementById('possible-drop').innerHTML  +`<div class="PossibleItem `+gray_items[i].color+`"><img src="`+gray_items[i].skin+`" alt="" /><span>`+gray_items[i].name+`</span></div>`;
    }}
  }
  for (var ins = 0; ins < classification.length; ins++){
    for (var i = 0; i < blue_items.length; i++){
      if (blue_items[i].name.replace('StatTrak™ ','').startsWith(classification[ins])){
      document.getElementById('possible-drop').innerHTML =   document.getElementById('possible-drop').innerHTML  +`<div class="PossibleItem `+blue_items[i].color+`"><img src="`+blue_items[i].skin+`" alt="" /><span>`+blue_items[i].name+`</span></div>`;
        }}
      }
      for (var ins = 0; ins < classification.length; ins++){
        for (var i = 0; i < purple_items.length; i++){
          console.log('dd: '+purple_items[i].name.replace('StatTrak™ ',''));
          console.log('dd1: '+purple_items[i].name);
          if (purple_items[i].name.replace('StatTrak™ ','').startsWith(classification[ins])){
          document.getElementById('possible-drop').innerHTML =   document.getElementById('possible-drop').innerHTML  +`<div class="PossibleItem `+purple_items[i].color+`"><img src="`+purple_items[i].skin+`" alt="" /><span>`+purple_items[i].name+`</span></div>`;
            }}}
            for (var ins = 0; ins < classification.length; ins++){
          
           
            for (var i = 0; i < pink_items.length; i++){      if (pink_items[i].name.replace('StatTrak™ ','').startsWith(classification[ins])){
              document.getElementById('possible-drop').innerHTML =   document.getElementById('possible-drop').innerHTML  +`<div class="PossibleItem `+pink_items[i].color+`"><img src="`+pink_items[i].skin+`" alt="" /><span>`+pink_items[i].name+`</span></div>`;
                }}
              }
              for (var ins = 0; ins < classification.length; ins++){
                for (var i = 0; i < red_items.length; i++){
                  if (red_items[i].name.replace('StatTrak™ ','').startsWith(classification[ins])){
                  document.getElementById('possible-drop').innerHTML =   document.getElementById('possible-drop').innerHTML  +`<div class="PossibleItem `+red_items[i].color+`"><img src="`+red_items[i].skin+`" alt="" /><span>`+red_items[i].name+`</span></div>`;
                    }}
                  }
                  
                    for (var i = 0; i < gold_items.length; i++){
                      
                      document.getElementById('possible-drop').innerHTML =   document.getElementById('possible-drop').innerHTML  +`<div class="PossibleItem `+gold_items[i].color+`"><img src="`+gold_items[i].skin+`" alt="" /><span>`+gold_items[i].name+`</span></div>`;
                        
                      }
                    
    document.getElementById('possible-drop').classList.add('did');  
}});
    

  return (

    <>
<ddt id="case-price" style={{display: 'none'}}></ddt>
    <div className="content case" id="case-ll" >
  <h1 className="case-title">«{name}»</h1>

  <div id="case-open-menu">
    
    <img id="case-image" src="" alt="" />
    <div className="case-amm" style={{position: 'relative',display: 'flex'}}>
<a className="selected-n" id="__1" onClick={() => {
  document.getElementsByClassName('case-amm')[0].getElementsByClassName('selected-n')[0].classList.remove('selected-n');
  document.getElementById('case-pricing').textContent=1*Number(document.getElementById('case-price').textContent);
  document.getElementsByClassName('case-amm')[0].getElementsByTagName('a')[0].classList.add('selected-n');
}}>X1</a>
<a id="__2" onClick={() => {
  document.getElementsByClassName('case-amm')[0].getElementsByClassName('selected-n')[0].classList.remove('selected-n');
  document.getElementById('case-pricing').textContent=2*Number(document.getElementById('case-price').textContent);
  document.getElementsByClassName('case-amm')[0].getElementsByTagName('a')[1].classList.add('selected-n');
}}>X2</a>
<a id="__3" onClick={() => {
  document.getElementsByClassName('case-amm')[0].getElementsByClassName('selected-n')[0].classList.remove('selected-n');
  document.getElementById('case-pricing').textContent=3*Number(document.getElementById('case-price').textContent);
  document.getElementsByClassName('case-amm')[0].getElementsByTagName('a')[2].classList.add('selected-n');
}}>X3</a>
<a id="__4" onClick={() => {
  document.getElementsByClassName('case-amm')[0].getElementsByClassName('selected-n')[0].classList.remove('selected-n');
  document.getElementById('case-pricing').textContent=4*Number(document.getElementById('case-price').textContent);
  document.getElementsByClassName('case-amm')[0].getElementsByTagName('a')[3].classList.add('selected-n');
}}>X4</a>
<a id="__5" onClick={() => {
  document.getElementsByClassName('case-amm')[0].getElementsByClassName('selected-n')[0].classList.remove('selected-n');
  document.getElementById('case-pricing').textContent=5*Number(document.getElementById('case-price').textContent);
  document.getElementsByClassName('case-amm')[0].getElementsByTagName('a')[4].classList.add('selected-n');
}}>X5</a>
<nav  onClick={() => {
document.getElementById('ttt').classList.toggle('selected');
}}>
  <span>Быстро</span>
<div id="ttt"></div>
</nav>
    </div>
  
    <a className="blue-button" onClick={
      () => {
        if (document.querySelector('.header__container').classList.contains('not_auth')){
          var alertBody = document.createElement('div');
          alertBody.classList.add('alert');
          alertBody.innerHTML = `<p> Авторизируйтесь, чтобы использовать эту функцию!</p>`;
          alertBody.addEventListener('click', function () {
            alertBody.classList.add('transforming');
        setTimeout(function () {alertBody.classList.add('hidden')},300);
          });
          setTimeout(function () {alertBody.classList.add('transforming')},1500);
          setTimeout(function () {alertBody.classList.add('hidden')},1800);
          document.querySelector('.alert-container').appendChild(alertBody);
          return;
        }
        if (Number(document.getElementById('balance').textContent.replace(' руб.','')) < Number(document.getElementById('case-pricing').textContent.replace(' руб.',''))) {
          var alertBody = document.createElement('div');
          alertBody.classList.add('alert');
          alertBody.innerHTML = `<p> Недостаточно средств!</p>`;
          alertBody.addEventListener('click', function () {
            alertBody.classList.add('transforming');
        setTimeout(function () {alertBody.classList.add('hidden')},300);
          });
          setTimeout(function () {alertBody.classList.add('transforming')},1500);
          setTimeout(function () {alertBody.classList.add('hidden')},1800);
          document.querySelector('.alert-container').appendChild(alertBody);
          return;
        }
        document.querySelector('.content').classList.add('opening-case');
        document.getElementById('case-opening').innerHTML = '<img src="https://wondercase.net/assets/others/case-anim.gif">';

axios.get('https://wondercase.net/openCase.php?caseName='+document.querySelector('.case-title').textContent.replace('«', '').replace('»','')+'&amount='+document.querySelector('.selected-n').id.replace('__','')).then((response) => {
console.log(response.data);
var text = response.data+'';
if (text.startsWith('success')){
var amount = Number(document.querySelector('.selected-n').id.replace('__',''));
text = text.replace('success','');
text = text.split('###');
document.getElementById('case-opening').innerHTML = '';
var drops = [];
const drop = {
  color: 'gray',
  skin: 'skin'
}
for (var i = 0; i < document.getElementById('possible-drop').getElementsByTagName('div').length;i++){
  var obj = Object.create(drop);
  obj.color = document.getElementById('possible-drop').getElementsByTagName('div')[i].classList[1];
  obj.skin = document.getElementById('possible-drop').getElementsByTagName('div')[i].getElementsByTagName('img')[0].src;
  drops.push(obj);
}
if (document.getElementById('ttt').classList.contains('selected')){

}else {
  var audio = new Audio('/assets/sounds/case.mp3');
  audio.volume = document.getElementById('soundP').value*0.01;
  audio.play();
}
var allPrice = 0;
document.getElementById('case-opening-finish').innerHTML = '<div id="case-opening-finish-drop"></div>';

for (var i = 0; i < amount; i++){
document.getElementById('balance').textContent = Math.round((document.getElementById('balance').textContent.replace(' руб.','')-document.getElementById('case-price').textContent.replace(' руб.',''))*100)/100+' руб.';
var item_name = text[i].split('|||')[0];
var item_image = text[i].split('|||')[1];
var item_price = Number(text[i].split('|||')[2]);
allPrice+=item_price;
allPrice = Math.floor(allPrice*100)/100;
var item_color = text[i].split('|||')[3];
console.log('drop-name:'+item_name+' drop-image: '+item_image+' drop-price: '+item_price);
if (document.getElementById('ttt').classList.contains('selected')){
 /*  document.getElementById('case-ll').classList.remove('opening-case');
  document.getElementById('case-ll').classList.add('finished-case');



  var item_name = text[i].split('___')[0];
var item_image = text[i].split('___')[1];
var item_price = Number(text[i].split('___')[2]);
var item_color = text[i].split('___')[3];
var id = text[i].split('___')[4];

addDrop(item_price,item_color,item_name,item_image,id);

*/
    

document.getElementById('case-ll').classList.add('opening-case');
var track = document.createElement('div');
track.classList.add('case-track');
track.classList.add('speed');
var div = document.createElement('div');
for (var index = 0; index < 67; index++){
  if (index != 40){
var elem = document.createElement('div');
var rand = Math.floor(Math.random()*drops.length);
elem.classList.add(drops[rand]['color']);
elem.innerHTML = '<img src="'+drops[rand]['skin']+'"> <nav> <img src="/assets/img/'+drops[rand]['color']+'.jpg"> </nav>';
div.appendChild(elem);



  }else {
    var elem = document.createElement('div');
var rand = Math.floor(Math.random()*drops.length);
elem.classList.add(item_color);
elem.classList.add('dis-drop');
elem.innerHTML = '<img src="'+item_image+'"> <nav> <img src="/assets/img/'+item_color+'.jpg"> </nav>';
div.appendChild(elem);
  }
}
track.appendChild(div);
document.getElementById('case-opening').appendChild(track);
div.style.transform = "translateX(0px)";
div.style.transform = "translateX(-"+(5985+Math.floor(Math.random()*50)-(track.offsetWidth/2))+"px)";

setTimeout(function () {
  document.getElementById('case-ll').classList.remove('opening-case');
  document.getElementById('case-ll').classList.add('finished-case');
  document.getElementById('case-opening-finish').innerHTML = '<div id="case-opening-finish-drop"></div>';

for (var i = 0; i < amount; i++){

  var item_name = text[i].split('|||')[0];
var item_image = text[i].split('|||')[1];
var item_price = Number(text[i].split('|||')[2]);
var item_color = text[i].split('|||')[3];
var id = text[i].split('|||')[4];
addDrop(item_price,item_color,item_name,item_image,id);
}
var nav = document.createElement('nav');
var sellAll = document.createElement('a');
sellAll.onclick = function () {
  document.querySelector('.content').classList.remove('finished-case');
  var sum = 0;
  for (var ind = 0; ind < document.getElementsByClassName('drop').length; ind++) {
    sum+=Number(document.getElementsByClassName('drop')[ind].getElementsByTagName('div')[0].getElementsByTagName('a')[0].textContent.replace('Продать за ','').replace(' руб.',''));
axios.get('https://wondercase.net/sellItem.php?id='+document.getElementsByClassName('drop')[ind].getElementsByTagName('div')[0].id).then ((response) => {

});


}

sum=Math.round(sum*100)/100;
document.getElementById('balance').textContent = Number(document.getElementById('balance').textContent.replace(' руб.',''))+Number(sum);
document.getElementById('balance').textContent = Math.round(document.getElementById('balance').textContent*100)/100+' руб.';
var alertBody = document.createElement('div');
alertBody.classList.add('info');
alertBody.innerHTML = `<p>+ `+sum+` руб.</p>`;
alertBody.addEventListener('click', function () {
  alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
});
setTimeout(function () {alertBody.classList.add('transforming')},1500);
setTimeout(function () {alertBody.classList.add('hidden')},1800);
document.querySelector('.alert-container').appendChild(alertBody);
}

sellAll.textContent = 'Продать всё ('+allPrice+' руб.)';
sellAll.classList.add('sell-all-button');

var tryMore = document.createElement('a');
tryMore.onclick = function () {
document.querySelector('.content').classList.remove('finished-case');
}
tryMore.textContent = 'Еще раз';
tryMore.classList.add('one-more-time-button');
nav.appendChild(tryMore);
if (amount != 1){
nav.appendChild(sellAll);
}
document.getElementById('case-opening-finish').appendChild(nav);
},1800);


}else {


document.getElementById('case-ll').classList.add('opening-case');
var track = document.createElement('div');
track.classList.add('case-track');
var div = document.createElement('div');
for (var index = 0; index < 67; index++){
  if (index != 40){
var elem = document.createElement('div');
var rand = Math.floor(Math.random()*drops.length);
elem.classList.add(drops[rand]['color']);
elem.innerHTML = '<img src="'+drops[rand]['skin']+'"> <nav> <img src="/assets/img/'+drops[rand]['color']+'.jpg"> </nav>';
div.appendChild(elem);



  }else {
    var elem = document.createElement('div');
var rand = Math.floor(Math.random()*drops.length);
elem.classList.add(item_color);
elem.classList.add('dis-drop');
elem.innerHTML = '<img src="'+item_image+'"> <nav> <img src="/assets/img/'+item_color+'.jpg"> </nav>';
div.appendChild(elem);
  }
}
track.appendChild(div);
document.getElementById('case-opening').appendChild(track);
div.style.transform = "translateX(0px)";
div.style.transform = "translateX(-"+(5985+Math.floor(Math.random()*50)-(track.offsetWidth/2))+"px)";

setTimeout(function () {
  document.getElementById('case-ll').classList.remove('opening-case');
  document.getElementById('case-ll').classList.add('finished-case');
  document.getElementById('case-opening-finish').innerHTML = '<div id="case-opening-finish-drop"></div>';

for (var i = 0; i < amount; i++){

  var item_name = text[i].split('|||')[0];
var item_image = text[i].split('|||')[1];
var item_price = Number(text[i].split('|||')[2]);
var item_color = text[i].split('|||')[3];
var id = text[i].split('|||')[4];
addDrop(item_price,item_color,item_name,item_image,id);
}
var nav = document.createElement('nav');
var sellAll = document.createElement('a');
sellAll.onclick = function () {
  document.querySelector('.content').classList.remove('finished-case');
  var sum = 0;
  for (var ind = 0; ind < document.getElementsByClassName('drop').length; ind++) {
    sum+=Number(document.getElementsByClassName('drop')[ind].getElementsByTagName('div')[0].getElementsByTagName('p')[1].textContent.replace(' руб.',''));
axios.get('https://wondercase.net/sellItem.php?id='+document.getElementsByClassName('drop')[ind].getElementsByTagName('div')[0].id).then ((response) => {

});


}

sum=Math.round(sum*100)/100;
document.getElementById('balance').textContent = Number(document.getElementById('balance').textContent.replace(' руб.',''))+Number(sum);
document.getElementById('balance').textContent = Math.round(document.getElementById('balance').textContent*100)/100+' руб.';
var alertBody = document.createElement('div');
alertBody.classList.add('info');
alertBody.innerHTML = `<p>+ `+sum+` руб.</p>`;
alertBody.addEventListener('click', function () {
  alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
});
setTimeout(function () {alertBody.classList.add('transforming')},1500);
setTimeout(function () {alertBody.classList.add('hidden')},1800);
document.querySelector('.alert-container').appendChild(alertBody);
}

sellAll.textContent = 'Продать всё ('+allPrice+' руб.)';
sellAll.classList.add('sell-all-button');

var tryMore = document.createElement('a');
tryMore.onclick = function () {
document.querySelector('.content').classList.remove('finished-case');
}
tryMore.textContent = 'Еще раз';
tryMore.classList.add('one-more-time-button');
nav.appendChild(tryMore);
if (amount != 1){
nav.appendChild(sellAll);
}
document.getElementById('case-opening-finish').appendChild(nav);
},11000);
}
}
if (document.getElementById('ttt').classList.contains('selected')){
  var nav = document.createElement('nav');
  var sellAll = document.createElement('a');
  sellAll.onclick = function () {
    document.querySelector('.content').classList.remove('finished-case');
    var sum = 0;
  
    for (var ind = 0; ind < document.getElementsByClassName('drop').length; ind++) {
      sum+=Number(document.getElementsByClassName('drop')[ind].getElementsByTagName('div')[0].getElementsByTagName('p')[1].textContent.replace(' руб.',''));
  axios.get('https://wondercase.net/sellItem.php?id='+document.getElementsByClassName('drop')[ind].getElementsByTagName('div')[0].id).then ((response) => {
  
  });
  
  }
  
  sum=Math.round(sum*100)/100;
  document.getElementById('balance').textContent = Number(document.getElementById('balance').textContent.replace(' руб.',''))+Number(sum);
  document.getElementById('balance').textContent = Math.round(document.getElementById('balance').textContent*100)/100+' руб.';
  var alertBody = document.createElement('div');
  alertBody.classList.add('info');
  alertBody.innerHTML = `<p>+ `+sum+` руб.</p>`;
  alertBody.addEventListener('click', function () {
    alertBody.classList.add('transforming');
  setTimeout(function () {alertBody.classList.add('hidden')},300);
  });
  setTimeout(function () {alertBody.classList.add('transforming')},1500);
  setTimeout(function () {alertBody.classList.add('hidden')},1800);
  document.querySelector('.alert-container').appendChild(alertBody);
  }
  sellAll.textContent = 'Продать всё ('+allPrice+'руб.)';
sellAll.classList.add('sell-all-button');

var tryMore = document.createElement('a');
tryMore.onclick = function () {
document.querySelector('.content').classList.remove('finished-case');
}
tryMore.textContent = 'Еще раз';
tryMore.classList.add('one-more-time-button');
nav.appendChild(tryMore);
if (amount != 1){
nav.appendChild(sellAll);
}
document.getElementById('case-opening-finish').appendChild(nav);
}
}else if (text == 'no_balance') {
  var alertBody = document.createElement('div');
  alertBody.classList.add('alert');
  alertBody.innerHTML = `<p> Недостаточно средств!</p>`;
  alertBody.addEventListener('click', function () {
    alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
  });
  setTimeout(function () {alertBody.classList.add('transforming')},1500);
  setTimeout(function () {alertBody.classList.add('hidden')},1800);
  document.querySelector('.alert-container').appendChild(alertBody);
  return;
}else {
  var alertBody = document.createElement('div');
  alertBody.classList.add('alert');
  alertBody.innerHTML = `<p> Ошибка!</p>`;

  alertBody.addEventListener('click', function () {
    alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
  });
  setTimeout(function () {alertBody.classList.add('transforming')},1500);
  setTimeout(function () {alertBody.classList.add('hidden')},1800);
  document.querySelector('.alert-container').appendChild(alertBody);
}
});
      }
    }>Открыть за <span style={{margin: '0',marginInline: '5px', fontSize: '20px'}} id="case-pricing"></span> руб.</a>
  </div>
  <div id="case-opening">
  </div>
  <div id="case-opening-finish">
<div className="drop">
<div className="red">
    <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITck29Y_cg_37yQ8dX2jVbt_0dkajz6JYfEeg49Y1_S-Vi4wL--hZC1u8zNm3Nlvj5iuyjNGssg9w/260fx194f/image.png"/>
<p>999 руб.</p>
  <a className="blue-button">Продать</a>
  </div>
  <div className="blue">
    <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITck29Y_cg_37yQ8dX2jVbt_0dkajz6JYfEeg49Y1_S-Vi4wL--hZC1u8zNm3Nlvj5iuyjNGssg9w/260fx194f/image.png"/>
   
    <p>999 руб.</p>  <a className="blue-button">Продать</a></div>
  <div className="gray">
    <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITck29Y_cg_37yQ8dX2jVbt_0dkajz6JYfEeg49Y1_S-Vi4wL--hZC1u8zNm3Nlvj5iuyjNGssg9w/260fx194f/image.png"/>
    <p>999 руб.</p> <a className="blue-button">Продать</a></div>
  <div className="purple">
    <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITck29Y_cg_37yQ8dX2jVbt_0dkajz6JYfEeg49Y1_S-Vi4wL--hZC1u8zNm3Nlvj5iuyjNGssg9w/260fx194f/image.png"/>
    <p>999 руб.</p> <a className="blue-button">Продать</a> </div>
  <div className="pink">
    <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITck29Y_cg_37yQ8dX2jVbt_0dkajz6JYfEeg49Y1_S-Vi4wL--hZC1u8zNm3Nlvj5iuyjNGssg9w/260fx194f/image.png"/>
    <p>999 руб.</p> <a className="blue-button">Продать</a></div>
</div>
  </div>
 
  <div className="item-list userItemsContainer" id="possible-drop">

  </div>
</div>

    </>
  )
  function addDrop (item_price,item_color,item_name,item_image,id) {
    var dropElem = document.createElement('div');
    dropElem.classList.add('drop');
    var sell_button = document.createElement('a');
    sell_button.classList.add('blue-button');
    sell_button.textContent = "Продать за "+item_price+' руб.';
    sell_button.onclick = function () {
 
      axios.get('https://wondercase.net/sellItem.php?id='+id).then ((response) => {
    var text = response.data+'';
    if( text  == 'success'){
      var leng = 0;
    var qd = document.querySelectorAll('.drop');
    for (var i = 0; i < qd.length; i++){
if (qd[i].innerHTML != '')leng++;
    }
    if (leng == 1) {
document.querySelector('.content').classList.remove('finished-case');
    }
      document.getElementById('balance').textContent = Math.floor(Number(
        (Number(document.getElementById('balance').textContent.replace(' руб.',''))+
        Number(item_price))
        )*100)/100+' руб.';
        if (document.querySelector('.sell-all-button') != null){
          document.querySelector('.sell-all-button').textContent = 'Продать всё ('+(Math.floor((Number(document.querySelector('.sell-all-button').textContent.replace('Продать всё (','').replace('руб.)',''))-item_price)*100))/100+' руб.)';
        }
      document.getElementById(id).remove();
    }
      });
    }
    var div_elem = document.createElement('div');
    div_elem.classList.add(item_color);
    div_elem.id = id;
    dropElem.appendChild(div_elem);
    div_elem.innerHTML = `<img src="`+item_image+`"><p>`+item_name+`</p></div>`;
    div_elem.appendChild(sell_button);
    
    
    document.getElementById('case-opening-finish-drop').appendChild(dropElem);
    
  }
}

export default Case;