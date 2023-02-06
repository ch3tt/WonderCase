
import { render } from "react-dom";
export const CasesBlock = () => {
  

 /*if (document.querySelector('.cases-block') != null && document.querySelector('.cases-block').classList.contains('rendered')) {
return;
  } */


  /*  if (document.querySelector('.cases-block') != null && document.querySelector('.cases-block').classList.contains('rendered')){
return;
    }
    var titles = [];
    var prices = [];
    var images = [];
    var leng = [0,0,0,0,0,0,0,0,0];

    var did = 0; 
    console.log('splits length' + splits.length);

for (var i = 0; i < splits.length; i++){
console.log('https://wondercase.net/getCases.php?collection='+splits[i]+'&i='+i);
    axios.get('https://wondercase.net/getCases.php?collection='+splits[i]+'&i='+i).then ((response) => {
      var ll = response.data;
      console.log(ll);
var ir = Number(ll[0]+'');
      var split = splits[ir];
console.log('"'+ir+'" is i value');
leng[ir] = ll.length-1;
      console.log(split + '-then');
     /*  leng.splice(leng.length-1,0,0);
      console.log(leng[leng.length-1]);
      console.log(leng.length);

        for (var inf = 1; inf < ll.length; inf++){
        //  payment(ll[inf].title,ll[inf].price,ll[inf].image,splits[i]);
          titles.push(ll[inf].title);
          console.log(ll[inf].title);
          console.log(ll[inf].price);
          console.log(ll[inf].image);
          prices.push(ll[inf].price);
          images.push(ll[inf].image);
        leng[leng.length-1] = leng[leng.length-1] + 1;   
        }
        console.log('leng['+leng.length-1+']'+leng[leng.length-1]);
          console.log(images);
          console.log(prices);
          console.log(titles);

          did++;
          console.log(did);
          if (did == splits.length){
            init();
          }
        });

      }
      function init () {
      var spend = 0;
     for (var i = 0; i < splits.length; i++){
      console.log('___222___'+i);
      if (document.getElementById('Cases-'+splits[i]) == null && document.querySelector('.cases-subblock') != null){
        document.querySelector('.cases-subblock').innerHTML = document.querySelector('.cases-subblock').innerHTML + '<h2>'+splits[i]+'</h2><div class="cases-subblock-row" id="Cases-'+splits[i]+'"></div>';
       
      }
console.log('leng['+i+']'+leng[i])
      for (var id = 0; id < leng[i];id++){
        console.log('___333___'+id);
  payment(titles[spend+id],images[spend+id],prices[spend+id],splits[i]);
      }
      spend+=leng[i];
      
    } 
   
          }*/
  return (
<>

</>
    )
      

}


      export default CasesBlock;