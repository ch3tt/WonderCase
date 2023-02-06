import './assets/css/global.css';
import Header from './Header';
import Footer from './Footer';
import Agreement from './Agreement';
import Bonus from './Bonus';
import Case from './Case';
import FreeCase from './FreeCase';
import Contract from './Contract';
import Faq from './Faq';
import History from './History';
import Live from './Live';
import Profile from './Profile';
import Withdrawals from './withdrawals';
import Refferal from './Refferal';
import Top from './Top';
import Upgrade from './Upgrade';
import Main from './Main';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import DepositTab from './DepositTab';
import ChangeItem from './ChangeItem';
import React from 'react';
import SoundBox from './SoundBox';
class App extends React.Component {
  
constructor(props){

  super(props);
  this.state={
    avatar: '',
    name: '123',
    ref_code: 'Код',
    steamid: '',
    filled: '0',
    level: '0',
    
    ref_amount: '0',
    xp_level: '0',
    xp_level_needed: '0',
    sum_depos: '0 руб.',
    sum_earnings: '0 руб.',
    ref_bal: '0 руб.',
    balance: '0 руб.',
    classes: 'header__container not_auth',
    contracts_made: '0',
    contracts: '0',
    tradeLink: 'https://steamcommunity.com/tradeoffer/new/?partner=xxxxxxxx&token=xxxxxxxx',
    registered: '01.01.2022',
    upgrade_fail: '0',
    upgrade_success: '0',
cases: '0',
json: [],
online: '0',
cases_open: '0',
users: '0',
  };
  
}
  componentDidMount(){  

    axios.get('https://wondercase.net/dashboard.php').then((response) => {
  var ll = response.data.split("___");
  if (!(response.data === 'err')){
    this.setState({avatar: ll[0]});
    this.setState({steamid: ll[1]});
    this.setState({name: ll[2]});
    this.setState({classes: 'header__container'});
    axios.get('https://wondercase.net/stats.php').then((response) => {
      var ll = response.data.split("___");
      if (!(response.data === 'err' || response.data==='err_bd')){
        this.setState({contracts: ll[0]});
        this.setState({cases: ll[1]});
        this.setState({upgrade_fail: ll[2]});
        this.setState({upgrade_success: ll[3]});
        this.setState({registered: ll[4]});
        this.setState({tradeLink: ll[5]});
    }
    }).catch((error) => {
      console.log(error);
    });
    axios.get('https://wondercase.net/ip-l.php').then((response) => {

    });

}
}).catch((error) => {
  console.log(error);
});
var url = window.location.href;
if (url.includes('/ref/')){
  var ref = url.replace('https://wondercase.net/ref/','');
  axios.get('https://wondercase.net/makeYouRef.php?code='+ref).then((response) => {

  });
}
axios.get('https://wondercase.net/isBanned.php').then((response) => {
  if (response.data+'' === '1'){
    window.location.href = 'https://wondercase.net/steam_logout.php';
  }
})
axios.get('https://wondercase.net/getLastUserDrops.php').then((response) => {
    this.setState({json: response.data});
    });
    axios.get('https://wondercase.net/getRefData.php').then((response) => {
  var text = response.data+'';
  var splits = text.split('___');
   this.setState({ref_amount: splits[0]});
   this.setState({sum_depos: splits[1] + ' руб.'});
   this.setState({sum_earnings: splits[2]+' руб.'});
   this.setState({ref_bal: splits[3]+' руб.'});
   var levels = [0,5000,10000,50000,100000];
   for (var i = 0; i < levels.length; i++){
    
  
      if (i == 4){
      this.setState({filled: 'linear-gradient('+270+'deg,transparent 50%,#66fcf1 0),linear-gradient(90deg,transparent 50%,#66fcf1 0), linear-gradient(90deg,#505357 50%,#505357 0)'});
      this.setState({level: 4});
      this.setState({xp_level_needed:'MAX'});
      this.setState({xp_level:(Number(splits[1])-100000)});
      }else {
        if (Number(splits[1]) < levels[i]){
          this.setState({level: i});
      
        var deg = (((Number(splits[1]) - levels[i]) / (levels[i+1]-levels[i]))*360);
        this.setState({xp_level_needed: levels[i]});
        this.setState({xp_level:(Number(splits[1])-levels[i-1])});
        if (deg > 180){
         this.setState({filled: 'linear-gradient('+(deg-90)+'deg,transparent 50%,#66fcf1 0),linear-gradient(90deg,transparent 50%,#66fcf1 0), linear-gradient(90deg,#505357 50%,#505357 0)'});
        }else {
          this.setState({filled: 'linear-gradient(270deg, transparent 50%, #505357 0), linear-gradient('+(deg-90)+'deg, transparent 50%, #66fcf1 0), linear-gradient(90deg,#505357 50%,#505357 0)'});
        }
        break;
      }
      
    }
   }
});
   axios.get('https://wondercase.net/getRefCode.php').then((response) => {
    if (response.data+'' == '#######Not_found'){
      this.setState({ref_code: 'Код'});
    }else this.setState({ref_code: response.data+''});
   });
    axios.get('https://wondercase.net/balance.php').then((response) => {
      if (!(response.data === 'err')){
        this.setState({balance: response.data + ' руб.'});
    }
    });



axios.get('https://wondercase.net/website_stats.php').then((response) => {
  var ll = response.data.split("___");
  if (!(response.data === 'err' || response.data==='err_bd')){
    this.setState({cases_open: ll[0]});
    this.setState({users: 1000+Number(ll[1])});
    this.setState({contracts_made: ll[2]});
}
}).catch((error) => {
  console.log(error);
});
axios.get('https://wondercase.net/requestOnline.php').then((response) => {
this.setState({online:response.data+70});
}).catch((error) => {
  console.log(error);
});

  }
  render(){
  return (
<>

<ChangeItem/>


<div className='alert-container'></div>
<div className="mm_main">
<Header  json={this.state.json} username={this.state.name} avatar={this.state.avatar} balance={this.state.balance} classes={this.state.classes}/>

  <img src="/assets/img/usp-bg.png" style={{width: '454.42px', height: '186.72px', left: '-80.41px', top: '190.45px', transform: 'rotate(112.5deg)'}} alt="" className="bg-img" />
  <img src="/assets/img/ct-bg.png" style={{width: 437, height: 590, left: '-105px', top: 868, transform: 'rotate(45deg)'}} alt="" className="bg-img no-v" />
  <img src="/assets/img/aug-bg.png" style={{right: '-80px', width: 250, top: 350, transform: 'rotate(-49deg)'}} alt="" className="bg-img" />
  <img src="/assets/img/bloodsport-bg.png" style={{top: 1400, right: '-160px', transform: 'rotate(-60deg)', width: 400}} className="bg-img" alt="" />  
  <img src="/assets/img/bloodsport-bg.png" style={{top: 2400, left: '-160px', transform: 'rotate(120deg)', width: 400}} className="bg-img" alt="" />
  {/*
Main content
*/}

<Routes>
<Route path="/" element={<Main />} />
    <Route path="/agreement" element={<Agreement />} />
    <Route path="/case" element={<Case/>}>

      </Route>
      <Route path="/freecase" element={<FreeCase/>}>      </Route>
    <Route path="/contract" element={<Contract />} />
    <Route path="/upgrade" element={<Upgrade />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/history" element={<History />} />
    <Route path="/withdrawals" element={<Withdrawals />} />
    <Route path="/live" element={<Live />} />
    <Route path="/profile" element={<Profile cases={this.state.cases}  tradeLink={this.state.tradeLink} upgradeFail={this.state.upgrade_fail} upgradeSuccess={this.state.upgrade_success} registered={this.state.registered} contracts={this.state.contracts} avatar={this.state.avatar} name={this.state.name} />} />
    <Route path="/referral"  element={<Refferal xp_level={this.state.xp_level} xp_level_needed={this.state.xp_level_needed} filled={this.state.filled} level={this.state.level} ref_amount={this.state.ref_amount} ref_bal={this.state.ref_bal} sum_depos={this.state.sum_depos} sum_earnings={this.state.sum_earnings} ref_code={this.state.ref_code}/>}  />
    <Route path="/top" element={<Top />} />
    <Route path="/bonus" element={<Bonus />}/>
 <Route path="/deposit" element={<DepositTab/>}/>
    <Route path="*" element={<Main />} />
</Routes>
<Footer online={this.state.online} case_stats={this.state.cases_open} contracts_stats={this.state.contracts_made} users_stats={this.state.users} />
  {/*
Main content
*/}
</div>

</>
  );
}
}

export default App;
