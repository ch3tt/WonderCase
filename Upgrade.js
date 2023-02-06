import axios from "axios";
import MyItems from "./MyItems";
function Upgrade () {
    return (
        <>
<div className="content upgrade">
  <h1>Апгрейд</h1>
  <h4><span>Рискни</span> и получи скин дороже!</h4>
  <div className="main-upgrade-block">
    <div className="not-set" onClick={() => {
      if (document.querySelector('.selected.SkinItem') != null){
        document.querySelector('.selected.SkinItem').classList.remove('selected');
      }
      document.getElementById('upgrade_item1').classList.remove('gray');
      document.getElementById('upgrade_item1').classList.remove('blue');
      document.getElementById('upgrade_item1').classList.remove('purple');
      document.getElementById('upgrade_item1').classList.remove('pink');
      document.getElementById('upgrade_item1').classList.remove('red');
      document.getElementById('upgrade_item1').classList.remove('gold');
      document.getElementById('upgrade_item1').classList.add('not-set');

    }} id="upgrade_item1">
      <img src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j_OrfdqWhe5sN4mOTE8bP4jVC9vh5yYGr7IoWVdABrYQ3Y-1m8xezp0ZTtvpjNmHpguCAhtnndzRW10x9KOvsv26KUE4Zjjg/260fx194f/image.png" alt="" />
      <nav> <p>Название</p> <p>9 999 руб.</p></nav>
    </div>
    <nav className="circle">

      <div className="container-upg">
        <div className="inner_in">
          <div>
            <h2 className="chance" id="upgrade-chance"></h2>
            <a className="blue-button" onClick={roll}>Апгрейд</a>
          </div>
          <svg className="thumbler-upg" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 10L9.5 1L18 10" stroke="#EBE9E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 16L9.5 7L18 16" stroke="url(#paint0_linear_105_1216)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_105_1216" x1="31.0567" y1="11.2632" x2="-8.81444" y2="11.2632" gradientUnits="userSpaceOnUse">
<stop stop-color="#66FCF1" stop-opacity="0"/>
<stop offset="0.515625" stop-color="#66FCF1"/>
<stop offset="1" stop-color="#66FCF1" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

        </div>
      </div>
      <div className="inner" id="roller">
      </div>
    </nav>
    <div className="not-set"  id="upgrade_item2">
      <img src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j_OrfdqWhe5sN4mOTE8bP4jVC9vh5yYGr7IoWVdABrYQ3Y-1m8xezp0ZTtvpjNmHpguCAhtnndzRW10x9KOvsv26KUE4Zjjg/260fx194f/image.png" alt="" />
      <nav><p>Название</p> <p>9 999 руб.</p></nav>
    </div>
  </div>
  <div id="upgrade-drops"></div>
  <div className="select-upgrade-items">
    <div className="userItemsContainer ">
    <h1>Доступные для апгрейда предметы</h1> 
    <MyItems Ctype="selection"/>
    </div>
    <div className="want-items-cont">   
      <h1>Скины</h1> 
      <span className="inline-upg-x">
        <span  onClick={() => {
          if (!document.getElementById('upgrade_item1').classList.contains('not-set')){
            document.getElementById('maxPriceQuery').value = Math.floor(Number(document.getElementById('upgrade_item1').getElementsByTagName('nav')[0].getElementsByTagName('p')[0].textContent.replace(' руб.',''))*1.5);
            search();  }
        }}>
          <p>1.5x</p>
        </span>
        <span onClick={() => {
          if (!document.getElementById('upgrade_item1').classList.contains('not-set')){
            document.getElementById('maxPriceQuery').value = Math.floor(Number(document.getElementById('upgrade_item1').getElementsByTagName('nav')[0].getElementsByTagName('p')[0].textContent.replace(' руб.',''))*2);
            search(); }
        }}>
          <p>2x</p>
        </span>
        <span onClick={() => {
          if (!document.getElementById('upgrade_item1').classList.contains('not-set')){
            document.getElementById('maxPriceQuery').value = Math.floor(Number(document.getElementById('upgrade_item1').getElementsByTagName('nav')[0].getElementsByTagName('p')[0].textContent.replace(' руб.',''))*5);
            search();   }
        }}>
          <p>5x</p>
        </span>
        <span onClick={() => {
          if (!document.getElementById('upgrade_item1').classList.contains('not-set')){
            document.getElementById('maxPriceQuery').value = Math.floor(Number(document.getElementById('upgrade_item1').getElementsByTagName('nav')[0].getElementsByTagName('p')[0].textContent.replace(' руб.',''))*10);
            search();
          }
        }}>
          <p>10x</p>
        </span>
      </span>
      <input className="d" id="public-query" style={{marginBottom: '30px'}} placeholder="Название скина" onInput={() => {
search();
      }}/>
<input className="d" id="maxPriceQuery" onInput={() => {
  search();
}} placeholder="Макс. цена"/>
  </div>

  </div>
</div>

        </>
    )
}

var times = -1;
function search () {
   
  if (document.querySelector('.want-items-cont') == null){
    return;
   }
   var maxP = '&max='+document.getElementById('maxPriceQuery').value;
   if (document.getElementById('maxPriceQuery').value == undefined || document.getElementById('maxPriceQuery').value == null){
    maxP = '';
   }
   axios.get('https://wondercase.net/getPublicItems.php?query='+document.getElementById('public-query').value+maxP).then((response) => {
      for (var i = document.querySelector('.want-items-cont').getElementsByTagName('div').length-1; i >= 0; i--) {
        document.querySelector('.want-items-cont').getElementsByTagName('div')[i].remove();
      }
      for (var i = document.querySelector('.want-items-cont').getElementsByTagName('h2').length-1; i >= 0; i--) {
        document.querySelector('.want-items-cont').getElementsByTagName('h2')[i].remove();
      }
if (response.data.length == 0 && document.querySelector('.want-items-cont').getElementsByTagName('h2').length == 0){
var varh2 = document.createElement('h2');
varh2.textContent = 'Вещей не найдено';
document.querySelector('.want-items-cont').appendChild(varh2);
}    
for (var i = 0; i < response.data.length;i++){
var name = response.data[i].name;
var image = response.data[i].image;
var color = response.data[i].color;
var id ='fur'+i;
var price = response.data[i].price;
var elem = document.createElement('div');
innerItem(name,image,color, id,price, elem);
}
    });
}
axios.get('https://wondercase.net/getPublicItems.php?query=').then((response) => {
  for (var i = document.querySelector('.want-items-cont').getElementsByTagName('div').length-1; i >= 0; i--) {
    document.querySelector('.want-items-cont').getElementsByTagName('div')[i].remove();
  }
  for (var i = document.querySelector('.want-items-cont').getElementsByTagName('h2').length-1; i >= 0; i--) {
    document.querySelector('.want-items-cont').getElementsByTagName('h2')[i].remove();
  }
if (response.data.length == 0 && document.querySelector('.want-items-cont').getElementsByTagName('h2').length == 0){
var varh2 = document.createElement('h2');
varh2.textContent = 'Вещей не найдено';
document.querySelector('.want-items-cont').appendChild(varh2);
}    
for (var i = 0; i < response.data.length;i++){
var name = response.data[i].name;
var image = response.data[i].image;
var color = response.data[i].color;
var id ='fur'+i;
var price = response.data[i].price;
var elem = document.createElement('div');
innerItem(name,image,color, id,price, elem);
}
});
function innerItem(name, image, color, id, price, elem) {
  elem.classList.add(color);
  var subname = name.split(' | ')[1];
  subname= subname.replace(' (Немного поношенное)','');
  if (subname.length > 12){
    subname = subname.substring(0,12)+'...';
  }
  var namen = name.split(' | ')[0];
  elem.innerHTML = '<nav></nav><img src="'+image+'" alt=""><span><span>'+namen+'</span><br>'+subname+'</span>';
  elem.setAttribute('data-name',name);
  elem.classList.add('SkinItem');
  elem.id = id;
var ButtonBlock = document.createElement('div');

var priceblock = document.createElement('div');
priceblock.innerHTML='<span>'+price+' руб.</span>';
ButtonBlock.appendChild(priceblock);
elem.appendChild(ButtonBlock);
elem.onclick = function () {
  if (document.querySelector('.content').classList.contains('upgrade') && !document.querySelector('.container-upg').classList.contains('rollin')){
if (document.getElementById('upgrade_item2').classList.contains('not-set')){

  document.getElementById('upgrade_item2').getElementsByTagName('nav')[0].getElementsByTagName('p')[0].textContent = document.getElementById(id).getAttribute('data-name');
  document.getElementById('upgrade_item2').getElementsByTagName('nav')[0].getElementsByTagName('p')[1].textContent = document.getElementById(id).getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('span')[0].textContent;
  document.getElementById('upgrade_item2').setAttribute('data-name',document.getElementById(id).getAttribute('data-name'));
  document.getElementById('upgrade_item2').getElementsByTagName('img')[0].src =  image;
  document.getElementById('upgrade_item2').classList.remove('not-set');
  document.getElementById('upgrade_item2').classList.add(color);

  document.getElementById(id).classList.add('selected-n');
}else {

 if (document.querySelector('.selected-n.SkinItem') != null) document.querySelector('.selected-n.SkinItem').classList.remove('selected-n');
  document.getElementById('upgrade_item2').getElementsByTagName('nav')[0].getElementsByTagName('p')[1].textContent = document.getElementById(id).getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('span')[0].textContent;
  document.getElementById('upgrade_item2').getElementsByTagName('nav')[0].getElementsByTagName('p')[0].textContent =document.getElementById(id).getAttribute('data-name');
  document.getElementById('upgrade_item2').getElementsByTagName('img')[0].src = image;
  document.getElementById('upgrade_item2').classList.remove('not-set');
  document.getElementById('upgrade_item2').classList.add(color);
  document.getElementById('upgrade_item2').setAttribute('data-name',document.getElementById(id).getAttribute('data-name'));
  document.getElementById(id).classList.add('selected-n');
}
if (document.getElementById('upgrade_item1').classList.contains('not-set') || document.getElementById('upgrade_item2').classList.contains('not-set')){return;}
var price1 = Number(document.getElementById('upgrade_item1').getElementsByTagName('nav')[0].getElementsByTagName('p')[1].textContent.replace(' руб.',''));
var price2 = Number(document.getElementById('upgrade_item2').getElementsByTagName('nav')[0].getElementsByTagName('p')[1].textContent.replace(' руб.',''));
if (price1 >= price2){return;}
var chance = Number(price1)/Number(price2)*100;

chance = chance*0.9;
chance = Math.min(90,chance);
chance = Math.floor(chance*100)/100;
document.getElementById('upgrade-chance').textContent = chance+' %';
var deg = chance*3.6;
if (deg > 180){
  document.getElementById('roller').style.backgroundImage = 'linear-gradient('+(deg-90)+'deg,transparent 50%,white 0),linear-gradient(90deg,transparent 50%,white 0), linear-gradient(90deg,#505357 50%,#505357 0)';
 }else {
  document.getElementById('roller').style.backgroundImage =  'linear-gradient(270deg, transparent 50%, #505357 0), linear-gradient('+(deg-90)+'deg, transparent 50%,white 0), linear-gradient(90deg,#505357 50%,#505357 0)';
 }
  }
}
document.querySelector('.want-items-cont').appendChild(elem);
}
function roll () {
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
  if (document.querySelector('.container-upg').classList.contains('rollin')) {
    var alertBody = document.createElement('div');
    alertBody.classList.add('alert');
    alertBody.innerHTML = `<p> Апгрейд уже идёт! </p>`;
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
    return;
  }
  if (Number(document.getElementById('upgrade_item1').getElementsByTagName('nav')[0].getElementsByTagName('p')[1].textContent.replace(' руб.','')) > Number(document.getElementById('upgrade_item2').getElementsByTagName('nav')[0].getElementsByTagName('p')[1].textContent.replace(' руб.',''))) {
    var alertBody = document.createElement('div');
    alertBody.classList.add('alert');
    alertBody.innerHTML = `<p> Нельзя улучшить вещь на более дешевую! </p>`;
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
    return;
  }
  if (document.getElementById('upgrade_item1').classList.contains('not-set')){
    var alertBody = document.createElement('div');
    alertBody.classList.add('alert');
    alertBody.innerHTML = `<p> Сначала выберите скин для улучшения! </p>`;
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
    return;
  }
  if (Number(document.getElementById('upgrade_item1').getElementsByTagName('nav')[0].getElementsByTagName('p')[1].textContent.replace(' руб.',''))*100 < Number(document.getElementById('upgrade_item2').getElementsByTagName('nav')[0].getElementsByTagName('p')[1].textContent.replace(' руб.',''))) {
    var alertBody = document.createElement('div');
    alertBody.classList.add('alert');
    alertBody.innerHTML = `<p> Минимальный шанс для улучшения - 1%! </p>`;
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
    return;
  }
  if (document.getElementById('upgrade_item2').classList.contains('not-set')){
    var alertBody = document.createElement('div');
    alertBody.classList.add('alert');
    alertBody.innerHTML = `<p> Сначала выберите скин, который хотите получить! </p>`;
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
    return;
  }

  axios.get('https://wondercase.net/requestUpgrade.php?from='+document.querySelector('.selected.SkinItem').id+'&to='+document.getElementById('upgrade_item2').getAttribute('data-name')).then((response) => {
  var text = response.data+'';
  times++;
  if (text == 'error'){
    var alertBody = document.createElement('div');
    alertBody.classList.add('alert');
    alertBody.innerHTML = `<p> Ошибка! </p>`;
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
    return;
  }else {

 document.querySelector('.selected.SkinItem').remove();
 document.querySelector('.selected-n.SkinItem').classList.remove('selected-n');
  setTimeout(function (){ 
    document.getElementById('upgrade_item1').classList.remove('gray');
    document.getElementById('upgrade_item1').classList.remove('red');
    document.getElementById('upgrade_item1').classList.remove('pink');
    document.getElementById('upgrade_item1').classList.remove('purple');
    document.getElementById('upgrade_item1').classList.remove('gold');
    document.getElementById('upgrade_item1').classList.remove('blue');
    document.getElementById('upgrade_item1').classList.add('not-set');
 
     document.querySelector('.container-upg').classList.remove('rollin');
  document.getElementById('upgrade_item2').classList.remove('gray');
  document.getElementById('upgrade_item2').classList.remove('red');
  document.getElementById('upgrade_item2').classList.remove('pink');
  document.getElementById('upgrade_item2').classList.remove('purple');
  document.getElementById('upgrade_item2').classList.remove('gold');
  document.getElementById('upgrade_item2').classList.remove('blue');
  document.getElementById('upgrade_item2').classList.add('not-set');
},10500);
if (text.split('___')[1] == 'success'){
  setTimeout(function() {
    document.querySelector('.content').classList.add('finished-upgrade');
  },10500);
var id = text.split('___')[2];
var image = document.getElementById('upgrade_item2').getElementsByTagName('img')[0].src;
var price = Number(document.getElementById('upgrade_item2').getElementsByTagName('nav')[0].getElementsByTagName('p')[1].textContent.replace(' руб.',''));
var name = document.getElementById('upgrade_item2').getAttribute('data-name');
var color = document.getElementById('upgrade_item2').classList[0];

var contractDrop = document.createElement('div');
contractDrop.classList.add('upgrade-drop');
contractDrop.id = id;
contractDrop.classList.add(color);
contractDrop.innerHTML = '<img src="'+image+'"><p> '+name+' </p> <p> '+price+' руб. </p> <div> <a href="https://wondercase.net/upgrade">Еще раз</a> </div>';
var sellButton = document.createElement('a');
sellButton.onclick = function () {
  console.log('id-'+id);
click(id,contractDrop);
}
sellButton.textContent = 'Продать';
contractDrop.getElementsByTagName('div')[0].appendChild(sellButton);
document.getElementById('upgrade-drops').appendChild(contractDrop);
  document.getElementById('upgrade-chance').textContent = '';
}
  console.log(text);
    document.getElementById('roller').style.transform = 'rotate('+(((3600*(times+1)))-(Number(text.split('___')[0])*3.6))+'deg)';
    console.log('rotate('+((Number(text.split('___')[0])*3.6)+((3600*(times+1))))+'deg)');
    var audio = new Audio('/assets/sounds/upgrade.mp3');
    audio.volume = document.getElementById('soundP').value*0.01;
    audio.play();
  }  });
  document.querySelector('.container-upg').classList.add('rollin');

}
function click(id,contractDrop){
  
  
    document.querySelector('.upgrade').classList.remove('finished-upgrade');
    contractDrop.remove();
    axios.get(('https://wondercase.net/sellItem.php?id='+(id+1))).then ((response) => {
      console.log(response.data+'');
    });
   }
    
 

export default Upgrade;