import axios from 'axios';
import MyItems from './MyItems';
function Contract() {
return (
    <>
<div className="content contract">
  <h1>Контракт</h1>
  <div className="contract-wheel">
    <div className="not-set" onClick={() => {
      var num = 1;
      if (!document.getElementById('contract_item'+num).classList.contains('not-set')){
      document.getElementById(document.getElementById('contract_item'+num).getAttribute('data-id')).classList.remove('selected');
      document.getElementById('contract_item'+num).classList.remove('blue');
      document.getElementById('contract_item'+num).classList.remove('red');
      document.getElementById('contract_item'+num).classList.remove('gray');
      document.getElementById('contract_item'+num).classList.remove('gold');
      document.getElementById('contract_item'+num).classList.remove('pink');
      document.getElementById('contract_item'+num).classList.remove('purple');
      document.getElementById('contract_item'+num).classList.add('not-set');
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
    }} id='contract_item1'>
      <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA/110fx82f" alt="" />
      <nav>
        <p>9 999 ₽</p>
      </nav>
    </div>
    <div className="not-set" onClick={() => {
      var num = 2;
      if (!document.getElementById('contract_item'+num).classList.contains('not-set')){
      document.getElementById(document.getElementById('contract_item'+num).getAttribute('data-id')).classList.remove('selected');
      document.getElementById('contract_item'+num).classList.remove('blue');
      document.getElementById('contract_item'+num).classList.remove('red');
      document.getElementById('contract_item'+num).classList.remove('gray');
      document.getElementById('contract_item'+num).classList.remove('gold');
      document.getElementById('contract_item'+num).classList.remove('pink');
      document.getElementById('contract_item'+num).classList.remove('purple');
      document.getElementById('contract_item'+num).classList.add('not-set');
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
    }} id='contract_item2'>
      <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA/110fx82f" alt="" />
      <nav>
        <p>9 999 ₽</p>
      </nav>
    </div>
    <div onClick={() => {
      var num = 3;
      if (!document.getElementById('contract_item'+num).classList.contains('not-set')){
      document.getElementById(document.getElementById('contract_item'+num).getAttribute('data-id')).classList.remove('selected');
      document.getElementById('contract_item'+num).classList.remove('blue');
      document.getElementById('contract_item'+num).classList.remove('red');
      document.getElementById('contract_item'+num).classList.remove('gray');
      document.getElementById('contract_item'+num).classList.remove('gold');
      document.getElementById('contract_item'+num).classList.remove('pink');
      document.getElementById('contract_item'+num).classList.remove('purple');
      document.getElementById('contract_item'+num).classList.add('not-set');
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
    }} className="not-set" id='contract_item3'>
      <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA/110fx82f" alt="" />
      <nav>
        <p>9 999 ₽</p>
      </nav>
    </div>
    <div onClick={() => {
      var num = 4;
      if (!document.getElementById('contract_item'+num).classList.contains('not-set')){
      document.getElementById(document.getElementById('contract_item'+num).getAttribute('data-id')).classList.remove('selected');
      document.getElementById('contract_item'+num).classList.remove('blue');
      document.getElementById('contract_item'+num).classList.remove('red');
      document.getElementById('contract_item'+num).classList.remove('gray');
      document.getElementById('contract_item'+num).classList.remove('gold');
      document.getElementById('contract_item'+num).classList.remove('pink');
      document.getElementById('contract_item'+num).classList.remove('purple');
      document.getElementById('contract_item'+num).classList.add('not-set');
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
    }} className="not-set" id='contract_item4'>
      <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA/110fx82f" alt="" />
      <nav>
        <p>9 999 ₽</p>
      </nav>
    </div>
    <div onClick={() => {
      var num = 5;
      if (!document.getElementById('contract_item'+num).classList.contains('not-set')){
      document.getElementById(document.getElementById('contract_item'+num).getAttribute('data-id')).classList.remove('selected');
      document.getElementById('contract_item'+num).classList.remove('blue');
      document.getElementById('contract_item'+num).classList.remove('red');
      document.getElementById('contract_item'+num).classList.remove('gray');
      document.getElementById('contract_item'+num).classList.remove('gold');
      document.getElementById('contract_item'+num).classList.remove('pink');
      document.getElementById('contract_item'+num).classList.remove('purple');
      document.getElementById('contract_item'+num).classList.add('not-set');
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
    }} className="not-set" id='contract_item5'>
      <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA/110fx82f" alt="" />
      <nav>
        <p>9 999 ₽</p>
      </nav>
    </div>
    <div onClick={() => {
      var num = 6;
      if (!document.getElementById('contract_item'+num).classList.contains('not-set')){
      document.getElementById(document.getElementById('contract_item'+num).getAttribute('data-id')).classList.remove('selected');
      document.getElementById('contract_item'+num).classList.remove('blue');
      document.getElementById('contract_item'+num).classList.remove('red');
      document.getElementById('contract_item'+num).classList.remove('gray');
      document.getElementById('contract_item'+num).classList.remove('gold');
      document.getElementById('contract_item'+num).classList.remove('pink');
      document.getElementById('contract_item'+num).classList.remove('purple');
      document.getElementById('contract_item'+num).classList.add('not-set');
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
    }} className="not-set" id='contract_item6'>
      <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA/110fx82f" alt="" />
      <nav>
        <p>9 999 ₽</p>
      </nav>
    </div>
    <div onClick={() => {
      var num = 7;
      if (!document.getElementById('contract_item'+num).classList.contains('not-set')){
      document.getElementById(document.getElementById('contract_item'+num).getAttribute('data-id')).classList.remove('selected');
      document.getElementById('contract_item'+num).classList.remove('blue');
      document.getElementById('contract_item'+num).classList.remove('red');
      document.getElementById('contract_item'+num).classList.remove('gray');
      document.getElementById('contract_item'+num).classList.remove('gold');
      document.getElementById('contract_item'+num).classList.remove('pink');
      document.getElementById('contract_item'+num).classList.remove('purple');
      document.getElementById('contract_item'+num).classList.add('not-set');
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
    }} className="not-set" id='contract_item7'>
      <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA/110fx82f" alt="" />
      <nav>
        <p>9 999 ₽</p>
      </nav>
    </div>
    <div onClick={() => {
      var num = 8;
      if (!document.getElementById('contract_item'+num).classList.contains('not-set')){
      document.getElementById(document.getElementById('contract_item'+num).getAttribute('data-id')).classList.remove('selected');
      document.getElementById('contract_item'+num).classList.remove('blue');
      document.getElementById('contract_item'+num).classList.remove('red');
      document.getElementById('contract_item'+num).classList.remove('gray');
      document.getElementById('contract_item'+num).classList.remove('gold');
      document.getElementById('contract_item'+num).classList.remove('pink');
      document.getElementById('contract_item'+num).classList.remove('purple');
      document.getElementById('contract_item'+num).classList.add('not-set');
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
    }} className="not-set" id='contract_item8'>
      <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA/110fx82f" alt="" />
      <nav>
        <p>9 999 ₽</p>
      </nav>
    </div>
    <div onClick={() => {
      var num = 9;
      if (!document.getElementById('contract_item'+num).classList.contains('not-set')){
      document.getElementById(document.getElementById('contract_item'+num).getAttribute('data-id')).classList.remove('selected');
      document.getElementById('contract_item'+num).classList.remove('blue');
      document.getElementById('contract_item'+num).classList.remove('red');
      document.getElementById('contract_item'+num).classList.remove('gray');
      document.getElementById('contract_item'+num).classList.remove('gold');
      document.getElementById('contract_item'+num).classList.remove('pink');
      document.getElementById('contract_item'+num).classList.remove('purple');
      document.getElementById('contract_item'+num).classList.add('not-set');
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
    }} className="not-set" id='contract_item9'>
      <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA/110fx82f" alt="" />
      <nav>
        <p>9 999 ₽</p>
      </nav>
    </div>
    <div onClick={() => {
      var num = 10;
      if (!document.getElementById('contract_item'+num).classList.contains('not-set')){
      document.getElementById(document.getElementById('contract_item'+num).getAttribute('data-id')).classList.remove('selected');
      document.getElementById('contract_item'+num).classList.remove('blue');
      document.getElementById('contract_item'+num).classList.remove('red');
      document.getElementById('contract_item'+num).classList.remove('gray');
      document.getElementById('contract_item'+num).classList.remove('gold');
      document.getElementById('contract_item'+num).classList.remove('pink');
      document.getElementById('contract_item'+num).classList.remove('purple');
      document.getElementById('contract_item'+num).classList.add('not-set');
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
    }} className="not-set" id='contract_item10'>
      <img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_ummJW4NE_376S84-tiwHt_0VqZDzwI47DcVNqaFDZ-gLrxea918S5tJucwSY2uj5iuygjNe-uOA/110fx82f" alt="" />
      <nav>
        <p>9 999 ₽</p>
      </nav>
    </div>
    <nav>
      <div>
        <div>
          <p id='contract-data'>0/10 предметов</p>
          <span id='contract-sum'>(0 руб)</span>
          <a href className="blue-button" onClick={runC}>Создать контракт</a>
        </div>
        <p id='contract-prices'>Возможный дроп: от 0 ₽ до 0 ₽</p>
      </div>
    </nav>
  </div>
  <div id='contract-drops'></div>
  <div className="contract-items">
    <h2>Доступные для контракта предметы</h2>
    <div className='userItemsContainer'>
    <MyItems Ctype="selection"/> 
    </div>
  </div>
</div>

    </>
)
}
function click(id,contractDrop){

    for (var i = 1; i < 11; i++){
      let elem = document.getElementById('contract_item'+i);
      elem.classList.remove('blue');
      elem.classList.remove('red');
      elem.classList.remove('gold');
      elem.classList.remove('pink');
      elem.classList.remove('purple');
      elem.classList.remove('gray');
      elem.classList.add('not-set');
      
    
    document.querySelector('.contract').classList.remove('finished-contract');
    
    document.querySelector('.contract-wheel').style.pointerEvents = "all";
    document.querySelector('.contract-wheel').style.transform = "rotate(0deg) scale(1)";
    document.querySelector('.contract-wheel').style.opacity = "1";
    contractDrop.remove();
    axios.get('https://wondercase.net/sellItem.php?id='+(id+1)).then ((response) => {
      console.log(response.data+'');
    });
    document.getElementById('contract-data').textContent = '0/10 предмета (0 ₽)';
    document.getElementById('contract-prices').textContent = 'Возможный дроп: от 0 ₽ до 0 ₽';
    }
    
 
}
function runC () {
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
  if (document.querySelectorAll('.not-set').length > 7){

      var alertBody = document.createElement('div');
      alertBody.classList.add('alert');
      alertBody.innerHTML = `<p> Сначала добавьте скины в контракт! </p>`;
      alertBody.addEventListener('click', function () {
        alertBody.classList.add('transforming');
  setTimeout(function () {alertBody.classList.add('hidden')},300);
      });
      setTimeout(function () {alertBody.classList.add('transforming')},1500);
      setTimeout(function () {alertBody.classList.add('hidden')},1800);
      document.querySelector('.alert-container').appendChild(alertBody);
      return;
    
  }
  var str = '?';
for (var i = 1; i < 11; i++){
  if (!document.getElementById('contract_item'+i).classList.contains('not-set')){
  if (i == 1){



str = str + 'item'+i+'='+document.getElementById('contract_item'+i).getAttribute('data-id');
    
  }else {
    str = str + '&item'+i+'='+document.getElementById('contract_item'+i).getAttribute('data-id');;
  }
}
}console.log('https://wondercase.net/doContract.php'+str);
  axios.get('https://wondercase.net/doContract.php'+str).then((response) => {
    var len = document.querySelectorAll('.selected.SkinItem').length;
for (var i = len-1; i >= 0; i--) {
  document.querySelectorAll('.selected.SkinItem')[i].remove();
}
    var text = response.data+'';
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
    }

    var name = text.split('___')[0];
    var image= text.split('___')[1];
var color = text.split('___')[2];
var price = text.split('___')[3];
var id = text.split('___')[4];
    document.querySelector('.contract-wheel').style.transform = "rotate(720deg) scale(0)";
document.querySelector('.contract-wheel').style.opacity = "0.25";
setTimeout(function () {document.querySelector('.content').classList.add('finished-contract')},3500);
var contractDrop = document.createElement('div');
contractDrop.classList.add('contract-drop');
contractDrop.id = text.split('___')[4];
contractDrop.classList.add(color);
contractDrop.innerHTML = '<img src="'+image+'"><p> '+name+' </p> <p> '+price+' ₽ </p> <div> <a href="https://wondercase.net/contract">Еще раз</a> </div>';
var sellButton = document.createElement('a');
sellButton.onclick = function (){
  console.log('id-'+id);

click(id,contractDrop);

}
sellButton.textContent = 'Продать';
contractDrop.getElementsByTagName('div')[0].appendChild(sellButton);
document.getElementById('contract-drops').appendChild(contractDrop);
document.querySelector('.contract-wheel').style.pointerEvents = "none";
document.querySelector('.contract-wheel').style.outline = "none";
var audio = new Audio('/assets/sounds/contract.mp3');
audio.volume = document.getElementById('soundP').value*0.01;
audio.play();
  });


}
export default Contract;