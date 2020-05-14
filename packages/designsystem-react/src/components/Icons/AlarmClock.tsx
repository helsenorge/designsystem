import React from 'react';
import {IconRawProps} from './Icon';

const AlarmClock = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fillRule="evenodd" transform="translate(11 11)">
      <polygon points="13.65 14.937 8.77 14.937 8.77 13.637 12.35 13.637 12.35 8.775 13.65 8.775" />
      <polygon points="5.272 25.651 4.318 24.768 6.95 21.923 7.904 22.806" />
      <polygon points="20.728 25.651 18.096 22.806 19.05 21.923 21.682 24.768" />
      <path d="M13,3.6024 C7.553,3.6024 3.121,8.0344 3.121,13.4814 C3.121,18.9284 7.553,23.3594 13,23.3594 C18.447,23.3594 22.878,18.9284 22.878,13.4814 C22.878,8.0344 18.447,3.6024 13,3.6024 M13,24.6594 C6.836,24.6594 1.821,19.6444 1.821,13.4814 C1.821,7.3174 6.836,2.3024 13,2.3024 C19.164,2.3024 24.178,7.3174 24.178,13.4814 C24.178,19.6444 19.164,24.6594 13,24.6594" />
      <path d="M5.2871 1.4398L5.2821 1.4398C4.3611 1.4408 3.4961 1.8008 2.8471 2.4528 2.1971 3.1048 1.8401 3.9708 1.84209164 4.8908 1.8441 6.0578 2.4411 7.1298 3.4041 7.7588 4.5641 5.8168 6.2851 4.2728 8.3401 3.3288 7.7621 2.1788 6.5971 1.4398 5.2871 1.4398L5.2871 1.4398zM3.9571 9.4708L3.4011 9.2288C1.6671 8.4748.5441 6.7728.542086361 4.8928.5391 3.6258 1.0311 2.4328 1.9261 1.5358 2.8211.6378 4.0121.1418 5.2801.1398L5.2871.1398C7.3661.1398 9.1791 1.4838 9.8001 3.4858L9.9791 4.0648 9.4151 4.2838C7.1831 5.1548 5.3431 6.8058 4.2371 8.9328L3.9571 9.4708zM17.6606 3.3295C19.7156 4.2725 21.4356 5.8165 22.5956 7.7585 23.5616 7.1275 24.1596 6.0505 24.1586013 4.8795 24.1556 2.9815 22.6096 1.4395 20.7126 1.4395L20.7066 1.4395C19.3996 1.4415 18.2376 2.1815 17.6606 3.3295L17.6606 3.3295zM22.0426 9.4695L21.7626 8.9325C20.6566 6.8065 18.8176 5.1555 16.5846 4.2845L16.0216 4.0645 16.2006 3.4865C16.8196 1.4885 18.6306.1435 20.7046.1405L20.7126.1405C23.3266.1405 25.4536 2.2635 25.457606 4.8775 25.4606 6.7635 24.3386 8.4715 22.5986 9.2275L22.0426 9.4695z" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(4 3)">
      <polygon points="20.65 22.937 15.77 22.937 15.77 21.637 19.35 21.637 19.35 16.775 20.65 16.775" />
      <polygon points="12.272 33.651 11.318 32.768 13.95 29.923 14.904 30.806" />
      <polygon points="27.728 33.651 25.096 30.806 26.05 29.923 28.682 32.768" />
      <path d="M19.9998,11.6024 C14.5528,11.6024 10.1208,16.0344 10.1208,21.4814 C10.1208,26.9284 14.5528,31.3594 19.9998,31.3594 C25.4468,31.3594 29.8778,26.9284 29.8778,21.4814 C29.8778,16.0344 25.4468,11.6024 19.9998,11.6024 M19.9998,32.6594 C13.8358,32.6594 8.8208,27.6444 8.8208,21.4814 C8.8208,15.3174 13.8358,10.3024 19.9998,10.3024 C26.1638,10.3024 31.1778,15.3174 31.1778,21.4814 C31.1778,27.6444 26.1638,32.6594 19.9998,32.6594" />
      <path d="M24.6604 11.329C26.7164 12.273 28.4364 13.817 29.5964 15.759 30.5584 15.13 31.1564 14.058 31.1584084 12.891 31.1604 11.971 30.8034 11.105 30.1534 10.453 29.5034 9.801 28.6394 9.441 27.7184 9.44L27.7124 9.44C26.4034 9.44 25.2384 10.179 24.6604 11.329L24.6604 11.329zM29.0434 17.471L28.7634 16.933C27.6574 14.806 25.8184 13.155 23.5844 12.284L23.0204 12.064 23.2004 11.486C23.8214 9.484 25.6344 8.14 27.7124 8.14L27.7204 8.14C28.9884 8.142 30.1794 8.638 31.0744 9.536 31.9694 10.433 32.4604 11.625 32.4584061 12.893 32.4554 14.773 31.3334 16.475 29.5994 17.229L29.0434 17.471zM36.7615 10.2758L35.4615 10.2678C35.4755 7.8288 33.6675 5.1858 30.7235 5.1688L30.7315 3.8688C34.4785 3.8898 36.7795 7.2108 36.7615 10.2758" />
      <path d="M39.7781 10.225L38.4781 10.217C38.4891 8.255 37.7581 6.263 36.4721 4.752 35.4821 3.589 33.7281 2.2 30.9951 2.184L31.0031.885C33.5191.899 35.8131 1.973 37.4621 3.909 38.9471 5.653 39.7911 7.955 39.7781 10.225M12.2869 9.4398L12.2819 9.4398C11.3609 9.4408 10.4959 9.8008 9.8469 10.4528 9.1969 11.1048 8.8399 11.9708 8.84189164 12.8908 8.8439 14.0578 9.4409 15.1298 10.4039 15.7588 11.5629 13.8168 13.2839 12.2728 15.3399 11.3288 14.7619 10.1788 13.5969 9.4398 12.2869 9.4398L12.2869 9.4398zM10.9569 17.4708L10.4009 17.2288C8.6669 16.4748 7.5439 14.7728 7.54188636 12.8928 7.5389 11.6258 8.0309 10.4328 8.9259 9.5358 9.8209 8.6378 11.0119 8.1418 12.2799 8.1398L12.2869 8.1398C14.3659 8.1398 16.1789 9.4838 16.7999 11.4858L16.9789 12.0648 16.4149 12.2838C14.1819 13.1548 12.3429 14.8058 11.2369 16.9328L10.9569 17.4708zM3.2385 10.2758C3.2205 7.2108 5.5215 3.8898 9.2685 3.8688L9.2765 5.1688C6.3325 5.1858 4.5245 7.8288 4.5385 10.2678L3.2385 10.2758z" />
      <path d="M0.2542,10.0062 C0.2292,5.6282 3.5102,0.8842 8.8542,0.8542 L8.8612,2.1532 C4.3202,2.1792 1.5332,6.2462 1.5542,9.9982 L0.2542,10.0062 Z" />
    </g>
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M23.8688842,33.9941053 C18.5497263,33.9941053 14.2234105,29.6677895 14.2234105,24.3498947 C14.2234105,22.7418947 14.6250947,21.2273684 15.3236211,19.8922105 C15.5775158,19.4071579 15.8743579,18.9511579 16.2027789,18.5204211 C16.2330947,18.48 16.2621474,18.4383158 16.2937263,18.3991579 C16.6183579,17.9861053 16.9770947,17.6033684 17.3636211,17.2496842 C17.4065684,17.2105263 17.4495158,17.1701053 17.4937263,17.1322105 C17.8903579,16.7810526 18.3147789,16.4627368 18.7657263,16.1810526 C18.7998316,16.1595789 18.8339368,16.1393684 18.8680421,16.1191579 C19.3404632,15.8311579 19.8381474,15.5797895 20.3585684,15.3764211 C21.4486737,14.9482105 22.6297263,14.7056842 23.8688842,14.7056842 C25.1105684,14.7056842 26.2941474,14.9494737 27.3855158,15.3789474 C27.9021474,15.5823158 28.3960421,15.8311579 28.8646737,16.1166316 C28.9013053,16.1381053 28.9366737,16.1595789 28.9733053,16.1823158 C29.4229895,16.464 29.8474105,16.7823158 30.2427789,17.1322105 C30.2869895,17.1701053 30.3286737,17.2092632 30.3703579,17.2484211 C30.7568842,17.6021053 31.1168842,17.9848421 31.4415158,18.3978947 C31.4743579,18.4383158 31.5034105,18.48 31.5337263,18.5204211 C31.8608842,18.9498947 32.1577263,19.4046316 32.4103579,19.8884211 C33.1114105,21.2235789 33.5130947,22.7393684 33.5130947,24.3498947 C33.5130947,29.6677895 29.1867789,33.9941053 23.8688842,33.9941053 L23.8688842,33.9941053 Z M12.9450911,15.7591579 C12.9438316,14.9014737 13.2747789,14.0943158 13.8810947,13.4867368 C14.4861474,12.8791579 15.2933053,12.5444211 16.1509895,12.5431579 L16.1573053,12.5431579 C17.2941474,12.5431579 18.3147789,13.1418947 18.8832,14.0917895 C18.8554105,14.1044211 18.8326737,14.1233684 18.8061474,14.136 C17.9194105,14.5781053 17.0983579,15.1288421 16.3606737,15.7755789 C16.2810947,15.8450526 16.2053053,15.9157895 16.1282526,15.9865263 C15.8074105,16.2833684 15.5004632,16.5966316 15.2149895,16.9275789 C15.1859368,16.9629474 15.1530947,16.9932632 15.1240421,17.0286316 C14.8120421,17.4 14.5278316,17.7966316 14.2650947,18.2071579 C14.2461474,18.2362105 14.2221474,18.2614737 14.2032,18.2917895 C13.4213053,17.6930526 12.9463579,16.7633684 12.9450911,15.7591579 L12.9450911,15.7591579 Z M31.5766737,12.5431579 L31.5817263,12.5431579 C32.4368842,12.5431579 33.2415158,12.8753684 33.8478316,13.4791579 C34.4554105,14.0854737 34.7901474,14.8913684 34.791413,15.7490526 C34.7926737,16.7570526 34.3164632,17.6917895 33.5333053,18.2905263 C33.5143579,18.2602105 33.4890947,18.2336842 33.4701474,18.2033684 C33.2061474,17.7928421 32.9219368,17.3974737 32.6099368,17.0248421 C32.5834105,16.9945263 32.5543579,16.9654737 32.5278316,16.9351579 C32.2385684,16.5978947 31.9278316,16.2821053 31.6032,15.9814737 C31.5286737,15.9132632 31.4554105,15.8450526 31.3796211,15.7781053 C30.6419368,15.1313684 29.8221474,14.5806316 28.9354105,14.1385263 C28.9076211,14.1246316 28.8823579,14.1056842 28.8545684,14.0917895 C29.4217263,13.1431579 30.4398316,12.5444211 31.5766737,12.5431579 L31.5766737,12.5431579 Z M35.2815158,24.3498947 C35.2815158,22.7570526 34.9518316,21.24 34.3594105,19.8618947 C35.7173053,18.9461053 36.5636211,17.4164211 36.5611004,15.7465263 C36.5585684,14.4151579 36.0381474,13.1658947 35.0970947,12.2273684 C34.1573053,11.2901053 32.9080421,10.7747368 31.5817263,10.7747368 L31.5741474,10.7747368 C29.7059368,10.7772632 28.0486737,11.8193684 27.2036211,13.4362105 C26.1476211,13.1128421 25.0284632,12.9372632 23.8688842,12.9372632 C22.7093053,12.9372632 21.5901474,13.1128421 20.5341474,13.4362105 C19.6878316,11.8155789 18.0267789,10.7747368 16.1573053,10.7747368 L16.1484632,10.7747368 C14.8170947,10.7772632 13.5678316,11.2964211 12.6293053,12.2387368 C11.6895158,13.1797895 11.1728842,14.4315789 11.1754013,15.7616842 C11.1792,17.4252632 12.0229895,18.9486316 13.3770947,19.8631579 C12.7846737,21.2412632 12.4549895,22.7570526 12.4549895,24.3498947 C12.4549895,28.0357895 14.2183579,31.3098947 16.9392,33.3978947 L15.0141474,35.4783158 L16.3126737,36.6783158 L18.4347789,34.3844211 C20.0516211,35.2635789 21.9021474,35.7625263 23.8688842,35.7625263 C25.8343579,35.7625263 27.6861474,35.2635789 29.3029895,34.3844211 L31.4238316,36.6783158 L32.7223579,35.4783158 L30.7973053,33.3978947 C33.5168842,31.3098947 35.2815158,28.0357895 35.2815158,24.3498947 L35.2815158,24.3498947 Z M22.9846737,24.2715789 L19.6385684,24.2715789 L19.6385684,26.04 L24.7530947,26.04 L24.7530947,19.6446316 L22.9846737,19.6446316 L22.9846737,24.2715789 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M33.5340632,18.2916632 C33.5125895,18.2588211 33.4860632,18.2297684 33.4645895,18.1969263 C33.2043789,17.7927158 32.9252211,17.4024 32.6170105,17.0348211 C32.5803789,16.9918737 32.5399579,16.9527158 32.5033263,16.9097684 C32.2254316,16.5876632 31.9285895,16.2845053 31.6165895,15.9939789 C31.5344842,15.9181895 31.4536421,15.8436632 31.3690105,15.7704 C30.6338526,15.1261895 29.8178526,14.5779789 28.9349053,14.1384 C28.9071158,14.1245053 28.8818526,14.1055579 28.8540632,14.0916632 C29.4224842,13.1417684 30.4431158,12.5430316 31.5799579,12.5430316 L31.5862737,12.5430316 C32.4439579,12.5442947 33.2498526,12.8790316 33.8561684,13.4866105 C34.4612211,14.0941895 34.7934316,14.9013474 34.792172,15.7590316 C34.7909053,16.7645053 34.3146947,17.6929263 33.5340632,18.2916632 L33.5340632,18.2916632 Z M23.8683789,33.9939789 C18.5504842,33.9939789 14.2241684,29.6676632 14.2241684,24.3497684 C14.2241684,22.7417684 14.6245895,21.2272421 15.3231158,19.8933474 C15.5770105,19.4070316 15.8751158,18.9510316 16.2035368,18.5202947 C16.2338526,18.4798737 16.2629053,18.4394526 16.2944842,18.3990316 C16.6191158,17.9859789 16.9791158,17.6019789 17.3656421,17.2482947 C17.4073263,17.2104 17.4490105,17.1712421 17.4932211,17.1320842 C17.8898526,16.7821895 18.3155368,16.4613474 18.7677474,16.1796632 C18.8005895,16.1594526 18.8334316,16.1392421 18.8662737,16.1202947 C19.3399579,15.8322947 19.8376421,15.5796632 20.3605895,15.3750316 C21.4494316,14.9480842 22.6292211,14.7055579 23.8683789,14.7055579 C25.1075368,14.7055579 26.2898526,14.9493474 27.3799579,15.3775579 C27.8991158,15.5809263 28.3930105,15.8310316 28.8641684,16.1165053 C28.9008,16.1392421 28.9386947,16.1607158 28.9753263,16.1834526 C29.4224842,16.4638737 29.8431158,16.7809263 30.2372211,17.1270316 C30.2852211,17.1699789 30.3319579,17.2129263 30.3786947,17.2558737 C30.7601684,17.6057684 31.1151158,17.9847158 31.4372211,18.3927158 C31.4725895,18.4381895 31.5066947,18.4861895 31.5420632,18.5316632 C31.8641684,18.9573474 32.1572211,19.4070316 32.4085895,19.8857684 C33.1096421,21.2209263 33.5113263,22.7379789 33.5113263,24.3497684 C33.5113263,29.6676632 29.1862737,33.9939789 23.8683789,33.9939789 L23.8683789,33.9939789 Z M12.944582,15.7590316 C12.9408,13.9880842 14.3795368,12.5455579 16.1492211,12.5430316 L16.1555368,12.5430316 C17.2936421,12.5430316 18.3142737,13.1417684 18.8826947,14.0916632 C18.8574316,14.1042947 18.8346947,14.1219789 18.8081684,14.1346105 C17.9201684,14.5767158 17.0978526,15.1287158 16.3589053,15.7767158 C16.2818526,15.8449263 16.2060632,15.9144 16.1302737,15.9851368 C15.8081684,16.2832421 15.4999579,16.5965053 15.2132211,16.9312421 C15.1854316,16.9640842 15.1538526,16.9944 15.1260632,17.0272421 C14.8128,17.3998737 14.5285895,17.7965053 14.2645895,18.2070316 C14.2456421,18.2360842 14.2216421,18.2626105 14.2026947,18.2916632 C13.4220632,17.6941895 12.9458526,16.7645053 12.944582,15.7590316 L12.944582,15.7590316 Z M36.5605987,15.7615579 C36.5631158,14.4314526 36.0464842,13.1809263 35.1079579,12.2386105 C34.1694316,11.2962947 32.9201684,10.7771368 31.5888,10.7746105 L31.5799579,10.7746105 C29.7092211,10.7746105 28.0494316,11.8154526 27.2018526,13.4360842 C26.1471158,13.1127158 25.0279579,12.9371368 23.8683789,12.9371368 C22.7088,12.9371368 21.5896421,13.1127158 20.5349053,13.4360842 C19.6873263,11.8154526 18.0275368,10.7746105 16.1555368,10.7746105 L16.1466947,10.7746105 C13.4018526,10.7796632 11.1723789,13.0167158 11.1761636,15.7615579 C11.1786947,17.4264 12.0237474,18.9497684 13.3765895,19.8630316 C12.7854316,21.2411368 12.4557474,22.7569263 12.4557474,24.3497684 C12.4557474,28.0356632 14.2191158,31.3085053 16.9386947,33.3977684 L15.0136421,35.4769263 L16.3109053,36.6794526 L18.4342737,34.3842947 C20.0511158,35.2634526 21.9029053,35.7636632 23.8683789,35.7636632 C25.8338526,35.7636632 27.6843789,35.2634526 29.3012211,34.3842947 L31.4245895,36.6794526 L32.7218526,35.4769263 L30.7968,33.3977684 C33.5163789,31.3085053 35.2810105,28.0356632 35.2810105,24.3497684 C35.2810105,22.7569263 34.9513263,21.2411368 34.3589053,19.8630316 C35.7130105,18.9497684 36.5580632,17.4251368 36.5605987,15.7615579 L36.5605987,15.7615579 Z M39.2220632,8.66513684 C38.0422737,7.28197895 36.4026947,6.51271579 34.6014316,6.50261053 L34.5913263,8.27103158 C36.2296421,8.28113684 37.2805895,9.11482105 37.8755368,9.81208421 C38.6574316,10.7316632 39.1020632,11.9430316 39.0944842,13.1354526 L40.8641684,13.1455579 C40.8730105,11.5350316 40.2742737,9.90303158 39.2220632,8.66513684 L39.2220632,8.66513684 Z M13.1365895,6.50261053 C9.2448,6.52534737 6.85490526,9.96871579 6.87258947,13.1455579 L8.64101053,13.1354526 C8.62837895,10.8087158 10.3475368,8.28745263 13.1454316,8.27103158 L13.1365895,6.50261053 Z M22.9829053,24.2714526 L19.6380632,24.2714526 L19.6380632,26.0398737 L24.7525895,26.0398737 L24.7525895,19.6445053 L22.9829053,19.6445053 L22.9829053,24.2714526 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${className} hnds-style-icon`}
      {...props}>
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default AlarmClock;
