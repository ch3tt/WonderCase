import LastWithdrawals from "./LastWithdrawals";


function Withdrawals (){

    return (
        <>
<div className="content live">
  <h1>История выводов</h1>
  <div className="table">
    <div>
      <div> <h6>ID предмета</h6> </div>
      <div> <h6>Время обмена</h6> </div>
      <div> <h6>Название предмета</h6> </div>
      <div> <h6>Стоимость предмета</h6> </div>
      <div> <h6>Статус</h6> </div>
    </div>
<LastWithdrawals/>
  </div>
</div>

        </>
    )
}
export default Withdrawals;