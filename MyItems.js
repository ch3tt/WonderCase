import axios from "axios";
import { render } from "react-dom";
export const MyItems = (Ctype) => {

  var did = false;
  if (document.querySelector('.header__container') != null && document.querySelector('.header__container').classList.contains('not_auth')){
    return;
  }
  function payment (name, color, sold, image, price, id) {
    if (document.querySelector('.userItemsContainer').classList.contains('rendered')){
      return;
    }
    price = Math.floor(price);
  if( name == null)return;
    if (name == 'clear'){
    document.querySelector('.userItemsContainer').innerHTML = document.querySelector('.userItemsContainer').innerHTML + '<p> Вещей не найдено </p>';
     return;
  }
    
  
if (sold == 1){
  sold = 'sold';
}else if (sold == 2) {
  sold = 'withdrawing';
}else if (sold == 3){
  sold = 'withdrawn';
}else {
  sold = '';
}

  if (Ctype.Ctype== 'profile'){
  
    var elem = document.createElement('div');
    if (sold != ''){
      elem.classList.add(sold);
    }
    if (name.length > 18){
      name = name.substring(0,18) + '...';
    }
    
    elem.innerHTML = '<nav></nav><img src="'+image+'" alt=""><span><span>'+name.split(' | ')[0]+'</span><br>'+name.split(' | ')[1]+'</span>';
    elem.classList.add(color);
    elem.classList.add('SkinItem');
    elem.id = id;
var ButtonBlock = document.createElement('div');
var sellButton = document.createElement('a');
sellButton.innerHTML='<svg width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M5.3636 8.72302V3.60267C6.36879 3.95919 7.09092 4.91918 7.09092 6.0451C7.09092 6.52207 7.47761 6.90876 7.95458 6.90876C8.43155 6.90876 8.81824 6.52207 8.81824 6.0451C8.81824 3.95971 7.33228 2.21488 5.3636 1.81369V0.86366C5.3636 0.386689 4.97691 0 4.49994 0C4.02297 0 3.63628 0.386689 3.63628 0.86366V1.81369C1.6676 2.21488 0.181641 3.95971 0.181641 6.0451C0.181641 8.13049 1.6676 9.87526 3.63628 10.2765V15.3968C2.63104 15.0403 1.90896 14.0803 1.90896 12.9544C1.90896 12.4774 1.52227 12.0907 1.0453 12.0907C0.56833 12.0907 0.181641 12.4774 0.181641 12.9544C0.181641 15.0398 1.6676 16.7846 3.63628 17.1858V18.1363C3.63628 18.6133 4.02297 19 4.49994 19C4.97691 19 5.3636 18.6133 5.3636 18.1363V17.1858C7.33228 16.7846 8.81824 15.0398 8.81824 12.9544C8.81824 10.869 7.33223 9.12422 5.3636 8.72302ZM1.90896 6.0451C1.90896 4.91918 2.63104 3.95919 3.63628 3.60267V8.48753C2.63104 8.13101 1.90896 7.17103 1.90896 6.0451ZM5.3636 15.3968V10.512C6.36879 10.8685 7.09092 11.8285 7.09092 12.9544C7.09092 14.0803 6.36879 15.0403 5.3636 15.3968Z" fill="white"></path></svg>';
sellButton.onclick = function (){
  console.log('clicked'+id);
axios.get('https://wondercase.net/sellItem.php?id='+id).then((response) => {
if (response.data+'' == 'success'){
  document.getElementById(id).remove();
}
});
}
ButtonBlock.appendChild(sellButton);

var priceblock = document.createElement('div');
priceblock.innerHTML='<span>'+price+' руб.</span>';
ButtonBlock.appendChild(priceblock);
var withdrawButton = document.createElement('a');
withdrawButton.innerHTML = '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.696 0H1.36263C0.627297 0 0.0292969 0.598 0.0292969 1.33333V4H1.36263V1.33333H10.696V10.6667H1.36263V8H0.0292969V10.6667C0.0292969 11.402 0.627297 12 1.36263 12H10.696C11.4313 12 12.0293 11.402 12.0293 10.6667V1.33333C12.0293 0.598 11.4306 0 10.696 0Z" fill="#FF7474"/><path d="M5.36068 8.66671L8.69401 6.00004L5.36068 3.33337V5.33404H0.0273438V6.66737H5.36068V8.66671Z" fill="#FF7474"/></svg>';
withdrawButton.onclick = function (){
  if (price < 10){
    var alertBody = document.createElement('div');
    alertBody.classList.add('alert');
    alertBody.innerHTML = `<p> Минимальная стоиомость скина для вывода - 10 руб.! </p>`;
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
    return;
  }
  axios.get('https://wondercase.net/withdrawItem.php?id='+id).then((response) => {
  if (response.data+'' == 'success'){
    var audio = new Audio('/assets/sounds/trade.mp3');
    audio.volume = document.getElementById('soundP').value*0.01;
    audio.play();
    document.getElementById(id).classList.add('withdrawing');
    var alertBody = document.createElement('div');
    alertBody.classList.add('info');
    alertBody.innerHTML = `<p> Обмен отправлен, ожидайте предложения в steam! </p>`;
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
  }else {
    if (response.data+'' == 'mindep') {
      var alertBody = document.createElement('div');
      alertBody.classList.add('alert');
      alertBody.innerHTML = `<p> Для вывода нужен минимальный депозит в 100 руб.! </p>`;
      alertBody.addEventListener('click', function () {
        alertBody.classList.add('transforming');
  setTimeout(function () {alertBody.classList.add('hidden')},300);
      });
      setTimeout(function () {alertBody.classList.add('transforming')},1500);
      setTimeout(function () {alertBody.classList.add('hidden')},1800);
      document.querySelector('.alert-container').appendChild(alertBody);
    }else   if (response.data+'' == 'limit') {
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
    }else      if (response.data+'' == 'error') {
      var alertBody = document.createElement('div');
      alertBody.classList.add('alert');
      alertBody.innerHTML = `<p> Этот предмет нельзя вывести в данный момент, попробуйте позже! </p>`;
      alertBody.addEventListener('click', function () {
        alertBody.classList.add('transforming');
  setTimeout(function () {alertBody.classList.add('hidden')},300);
      });
      setTimeout(function () {alertBody.classList.add('transforming')},1500);
      setTimeout(function () {alertBody.classList.add('hidden')},1800);
      document.querySelector('.alert-container').appendChild(alertBody);
    }else  if (response.data+'' == 'trade_link') {
      var alertBody = document.createElement('div');
      alertBody.classList.add('alert');
      alertBody.innerHTML = `<p> Установите свою трейд-ссылку! </p>`;
      alertBody.addEventListener('click', function () {
        alertBody.classList.add('transforming');
  setTimeout(function () {alertBody.classList.add('hidden')},300);
      });
      setTimeout(function () {alertBody.classList.add('transforming')},1500);
      setTimeout(function () {alertBody.classList.add('hidden')},1800);
      document.querySelector('.alert-container').appendChild(alertBody);
    }else   if ((response.data+'').startsWith('new_item')) {
      var text = (response.data+'').replace('new_item','');
for (var i = 0; i < 4; i ++){
  var texto = text.split('||')[i];
      var splits = texto.split('__');
      document.querySelector('.ChangeItemTab').classList.add('showin-dt');
      document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[i].id = 'ct'+splits[4];
document.body.style.position = 'fixed';
     document.getElementById('changeItemImage'+(i+1)).src = splits[3];
     document.getElementById('changeItemPrice'+(i+1)).textContent = splits[1]+' руб.';
     document.getElementById('changeItemName'+(i+1)).innerHTML = '<span>'+splits[0].split(' | ')[0]+'</span><br>'+splits[0].split(' | ')[1];
     document.getElementById('changeItemName'+(i+1)).classList.add(splits[5]);
     document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[i].classList.add(splits[2]);
  
}

    }else {
    var alertBody = document.createElement('div');
    alertBody.classList.add('alert');
    alertBody.innerHTML = `<p> Ошибка! Если это будет повторяться, обратитесь в поддержку! </p>`;
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
  }}
  });
}
  ButtonBlock.appendChild(withdrawButton);
elem.appendChild(ButtonBlock);

document.querySelector('.userItemsContainer').appendChild(elem);
}else if (Ctype.Ctype == 'selection') {
  var elem = document.createElement('div');
  elem.classList.add(color);
  if (name.length > 18){
    name = name.substring(0,18) + '...';
  }
  
  elem.innerHTML = '<nav></nav><img src="'+image+'" alt=""><span><span>'+name.split(' | ')[0]+'</span><br>'+name.split(' | ')[1]+'</span>';
  elem.classList.add('SkinItem');
  elem.id = id;
var ButtonBlock = document.createElement('div');

var priceblock = document.createElement('div');
priceblock.innerHTML='<span>'+price+' руб.</span>';
ButtonBlock.appendChild(priceblock);
elem.appendChild(ButtonBlock);
elem.onclick = function () {
  if (document.querySelector('.content').classList.contains('upgrade') && !document.querySelector('.container-upg').classList.contains('rollin')){
if (document.getElementById('upgrade_item1').classList.contains('not-set')){
  document.getElementById('upgrade_item1').getElementsByTagName('nav')[0].getElementsByTagName('p')[1].textContent = document.getElementById(id).getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('span')[0].textContent;
  document.getElementById('upgrade_item1').getElementsByTagName('nav')[0].getElementsByTagName('p')[0].textContent = document.getElementById(id).getElementsByTagName('span')[0].textContent.replace(document.getElementById(id).getElementsByTagName('span')[0].getElementsByTagName('span')[0].textContent,
  document.getElementById(id).getElementsByTagName('span')[0].getElementsByTagName('span')[0].textContent+' | ');;
 
  document.getElementById('upgrade_item1').getElementsByTagName('img')[0].src = image;
  document.getElementById('upgrade_item1').classList.remove('not-set');
  document.getElementById('upgrade_item1').classList.add(color);
  document.getElementById(id).classList.add('selected');
}else {
  
  document.querySelector('.selected.SkinItem').classList.remove('selected');
  document.getElementById('upgrade_item1').getElementsByTagName('nav')[0].getElementsByTagName('p')[1].textContent = document.getElementById(id).getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('span')[0].textContent;
  document.getElementById('upgrade_item1').getElementsByTagName('nav')[0].getElementsByTagName('p')[0].textContent = document.getElementById(id).getElementsByTagName('span')[0].textContent.replace(document.getElementById(id).getElementsByTagName('span')[0].getElementsByTagName('span')[0].textContent,
  document.getElementById(id).getElementsByTagName('span')[0].getElementsByTagName('span')[0].textContent+' | ');
 
  document.getElementById('upgrade_item1').getElementsByTagName('img')[0].src = image;
  document.getElementById('upgrade_item1').classList.remove('red');
  document.getElementById('upgrade_item1').classList.remove('pink');
  document.getElementById('upgrade_item1').classList.remove('gold');
  document.getElementById('upgrade_item1').classList.remove('gray');
  document.getElementById('upgrade_item1').classList.remove('purple');
  document.getElementById('upgrade_item1').classList.remove('blue');
  document.getElementById('upgrade_item1').classList.add(color);
  document.getElementById(id).classList.add('selected');
}
if (document.getElementById('upgrade_item1').classList.contains('not-set') || document.getElementById('upgrade_item2').classList.contains('not-set'))return;
var price1 = Number(document.getElementById('upgrade_item1').getElementsByTagName('nav')[0].getElementsByTagName('p')[1].textContent.replace(' руб.',''));
var price2 = Number(document.getElementById('upgrade_item2').getElementsByTagName('nav')[0].getElementsByTagName('p')[1].textContent.replace(' руб.',''));
if (price1 >= price2)return;
var chance = Number(price1)/Number(price2)*100;

chance = chance*0.9;
chance = Math.min(90,chance);
chance = Math.floor(chance*100)/100;
document.getElementById('upgrade-chance').textContent = chance+' %';
var deg = chance*3.6;
if (deg > 180){
  document.getElementById('roller').style.backgroundImage = 'linear-gradient('+(deg-90)+'deg,transparent 50%,#66fcf1 0),linear-gradient(90deg,transparent 50%,#66fcf1 0), linear-gradient(90deg,#505357 50%,#505357 0)';
 }else {
  document.getElementById('roller').style.backgroundImage =  'linear-gradient(270deg, transparent 50%, #505357 0), linear-gradient('+(deg-90)+'deg, transparent 50%, #66fcf1 0), linear-gradient(90deg,#505357 50%,#505357 0)';
 }
  }else   if (document.querySelector('.content').classList.contains('contract')){
    if (  !document.getElementById(id).classList.contains('selected')){
var first_available = -1;
for (var i = 1; i < 11; i++){
  if (document.getElementById('contract_item'+i).classList.contains('not-set')){
    first_available = i; break;
  }
}
if (first_available != -1){
  document.getElementById('contract_item'+first_available).classList.add(color);
  document.getElementById('contract_item'+first_available).classList.remove('not-set');
  document.getElementById('contract_item'+first_available).setAttribute('data-id',id);
  document.getElementById('contract_item'+first_available).getElementsByTagName('img')[0].src = image;
  document.getElementById('contract_item'+first_available).getElementsByTagName('nav')[0].getElementsByTagName('p')[0].textContent = document.getElementById(id).getElementsByTagName('div')[0].getElementsByTagName('div')[0].getElementsByTagName('span')[0].textContent;
document.getElementById(id).classList.add('selected');
var itemsN = 10-document.querySelectorAll('.not-set').length;
var itemsPrice = 0;
for (var i = 1; i < 11; i=i+1){
if (!document.getElementById('contract_item'+i).classList.contains('not-set')) {
itemsPrice += Number(document.getElementById('contract_item'+i).getElementsByTagName('nav')[0].getElementsByTagName('p')[0].textContent.replace(' руб.',''));
}
}
var text = itemsN+'/10 предметов';
document.getElementById('contract-data').textContent = text;
document.getElementById('contract-sum').textContent = '('+Math.round((itemsPrice + Number.EPSILON) * 100) / 100+' руб.)';
var text1 = 'Возможный дроп: от '+Math.floor(itemsPrice/4)+' руб. до '+Math.floor(itemsPrice*4)+' руб.';
document.getElementById('contract-prices').textContent = text1;
}
  }else {
    for (var i = 1; i < 11; i++){
      if (document.getElementById('contract_item'+i).getAttribute('data-id') == id){
        document.getElementById('contract_item'+i).classList.add('not-set');
        document.getElementById('contract_item'+i).classList.remove('red');
        document.getElementById('contract_item'+i).classList.remove('pink');
        document.getElementById('contract_item'+i).classList.remove('gold');
        document.getElementById('contract_item'+i).classList.remove('gray');
        document.getElementById('contract_item'+i).classList.remove('purple');
        document.getElementById('contract_item'+i).classList.remove('blue');
        document.getElementById(id).classList.remove('selected');

      }
    }
  }}
}
document.querySelector('.userItemsContainer').appendChild(elem);}
}
var isOnly = '';
if (Ctype.Ctype == 'selection'){
isOnly = '&only=1';
}
    axios.get('https://wondercase.net/getUserItems.php?page=1'+isOnly).then ((response) => {
      if (did)return;
         var ll = response.data;
        if (ll.length == 0){
       payment('clear','','','','','');  
      }
        for (var i = 0; i < ll.length; i++){
          payment(ll[i].item_name,ll[i].item_color,ll[i].item_status,ll[i].item_image,ll[i].item_price, ll[i].item_id);
        }
        document.querySelector('.userItemsContainer').classList.add('rendered');
        
    did = true;
        });
    return (
<>

</>
    )
      

}


      export default MyItems;