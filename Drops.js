import axios from "axios";

export const Drops = ({json}) => {


    
    return (<>
    
    {json.map(el => (
          <div className={'top-drops__item '+el.color +' '+ el.top }>
        <img src={el.image}/>
        <img src={el.avatar}/>
          <svg width={100} height={74} viewBox="0 0 100 74" fill="none" xmlns="https://www.w3.org/2000/svg">
            <path d="M6.67947 30.3091L5.40541 29.0329L-9.88339 44.3478L-8.60932 45.624L6.67947 30.3091Z" fill="url(#paint0_linear_10_26)" />
            <path d="M73.3461 -10.3006L72.0721 -11.5769L56.7833 3.73802L58.0574 5.01426L73.3461 -10.3006Z" fill="url(#paint1_linear_10_26)" />
            <path opacity="0.5" d="M15.8431 10.3006L14.569 9.02439L4.37646 19.2343L5.65052 20.5106L15.8431 10.3006Z" fill="url(#paint2_linear_10_26)" />
            <path opacity="0.5" d="M44.5626 39.2882L43.2885 38.0119L36.9182 44.3931L38.1922 45.6694L44.5626 39.2882Z" fill="url(#paint3_linear_10_26)" />
            <path opacity="0.5" d="M53.5716 -5.83379L52.2975 -7.11003L45.9272 -0.728824L47.2013 0.547417L53.5716 -5.83379Z" fill="url(#paint4_linear_10_26)" />
            <path opacity="0.5" d="M95.6953 60.9467L94.4213 59.6705L88.0509 66.0517L89.325 67.3279L95.6953 60.9467Z" fill="url(#paint5_linear_10_26)" />
            <path opacity="0.5" d="M100.155 7.81228L98.8805 6.53604L92.5102 12.9172L93.7842 14.1935L100.155 7.81228Z" fill="url(#paint6_linear_10_26)" />
            <path opacity="0.5" d="M84.3115 3.98356L83.0374 2.70732L72.8449 12.9173L74.119 14.1935L84.3115 3.98356Z" fill="url(#paint7_linear_10_26)" />
            <path opacity="0.5" d="M64.4917 28.3494L63.2176 27.0732L53.0251 37.2831L54.2992 38.5593L64.4917 28.3494Z" fill="url(#paint8_linear_10_26)" />
            <path d="M50.9892 64.7754L49.7151 63.4992L19.1375 94.129L20.4116 95.4052L50.9892 64.7754Z" fill="url(#paint9_linear_10_26)" />
            <path d="M98.8805 39.9263L97.6064 38.65L84.8658 51.4125L86.1398 52.6887L98.8805 39.9263Z" fill="url(#paint10_linear_10_26)" />
            <path opacity="0.7" d="M19.1375 53.9274L17.8634 52.6511L-2.52161 73.071L-1.24755 74.3472L19.1375 53.9274Z" fill="url(#paint11_linear_10_26)" />
            <path opacity="0.4" d="M43.9443 2.9075L42.6702 1.63126L15.9148 28.4323L17.1889 29.7086L43.9443 2.9075Z" fill="url(#paint12_linear_10_26)" />
            <defs>
              <linearGradient id="paint0_linear_10_26" x1="6.04244" y1="29.671" x2="-9.27243" y2="44.9598" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8700FF" stopOpacity={0} />
                <stop offset="0.499043" stopColor="#8700FF" stopOpacity="0.7" />
                <stop offset={1} stopColor="#8700FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint1_linear_10_26" x1="72.7091" y1="-10.9388" x2="57.3942" y2="4.35002" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8700FF" stopOpacity={0} />
                <stop offset="0.499043" stopColor="#8700FF" stopOpacity="0.7" />
                <stop offset={1} stopColor="#8700FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint2_linear_10_26" x1="15.206" y1="9.66251" x2="4.9961" y2="19.855" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8700FF" stopOpacity={0} />
                <stop offset="0.499043" stopColor="#8700FF" stopOpacity="0.7" />
                <stop offset={1} stopColor="#8700FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint3_linear_10_26" x1="43.9255" y1="38.65" x2="37.5443" y2="45.0204" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8700FF" stopOpacity={0} />
                <stop offset="0.499043" stopColor="#8700FF" stopOpacity="0.7" />
                <stop offset={1} stopColor="#8700FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint4_linear_10_26" x1="52.9346" y1="-6.47191" x2="46.5534" y2="-0.101588" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8700FF" stopOpacity={0} />
                <stop offset="0.499043" stopColor="#8700FF" stopOpacity="0.7" />
                <stop offset={1} stopColor="#8700FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint5_linear_10_26" x1="95.0583" y1="60.3086" x2="88.6771" y2="66.6789" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8700FF" stopOpacity={0} />
                <stop offset="0.499043" stopColor="#8700FF" stopOpacity="0.7" />
                <stop offset={1} stopColor="#8700FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint6_linear_10_26" x1="99.5175" y1="7.17416" x2="93.1363" y2="13.5445" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8700FF" stopOpacity={0} />
                <stop offset="0.499043" stopColor="#8700FF" stopOpacity="0.7" />
                <stop offset={1} stopColor="#8700FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint7_linear_10_26" x1="83.6745" y1="3.34544" x2="73.4646" y2="13.538" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8700FF" stopOpacity={0} />
                <stop offset="0.499043" stopColor="#8700FF" stopOpacity="0.7" />
                <stop offset={1} stopColor="#8700FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint8_linear_10_26" x1="63.8547" y1="27.7113" x2="53.6448" y2="37.9038" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8700FF" stopOpacity={0} />
                <stop offset="0.499043" stopColor="#8700FF" stopOpacity="0.7" />
                <stop offset={1} stopColor="#8700FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint9_linear_10_26" x1="50.3521" y1="64.1373" x2="19.7224" y2="94.7148" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8700FF" stopOpacity={0} />
                <stop offset="0.499043" stopColor="#8700FF" stopOpacity="0.7" />
                <stop offset={1} stopColor="#8700FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint10_linear_10_26" x1="98.2435" y1="39.2882" x2="85.4811" y2="52.0288" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8700FF" stopOpacity={0} />
                <stop offset="0.499043" stopColor="#8700FF" stopOpacity="0.7" />
                <stop offset={1} stopColor="#8700FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint11_linear_10_26" x1="18.5005" y1="53.2893" x2="-1.91935" y2="73.6743" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8700FF" stopOpacity={0} />
                <stop offset="0.499043" stopColor="#8700FF" stopOpacity="0.7" />
                <stop offset={1} stopColor="#8700FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint12_linear_10_26" x1="43.3073" y1="2.26938" x2="16.5062" y2="29.0247" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8700FF" stopOpacity={0} />
                <stop offset="0.499043" stopColor="#8700FF" stopOpacity="0.7" />
                <stop offset={1} stopColor="#8700FF" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </div>
    
    ))}
    </>);

}
export default Drops;