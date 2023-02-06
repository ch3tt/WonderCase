import axios from "axios";

export const Top  = ({top1img,top1price,top2img,top2price,top3img,top3price,top4img,top1color,top2color,top3color,top4color,top5color,top4price,top5img,top5price,top1user,top2user,top3user,top4user,top5user}) => { 
  axios.get('https://wondercase.net/getTop.php').then((response) => {
var text = response.data+'';
  });
    return ( 
        <>
<div className="content top">
  <h1>Топ пользователей</h1>
  <h4>Окрывай больше кейсов и попади в топ!</h4>
  <div style={{position: 'relative', maxWidth: 874, width: '100%'}}>
  </div>
  <div className="top-block">
    <div>
      <h5><span>4</span> место 
      </h5>
      <span>{top4user}</span>
      <div className={top4color}>
        <img src={top4img} alt="" />
      </div>
      <nav>
        <span>{top4price} ₽</span>
      </nav>
    </div>
    <div>
      <h5><span>2</span> место 
      </h5>  <span>{top2user}</span>
      <div className={top2color}>
        <img src={top2img} alt="" />
      </div>
      <nav>
        <span>{top2price} ₽</span>
      </nav>
    </div>
    <div>
      <h5><span>1</span> место <svg width={30} height={34} viewBox="0 0 30 34" fill="none" xmlns="https://www.w3.org/2000/svg">
          <path d="M23.6883 3.07765V0L6.30625 0V3.07765L0.359375 3.07765L0.359375 7.64201C0.359375 10.9211 3.02713 13.5889 6.30625 13.5889H6.41046C6.95929 17.1528 9.67568 19.9943 13.1632 20.7446V25.6702H11.0304C10.3704 25.6702 9.84241 26.2052 9.84241 26.8582V28.4213H8.02223V34H21.9793L21.9793 28.4213H20.1591V26.8582C20.1591 26.1982 19.6242 25.6702 18.9711 25.6702H16.8383V20.7446C20.3328 19.9943 23.0422 17.1459 23.5911 13.5889H23.6953C26.9744 13.5889 29.6422 10.9211 29.6422 7.64201V3.07765L23.6883 3.07765ZM6.30625 10.5807C4.68753 10.5807 3.36755 9.26073 3.36755 7.64201V6.08582H6.30625L6.30625 10.5807ZM15.5044 11.4144L13.976 12.9289L12.4615 11.4005L11.0026 9.92767L12.531 8.41316L13.9899 9.88598L17.4844 6.41234L18.9989 7.94074L15.5044 11.4144ZM26.6201 7.64201C26.6201 9.26073 25.3071 10.5807 23.6883 10.5807V6.08582L26.6201 6.08582V7.64201Z" fill="#FDB600" />
        </svg>
      </h5>  <span>{top1user}</span>
      <div className={top1color}>
        <img src={top1img} alt="" />
      </div>
      <nav>
        <span>{top1price} ₽</span>
      </nav>
    </div>
    <div>
      <h5><span>3</span> место 
      </h5>  <span>{top3user}</span>
      <div className={top3color}>
        <img src={top3img} alt="" />
      </div>
      <nav>
        <span>{top3price} ₽</span>
      </nav>
    </div>
    <div>
      <h5><span>5</span> место 
      </h5>  <span>{top5user}</span>
      <div className={top5color}>
        <img src={top5img} alt="" />
      </div>
      <nav>
        <span>{top5price} ₽</span>
      </nav>
    </div>
  </div>
</div>

        </>
    )
}
export default Top;