import React from 'react';
import {IconRawProps} from './Icon';

const Hormone = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = false;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M37.8765,32.2993 C37.6705,32.6413 37.3455,32.8813 36.9585,32.9783 C36.5685,33.0733 36.1715,33.0133 35.8295,32.8093 C35.4885,32.6033 35.2475,32.2773 35.1505,31.8903 C35.0555,31.5043 35.1155,31.1043 35.3205,30.7623 C35.5265,30.4203 35.8525,30.1803 36.2385,30.0833 C36.3585,30.0543 36.4805,30.0383 36.6015,30.0383 C36.8685,30.0383 37.1325,30.1113 37.3675,30.2523 C38.0715,30.6773 38.2995,31.5953 37.8765,32.2993 L37.8765,32.2993 Z M28.9105,26.6973 C28.9105,26.7763 28.8145,26.9443 28.7475,26.9843 L24.0315,29.7443 C23.9675,29.7813 23.7835,29.7813 23.7215,29.7443 L19.0545,26.9873 C18.9865,26.9463 18.8905,26.7773 18.8905,26.6973 L18.8905,21.0533 C18.8905,20.9723 18.9845,20.8043 19.0555,20.7633 L23.7225,18.0053 C23.7535,17.9863 23.8145,17.9773 23.8775,17.9773 C23.9385,17.9773 24.0005,17.9863 24.0325,18.0053 L28.7465,20.7663 C28.8145,20.8063 28.9105,20.9753 28.9105,21.0533 L28.9105,26.6973 Z M25.3655,38.7243 C25.3655,39.5463 24.6975,40.2143 23.8755,40.2143 C23.0535,40.2143 22.3845,39.5463 22.3845,38.7243 C22.3845,37.9023 23.0535,37.2333 23.8755,37.2333 C24.6975,37.2333 25.3655,37.9023 25.3655,38.7243 L25.3655,38.7243 Z M22.3845,9.0263 C22.3845,8.2033 23.0535,7.5353 23.8755,7.5353 C24.6975,7.5353 25.3655,8.2033 25.3655,9.0263 C25.3655,9.8483 24.6975,10.5173 23.8755,10.5173 C23.0535,10.5173 22.3845,9.8483 22.3845,9.0263 L22.3845,9.0263 Z M12.5995,31.8903 C12.5025,32.2773 12.2615,32.6033 11.9205,32.8093 C11.5785,33.0133 11.1805,33.0703 10.7915,32.9783 C10.4045,32.8813 10.0795,32.6413 9.8735,32.2993 C9.4505,31.5953 9.6785,30.6773 10.3825,30.2523 C10.7235,30.0493 11.1235,29.9893 11.5115,30.0833 C11.8975,30.1803 12.2235,30.4203 12.4295,30.7633 C12.6345,31.1043 12.6945,31.5043 12.5995,31.8903 L12.5995,31.8903 Z M12.4295,16.9883 C12.0065,17.6933 11.0885,17.9193 10.3825,17.4973 C10.0415,17.2923 9.8005,16.9663 9.7045,16.5793 C9.6085,16.1933 9.6685,15.7913 9.8735,15.4503 C10.0795,15.1093 10.4045,14.8683 10.7915,14.7723 C10.9115,14.7423 11.0335,14.7283 11.1535,14.7283 C11.4215,14.7283 11.6855,14.8003 11.9195,14.9423 L11.9205,14.9423 C12.2625,15.1483 12.5025,15.4733 12.5995,15.8603 C12.6945,16.2463 12.6345,16.6473 12.4295,16.9883 L12.4295,16.9883 Z M35.1505,15.8603 C35.2475,15.4733 35.4875,15.1483 35.8295,14.9423 L35.8305,14.9423 C36.0645,14.8003 36.3285,14.7283 36.5965,14.7283 C36.7165,14.7283 36.8385,14.7423 36.9585,14.7723 C37.3455,14.8683 37.6705,15.1093 37.8765,15.4503 C38.0815,15.7913 38.1415,16.1933 38.0455,16.5793 C37.9495,16.9663 37.7085,17.2923 37.3675,17.4973 C36.6625,17.9183 35.7445,17.6933 35.3205,16.9883 C35.1155,16.6473 35.0555,16.2463 35.1505,15.8603 L35.1505,15.8603 Z M38.0385,29.1393 L38.0375,29.1393 C37.3975,28.7543 36.6455,28.6433 35.9255,28.8213 C35.4175,28.9483 34.9715,29.2143 34.6145,29.5783 L33.9985,29.2073 L30.1805,26.9093 C30.1905,26.8393 30.2115,26.7683 30.2115,26.6973 L30.2115,21.0533 C30.2115,20.9933 30.1925,20.9323 30.1855,20.8713 L34.6185,18.1733 C35.1495,18.7113 35.8665,19.0103 36.6035,19.0103 C37.0935,19.0103 37.5885,18.8813 38.0375,18.6113 C38.6765,18.2273 39.1275,17.6163 39.3075,16.8933 C39.4865,16.1693 39.3745,15.4193 38.9895,14.7803 C38.6055,14.1423 37.9955,13.6913 37.2725,13.5103 C36.5495,13.3313 35.7985,13.4443 35.1595,13.8283 C34.5215,14.2123 34.0695,14.8223 33.8895,15.5463 C33.7635,16.0553 33.7895,16.5743 33.9445,17.0613 L29.5305,19.7463 C29.4875,19.7143 29.4495,19.6723 29.4035,19.6453 L24.6895,16.8843 C24.6405,16.8553 24.5805,16.8413 24.5255,16.8183 L24.5255,11.7343 C25.7505,11.4383 26.6665,10.3403 26.6665,9.0263 C26.6665,7.4873 25.4145,6.2353 23.8755,6.2353 C22.3365,6.2353 21.0835,7.4873 21.0835,9.0263 C21.0835,10.3403 22.0005,11.4383 23.2255,11.7343 L23.2255,16.8203 C23.1705,16.8433 23.1095,16.8573 23.0595,16.8873 L18.3945,19.6443 C18.3495,19.6703 18.3125,19.7123 18.2705,19.7433 L13.8065,17.0583 C13.9605,16.5723 13.9865,16.0543 13.8605,15.5463 C13.6805,14.8223 13.2295,14.2123 12.5905,13.8283 C11.9505,13.4443 11.2005,13.3313 10.4785,13.5103 C9.7545,13.6913 9.1445,14.1423 8.7605,14.7803 C8.3755,15.4193 8.2635,16.1693 8.4425,16.8933 C8.6225,17.6163 9.0735,18.2273 9.7125,18.6113 C10.1615,18.8813 10.6565,19.0103 11.1475,19.0103 C11.8845,19.0103 12.6035,18.7103 13.1345,18.1703 L17.6165,20.8673 C17.6075,20.9293 17.5895,20.9913 17.5895,21.0533 L17.5895,26.6973 C17.5895,26.7583 17.6075,26.8203 17.6165,26.8823 L13.1355,29.5783 C12.7785,29.2143 12.3325,28.9483 11.8245,28.8213 C11.1045,28.6433 10.3535,28.7543 9.7125,29.1393 L9.7115,29.1393 C8.3945,29.9333 7.9675,31.6523 8.7605,32.9693 C9.1445,33.6083 9.7545,34.0593 10.4785,34.2393 C10.7025,34.2953 10.9315,34.3223 11.1565,34.3223 C11.6575,34.3223 12.1505,34.1873 12.5905,33.9223 C13.2305,33.5373 13.6805,32.9273 13.8605,32.2043 C13.9865,31.6963 13.9605,31.1783 13.8065,30.6923 L18.2695,28.0063 C18.3115,28.0373 18.3485,28.0793 18.3935,28.1063 L23.0605,30.8633 C23.1095,30.8933 23.1705,30.9063 23.2255,30.9303 L23.2255,36.0163 C22.0005,36.3123 21.0835,37.4093 21.0835,38.7243 C21.0835,40.2633 22.3365,41.5153 23.8755,41.5153 C25.4145,41.5153 26.6665,40.2633 26.6665,38.7243 C26.6665,37.4093 25.7505,36.3123 24.5255,36.0163 L24.5255,30.9323 C24.5795,30.9083 24.6395,30.8953 24.6885,30.8653 L29.4045,28.1053 C29.4415,28.0833 29.4725,28.0483 29.5075,28.0233 L33.3285,30.3203 L33.9435,30.6923 C33.7895,31.1783 33.7635,31.6963 33.8895,32.2043 C34.0695,32.9273 34.5205,33.5373 35.1595,33.9223 C35.5995,34.1873 36.0925,34.3223 36.5935,34.3223 C36.8185,34.3223 37.0475,34.2953 37.2725,34.2393 C37.9955,34.0593 38.6055,33.6083 38.9895,32.9693 C39.7825,31.6523 39.3555,29.9333 38.0385,29.1393 L38.0385,29.1393 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}></svg>
  );
});

export default Hormone;
