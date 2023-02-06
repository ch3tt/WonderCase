import axios from "axios";
import React from "react";

class ChangeItem extends React.Component {

a = (num) => {
var a =  document.getElementById('dep-meth');
if (num == 0){
  a.textContent = "Банковская карта";
}else if (num == 1) {
a.textContent = "Qiwi-Кошелёк";
}else if (num == 2){
  a.textContent = "Криптовалюта";
}
    document.getElementById('deposit-item-list').getElementsByClassName("selected")[0].classList.remove('selected');
    document.getElementById('deposit-item-list').getElementsByTagName("div")[num].classList.add('selected');  
}
   
   render(){ 
    return ( 
        <>
 <div className="ChangeItemTab">
  <nav onClick={() => {
       document.body.style.position = 'relative';
      document.querySelector('.ChangeItemTab').classList.remove('showin-dt');
      for (var i = 0; i <  document.getElementById('changeItemContainer').getElementsByTagName('div').length; i++) {
        document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('gold');
        document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('red');
        document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('purple');
        document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('pink');
        document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('blue');
        document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('gray');
       }
 }} />
  <form method="GET" name="deposit-form">
    <h1>Предмет не продаётся!</h1>
    <p>Сейчас на маркете нету предложений по продаже этого предмета, поэтому предлагаем вам заменить его на представленный предмет по такой же цене</p>
   <div id="changeItemContainer">

   <div className="SkinItem removal"><nav /><img src="" id="changeItemImage1" alt /><span id="changeItemName1"></span><div><a onClick={() => {
      console.log('https://wondercase.net/requestItemChange.php?id='+(document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].id).replace('ct','')+'&name='+document.getElementById('changeItemName1').textContent.replace(document.getElementById('changeItemName1').getElementsByTagName('span')[0].textContent,document.getElementById('changeItemName1').getElementsByTagName('span')[0].textContent + ' | '));
axios.get('https://wondercase.net/requestItemChange.php?id='+(document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].id).replace('ct','')+'&name='+document.getElementById('changeItemName1').textContent.replace(document.getElementById('changeItemName1').getElementsByTagName('span')[0].textContent,document.getElementById('changeItemName1').getElementsByTagName('span')[0].textContent + ' | ')+'&rarity='+document.getElementById('changeItemName1').classList[0]+'&price='+((document.getElementById('changeItemPrice1').textContent)+'').replace(' руб.','')).then((response) => {
  if (response.data+'' == 'success'){
    var alertBody = document.createElement('div');
    alertBody.classList.add('info');
    alertBody.innerHTML = `<p> Вы заменили вещь! </p>`;
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].id).replace('ct','')).classList.remove('blue');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].id).replace('ct','')).classList.remove('gray');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].id).replace('ct','')).classList.remove('purple');
   
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].id).replace('ct','')).classList.remove('pink');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].id).replace('ct','')).classList.remove('gold');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].id).replace('ct','')).classList.remove('red');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].id).replace('ct','')).classList.add(document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].classList[2]);
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].id).replace('ct','')).getElementsByTagName('div')[0].getElementsByTagName('span')[0].textContent = Math.floor(document.getElementById('changeItemPrice1').textContent.replace(' руб.',''))+' руб.';
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].id).replace('ct','')).getElementsByTagName('span')[0].innerHTML = document.getElementById('changeItemName1').innerHTML;
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].id).replace('ct','')).getElementsByTagName('img')[0].src = document.getElementById('changeItemImage1').src;
   
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
  }else {
    console.log(response.data+'');
    var alertBody = document.createElement('div');
    alertBody.classList.add('alert');
    alertBody.innerHTML = `<p> Произошлка ошибка при замене вещи </p>`;
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
  }
});
document.querySelector('.ChangeItemTab').classList.remove('showin-dt');
for (var i = 0; i <  document.getElementById('changeItemContainer').getElementsByTagName('div').length; i++) {
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('gold');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('red');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('purple');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('pink');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('blue');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('gray');
 }
document.body.style.position = 'relative';
}}> <svg width={9} height={19} viewBox="0 0 9 19" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M5.3636 8.72302V3.60267C6.36879 3.95919 7.09092 4.91918 7.09092 6.0451C7.09092 6.52207 7.47761 6.90876 7.95458 6.90876C8.43155 6.90876 8.81824 6.52207 8.81824 6.0451C8.81824 3.95971 7.33228 2.21488 5.3636 1.81369V0.86366C5.3636 0.386689 4.97691 0 4.49994 0C4.02297 0 3.63628 0.386689 3.63628 0.86366V1.81369C1.6676 2.21488 0.181641 3.95971 0.181641 6.0451C0.181641 8.13049 1.6676 9.87526 3.63628 10.2765V15.3968C2.63104 15.0403 1.90896 14.0803 1.90896 12.9544C1.90896 12.4774 1.52227 12.0907 1.0453 12.0907C0.56833 12.0907 0.181641 12.4774 0.181641 12.9544C0.181641 15.0398 1.6676 16.7846 3.63628 17.1858V18.1363C3.63628 18.6133 4.02297 19 4.49994 19C4.97691 19 5.3636 18.6133 5.3636 18.1363V17.1858C7.33228 16.7846 8.81824 15.0398 8.81824 12.9544C8.81824 10.869 7.33223 9.12422 5.3636 8.72302ZM1.90896 6.0451C1.90896 4.91918 2.63104 3.95919 3.63628 3.60267V8.48753C2.63104 8.13101 1.90896 7.17103 1.90896 6.0451ZM5.3636 15.3968V10.512C6.36879 10.8685 7.09092 11.8285 7.09092 12.9544C7.09092 14.0803 6.36879 15.0403 5.3636 15.3968Z" fill="white" /></svg></a><div><span id="changeItemPrice1"></span></div></div></div>

<div className="SkinItem removal"><nav /><img src="" id="changeItemImage2" alt /><span id="changeItemName2"></span><div><a onClick={() => {
      console.log('https://wondercase.net/requestItemChange.php?id='+(document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[1].id).replace('ct','')+'&name='+document.getElementById('changeItemName2').textContent.replace(document.getElementById('changeItemName2').getElementsByTagName('span')[0].textContent,document.getElementById('changeItemName2').getElementsByTagName('span')[0].textContent + ' | '));
axios.get('https://wondercase.net/requestItemChange.php?id='+(document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[1].id).replace('ct','')+'&name='+document.getElementById('changeItemName2').textContent.replace(document.getElementById('changeItemName2').getElementsByTagName('span')[0].textContent,document.getElementById('changeItemName2').getElementsByTagName('span')[0].textContent + ' | ')+'&rarity='+document.getElementById('changeItemName2').classList[0]+'&price='+((document.getElementById('changeItemPrice2').textContent)+'').replace(' руб.','')).then((response) => {
  if (response.data+'' == 'success'){
    var alertBody = document.createElement('div');
    alertBody.classList.add('info');
    alertBody.innerHTML = `<p> Вы заменили вещь! </p>`;
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[1].id).replace('ct','')).classList.remove('blue');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[1].id).replace('ct','')).classList.remove('gray');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[1].id).replace('ct','')).classList.remove('purple');
   
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[1].id).replace('ct','')).classList.remove('pink');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[1].id).replace('ct','')).classList.remove('gold');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[1].id).replace('ct','')).classList.remove('red');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[1].id).replace('ct','')).classList.add(document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[1].classList[2]);
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[1].id).replace('ct','')).getElementsByTagName('div')[0].getElementsByTagName('span')[0].textContent = Math.floor(document.getElementById('changeItemPrice2').textContent.replace(' руб.',''))+' руб.';
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[1].id).replace('ct','')).getElementsByTagName('span')[0].innerHTML = document.getElementById('changeItemName2').innerHTML;
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[1].id).replace('ct','')).getElementsByTagName('img')[0].src = document.getElementById('changeItemImage2').src;
   
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
  }else {
    console.log(response.data+'');
    var alertBody = document.createElement('div');
    alertBody.classList.add('alert');
    alertBody.innerHTML = `<p> Произошлка ошибка при замене вещи </p>`;
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
  }
});
document.querySelector('.ChangeItemTab').classList.remove('showin-dt');
for (var i = 0; i <  document.getElementById('changeItemContainer').getElementsByTagName('div').length; i++) {
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('gold');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('red');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('purple');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('pink');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('blue');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('gray');
 }
document.body.style.position = 'relative';
}}> <svg width={9} height={19} viewBox="0 0 9 19" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M5.3636 8.72302V3.60267C6.36879 3.95919 7.09092 4.91918 7.09092 6.0451C7.09092 6.52207 7.47761 6.90876 7.95458 6.90876C8.43155 6.90876 8.81824 6.52207 8.81824 6.0451C8.81824 3.95971 7.33228 2.21488 5.3636 1.81369V0.86366C5.3636 0.386689 4.97691 0 4.49994 0C4.02297 0 3.63628 0.386689 3.63628 0.86366V1.81369C1.6676 2.21488 0.181641 3.95971 0.181641 6.0451C0.181641 8.13049 1.6676 9.87526 3.63628 10.2765V15.3968C2.63104 15.0403 1.90896 14.0803 1.90896 12.9544C1.90896 12.4774 1.52227 12.0907 1.0453 12.0907C0.56833 12.0907 0.181641 12.4774 0.181641 12.9544C0.181641 15.0398 1.6676 16.7846 3.63628 17.1858V18.1363C3.63628 18.6133 4.02297 19 4.49994 19C4.97691 19 5.3636 18.6133 5.3636 18.1363V17.1858C7.33228 16.7846 8.81824 15.0398 8.81824 12.9544C8.81824 10.869 7.33223 9.12422 5.3636 8.72302ZM1.90896 6.0451C1.90896 4.91918 2.63104 3.95919 3.63628 3.60267V8.48753C2.63104 8.13101 1.90896 7.17103 1.90896 6.0451ZM5.3636 15.3968V10.512C6.36879 10.8685 7.09092 11.8285 7.09092 12.9544C7.09092 14.0803 6.36879 15.0403 5.3636 15.3968Z" fill="white" /></svg></a><div><span id="changeItemPrice2"></span></div></div></div>
     <div className="SkinItem removal"><nav /><img src="" id="changeItemImage3" alt /><span id="changeItemName3"></span><div><a onClick={() => {
      console.log('https://wondercase.net/requestItemChange.php?id='+(document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[2].id).replace('ct','')+'&name='+document.getElementById('changeItemName3').textContent);
axios.get('https://wondercase.net/requestItemChange.php?id='+(document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[2].id).replace('ct','')+'&name='+document.getElementById('changeItemName3').textContent.replace(document.getElementById('changeItemName3').getElementsByTagName('span')[0].textContent,document.getElementById('changeItemName3').getElementsByTagName('span')[0].textContent + ' | ')+'&rarity='+document.getElementById('changeItemName3').classList[0]+'&price='+((document.getElementById('changeItemPrice3').textContent)+'').replace(' руб.','')).then((response) => {
  if (response.data+'' == 'success'){
    var alertBody = document.createElement('div');
    alertBody.classList.add('info');
    alertBody.innerHTML = `<p> Вы заменили вещь! </p>`;
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[2].id).replace('ct','')).classList.remove('blue');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[2].id).replace('ct','')).classList.remove('gray');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[2].id).replace('ct','')).classList.remove('purple');
   
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[2].id).replace('ct','')).classList.remove('pink');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[2].id).replace('ct','')).classList.remove('gold');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[2].id).replace('ct','')).classList.remove('red');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[2].id).replace('ct','')).classList.add(document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[2].classList[2]);
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[2].id).replace('ct','')).getElementsByTagName('div')[0].getElementsByTagName('span')[0].textContent = Math.floor(document.getElementById('changeItemPrice3').textContent.replace(' руб.',''))+' руб.';
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[2].id).replace('ct','')).getElementsByTagName('span')[0].innerHTML = document.getElementById('changeItemName3').innerHTML;
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[2].id).replace('ct','')).getElementsByTagName('img')[0].src = document.getElementById('changeItemImage3').src;
   
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
  }else {
    console.log(response.data+'');
    var alertBody = document.createElement('div');
    alertBody.classList.add('alert');
    alertBody.innerHTML = `<p> Произошлка ошибка при замене вещи </p>`;
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
  }
});
document.querySelector('.ChangeItemTab').classList.remove('showin-dt');
for (var i = 0; i <  document.getElementById('changeItemContainer').getElementsByTagName('div').length; i++) {
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('gold');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('red');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('purple');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('pink');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('blue');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('gray');
 }
document.body.style.position = 'relative';
}}> <svg width={9} height={19} viewBox="0 0 9 19" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M5.3636 8.72302V3.60267C6.36879 3.95919 7.09092 4.91918 7.09092 6.0451C7.09092 6.52207 7.47761 6.90876 7.95458 6.90876C8.43155 6.90876 8.81824 6.52207 8.81824 6.0451C8.81824 3.95971 7.33228 2.21488 5.3636 1.81369V0.86366C5.3636 0.386689 4.97691 0 4.49994 0C4.02297 0 3.63628 0.386689 3.63628 0.86366V1.81369C1.6676 2.21488 0.181641 3.95971 0.181641 6.0451C0.181641 8.13049 1.6676 9.87526 3.63628 10.2765V15.3968C2.63104 15.0403 1.90896 14.0803 1.90896 12.9544C1.90896 12.4774 1.52227 12.0907 1.0453 12.0907C0.56833 12.0907 0.181641 12.4774 0.181641 12.9544C0.181641 15.0398 1.6676 16.7846 3.63628 17.1858V18.1363C3.63628 18.6133 4.02297 19 4.49994 19C4.97691 19 5.3636 18.6133 5.3636 18.1363V17.1858C7.33228 16.7846 8.81824 15.0398 8.81824 12.9544C8.81824 10.869 7.33223 9.12422 5.3636 8.72302ZM1.90896 6.0451C1.90896 4.91918 2.63104 3.95919 3.63628 3.60267V8.48753C2.63104 8.13101 1.90896 7.17103 1.90896 6.0451ZM5.3636 15.3968V10.512C6.36879 10.8685 7.09092 11.8285 7.09092 12.9544C7.09092 14.0803 6.36879 15.0403 5.3636 15.3968Z" fill="white" /></svg></a><div><span id="changeItemPrice3"></span></div></div></div>
    <div className="SkinItem removal"><nav /><img src="" id="changeItemImage4" alt /><span id="changeItemName4"></span><div><a onClick={() => {
      console.log('https://wondercase.net/requestItemChange.php?id='+(document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].id).replace('ct','')+'&name='+document.getElementById('changeItemName4').textContent.replace(document.getElementById('changeItemName4').getElementsByTagName('span')[0].textContent,document.getElementById('changeItemName4').getElementsByTagName('span')[0].textContent + ' | '));
axios.get('https://wondercase.net/requestItemChange.php?id='+(document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].id).replace('ct','')+'&name='+document.getElementById('changeItemName4').textContent.replace(document.getElementById('changeItemName4').getElementsByTagName('span')[0].textContent,document.getElementById('changeItemName4').getElementsByTagName('span')[0].textContent + ' | ')+'&rarity='+document.getElementById('changeItemName1').classList[0]+'&price='+((document.getElementById('changeItemPrice1').textContent)+'').replace(' руб.','')).then((response) => {
  if (response.data+'' == 'success'){
    var alertBody = document.createElement('div');
    alertBody.classList.add('info');
    alertBody.innerHTML = `<p> Вы заменили вещь! </p>`;
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[3].id).replace('ct','')).classList.remove('blue');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[3].id).replace('ct','')).classList.remove('gray');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[3].id).replace('ct','')).classList.remove('purple');
   
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[3].id).replace('ct','')).classList.remove('pink');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[3].id).replace('ct','')).classList.remove('gold');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[3].id).replace('ct','')).classList.remove('red');
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[3].id).replace('ct','')).classList.add(document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[3].classList[2]);
    var lists = ['blue','gray','purple','pink','gold','red'];
for (var i = 0; i < lists.length; i++)
{document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[0].classList.remove(lists[i]);
document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[1].classList.remove(lists[i]);
document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[2].classList.remove(lists[i]);
document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[3].classList.remove(lists[i]);


}
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[3].id).replace('ct','')).getElementsByTagName('div')[0].getElementsByTagName('span')[0].textContent = Math.floor(document.getElementById('changeItemPrice4').textContent.replace(' руб.',''))+' руб.';
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[3].id).replace('ct','')).getElementsByTagName('span')[0].innerHTML = document.getElementById('changeItemName4').innerHTML;
    document.getElementById((document.getElementById('changeItemContainer').getElementsByClassName('SkinItem')[3].id).replace('ct','')).getElementsByTagName('img')[0].src = document.getElementById('changeItemImage4').src;
   
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
  }else {
    console.log(response.data+'');
    var alertBody = document.createElement('div');
    alertBody.classList.add('alert');

    alertBody.innerHTML = `<p> Произошлка ошибка при замене вещи </p>`;
    alertBody.addEventListener('click', function () {
      alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
    });
    setTimeout(function () {alertBody.classList.add('transforming')},1500);
    setTimeout(function () {alertBody.classList.add('hidden')},1800);
    document.querySelector('.alert-container').appendChild(alertBody);
  }
});
document.querySelector('.ChangeItemTab').classList.remove('showin-dt');
document.body.style.position = 'relative';
for (var i = 0; i <  document.getElementById('changeItemContainer').getElementsByTagName('div').length; i++) {
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('gold');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('red');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('purple');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('pink');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('blue');
  document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('gray');
 }
}}> <svg width={9} height={19} viewBox="0 0 9 19" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M5.3636 8.72302V3.60267C6.36879 3.95919 7.09092 4.91918 7.09092 6.0451C7.09092 6.52207 7.47761 6.90876 7.95458 6.90876C8.43155 6.90876 8.81824 6.52207 8.81824 6.0451C8.81824 3.95971 7.33228 2.21488 5.3636 1.81369V0.86366C5.3636 0.386689 4.97691 0 4.49994 0C4.02297 0 3.63628 0.386689 3.63628 0.86366V1.81369C1.6676 2.21488 0.181641 3.95971 0.181641 6.0451C0.181641 8.13049 1.6676 9.87526 3.63628 10.2765V15.3968C2.63104 15.0403 1.90896 14.0803 1.90896 12.9544C1.90896 12.4774 1.52227 12.0907 1.0453 12.0907C0.56833 12.0907 0.181641 12.4774 0.181641 12.9544C0.181641 15.0398 1.6676 16.7846 3.63628 17.1858V18.1363C3.63628 18.6133 4.02297 19 4.49994 19C4.97691 19 5.3636 18.6133 5.3636 18.1363V17.1858C7.33228 16.7846 8.81824 15.0398 8.81824 12.9544C8.81824 10.869 7.33223 9.12422 5.3636 8.72302ZM1.90896 6.0451C1.90896 4.91918 2.63104 3.95919 3.63628 3.60267V8.48753C2.63104 8.13101 1.90896 7.17103 1.90896 6.0451ZM5.3636 15.3968V10.512C6.36879 10.8685 7.09092 11.8285 7.09092 12.9544C7.09092 14.0803 6.36879 15.0403 5.3636 15.3968Z" fill="white" /></svg></a><div><span id="changeItemPrice4"></span></div></div></div>
    </div>

   <a onClick={() => {
         document.querySelector('.ChangeItemTab').classList.remove('showin-dt');
         document.body.style.position = 'relative';
       for (var i = 0; i <  document.getElementById('changeItemContainer').getElementsByTagName('div').length; i++) {
        document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('gold');
        document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('red');
        document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('purple');
        document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('pink');
        document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('blue');
        document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('gray');
       }
    }}>
      Отказаться
    </a>
    <nav onClick={() => {
         document.querySelector('.ChangeItemTab').classList.remove('showin-dt');
         document.body.style.position = 'relative';
         for (var i = 0; i <  document.getElementById('changeItemContainer').getElementsByTagName('div').length; i++) {
          document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('gold');
          document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('red');
          document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('purple');
          document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('pink');
          document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('blue');
          document.getElementById('changeItemContainer').getElementsByTagName('div')[i].classList.remove('gray');
         }
    }}>
    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>
    </nav>
    
  </form>
</div>

        </>
    )
   }
}

export default ChangeItem;
