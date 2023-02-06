import { Link } from "react-router-dom";

function Faq () {
return (
    <>
<div className="content faq">
  <h1 className="faq-title">FAQ</h1>
  <div className="faq-question">
    <h2>Я открыл кейс, но вещь не приходит, в чем проблема?</h2>
    <p>Зайдите в <Link to='/profile'></Link> и кликните по ссылке 'ЗАБРАТЬ' на интересующем вас предмете.</p>
  </div>
  <div className="faq-question">
    <h2>Пополнил счет, а средства не пришли, из-за чего?</h2>
    <p>Средства на счёт не всегда поступают сразу, ожидайте до 1 часа. Если ничего не пришло, то напишите на данную почту support@wondercase.net со всеми деталями платежа или в нашу техподдержку в вк группе, где вам ответят в течение часа <a href="https://vk.com/public215756600"></a></p>
  </div>
  <div className="faq-question">
    <h2>У меня есть баланс на Steam аккаунте, а тут они не отображаются, почему?</h2>
    <p>Баланс Steam не действует на этом сайте. Пополнять баланс необходимо отдельно.  </p>
  </div>
  <div className="faq-question">
    <h2>Не могу зайти на сайт через Steam, не грузится страница с кейсами, реклама посреди страницы, да и вообще сайт очень сильно лагает, что делать?</h2>
    <p>Чаще всего проблема кроется либо в антивирусе, который блокирует соединение с сайтом, либо в расширениях для браузера, которые показывают рекламу, и, возможно, также блокируют соединение с сайтом. Попробуйте отключить антивирус и удалить подозрительные расширения в браузере. Рекомендуемый для просмотра сайта браузер - Google Chrome.</p>
  </div>
  <div className="faq-question">
    <h2>Предметы продаются автоматически, если их не вывести??</h2>
    <p>Предметы продаются автоматически через месяц</p>
  </div>
  <div className="faq-question">
    <h2>Предметы продаются автоматически, если их не вывести??</h2>
    <p>Предметы продаются автоматически через месяц</p>
  </div>
  <h1>Как работает бонусная система?</h1>
  <div className="faq-question">
    <h2>Как получить все бонусы?</h2>
    <p>Чтобы получать ежедневно от 1р до 100р и забрать все бонусы за подписки на социальные сети, нужно за последнюю неделю сделать депозит 100 рублей</p>
  </div>
  <div className="faq-question">
    <h2>Можно ли вывести вещи с баланса, полученным благодаря бонусам?</h2>
    <p>Да, всё что вы выбьете - можно выводить без депозита</p>
  </div>


  <h4 className="faq-support">Также по любым вопросам можете обращаться на нашу почту support@wondercase.net Если у вас остались вопросы, вы всегда можете обратиться в <a href="https://vk.com/wondercase_support"> службу поддержки</a></h4>
</div>

    </>
)
}
export default Faq;