import { Link } from 'react-router-dom';
import CasesBlock from './CasesBlock';
import axios from "axios";
export const Main  = ()=>{
  setTimeout(function(){
 console.log('123123');
 if (document.querySelector('.cases-subblock') !=null ){
  console.log("ch1l");
  if (document.querySelectorAll('.cases-subblock-row').length < 9){
    console.log("ch12");
    document.querySelector('.cases-subblock').innerHTML = document.querySelector('.cases-subblock').innerHTML + '<h2>Бесплатные</h2><div class="cases-subblock-row" id="Cases-Бесплатные"></div><h2>Стандартные</h2><div class="cases-subblock-row" id="Cases-Стандартные"></div><h2>Аниме</h2><div class="cases-subblock-row" id="Cases-Аниме"></div> <h2>Марки машин</h2><div class="cases-subblock-row" id="Cases-Марки машин"></div> <h2>Звания</h2><div class="cases-subblock-row" id="Cases-Звания"></div> <h2>Криптовалюта</h2><div class="cases-subblock-row" id="Cases-Криптовалюта"></div><h2>Социальные сети</h2><div class="cases-subblock-row" id="Cases-Социальные сети"></div> <h2>Пользовательские</h2><div class="cases-subblock-row" id="Cases-Пользовательские"></div><h2>Оружейные</h2><div class="cases-subblock-row" id="Cases-Оружейные"></div> <h2>Кейсы из CS:GO</h2><div class="cases-subblock-row" id="Cases-Кейсы из CS:GO"></div>';
 
    axios.get('https://wondercase.net/getCases.php?collection=Бесплатные'+'&i='+0).then ((response) => {
      var ll = response.data;     console.log(ll);  
        for (var inf = 1; inf < ll.length; inf++){
          payment(ll[inf].title,ll[inf].price,ll[inf].image,'Бесплатные');
        }
        document.getElementById('Cases-Бесплатные').classList.add('rendered');
        });
    axios.get('https://wondercase.net/getCases.php?collection=Стандартные'+'&i='+0).then ((response) => {
    var ll = response.data;     console.log(ll);  
      for (var inf = 1; inf < ll.length; inf++){
        payment(ll[inf].title,ll[inf].price,ll[inf].image,'Стандартные');
      }
      document.getElementById('Cases-Стандартные').classList.add('rendered');
      });
      axios.get('https://wondercase.net/getCases.php?collection=Аниме'+'&i='+0).then ((response) => {
        var ll = response.data;     console.log(ll);  
          for (var inf = 1; inf < ll.length; inf++){
            payment(ll[inf].title,ll[inf].price,ll[inf].image,'Аниме');
          }
          document.getElementById('Cases-Аниме').classList.add('rendered');
          });
          axios.get('https://wondercase.net/getCases.php?collection=Марки машин'+'&i='+0).then ((response) => {
            var ll = response.data;     console.log(ll);  
              for (var inf = 1; inf < ll.length; inf++){
                payment(ll[inf].title,ll[inf].price,ll[inf].image,'Марки машин');
              }
              document.getElementById('Cases-Марки машин').classList.add('rendered');
              });
              axios.get('https://wondercase.net/getCases.php?collection=Звания'+'&i='+0).then ((response) => {
                var ll = response.data;     console.log(ll);  
                  for (var inf = 1; inf < ll.length; inf++){
                    payment(ll[inf].title,ll[inf].price,ll[inf].image,'Звания');
                  }
                  document.getElementById('Cases-Звания').classList.add('rendered');
                  });
                  axios.get('https://wondercase.net/getCases.php?collection=Криптовалюта'+'&i='+0).then ((response) => {
                    var ll = response.data;     console.log(ll);  
                      for (var inf = 1; inf < ll.length; inf++){
                        payment(ll[inf].title,ll[inf].price,ll[inf].image,'Криптовалюта');
                      }
                      document.getElementById('Cases-Криптовалюта').classList.add('rendered');
                      });
                      axios.get('https://wondercase.net/getCases.php?collection=Социальные сети'+'&i='+0).then ((response) => {
                        var ll = response.data;     console.log(ll);  
                          for (var inf = 1; inf < ll.length; inf++){
                            payment(ll[inf].title,ll[inf].price,ll[inf].image,'Социальные сети');
                          }
                          document.getElementById('Cases-Социальные сети').classList.add('rendered');
                          });
                          axios.get('https://wondercase.net/getCases.php?collection=Пользовательские'+'&i='+0).then ((response) => {
                            var ll = response.data;     console.log(ll);  
                              for (var inf = 1; inf < ll.length; inf++){
                                payment(ll[inf].title,ll[inf].price,ll[inf].image,'Пользовательские');
                              }
                              document.getElementById('Cases-Пользовательские').classList.add('rendered');
                              });
                              axios.get('https://wondercase.net/getCases.php?collection=Оружейные'+'&i='+0).then ((response) => {
                                var ll = response.data;     console.log(ll);  
                                  for (var inf = 1; inf < ll.length; inf++){
                                    payment(ll[inf].title,ll[inf].price,ll[inf].image,'Оружейные');
                                  }
                                  document.getElementById('Cases-Оружейные').classList.add('rendered');
                                  });
                                  axios.get('https://wondercase.net/getCases.php?collection=Кейсы из CS:GO'+'&i='+0).then ((response) => {
                                    var ll = response.data;
                                    console.log(ll);  
                                    for (var inf = 1; inf < ll.length; inf++){
                                        payment(ll[inf].title,ll[inf].price,ll[inf].image,'Кейсы из CS:GO');
                                      }
                                      document.getElementById('Cases-Кейсы из CS:GO').classList.add('rendered');
                                      });
                                    }}else {
                                      console.log(document.querySelector('.cases-subblock')+'dada');
                                    }},500);

  function payment (name, price,image, i) {
    if (name == undefined || name+'' == 'undefined'){
      return;
    }
    console.log(name + ' '+ image + ' '+ price + ' '+ i);

if (document.getElementById('Cases-'+i) != null && document.getElementById('Cases-'+i).classList.contains('rendered')){
    return;
}
if (i == 'Бесплатные'){
if (document.getElementById('Cases-'+i) != null)document.getElementById('Cases-'+i).innerHTML = document.getElementById('Cases-'+i).innerHTML + `<a class="case-item" href="/freecase?caseId=`+name+`"><img src="`+image+`" alt="Case"><h4>`+name+`</h4><div class="blue-button overall">`+price+`  <span>руб. </span></div></a>`;
}else {
  if (document.getElementById('Cases-'+i) != null)document.getElementById('Cases-'+i).innerHTML = document.getElementById('Cases-'+i).innerHTML + `<a class="case-item" href="/case?caseId=`+name+`"><img src="`+image+`" alt="Case"><h4>`+name+`</h4><div class="blue-button overall">`+price+`  <span>руб. </span></div></a>`;
}
}
    return (
        <>
        <div style={{backgroundImage: 'url(https://wondercase.net/assets/img/bg.png)', width: '60vw', backgroundRepeat: 'no-repeat', opacity: '0.03', height: '60vw', backgroundSize: '100%',backgroundPosition: 'center', top: '0px'}}  className="bg-img-rem bg-img" />

<div className="content">
  <div className="cases-block">
    <div className='selector-available'>
      <p>Доступные кейсы</p>
      <div id='toggle-available' onClick={() => {
        document.getElementById('toggle-available').classList.toggle('selected');
        if (document.getElementById('toggle-available').classList.contains('selected')){
          var listo = document.querySelectorAll('.case-item');
var bal =         Number( document.getElementById('balance').textContent.replace('руб.',''));
for (var i = 0; i < listo.length;i++){
 if (Number(listo[i].getElementsByTagName('div')[0].textContent.replace('руб.','')) > bal){
listo[i].classList.add('hidden-case');
 }
}         
        }else {
          var listo = document.querySelectorAll('.hidden-case');
for (var i = 0; i < listo.length;i++){
 listo[i].classList.remove('hidden-case');
}          
        }
      }}>
        
      </div>
    </div>
    <h1 className="cases-title">Список кейсов</h1>
    <div className="cases-subblock">

  </div>
  </div>
</div>

        </>
    )
}
/*
<CasesBlock category="Стандартные__Аниме__Марки машин__Звания__Криптовалюта__Социальные сети__Пользовательские__Оружейные__Кейсы из CS:GO"/> 
 
       <h2>Коллекция</h2>
       
      <div className="cases-subblock-row">
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
      </div>
      <h2>Коллекция</h2>
      <div className="cases-subblock-row">
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
      </div>
      <h2>Коллекция</h2>
      <div className="cases-subblock-row">
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
        <Link to="/case?caseId=International" className="case-item" onclick="document.location.href=&quot;https://wondercase.net/case&quot;;">
          <img src="/assets/img/TeamSpiritTI.webp" alt="TeamSpirit" />
          <h4>The International</h4>
          <a href className="blue-button overall">4 999  <span>₽</span></a>
        </Link>
      </div> */
export default Main;