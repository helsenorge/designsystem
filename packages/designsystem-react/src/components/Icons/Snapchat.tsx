import React from 'react';
import {IconRawProps} from './Icon';

const Snapchat = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <g fill={color} fill-rule="evenodd" transform="translate(5.5 6.5)">
        <path d="M31.3425,27.9353 L30.8795,27.9823 L30.3085,30.4583 C30.1585,30.4053 29.9935,30.3393 29.8255,30.2713 C28.7295,29.8303 27.0715,29.1613 25.0815,30.1913 C24.3095,30.5913 23.6995,31.0053 23.1105,31.4053 C21.7995,32.2943 20.7645,32.9973 18.6035,33.0563 C16.4065,32.9973 15.3715,32.2943 14.0615,31.4053 C13.4715,31.0053 12.8625,30.5913 12.0895,30.1913 C11.3175,29.7903 10.5945,29.6463 9.9345,29.6463 C8.8985,29.6463 8.0165,30.0013 7.3455,30.2713 C7.1775,30.3393 7.0125,30.4053 6.8635,30.4583 L6.2915,27.9823 L5.8285,27.9353 C3.9055,27.7383 1.9695,27.1943 1.7745,26.8593 C1.7755,26.8553 1.9045,26.4853 3.3305,25.8533 C9.2515,23.2333 9.3205,19.1863 9.3205,19.0153 L9.2735,18.7733 C8.8465,17.7113 7.8275,17.3913 7.0095,17.1353 C5.9595,16.8053 5.6225,16.6383 5.6465,15.9143 C5.6535,15.7253 5.7225,15.5803 5.8725,15.4433 C6.4975,14.8773 8.1705,14.7593 9.0865,14.8183 L9.7795,14.8633 L9.7795,10.3493 C9.7795,2.0403 18.2255,1.9433 18.5865,1.9433 C18.9465,1.9433 27.3935,2.0403 27.3935,10.3493 L27.3945,14.8633 L28.0855,14.8183 C28.9925,14.7593 30.6735,14.8773 31.2995,15.4433 C31.4495,15.5803 31.5195,15.7253 31.5265,15.9143 C31.5495,16.6383 31.2115,16.8053 30.1625,17.1353 C29.3445,17.3913 28.3255,17.7113 27.8995,18.7733 L27.8525,19.0153 C27.8525,19.1863 27.9205,23.2333 33.8405,25.8533 C35.2075,26.4583 35.4075,26.8013 35.4006731,26.7993 C35.1795,27.2003 33.2545,27.7403 31.3425,27.9353 M34.3655,24.6643 C29.7745,22.6323 29.2265,19.7843 29.1615,19.1433 C29.3775,18.7683 29.8435,18.5973 30.5515,18.3753 C31.4795,18.0833 32.8825,17.6433 32.8245,15.8723 C32.8075,15.3323 32.5815,14.8513 32.1715,14.4793 C31.2755,13.6673 29.6365,13.5193 28.6945,13.5063 L28.6945,10.3493 C28.6945,7.5563 27.8425,5.2903 26.1635,3.6163 C23.2265,0.6863 18.8335,0.6433 18.5915,0.6433 C18.5875,0.6433 18.5845,0.6433 18.5825,0.6433 C18.3365,0.6433 13.9455,0.6873 11.0085,3.6163 C9.3295,5.2903 8.4785,7.5563 8.4785,10.3493 L8.4785,13.5063 C7.5355,13.5193 5.8975,13.6673 5.0005,14.4793 C4.5905,14.8513 4.3645,15.3323 4.3475,15.8723 C4.2895,17.6433 5.6925,18.0833 6.6205,18.3753 C7.3285,18.5973 7.7945,18.7673 8.0105,19.1423 C7.9445,19.7943 7.3905,22.6353 2.8055,24.6643 C1.7265,25.1423 0.3135,25.9053 0.4905,27.0203 C0.7075,28.3863 3.3735,28.9493 5.2335,29.1763 L5.8565,31.8773 L6.3735,31.8773 C6.8365,31.8773 7.2975,31.6923 7.8305,31.4773 C8.8635,31.0613 10.0335,30.5903 11.4915,31.3453 C12.1955,31.7103 12.7735,32.1023 13.3305,32.4803 C14.6985,33.4093 15.9915,34.2863 18.6035,34.3563 C21.1795,34.2863 22.4725,33.4093 23.8405,32.4803 C24.3985,32.1023 24.9765,31.7103 25.6795,31.3453 C27.1355,30.5903 28.3065,31.0613 29.3405,31.4773 C29.8735,31.6923 30.3345,31.8773 30.7975,31.8773 L31.3155,31.8773 L31.9385,29.1763 C33.7985,28.9493 36.4635,28.3863 36.6805,27.0203 C36.8585,25.9053 35.4455,25.1423 34.3655,24.6643" />
        <path d="M22.2332 7.9519C21.6382 7.9519 21.1562 8.6459 21.1562 9.5009 21.1562 10.3569 21.6382 11.0509 22.2332 11.0509 22.8292 11.0509 23.3112 10.3569 23.3112 9.5009 23.3112 8.6459 22.8292 7.9519 22.2332 7.9519M14.9402 7.9519C14.3452 7.9519 13.8632 8.6459 13.8632 9.5009 13.8632 10.3569 14.3452 11.0509 14.9402 11.0509 15.5362 11.0509 16.0182 10.3569 16.0182 9.5009 16.0182 8.6459 15.5362 7.9519 14.9402 7.9519" />
      </g>
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M23.6899589,7.14463757 C24.4000072,7.161188 28.4177435,7.37738696 31.1632,10.1163 C32.8422,11.7903 33.6942,14.0563 33.6942,16.8493 L33.6942,16.8493 L33.6942,20.0063 C34.6362,20.0193 36.2752,20.1673 37.1712,20.9793 C37.5812,21.3513 37.8072,21.8323 37.8242,22.3723 C37.8822,24.1433 36.4792,24.5833 35.5512,24.8753 C34.8432,25.0973 34.3772,25.2683 34.1612,25.6433 C34.2262,26.2843 34.7742,29.1323 39.3662,31.1643 C40.4462,31.6423 41.8592,32.4053 41.6812,33.5203 C41.4642,34.8863 38.7982,35.4493 36.9392,35.6763 L36.9392,35.6763 L36.3162,38.3773 L35.7982,38.3773 C35.3352,38.3773 34.8742,38.1923 34.3402,37.9773 C33.3072,37.5613 32.1342,37.0903 30.6792,37.8453 C29.9762,38.2103 29.3992,38.6023 28.8412,38.9803 C27.4732,39.9093 26.1802,40.7863 23.6032,40.8563 C20.9912,40.7863 19.6992,39.9093 18.3302,38.9803 C17.7732,38.6023 17.1962,38.2103 16.4922,37.8453 C15.0372,37.0903 13.8642,37.5613 12.8312,37.9773 C12.2972,38.1923 11.8362,38.3773 11.3732,38.3773 L11.3732,38.3773 L10.8562,38.3773 L10.2332,35.6763 C8.3732,35.4493 5.7072,34.8863 5.4902,33.5203 C5.3132,32.4053 6.7262,31.6423 7.8052,31.1643 C12.3902,29.1353 12.9442,26.2943 13.0102,25.6423 C12.7942,25.2673 12.3282,25.0973 11.6202,24.8753 C10.6932,24.5833 9.2892,24.1433 9.3472,22.3723 C9.3642,21.8323 9.5902,21.3513 10.0002,20.9793 C10.8972,20.1673 12.5352,20.0193 13.4782,20.0063 L13.4782,20.0063 L13.4782,16.8493 C13.4782,14.0563 14.3292,11.7903 16.0082,10.1163 C18.7536565,7.37832174 22.7696452,7.16130992 23.4827328,7.1446495 Z M23.6355039,8.44371229 L23.5368163,8.44371229 C22.7560709,8.45528096 14.7792,8.77435634 14.7792,16.8493 L14.7792,16.8493 L14.7792,21.3633 L14.0862,21.3183 C13.1702,21.2593 11.4962,21.3773 10.8722,21.9433 C10.7222,22.0803 10.6532,22.2253 10.6462,22.4143 C10.6222,23.1383 10.9602,23.3053 12.0092,23.6353 C12.8272,23.8913 13.8462,24.2113 14.2732,25.2733 L14.2732,25.2733 L14.3202,25.5153 C14.3202,25.6863 14.2512,29.7333 8.3302,32.3533 C6.9042,32.9853 6.7752,33.3553 6.7742,33.3593 C6.9692,33.6943 8.9052,34.2383 10.8282,34.4353 L10.8282,34.4353 L11.2912,34.4823 L11.8632,36.9583 C12.0132,36.9053 12.1772,36.8393 12.3462,36.7713 C13.0172,36.5013 13.8982,36.1463 14.9342,36.1463 C15.5952,36.1463 16.3182,36.2903 17.0902,36.6913 C17.8622,37.0913 18.4712,37.5043 19.0612,37.9053 C20.3712,38.7943 21.4062,39.4973 23.6032,39.5563 C25.7642,39.4973 26.8002,38.7943 28.1112,37.9043 C28.7002,37.5043 29.3102,37.0913 30.0812,36.6913 C32.0672,35.6623 33.7272,36.3293 34.8252,36.7713 C34.9942,36.8393 35.1582,36.9053 35.3092,36.9583 L35.3092,36.9583 L35.8802,34.4823 L36.3432,34.4353 C38.2552,34.2403 40.1802,33.7003 40.4002,33.2993 C40.3702,33.2993 40.1622,32.9383 38.8412,32.3533 C33.1243724,29.8236448 32.8638492,25.9637067 32.8526798,25.5465986 L32.8522,25.5153 L32.8992,25.2733 C33.3252,24.2113 34.3442,23.8913 35.1622,23.6353 C36.2112,23.3053 36.5492,23.1383 36.5262,22.4143 C36.5192,22.2253 36.4492,22.0803 36.2992,21.9433 C35.6732,21.3773 33.9922,21.2593 33.0852,21.3183 L33.0852,21.3183 L32.3942,21.3633 L32.3932,16.8493 C32.3932,8.77435634 24.4153847,8.45528096 23.6355039,8.44371229 Z M27.0542,19.08 L27.9002,20.067 C26.2642,21.47 24.7342,21.94 23.4182,21.94 C20.7732,21.94 18.9952,20.04 18.9692,20.011 L18.9692,20.011 L19.9282,19.134 C20.0572,19.272 23.0982,22.475 27.0542,19.08 L27.0542,19.08 Z M27.0815,14.4519 C27.6765,14.4519 28.1595,15.1459 28.1595,16.0009 C28.1595,16.8569 27.6765,17.5509 27.0815,17.5509 C26.4855,17.5509 26.0035,16.8569 26.0035,16.0009 C26.0035,15.1459 26.4855,14.4519 27.0815,14.4519 Z M19.7885,14.452 C20.3835,14.452 20.8665,15.146 20.8665,16.001 C20.8665,16.857 20.3835,17.551 19.7885,17.551 C19.1925,17.551 18.7105,16.857 18.7105,16.001 C18.7105,15.146 19.1925,14.452 19.7885,14.452 Z"
      />
    </svg>
  );
});

export default Snapchat;
