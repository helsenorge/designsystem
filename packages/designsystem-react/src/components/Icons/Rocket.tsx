import React from 'react';
import {IconRawProps} from './Icon';

const Rocket = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        d="M31.4451,29.9993 L29.1511,32.3163 L27.9741,29.4403 C29.4891,28.4543 31.0321,27.3053 32.3311,26.0463 C32.8041,27.4133 32.4771,28.9563 31.4451,29.9993 L31.4451,29.9993 Z M21.8631,31.3743 L16.5541,26.1193 C17.4451,24.2133 19.9011,19.3213 22.9611,16.2283 C24.0531,15.1253 25.4111,14.2453 26.8621,13.5353 L34.3401,20.9363 C33.6451,22.3943 32.7791,23.7613 31.6871,24.8643 C28.6261,27.9573 23.7601,30.4633 21.8631,31.3743 L21.8631,31.3743 Z M15.5351,18.8423 L17.8291,16.5233 C18.8611,15.4813 20.4021,15.1383 21.7731,15.5973 C20.5281,16.9083 19.3941,18.4643 18.4241,19.9883 L15.5351,18.8423 Z M36.9491,10.8213 C36.7541,12.7633 36.2321,16.3253 34.9011,19.6623 L28.1301,12.9623 C31.4531,11.5953 35.0101,11.0363 36.9491,10.8213 L36.9491,10.8213 Z M33.2891,25.0273 C38.0311,19.3873 38.3611,9.3953 38.3611,9.3953 C38.3611,9.3953 28.3861,9.8273 22.7931,14.6183 L22.6871,14.5513 C20.7371,13.6593 18.4131,14.0853 16.9051,15.6093 L13.2281,19.3243 L17.7331,21.1133 C16.0411,23.9613 14.9971,26.4073 14.9971,26.4073 L21.5911,32.9343 C21.5911,32.9343 24.0271,31.8643 26.8571,30.1433 L28.6921,34.6293 L32.3691,30.9133 C33.8771,29.3903 34.2781,27.0623 33.3681,25.1213 L33.2891,25.0273 Z M16.7791,35.4583 L16.6611,35.5893 C16.6181,35.6283 16.5721,35.6663 16.5241,35.7063 C16.4311,35.7853 16.3341,35.8563 16.2131,35.9363 C14.6531,36.9893 12.3251,37.2453 10.9461,37.2983 C10.9981,36.0393 11.2121,33.9173 12.0301,32.3653 L12.0461,32.3343 L12.0611,32.3033 C12.1941,32.0153 12.3661,31.7563 12.5771,31.5323 L12.6971,31.4183 C13.2341,30.9103 13.9371,30.6303 14.6761,30.6303 C15.4381,30.6303 16.1541,30.9253 16.6951,31.4613 C17.8041,32.5583 17.8411,34.3133 16.7791,35.4583 L16.7791,35.4583 Z M17.6101,30.5363 C16.7971,29.7313 15.7371,29.3303 14.6761,29.3303 C13.6421,29.3303 12.6091,29.7123 11.8041,30.4743 L11.7991,30.4693 C11.7831,30.4843 11.7691,30.5033 11.7531,30.5203 C11.7371,30.5363 11.7181,30.5503 11.7011,30.5673 C11.3491,30.9233 11.0781,31.3293 10.8801,31.7593 C9.9041,33.6103 9.6801,36.0733 9.6391,37.4813 C9.6211,38.1013 10.1131,38.6043 10.7291,38.6043 L10.7571,38.6043 C12.2781,38.5653 15.0321,38.3033 16.9411,37.0133 C17.0861,36.9183 17.2271,36.8143 17.3621,36.7003 C17.4951,36.5913 17.6241,36.4763 17.7451,36.3533 L17.7331,36.3423 C19.2581,34.6963 19.2171,32.1273 17.6101,30.5363 L17.6101,30.5363 Z M28.1631,22.0983 C27.5081,22.7583 26.4381,22.7643 25.7771,22.1093 C25.4571,21.7933 25.2791,21.3703 25.2770828,20.9193 C25.2751,20.4693 25.4471,20.0443 25.7651,19.7243 C26.0821,19.4033 26.5051,19.2263 26.9551,19.2233 L26.9651,19.2233 C27.4111,19.2233 27.8331,19.3963 28.1511,19.7113 C28.8121,20.3653 28.8181,21.4363 28.1631,22.0983 L28.1631,22.0983 Z M26.9651,17.9233 L26.9481,17.9233 C26.1511,17.9283 25.4021,18.2423 24.8411,18.8103 C24.2791,19.3763 23.9731,20.1283 23.9770613,20.9263 C23.9811,21.7243 24.2961,22.4733 24.8621,23.0333 C25.4441,23.6083 26.2041,23.8963 26.9641,23.8963 C27.7341,23.8963 28.5041,23.6013 29.0871,23.0123 C30.2451,21.8413 30.2361,19.9453 29.0651,18.7873 C28.5021,18.2293 27.7571,17.9233 26.9651,17.9233 L26.9651,17.9233 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        d="M35.6105,26.5257 L33.3165,28.8427 L32.1395,25.9657 C33.6545,24.9807 35.1985,23.8317 36.4965,22.5727 C36.9695,23.9387 36.6425,25.4837 35.6105,26.5257 L35.6105,26.5257 Z M26.0285,27.8997 L20.7195,22.6457 C21.6105,20.7397 24.0665,15.8477 27.1275,12.7547 C28.2195,11.6517 29.5775,10.7717 31.0275,10.0617 L38.5055,17.4627 C37.8105,18.9207 36.9445,20.2867 35.8525,21.3907 C32.7915,24.4837 27.9255,26.9897 26.0285,27.8997 L26.0285,27.8997 Z M19.7005,15.3687 L21.9955,13.0497 C23.0265,12.0067 24.5675,11.6637 25.9385,12.1247 C24.6935,13.4347 23.5595,14.9897 22.5895,16.5147 L19.7005,15.3687 Z M41.1145,7.3467 C40.9195,9.2887 40.3975,12.8507 39.0665,16.1887 L32.2955,9.4877 C35.6185,8.1217 39.1755,7.5627 41.1145,7.3467 L41.1145,7.3467 Z M37.4545,21.5537 C42.1965,15.9137 42.5265,5.9217 42.5265,5.9217 C42.5265,5.9217 32.5515,6.3537 26.9585,11.1447 L26.8525,11.0777 C24.9025,10.1867 22.5785,10.6117 21.0705,12.1357 L17.3935,15.8507 L21.8985,17.6397 C20.2065,20.4877 19.1625,22.9327 19.1625,22.9327 L25.7565,29.4607 C25.7565,29.4607 28.1925,28.3907 31.0225,26.6697 L32.8575,31.1557 L36.5345,27.4397 C38.0425,25.9167 38.4435,23.5877 37.5335,21.6477 L37.4545,21.5537 Z M32.3285,18.6237 L32.3285,18.6237 C32.0115,18.9437 31.5895,19.1217 31.1385,19.1247 C30.6695,19.0937 30.2625,18.9527 29.9425,18.6357 C29.2815,17.9817 29.2765,16.9107 29.9305,16.2497 C30.2595,15.9177 30.6945,15.7507 31.1295,15.7507 C31.5585,15.7507 31.9875,15.9127 32.3165,16.2377 C32.6365,16.5547 32.8145,16.9777 32.8165171,17.4277 C32.8185,17.8787 32.6455,18.3027 32.3285,18.6237 L32.3285,18.6237 Z M29.0065,15.3357 C27.8475,16.5057 27.8575,18.4017 29.0275,19.5597 C29.5915,20.1177 30.3375,20.4237 31.1295,20.4237 L31.1455,20.4237 C31.9435,20.4197 32.6915,20.1047 33.2535,19.5377 C33.8145,18.9707 34.1205,18.2187 34.1165387,17.4217 C34.1125,16.6237 33.7985,15.8757 33.2305,15.3137 C32.0605,14.1567 30.1655,14.1657 29.0065,15.3357 L29.0065,15.3357 Z M20.9455,31.9847 L20.8285,32.1147 C20.7845,32.1537 20.7385,32.1927 20.6895,32.2327 C20.5965,32.3107 20.5005,32.3817 20.3785,32.4627 C18.8195,33.5157 16.4905,33.7717 15.1115,33.8247 C15.1635,32.5647 15.3785,30.4407 16.1955,28.8917 L16.2115,28.8607 L16.2265,28.8297 C16.3585,28.5427 16.5305,28.2857 16.7435,28.0567 L16.8625,27.9447 C17.3995,27.4367 18.1025,27.1567 18.8415,27.1567 C19.6035,27.1567 20.3195,27.4517 20.8605,27.9867 C21.9695,29.0837 22.0065,30.8387 20.9455,31.9847 L20.9455,31.9847 Z M21.7755,27.0627 C20.9625,26.2577 19.9025,25.8567 18.8415,25.8567 C17.8085,25.8567 16.7745,26.2387 15.9695,27.0007 L15.9645,26.9957 C15.9485,27.0107 15.9345,27.0297 15.9195,27.0467 C15.9025,27.0627 15.8835,27.0767 15.8665,27.0927 C15.5145,27.4497 15.2435,27.8547 15.0455,28.2857 C14.0695,30.1357 13.8455,32.5987 13.8045,34.0077 C13.7865,34.6267 14.2795,35.1307 14.8945,35.1307 L14.9225,35.1307 C16.4445,35.0917 19.1985,34.8297 21.1065,33.5387 C21.2525,33.4447 21.3925,33.3407 21.5275,33.2267 C21.6605,33.1167 21.7895,33.0027 21.9105,32.8797 L21.8995,32.8687 C23.4235,31.2217 23.3825,28.6537 21.7755,27.0627 L21.7755,27.0627 Z"
      />
    </svg>
  );
});

export default Rocket;