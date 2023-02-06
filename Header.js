import { Link } from 'react-router-dom';
import Drops from './Drops';
export const Header = ({ username, balance, avatar, classes, json}) => {
    return (
        <>

<div>

  <nav className="top-drops">
    <div className='top-drops--'>
      <div id='--n-n' className='active-o' onClick={() => {
        document.querySelector('.active-o').classList.remove('active-o');
        document.getElementById('--n-n').classList.add('active-o');
        document.getElementById('44k').classList.add('top');
        }}> 
        <p>Топ</p>
      </div>
      <div id='--n-o' onClick={() => {
        document.querySelector('.active-o').classList.remove('active-o');
        document.getElementById('--n-o').classList.add('active-o');
        document.getElementById('44k').classList.remove('top');
        }}>
        <p>Все</p>
      </div>
    </div>
<div id='44k' className='kk44 top'>
<Drops json={json}/>
</div>
  </nav>
  <header id="header" className="header">
    <div className={classes}>
      <div id='header-pp-m'>
        <nav onClick={() => {
          document.getElementById('header-pp-m').classList.remove('open');
          
        }} style={{position: 'absolute', top: '12px', right: '52px', width: '24px', height: '24px'}}>
<svg style={{fill: 'white'}} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="95.939px" height="95.939px" viewBox="0 0 95.939 95.939" xmlSpace="preserve">
  <g>
    <path d="M62.819,47.97l32.533-32.534c0.781-0.781,0.781-2.047,0-2.828L83.333,0.586C82.958,0.211,82.448,0,81.919,0
		c-0.53,0-1.039,0.211-1.414,0.586L47.97,33.121L15.435,0.586c-0.75-0.75-2.078-0.75-2.828,0L0.587,12.608
		c-0.781,0.781-0.781,2.047,0,2.828L33.121,47.97L0.587,80.504c-0.781,0.781-0.781,2.047,0,2.828l12.02,12.021
		c0.375,0.375,0.884,0.586,1.414,0.586c0.53,0,1.039-0.211,1.414-0.586L47.97,62.818l32.535,32.535
		c0.375,0.375,0.884,0.586,1.414,0.586c0.529,0,1.039-0.211,1.414-0.586l12.02-12.021c0.781-0.781,0.781-2.048,0-2.828L62.819,47.97
		z" />
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


        </nav>
        <div>
        <a onClick={() => {    document.getElementById('header-pp-m').classList.remove('open')}} href="/" className="">
          <svg version="1.1" id="Ebene_1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="22px" height="17px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
            <g>
              <path d="M62,16H42.727C42.064,13.082,39.791,8,32,8s-10.064,5.082-10.727,8H2c-1.104,0-2,0.896-2,2v36c0,1.104,0.896,2,2,2h60
  c1.104,0,2-0.896,2-2V18C64,16.896,63.104,16,62,16z M32,12c4.335,0,5.98,2.244,6.608,4H25.388C26.018,14.253,27.669,12,32,12z
   M60,20v8H4v-8H60z M29,32h6v2h-6V32z M4,52V32h21v4c0,1.104,0.896,2,2,2h10c1.104,0,2-0.896,2-2v-4h21v20H4z" />
            </g>
          </svg>
          <p>Кейсы</p>
        </a>
        <Link onClick={() => {    document.getElementById('header-pp-m').classList.remove('open')}}  to="/upgrade" className="">
          <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="https://www.w3.org/2000/svg">
            <path d="M14.2857 2.125H12.5714V0.398438C12.5714 0.1784 12.3795 0 12.1429 0H10.7143C10.4776 0 10.2857 0.1784 10.2857 0.398438V2.125H5.71429V0.398438C5.71429 0.1784 5.52239 0 5.28571 0H3.85714C3.62046 0 3.42857 0.1784 3.42857 0.398438V2.125H1.71429C0.7675 2.125 0 2.83854 0 3.71875V15.4062C0 16.2865 0.7675 17 1.71429 17H14.2857C15.2325 17 16 16.2865 16 15.4062V3.71875C16 2.83854 15.2325 2.125 14.2857 2.125ZM14.0714 15.4062H1.92857C1.87174 15.4062 1.81723 15.3853 1.77705 15.3479C1.73686 15.3105 1.71429 15.2599 1.71429 15.207V5.3125H14.2857V15.207C14.2857 15.2599 14.2631 15.3105 14.223 15.3479C14.1828 15.3853 14.1283 15.4062 14.0714 15.4062ZM12.184 8.74404L7.1015 13.4313C6.93346 13.5863 6.66211 13.5853 6.49539 13.429L3.81357 10.9156C3.64689 10.7594 3.64796 10.5071 3.816 10.3521L4.62739 9.60384C4.79543 9.44888 5.06679 9.44987 5.23346 9.60613L6.80861 11.0824L10.7755 7.42402C10.9435 7.26906 11.2149 7.27006 11.3816 7.42628L12.1864 8.18059C12.3531 8.33681 12.352 8.58908 12.184 8.74404Z" fill="white" />
          </svg>
          <p>Апгрейд</p>
        </Link>
        <Link onClick={() => {    document.getElementById('header-pp-m').classList.remove('open')}}  to="/contract" className="">
          <svg version="1.1" id="Capa_1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 502.676 502.676" style={{enableBackground: 'new 0 0 502.676 502.676'}} xmlSpace="preserve">
            <g>
              <g>
                <g>
                  <rect x="71.313" y="187.057" style={{fill: 'white'}} width="254.039" height="25.432" />
                  <rect x="71.313" y="124.718" style={{fill: 'white'}} width="254.039" height="25.454" />
                  <path style={{fill: 'white'}} d="M497.293,127.457l-42.02-36.347c-5.759-5.004-13.935-5.112-18.141-0.302l-26.316,30.35
l63.094,54.639l26.316-30.372C504.433,140.637,503.074,132.418,497.293,127.457z" />
                  <path style={{fill: 'white'}} d="M403.913,129.118l-8.52,9.858V39.901H0v422.874h395.392V266.373l71.529-82.551L403.913,129.118z
 M364.827,432.748H30.587V81.188h334.239v93.056l-73.707,85.097H71.313v25.432h197.782l-2.761,3.192l62.944,54.66l35.527-41.006
L364.827,432.748L364.827,432.748z" />
                  <polygon style={{fill: 'white'}} points="239.608,376.988 242.801,379.814 322.203,350.866 259.173,296.184 			" />
                  <circle style={{fill: 'white'}} cx="123.277" cy="366.828" r="40.359" />
                </g>
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
          <p>Контракт</p>
        </Link>
      <Link onClick={() => {    document.getElementById('header-pp-m').classList.remove('open')}}  to="/bonus" className="">
<svg version="1.1" id="Layer_1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 299.34 299.34" style={{enableBackground: 'new 0 0 299.34 299.34'}} xmlSpace="preserve">
  <g>
    <g>
      <path d="M282.868,56.803H204.27l6.877-6.158c0.505-0.452,0.957-0.958,1.35-1.509c10.05-14.091,6.762-33.731-7.331-43.781
			c-6.72-4.792-15.185-6.475-23.225-4.612c-8.041,1.861-14.906,7.09-18.837,14.345l-13.434,24.799l-13.434-24.799
			c-3.931-7.256-10.797-12.486-18.837-14.346c-8.042-1.862-16.507-0.18-23.225,4.612c-14.091,10.05-17.38,29.69-7.331,43.781
			c0.394,0.552,0.847,1.058,1.35,1.509l6.877,6.158H16.474c-5.07,0-9.18,4.11-9.18,9.18v58.204c0,5.07,4.11,9.18,9.18,9.18h2.432
			V290.16c0,5.07,4.11,9.18,9.18,9.18h243.17c5.07,0,9.18-4.11,9.18-9.18V133.366h2.432c5.07,0,9.18-4.11,9.18-9.18V65.983
			C292.048,60.913,287.937,56.803,282.868,56.803z M179.248,23.833c1.446-2.671,3.873-4.519,6.833-5.204
			c0.802-0.186,1.605-0.277,2.401-0.277c2.142,0,4.221,0.664,6.024,1.95c2.834,2.021,4.71,5.023,5.285,8.457
			c0.525,3.14-0.096,6.293-1.751,8.977l-21.295,19.067h-15.357L179.248,23.833z M99.549,28.76c0.574-3.432,2.451-6.436,5.286-8.457
			c2.473-1.764,5.463-2.359,8.425-1.673c2.959,0.684,5.386,2.533,6.833,5.204l17.86,32.969h-15.357l-21.296-19.067
			C99.645,35.053,99.024,31.898,99.549,28.76z M115.508,280.981H37.265V133.367h78.243V280.981z M165.472,280.981h-31.604V133.367
			h31.604V280.981z M262.076,280.981h-78.243V133.367h78.243V280.981z M273.688,115.007H25.653V75.163h248.034V115.007z" />
    </g>
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

   <p>Бонусы</p>
        </Link>
      <Link onClick={() => {    document.getElementById('header-pp-m').classList.remove('open')}}  to="/referral" className="">
      <svg version="1.1" id="Capa_1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 784.299 784.3" style={{enableBackground: 'new 0 0 784.299 784.3'}} xmlSpace="preserve">
  <g>
    <g>
      <path d="M582.05,374.8L582.05,374.8C582.05,374.7,582.05,374.7,582.05,374.8c-0.301-1.8-0.7-3.5-1.2-5.1
			c-4.2-16-13.601-45-17.9-57.9c-0.5-2.3-1.2-4.5-2.2-6.5v-0.1l0,0c-2.6-5.6-6.899-10.4-12.199-13.5l0,0c-0.301-0.2-1-0.6-1.9-1
			c-0.4-0.2-0.7-0.4-1.1-0.5c-10.4-4.9-42.4-17.7-42.4-17.7l0,0c-16-6.9-32.6-12.9-49.5-18.9l0,0l0,0l0,0l0,0
			c-3,12.6-31.7,96.1-36.3,107.6l-3.601-77.6c1.2-1.8,2.101-3.9,3-5.9l12-23.7c-8.399,7-21.1,11.5-35.199,11.5
			c-13.801,0-26.2-4.3-34.601-11l11.7,23.2c1,2,1.8,4.1,3,5.9l-3.6,77.6c-4.601-11.6-33.301-95.1-36.301-107.6l0,0l0,0l0,0l0,0
			c-16.899,6-33.5,11.9-49.5,18.9l0,0c0,0-32,12.8-42.4,17.7c-0.4,0.2-0.7,0.3-1.1,0.5c-0.9,0.4-1.6,0.8-1.9,1l0,0
			c-5.3,3.2-9.6,7.9-12.2,13.5l0,0c0,0,0,0,0,0.1c-1,2.1-1.7,4.2-2.2,6.5c-4.3,13-13.8,42-17.9,57.9c-0.6,1.6-1,3.3-1.2,5.1l0,0l0,0
			c-0.2,1.5-0.4,3.1-0.4,4.7c0,17.1,13.8,30.899,30.9,30.899h29.5c42.2,0,84.5,0,126.7,0c0.6,0,1.1,0,1.699,0l0,0
			c0.601,0,1.101,0,1.7,0c42.2,0,84.5,0,126.7,0h29.5c17.1,0,30.9-13.8,30.9-30.899C582.45,377.9,582.35,376.3,582.05,374.8z" />
      <path d="M474.35,109.8c0-5.5,1.1-25.3,1.1-29.8c0-44.2-35.8-80-80-80l0,0l0,0h-0.1h-0.101l0,0l0,0c-0.5,0-1,0-1.5,0s-1,0-1.5,0
			l0,0l0,0h-0.1h-0.1l0,0l0,0c-44.2,0-80,35.8-80,80c0,4.5,1.1,24.3,1.1,29.8c-2,0.1-19.8-4.2-17.9,17.2
			c4.1,45.5,21.4,36.7,21.9,36.7c8.5,27.4,21.8,44.9,34.8,56.1c20.3,17.4,39.9,19.3,40.3,19.3c0.601,0,1.101,0,1.7,0l0,0l0,0
			c0.5,0,1.101,0,1.7,0c0.3,0,19.9-1.9,40-19.1c13.1-11.1,26.4-28.7,35-56.3c0.5,0,17.9,8.8,21.9-36.7
			C494.15,105.6,476.25,109.9,474.35,109.8z" />
    </g>
    <circle cx="164.05" cy="697.3" r="85.1" />
    <circle cx="391.75" cy="699.2" r="85.1" />
    <circle cx="620.25" cy="699.2" r="85.1" />
    <path d="M231.75,536.2h131v60h58v-60h131c32.5,0,59,26.5,59,59h58c0-64.5-52.5-117-117-117h-131v-52h-58v52h-131
		c-64.5,0-117,52.5-117,117h58C172.75,562.7,199.15,536.2,231.75,536.2z" />
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

 <p>Рефералы</p>
        </Link>
        </div>
      </div>
      <div className="popup_dd" onClick={() => {document.getElementById('header-pp-m').classList.add('open')}}>
        <div />
        <div />
        <div />
      </div>
      <Link to="/" className="header__logo header__absolute">
        <img src="/assets/img/logo.png" alt="1231231" />
      </Link>
      <div className="header__links ">
      <Link to="/" className="header__links__item ">

          <p>Кейсы</p>
          <img src='/assets/img/fire_logo.png'/>
        </Link>
        <Link to="/upgrade" className="header__links__item">
        
          <p>Апгрейд</p>
          <img src='/assets/img/upgrade_logo.png'/>
        </Link>
        <Link to="/contract" className="header__links__item">
         
          <p>Контракт</p>
          <img src='/assets/img/contract_logo.png'/>
        </Link>
      <Link to="/bonus" className="header__links__item selected">


   <p>Бонусы</p>
   <img src='/assets/img/bonus_logo.png'/>
        </Link>
      <Link to="/referral" className="header__links__item selected">


 <p>Рефералы</p>
 <img src='/assets/img/referral_logo.png'/>
        </Link>
        
    
    
      </div>
      <a onClick={() => {
        window.location.href= 'https://wondercase.net/openSteam.php?href='+window.location.href;
      }} type='submit' className="header__steam__auth header__absolute">
<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="#66FCF1" d="M0.41125 12.9163C1.03849 14.9668 2.30748 16.7618 4.03142 18.037C5.75536 19.3123 7.84316 20.0004 9.9875 20C15.5175 20 20 15.5225 20 10C20 4.4775 15.5175 1.53684e-07 9.98875 1.53684e-07C7.45034 -0.000981825 5.00641 0.962698 3.15182 2.69591C1.29723 4.42912 0.17058 6.80233 0 9.335L0.00375 9.3425L5.38375 11.5538C5.86898 11.2325 6.44367 11.0736 7.025 11.1L9.475 7.545L9.47375 7.495C9.47474 6.4867 9.87564 5.51997 10.5885 4.80688C11.3014 4.09379 12.268 3.69257 13.2763 3.69125C14.2845 3.69257 15.2511 4.09379 15.964 4.80688C16.6769 5.51997 17.0778 6.4867 17.0788 7.495C17.0784 8.00166 16.9769 8.50315 16.7803 8.97011C16.5837 9.43706 16.2959 9.8601 15.9337 10.2144C15.5716 10.5688 15.1424 10.8473 14.6713 11.0337C14.2001 11.2201 13.6965 11.3106 13.19 11.3L9.685 13.8C9.69689 14.2631 9.59282 14.7218 9.38226 15.1344C9.17169 15.547 8.86131 15.9004 8.47935 16.1625C8.09739 16.4246 7.65596 16.5871 7.19522 16.6351C6.73448 16.6831 6.26905 16.6152 5.84125 16.4375C5.43065 16.2664 5.06728 15.999 4.78183 15.6578C4.49638 15.3167 4.29724 14.9118 4.20125 14.4775L0.4125 12.9163H0.41125Z" />
</svg>



        <p>Войти</p>
      </a>

      <div className='header__profile'>
<div>
  <p>{username}</p>
  <div>
    <Link to="/Deposit" >
<svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="https://www.w3.org/2000/svg">
  <rect y={4} width={10} height={2} fill="#66FCF1" />
  <rect x={4} y={10} width={10} height={2} transform="rotate(-90 4 10)" fill="#66FCF1" />
</svg>
</Link>
  <p id='balance'>{balance}</p>
  </div>
</div>
<Link to="/Profile">
  <img src={avatar}></img>
</Link>
<a href='/steam_logout.php'>
<svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.875 6.53125V5.04688C11.875 4.65319 11.7186 4.27564 11.4402 3.99726C11.1619 3.71889 10.7843 3.5625 10.3906 3.5625H3.26562C2.87194 3.5625 2.49439 3.71889 2.21601 3.99726C1.93764 4.27564 1.78125 4.65319 1.78125 5.04688V13.9531C1.78125 14.3468 1.93764 14.7244 2.21601 15.0027C2.49439 15.2811 2.87194 15.4375 3.26562 15.4375H10.3906C10.7843 15.4375 11.1619 15.2811 11.4402 15.0027C11.7186 14.7244 11.875 14.3468 11.875 13.9531V12.4688M14.25 6.53125L17.2188 9.5L14.25 12.4688M7.08789 9.5H17.2188" stroke="#FF7474" strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
</svg>


</a>
      </div>
    </div>
  </header>
</div>

        </>
    );
}
export default Header;