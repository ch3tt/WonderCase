import { Link } from "react-router-dom";
import MyItems from "./MyItems";
import axios from 'axios';
import SkinItem from "./SkinItem";
export const Profile = ({avatar, name, registered, contracts, upgradeSuccess, upgradeFail, cases, tradeLink}) => {
return (  
    <>
<div className="content profile">
  <div>
    <div>
      <img src={avatar} alt="" />
      <div>
        <h1>{name} </h1>
        <h6>зарегистрирован с {registered}</h6>
        <nav>
        <span> <span className="aqua">{cases}</span> Кейсов открыто</span>
        <span> <span className="aqua">{contracts}</span> Контрактов создано</span>
        <span> <span className="aqua">{upgradeSuccess}</span> Успешных апгрейдов</span>
        <span> <span className="aqua">{upgradeFail}</span> Неуспешных апгрейдов</span>
        </nav> 
        <Link style={{ marginBottom:'12px'}} to="/history">История пополнений</Link>
        <Link to="/withdrawals">История выводов</Link>
      </div>
    </div>
    <p>Укажите трейд-ссылку <br/> (<a href="https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url" rel="noreffer" target="_blank">узнать</a>)</p>  
    <div>
      <input type="text" name="trade" id="trade-link" placeholder={tradeLink} />
      <a onClick={() => {
        var linkValue = document.getElementById('trade-link').value;
        linkValue = linkValue.replace('&','^^^');
        if (linkValue.startsWith('https://steamcommunity.com/')){
axios.get('https://wondercase.net/setTradeLink.php?tradeLink='+linkValue).then((response) => {
if (response.data + '' == 'success'){
  var alertBody = document.createElement('div');
  alertBody.classList.add('info');
  alertBody.innerHTML = `<p> Ссылка изменена </p>`;
  alertBody.addEventListener('click', function () {
    alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
  });
  setTimeout(function () {alertBody.classList.add('transforming')},1500);
  setTimeout(function () {alertBody.classList.add('hidden')},1800);
  document.querySelector('.alert-container').appendChild(alertBody);
}
});
        }else {
          var alertBody = document.createElement('div');
          alertBody.classList.add('alert');
          alertBody.innerHTML = `<p> Неправильный формат ссылки на обмен </p>`;
          alertBody.addEventListener('click', function () {
            alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
          });
          setTimeout(function () {alertBody.classList.add('transforming')},1500);
          setTimeout(function () {alertBody.classList.add('hidden')},1800);
          document.querySelector('.alert-container').appendChild(alertBody);
        }

      }}><svg width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="https://www.w3.org/2000/svg">
          <path d="M16.145 0.570991C15.873 0.297991 15.427 0.297991 15.155 0.570991L6.92 8.80399L2.679 4.53399C2.407 4.25999 1.964 4.25999 1.69 4.53399L0.204 6.01899C-0.068 6.28999 -0.068 6.73599 0.204 7.00899L6.421 13.267C6.693 13.538 7.136 13.538 7.411 13.267L17.63 3.04699C17.906 2.77399 17.906 2.32699 17.63 2.05299L16.145 0.570991Z" fill="white" />
        </svg>
      </a>
    </div>
    <p>Реферальный код</p>  
    <div>
      <input type="text" name="trade" id="ref-code" placeholder="Код"/>
      <a onClick={() => {
      axios.get('https://wondercase.net/makeYouRef.php?code='+document.getElementById('ref-code').value).then((response) => {
var text = response.data+'';
if (text=='success'){
  var alertBody = document.createElement('div');
  alertBody.classList.add('info');
  alertBody.innerHTML = `<p> Код установлен! </p>`;
  alertBody.addEventListener('click', function () {
    alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
  });
  setTimeout(function () {alertBody.classList.add('transforming')},1500);
  setTimeout(function () {alertBody.classList.add('hidden')},1800);
  document.querySelector('.alert-container').appendChild(alertBody);
}else if (text == 'not_your_own'){
  var alertBody = document.createElement('div');
  alertBody.classList.add('alert');
  alertBody.innerHTML = `<p> Вы не можете стать своим рефералом! </p>`;
  alertBody.addEventListener('click', function () {
    alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
  });
  setTimeout(function () {alertBody.classList.add('transforming')},1500);
  setTimeout(function () {alertBody.classList.add('hidden')},1800);
  document.querySelector('.alert-container').appendChild(alertBody);
}else if (text == 'code_not_found'){
  var alertBody = document.createElement('div');
  alertBody.classList.add('alert');
  alertBody.innerHTML = `<p> Код не найден! </p>`;
  alertBody.addEventListener('click', function () {
    alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
  });
  setTimeout(function () {alertBody.classList.add('transforming')},1500);
  setTimeout(function () {alertBody.classList.add('hidden')},1800);
  document.querySelector('.alert-container').appendChild(alertBody);
}else if (text == 'already_ref') {
  var alertBody = document.createElement('div');
  alertBody.classList.add('alert');
  alertBody.innerHTML = `<p> Вы уже вводили реферальный код! </p>`;
  alertBody.addEventListener('click', function () {
    alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
  });
  setTimeout(function () {alertBody.classList.add('transforming')},1500);
  setTimeout(function () {alertBody.classList.add('hidden')},1800);
  document.querySelector('.alert-container').appendChild(alertBody);
}

      });
      }}><svg width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="https://www.w3.org/2000/svg">
          <path d="M16.145 0.570991C15.873 0.297991 15.427 0.297991 15.155 0.570991L6.92 8.80399L2.679 4.53399C2.407 4.25999 1.964 4.25999 1.69 4.53399L0.204 6.01899C-0.068 6.28999 -0.068 6.73599 0.204 7.00899L6.421 13.267C6.693 13.538 7.136 13.538 7.411 13.267L17.63 3.04699C17.906 2.77399 17.906 2.32699 17.63 2.05299L16.145 0.570991Z" fill="white" />
        </svg>
      </a>
    </div>
    <div>
      <nav>
      <h3>Ваши предметы</h3>

      </nav>
      <div>
        <p>Показать только доступные</p>
        <div>
          <input type="checkbox" name="only_available" id="show-available" onClick={cg} />
          <nav>
          <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3.625L3.90532 6.89348C3.9532 6.94735 4.03908 6.94138 4.07906 6.88142L8 1" stroke="url(#paint0_linear_237_4905)" stroke-width="1.5" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_237_4905" x1="13.3763" y1="3.84211" x2="-3.04124" y2="3.84211" gradientUnits="userSpaceOnUse">
<stop stop-color="#66FCF1" stop-opacity="0"/>
<stop offset="0.515625" stop-color="#66FCF1"/>
<stop offset="1" stop-color="#66FCF1" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

            </nav>
        </div>
      </div>
    </div>
    <div>
    </div>
    <div className="profile-items-list userItemsContainer">
<MyItems Ctype="profile"/> 

    </div>
    <div id="page-switcher-profile">
      <div>
        <a onClick={() => {
          var pageValue = Number(document.getElementById('profile-page-value').textContent);

          if (pageValue == 1)return;
          function payment (name, color, sold, image, price, id) {
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
        
       
          
            var elem = document.createElement('div');
            if (sold != ''){
              elem.classList.add(sold);
            }
            elem.classList.add(color);
            if (name.length > 18){
              name = name.substring(0,18) + '...';
            }
            
            elem.innerHTML = '<nav></nav><img src="'+image+'" alt=""><span><span>'+name.split(' | ')[0]+'</span><br>'+name.split(' | ')[1]+'</span>'; 
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
          axios.get('https://wondercase.net/withdrawItem.php?id='+id).then((response) => {
          if (response.data+'' == 'success'){
            var audio = new Audio('/assets/sounds/trade.mp3');
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
            if (response.data+'' == 'limit') {
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
            }else   if (response.data+'' == 'trade_link') {
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
              var splits = text.split('__');
              document.querySelector('.ChangeItemTab').classList.add('showin-dt');
              document.querySelector('.ChangeItemTab').id = 'ct'+splits[4];
        document.body.style.position = 'fixed';
             document.getElementById('changeItemImage').src = splits[3];
             document.getElementById('changeItemPrice').textContent = splits[1]+' руб.';
             document.getElementById('changeItemName').textContent = splits[0];
             document.getElementById('changeItemContainer').classList.add(splits[2]);
              setTimeout(function () {alertBody.classList.add('transforming')},1500);
              setTimeout(function () {alertBody.classList.add('hidden')},1800);
              document.querySelector('.alert-container').appendChild(alertBody);
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
        document.querySelector('.userItemsContainer').appendChild(elem);}
        
            axios.get('https://wondercase.net/getUserItems.php?page='+(pageValue-1)).then ((response) => {
              document.querySelector('.userItemsContainer').innerHTML = '';
              if (response.data+'' == 'nopage'){
                return;
              }
              document.getElementById('profile-page-value').textContent = pageValue-1;
                 var ll = response.data;
              
                 if (ll.length == 0){
               payment('clear','','','','','');  
              }
                for (var i = 0; i < ll.length; i++){
                  payment(ll[i].item_name,ll[i].item_color,ll[i].item_status,ll[i].item_image,Math.floor(ll[i].item_price), ll[i].item_id);
                }
                document.querySelector('.userItemsContainer').classList.add('rendered');
                
           
                });
        }}><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style={{enableBackground: 'new 0 0 477.175 477.175'}} xmlSpace="preserve">
  <g>
    <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
		" />
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
</svg>

</a>
<div id="profile-page-value">1</div>
<a onClick={() => {
          var pageValue = Number(document.getElementById('profile-page-value').textContent);
          function payment (name, color, sold, image, price, id) {

          if (name == 'clear'){
            document.querySelector('.userItemsContainer').innerHTML = document.querySelector('.userI    temsContainer').innerHTML + '<p> Вещей не найдено </p>';
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
        
       
          
            var elem = document.createElement('div');
            if (sold != ''){
              elem.classList.add(sold);
            }
            elem.classList.add(color);
            if (name.length > 18){
              name = name.substring(0,18) + '...';
            }
            
            elem.innerHTML = '<nav></nav><img src="'+image+'" alt=""><span><span>'+name.split(' | ')[0]+'</span><br>'+name.split(' | ')[1]+'</span>';
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
          axios.get('https://wondercase.net/withdrawItem.php?id='+id).then((response) => {
          if (response.data+'' == 'success'){
            var audio = new Audio('/assets/sounds/trade.mp3');
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
            if (response.data+'' == 'limit') {
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
            }else   if (response.data+'' == 'trade_link') {
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
              var splits = text.split('__');
              document.querySelector('.ChangeItemTab').classList.add('showin-dt');
              document.querySelector('.ChangeItemTab').id = 'ct'+splits[4];
        document.body.style.position = 'fixed';
             document.getElementById('changeItemImage').src = splits[3];
             document.getElementById('changeItemPrice').textContent = splits[1]+' руб.';
             document.getElementById('changeItemName').textContent = splits[0];
             document.getElementById('changeItemContainer').classList.add(splits[2]);
              setTimeout(function () {alertBody.classList.add('transforming')},1500);
              setTimeout(function () {alertBody.classList.add('hidden')},1800);
              document.querySelector('.alert-container').appendChild(alertBody);
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
        document.querySelector('.userItemsContainer').appendChild(elem);}
        
            axios.get('https://wondercase.net/getUserItems.php?page='+(pageValue+1)).then ((response) => {
              if (response.data+'' == 'nopage'){
                return;
              }
              document.querySelector('.userItemsContainer').innerHTML = '';
             
              document.getElementById('profile-page-value').textContent = pageValue+1;
                 var ll = response.data;
              
                 if (ll.length == 0){
               payment('clear','','','','','');  
              }
                for (var i = 0; i < ll.length; i++){
                  payment(ll[i].item_name,ll[i].item_color,ll[i].item_status,ll[i].item_image,Math.floor(ll[i].item_price), ll[i].item_id);
                }
                document.querySelector('.userItemsContainer').classList.add('rendered');
                
            
                });
        }}><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style={{enableBackground: 'new 0 0 477.175 477.175'}} xmlSpace="preserve">
  <g>
    <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
		" />
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
</svg>

</a>
      </div>
    </div>
  </div>
</div>

    </>
)
}
function cg () {
  document.querySelectorAll('.profile-items-list')[0].classList.toggle("only-available");
}
export default Profile;