
import axios from "axios";



export const Refferal = ({ref_code, ref_amount, sum_depos, level, filled, sum_earnings, ref_bal, xp_level_needed, xp_level}) => {

return (
    <>
<div className="content refferal">
  <h1>Реферальная система</h1>
  <h4>Привлекай людей и получай процент с их депозитов!</h4>
  <div>
    
    <div>
    <div>
    <h5>Ваш реферальный код</h5>
      <nav>
        <input type="text" name="refcode" id="ref-code" placeholder={ref_code} />
        <a onClick={
        () => {
          var code = document.getElementById('ref-code').value;
          if (code.length < 3){
            var alertBody = document.createElement('div');
            alertBody.classList.add('alert');
            alertBody.innerHTML = `<p> Ваш реферальный код слишком короткий!</p>`;
            alertBody.addEventListener('click', function () {
              alertBody.classList.add('transforming');
          setTimeout(function () {alertBody.classList.add('hidden')},300);
            });
            setTimeout(function () {alertBody.classList.add('transforming')},1500);
            setTimeout(function () {alertBody.classList.add('hidden')},1800);
            document.querySelector('.alert-container').appendChild(alertBody);
          }else  if (code.length > 14){
            var alertBody = document.createElement('div');
            alertBody.classList.add('alert');
            alertBody.innerHTML = `<p> Ваш реферальный код слишком длинный! </p>`;
            alertBody.addEventListener('click', function () {
              alertBody.classList.add('transforming');
          setTimeout(function () {alertBody.classList.add('hidden')},300);
            });
            setTimeout(function () {alertBody.classList.add('transforming')},1500);
            setTimeout(function () {alertBody.classList.add('hidden')},1800);
            document.querySelector('.alert-container').appendChild(alertBody);
          }else {
          axios.get('/setRefCode.php?code='+document.getElementById('ref-code').value).then((response) => {
            var text = response.data+'';
            if (text == 'already_set'){
              var alertBody = document.createElement('div');
              alertBody.classList.add('alert');
              alertBody.innerHTML = `<p> Ваш реферальный код уже установлен! </p>`;
              alertBody.addEventListener('click', function () {
                alertBody.classList.add('transforming');
            setTimeout(function () {alertBody.classList.add('hidden')},300);
              });
              setTimeout(function () {alertBody.classList.add('transforming')},1500);
              setTimeout(function () {alertBody.classList.add('hidden')},1800);
              document.querySelector('.alert-container').appendChild(alertBody);
            }else if (text == 'success'){
              var alertBody = document.createElement('div');
              alertBody.classList.add('info');
              alertBody.innerHTML = `<p> Вы успешно установили реферальный код! </p>`;
              alertBody.addEventListener('click', function () {
                alertBody.classList.add('transforming');
            setTimeout(function () {alertBody.classList.add('hidden')},300);
              });
              setTimeout(function () {alertBody.classList.add('transforming')},1500);
              setTimeout(function () {alertBody.classList.add('hidden')},1800);
              document.querySelector('.alert-container').appendChild(alertBody);
            }else {
              var alertBody = document.createElement('div');
              alertBody.classList.add('alert');
              alertBody.innerHTML = `<p> Произошла ошибка при задании кода! Если это повторится, обратитесь в поддержку!</p>`;
              console.log(text + ' - response');
              console.log(code + '- code')
              alertBody.addEventListener('click', function () {
                alertBody.classList.add('transforming');
            setTimeout(function () {alertBody.classList.add('hidden')},300);
              });
              setTimeout(function () {alertBody.classList.add('transforming')},1500);
              setTimeout(function () {alertBody.classList.add('hidden')},1800);
              document.querySelector('.alert-container').appendChild(alertBody);
            }
          })
        }}
      }>
          <svg width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="https://www.w3.org/2000/svg">
            <path d="M16.145 0.570991C15.873 0.297991 15.427 0.297991 15.155 0.570991L6.92 8.80399L2.679 4.53399C2.407 4.25999 1.964 4.25999 1.69 4.53399L0.204 6.01899C-0.068 6.28999 -0.068 6.73599 0.204 7.00899L6.421 13.267C6.693 13.538 7.136 13.538 7.411 13.267L17.63 3.04699C17.906 2.77399 17.906 2.32699 17.63 2.05299L16.145 0.570991Z" fill="white" />
          </svg>
        </a>
      </nav>
      <h5>Ваш реферальная ссылка:</h5>
      <a href>
        <p id="case-link-ref">https://wondercase.net/r/{ref_code}</p>
      </a></div>  
    <div style={{backgroundImage: filled}} className="circle">
        <div className="inner">
          <div>
            <h1>
              Уровень {level}
            </h1>
            <h4>{xp_level} руб / {xp_level_needed} руб</h4>
          </div>
        </div>
      </div>
    </div>
    <div>

      <p><span id="ref-amount">{ref_amount}</span> рефералов</p>
      <p><span id="sum-depos">{sum_depos}</span> депозитов от рефералов</p>
      <p><span id="sum-earnings">{sum_earnings}</span> ваш доход за всё время</p>
      <div>
        <p style={{marginBottom: 0, marginRight: 22}}><span id="ref-bal">{ref_bal}</span> доступный доход</p> <a onClick={() => {
          var sum = Number((document.getElementById('ref-bal').textContent+'').replace(' руб.',''));
if (sum < 100){
  var alertBody = document.createElement('div');
  alertBody.classList.add('alert');
  alertBody.innerHTML = `<p> Минимальная сумма к получению - 100 руб.</p>`;
  alertBody.addEventListener('click', function () {
    alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
  });
  setTimeout(function () {alertBody.classList.add('transforming')},1500);
  setTimeout(function () {alertBody.classList.add('hidden')},1800);
  document.querySelector('.alert-container').appendChild(alertBody);
}else {
  axios.get('https://wondercase.net/requestRefMoney.php').then((response) => {
var text = response.data + '';
if (text == 'success'){
  var alertBody = document.createElement('div');
  alertBody.classList.add('info');
  alertBody.innerHTML = `<p> + `+document.getElementById('ref-bal').textContent+`</p>`;
  alertBody.addEventListener('click', function () {
    alertBody.classList.add('transforming');
setTimeout(function () {alertBody.classList.add('hidden')},300);
  });
  setTimeout(function () {alertBody.classList.add('transforming')},1500);
  setTimeout(function () {alertBody.classList.add('hidden')},1800);
  document.querySelector('.alert-container').appendChild(alertBody);
  document.getElementById('balance').textContent = (Number(document.getElementById('balance').textContent.replace(' руб.',''))+Number(document.getElementById('ref-bal').textContent.replace(' руб.','')))+' руб.'; 
  document.getElementById('ref-bal').textContent = '0 руб.';
}
  });
}
        }} className="blue-button overall">Забрать</a>
      </div>
    </div>
  </div>
  <nav>
    <h5>Уровни реферальной системы:</h5>
    <p>0,1% от пополнений</p>
    <p>сумма пополнений больше 5 000 руб. от рефералов - 0,2% от пополнений</p>
    <p>сумма пополнений больше  10 000 руб. от рефералов - 0,3% от пополнений</p>
    <p>сумма пополнений больше 50 000 руб. от рефералов - 0,4% от пополнений</p>
    <p>сумма пополнений больше 100 000 руб. от рефералов - 1% от пополнений
    </p>
  </nav>
</div>

    </>
)
}

export default Refferal;