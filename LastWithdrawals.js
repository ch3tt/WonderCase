import axios from "axios";
import { render } from "react-dom";
export const LastDepos = () => {
  var did = false;
  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return format0(t.getDay())+'.'+format0(t.getMonth())+'.'+t.getFullYear()+' '+format0(t.getHours())+':'+format0(t.getMinutes());
}
function format0(s) {
  s = s+'';
if (s.length == 1){
  s = '0'+s;
}
return s;
}
  function payment (date, id, sum, status, sc, type) {
    if (document.querySelector('.table').classList.contains('rendered')){
      return;
    }
    sum = sum + ' ';
    if (type == 0){
      type = 'Криптовалюта';
    }else if (type == 1){
      type = 'Банковская карта';
    }else if (type ==2) {
      type = 'Qiwi';
    } else if (type ==2) {
      type = 'Скины';
    }
    if (status == 2 || status == 'Успешно'){
sc = 'sc';
status = 'Успешно';
    }else {
      if (status == 0){
        status = 'Ожидание';
      }
    }
  
    document.querySelector('.table').innerHTML = document.querySelector('.table').innerHTML + '<nav><div> <h6>'+id+'</h6> </div><div> <h6>'+date+'</h6> </div><div> <h6>'+type+'</h6> </div><div> <h6>'+sum+'₽</h6> </div><div> <h6 class='+sc+'>'+status+'</h6> </div></nav>';
  }
    axios.get('https://wondercase.net/last10Wd.php').then ((response) => {
      if (did)return;
         var ll = response.data;
        console.log('do');
        for (var i = 0; i < ll.length; i++){
          payment(toDateTime(ll[i].date)+'',ll[i].id,ll[i].sum,ll[i].status,'',ll[i].type);
        }
        document.querySelector('.table').classList.add('rendered');
        console.log('did');
    did = true;
        });
    return (
<>

</>
    )
      
}


      export default LastDepos;