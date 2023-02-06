import LastDepos from "./LastDepos";


function History (){

    return (
        <>
<div className="content live">
  <h1>История пополнений</h1>
  <div className="table">
    <div>
      <div> <h6>ID платежа</h6> </div>
      <div> <h6>Время платежа</h6> </div>
      <div> <h6>Метод пополнения</h6> </div>
      <div> <h6>Сумма</h6> </div>
      <div> <h6>Статус</h6> </div>
    </div>
<LastDepos/>
  </div>
</div>

        </>
    )
}
export default History;