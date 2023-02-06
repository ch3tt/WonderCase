import axios from "axios";

function Bonus () {

    return (
        <>
<div className="content bonus">
  <h1>Бонусы</h1>
  <h4>Ежедневный бонус</h4>
  <h4>(от 1 руб до 100 руб)</h4>
  <div>
<img src="/assets/img/gift.png"/>
  </div>
  <p id="bonusTimer"></p>
  <a className="blue-button" id="receive-bon" onClick={() => {
    axios.get('/getBonus.php').then((response) => {
var text = response.data+'';
if (text == 'no_deposits'){
  var alertBody = document.createElement('div');
  alertBody.classList.add('alert');
  alertBody.innerHTML = `<p> Для использования бонусов необходимо сделать депозитов на сумму 100 руб. за последнюю неделю</p>`;
  alertBody.addEventListener('click', function () {
    alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
  });
  setTimeout(function () {alertBody.classList.add('transforming')},1500);
  setTimeout(function () {alertBody.classList.add('hidden')},1800);
  document.querySelector('.alert-container').appendChild(alertBody);
}else if (text == 'already_taken'){
  var alertBody = document.createElement('div');
  alertBody.classList.add('alert');
  alertBody.innerHTML = `<p>Вы уже получали этот бонус сегодня!</p>`;
  alertBody.addEventListener('click', function () {
    alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
  });
  setTimeout(function () {alertBody.classList.add('transforming')},1500);
  setTimeout(function () {alertBody.classList.add('hidden')},1800);
  document.querySelector('.alert-container').appendChild(alertBody);
}else {
  var alertBody = document.createElement('div');
  alertBody.classList.add('info');
  alertBody.innerHTML = `<p>+ `+text+` ₽</p>`;
  alertBody.addEventListener('click', function () {
    alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
  });
  setTimeout(function () {alertBody.classList.add('transforming')},1500);
  setTimeout(function () {alertBody.classList.add('hidden')},1800);
  document.querySelector('.alert-container').appendChild(alertBody);
}
    })}}>Получить</a>
  <div className="block-">
    <h4>Бонус за подписку на социальные сети</h4>
    <div>
      <div>
      <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg"><path d="M17.802 12.298s1.617 1.597 2.017 2.336a.127.127 0 0 1 .018.035c.163.273.203.487.123.645-.135.261-.592.392-.747.403h-2.858c-.199 0-.613-.052-1.117-.4-.385-.269-.768-.712-1.139-1.145-.554-.643-1.033-1.201-1.518-1.201a.548.548 0 0 0-.18.03c-.367.116-.833.639-.833 2.032 0 .436-.344.684-.585.684H9.674c-.446 0-2.768-.156-4.827-2.327C2.324 10.732.058 5.4.036 5.353c-.141-.345.155-.533.475-.533h2.886c.387 0 .513.234.601.444.102.241.48 1.205 1.1 2.288 1.004 1.762 1.621 2.479 2.114 2.479a.527.527 0 0 0 .264-.07c.644-.354.524-2.654.494-3.128 0-.092-.001-1.027-.331-1.479-.236-.324-.638-.45-.881-.496.065-.094.203-.238.38-.323.441-.22 1.238-.252 2.029-.252h.439c.858.012 1.08.067 1.392.146.628.15.64.557.585 1.943-.016.396-.033.842-.033 1.367 0 .112-.005.237-.005.364-.019.711-.044 1.512.458 1.841a.41.41 0 0 0 .217.062c.174 0 .695 0 2.108-2.425.62-1.071 1.1-2.334 1.133-2.429.028-.053.112-.202.214-.262a.479.479 0 0 1 .236-.056h3.395c.37 0 .621.056.67.196.082.227-.016.92-1.566 3.016-.261.349-.49.651-.691.915-1.405 1.844-1.405 1.937.083 3.337z" /></svg>
     
        <h4>10 руб за подписку на <a href>VK</a></h4>
        <a className="blue-button" onClick={() => {
           setTimeout(function () {
              window.open('https://vk.com/public215756600', '_blank');
              document.getElementById('vk-do').classList.add('did');
          },1500);  }}>Подписаться</a>
        <a href className="blue-button" id="vk-do" onClick={() => {
          if (document.getElementById('vk-do').classList.contains('did')){
            axios.get('/requestBonus.php?type=vk').then((response) => {
              var text = response.data+'';
              if (text == 'no_deposits'){
                var alertBody = document.createElement('div');
                alertBody.classList.add('alert');
                alertBody.innerHTML = `<p> Для использования бонусов необходимо сделать депозитов на сумму 100 руб.</p>`;
                alertBody.addEventListener('click', function () {
                  alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
                });
                setTimeout(function () {alertBody.classList.add('transforming')},1500);
                     setTimeout(function () {alertBody.classList.add('hidden')},1800);
                document.querySelector('.alert-container').appendChild(alertBody);
              }else if (text == 'already_taken'){
                var alertBody = document.createElement('div');
                alertBody.classList.add('alert');
                alertBody.innerHTML = `<p>Вы уже получали этот бонус!</p>`;
                alertBody.addEventListener('click', function () {
                  alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
                });
                setTimeout(function () {alertBody.classList.add('transforming')},1500);
                setTimeout(function () {alertBody.classList.add('hidden')},1800);
                document.querySelector('.alert-container').appendChild(alertBody);
              }else if (text == 'success') {
                var alertBody = document.createElement('div');
                alertBody.classList.add('info');
                alertBody.innerHTML = `<p>+ 10 ₽</p>`;
                alertBody.addEventListener('click', function () {
                  alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
                });
                setTimeout(function () {alertBody.classList.add('transforming')},1500);
                setTimeout(function () {alertBody.classList.add('hidden')},1800);
                document.querySelector('.alert-container').appendChild(alertBody);
              }
            })
          }else {
            var alertBody = document.createElement('div');
            alertBody.classList.add('alert');
            alertBody.innerHTML = `<p> Сначала подпишитесь! </p>`;
            alertBody.addEventListener('click', function () {
              alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
            });
            setTimeout(function () {alertBody.classList.add('transforming')},1500);
            setTimeout(function () {alertBody.classList.add('hidden')},1800);
            document.querySelector('.alert-container').appendChild(alertBody);
          }
        }}>Получить</a>
      </div>
      <div>
      <svg version="1.1" id="Layer_1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
          C114.615,0,0,114.615,0,256s114.615,256,256,256c5.737,0,11.424-0.208,17.067-0.579C139.642,502.636,34.133,391.648,34.133,256z"/&gt;
          <path style={{fill: '#65EEE4'}} d="M380.263,109.054c-2.486-1.69-5.676-1.946-8.399-0.679L96.777,236.433
 c-4.833,2.251-7.887,7.172-7.766,12.501c0.117,5.226,3.28,9.92,8.065,12.015l253.613,110.457c8.468,3.849,18.439-2.21,18.983-11.453
 l14.314-243.341C384.161,113.614,382.748,110.742,380.263,109.054z" />
          <polygon style={{fill: '#58D8CE'}} points="171.631,293.421 188.772,408 379.168,108.432 " />
          <path style={{fill: '#66FCF1'}} d="M371.866,108.375L96.777,236.433c-4.737,2.205-7.826,7.121-7.769,12.345
 c0.058,5.233,3.276,10.074,8.067,12.171l74.557,32.471l207.536-184.988C376.882,107.33,374.203,107.287,371.866,108.375z" />
          <polygon style={{fill: '#65EEE4'}} points="211.418,310.749 188.772,408 379.168,108.432 " />
          <path style={{fill: '#66FCF1'}} d="M380.263,109.054c-0.351-0.239-0.72-0.442-1.095-0.622l-167.75,202.317l139.27,60.657
 c8.468,3.849,18.439-2.21,18.983-11.453l14.314-243.341C384.161,113.614,382.748,110.742,380.263,109.054z" />
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
        <h4>10 руб за подписку на <a href>Telegram</a></h4>
        <a className="blue-button" onClick={() => {
           setTimeout(function () {
               window.open('https://t.me/wondercasetg', '_blank');
               document.getElementById('telegram-do').classList.add('did');
          },1500);  }}>Подписаться</a>
        <a href className="blue-button" onClick={() => {
          if (document.getElementById('telegram-do').classList.contains('did')){
            axios.get('/requestBonus.php?type=telegram').then((response) => {
              var text = response.data+'';
              if (text == 'no_deposits'){
                var alertBody = document.createElement('div');
                alertBody.classList.add('alert');
                alertBody.innerHTML = `<p> Для использования бонусов необходимо сделать депозитов на сумму 100 руб.</p>`;
                alertBody.addEventListener('click', function () {
                  alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
                });
                setTimeout(function () {alertBody.classList.add('transforming')},1500);
                setTimeout(function () {alertBody.classList.add('hidden')},1800);
                document.querySelector('.alert-container').appendChild(alertBody);
              }else if (text == 'already_taken'){
                var alertBody = document.createElement('div');
                alertBody.classList.add('alert');
                alertBody.innerHTML = `<p>Вы уже получали этот бонус!</p>`;
                alertBody.addEventListener('click', function () {
                  alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
                });
                setTimeout(function () {alertBody.classList.add('transforming')},1500);
                setTimeout(function () {alertBody.classList.add('hidden')},1800);
                document.querySelector('.alert-container').appendChild(alertBody);
              }else if (text == 'success') {
                var alertBody = document.createElement('div');
                alertBody.classList.add('info');
                alertBody.innerHTML = `<p>+ 10 ₽</p>`;
                alertBody.addEventListener('click', function () {
                  alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
                });
                setTimeout(function () {alertBody.classList.add('transforming')},1500);
                setTimeout(function () {alertBody.classList.add('hidden')},1800);
                document.querySelector('.alert-container').appendChild(alertBody);
              }
            })
          }else {
            var alertBody = document.createElement('div');
            alertBody.classList.add('alert');
            alertBody.innerHTML = `<p> Сначала подпишитесь! </p>`;
            alertBody.addEventListener('click', function () {
              alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
            });
            setTimeout(function () {alertBody.classList.add('transforming')},1500);
            setTimeout(function () {alertBody.classList.add('hidden')},1800);
            document.querySelector('.alert-container').appendChild(alertBody);
          }
        }} id="telegram-do">Получить</a>
      </div>
      <div>
      <svg version="1.1" id="Layer_1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 461.001 461.001" style={{enableBackground: 'new 0 0 461.001 461.001'}} xmlSpace="preserve">
          <g>
            <path style={{fill: '#66FCF1'}} d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
     c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
     C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
     c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z" />
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
        <h4>10 руб за подписку на <a href>YouTube</a></h4>
       <a onClick={() => {
        setTimeout(function () {
            window.open('https://www.youtube.com/channel/UCQ2B4bIOMzuyyRkhzTFvzvw', '_blank');
            document.getElementById('youtube-do').classList.add('did');
        },1500); }} className="blue-button">Подписаться</a>
        <a href className="blue-button" onClick={() => {
          if (document.getElementById('youtube-do').classList.contains('did')){
            axios.get('/requestBonus.php?type=youtube').then((response) => {
              var text = response.data+'';
              if (text == 'no_deposits'){
                var alertBody = document.createElement('div');
                alertBody.classList.add('alert');
                alertBody.innerHTML = `<p> Для использования бонусов необходимо сделать депозитов на сумму 100 руб.</p>`;
                alertBody.addEventListener('click', function () {
                  alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
                });
                setTimeout(function () {alertBody.classList.add('transforming')},1500);
                setTimeout(function () {alertBody.classList.add('hidden')},1800);
                document.querySelector('.alert-container').appendChild(alertBody);
              }else if (text == 'already_taken'){
                var alertBody = document.createElement('div');
                alertBody.classList.add('alert');
                alertBody.innerHTML = `<p>Вы уже получали этот бонус!</p>`;
                alertBody.addEventListener('click', function () {
                  alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
                });
                setTimeout(function () {alertBody.classList.add('transforming')},1500);
                setTimeout(function () {alertBody.classList.add('hidden')},1800);
                document.querySelector('.alert-container').appendChild(alertBody);
              }else if (text == 'success') {
                var alertBody = document.createElement('div');
                alertBody.classList.add('info');
                alertBody.innerHTML = `<p>+ 10 ₽</p>`;
                alertBody.addEventListener('click', function () {
                  alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
                });
                setTimeout(function () {alertBody.classList.add('transforming')},1500);
                setTimeout(function () {alertBody.classList.add('hidden')},1800);
                document.querySelector('.alert-container').appendChild(alertBody);
              }
            })
          }else {
            var alertBody = document.createElement('div');
            alertBody.classList.add('alert');
            alertBody.innerHTML = `<p> Сначала подпишитесь! </p>`;
            alertBody.addEventListener('click', function () {
              alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
            });
            setTimeout(function () {alertBody.classList.add('transforming')},1500);
            setTimeout(function () {alertBody.classList.add('hidden')},1800);
            document.querySelector('.alert-container').appendChild(alertBody);
          }
        }} id="youtube-do">Получить</a>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
axios.get('https://wondercase.net/getBonusStatus.php').then((response) => {
  if (response.data+'' != ''){
document.getElementById('bonusTimer').textContent = response.data+''; 
document.getElementById('receive-bon').style.opacity = '0.3';
  }
})

export default Bonus;