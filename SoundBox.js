import axios from "axios";

function SoundBox () {
  if (document.getElementById('soundP') != null && document.getElementById('soundP').value == 50){
    axios.get('https://wondercase.net/getSB.php').then((response) => {
      console.log(response.data+'lll');
    document.getElementById('soundP').value = Number(response.data+'');
    });
    }
return (
    <>
    <div className="soundBox"> 
    <div>
<svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" style={{enableBackground: 'new 0 0 32 32'}} xmlSpace="preserve">
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.linesandangles_een{fill:#111918;}\n" }} />
  <path className="linesandangles_een" d="M4,11v10h5l10,6V5L9,11H4z M17,8.532v14.935L9.554,19H6v-6h3.554L17,8.532z M21.657,21.657
	l-1.414-1.414c2.339-2.34,2.339-6.146,0-8.486l1.414-1.414C24.775,13.462,24.775,18.538,21.657,21.657z M24.485,24.485l-1.414-1.414
	c3.899-3.899,3.899-10.243,0-14.143l1.414-1.414C29.164,12.193,29.164,19.807,24.485,24.485z" />
</svg>
</div>

            <input id="soundP"  type="range" min={1} max={100} orient="vertical" onInput={()=> {
axios.get('https://wondercase.net/setSB.php?val='+document.getElementById('soundP').value).then((response) => {
});
            }} />
            
    </div>
    </>
);

}

export default SoundBox;