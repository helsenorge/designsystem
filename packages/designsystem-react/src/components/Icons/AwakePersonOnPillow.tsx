import React from 'react';
import {IconRawProps} from './Icon';

const AwakePersonOnPillow = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fill-rule="evenodd"
      d="M12.8962,24.8521 L12.8962,27.3921 L12.3762,27.3921 C11.6762,27.3921 11.1062,26.8231 11.1062,26.1221 C11.1062,25.4211 11.6762,24.8521 12.3762,24.8521 L12.8962,24.8521 Z M35.1042,27.3921 L35.1042,24.8521 L35.6232,24.8521 C36.3242,24.8521 36.8942,25.4211 36.8942,26.1221 C36.8942,26.8231 36.3242,27.3921 35.6232,27.3921 L35.1042,27.3921 Z M42.2472,33.9351 C41.8342,34.4661 41.1272,34.6811 40.4882,34.4741 L37.1342,33.3731 L36.9722,33.4031 C36.9572,33.4061 35.6412,33.6391 33.1172,33.8521 C34.1232,32.3571 34.7492,30.5921 34.8842,28.6931 L35.6232,28.6931 C37.0412,28.6931 38.1942,27.5401 38.1942,26.1221 C38.1942,24.7051 37.0412,23.5511 35.6232,23.5511 L34.9222,23.5511 L34.9222,23.0391 C34.9222,17.1781 30.1552,12.4111 24.2942,12.4111 L23.7052,12.4111 C17.8452,12.4111 13.0782,17.1781 13.0782,23.0391 L13.0782,23.5511 L12.3762,23.5511 C10.9592,23.5511 9.8062,24.7051 9.8062,26.1221 C9.8062,27.5401 10.9592,28.6931 12.3762,28.6931 L13.1162,28.6931 C13.2512,30.5921 13.8772,32.3581 14.8832,33.8521 C12.3572,33.6401 11.0422,33.4061 11.0282,33.4031 L10.8652,33.3731 L7.5122,34.4731 C6.8722,34.6851 6.1662,34.4661 5.7522,33.9351 C5.3132,33.3691 5.3062,32.5731 5.7362,31.9981 L7.6262,29.4761 L7.6262,15.8151 L5.7362,13.2911 C5.3062,12.7181 5.3132,11.9211 5.7522,11.3551 C6.1662,10.8251 6.8732,10.6101 7.5112,10.8171 L10.8652,11.9171 L11.0282,11.8881 C11.0712,11.8801 15.4982,11.0921 24.0002,11.0921 C32.5012,11.0921 36.9282,11.8801 36.9722,11.8881 L37.1352,11.9171 L40.4882,10.8171 C41.1272,10.6101 41.8342,10.8251 42.2472,11.3551 C42.6872,11.9211 42.6932,12.7181 42.2642,13.2911 L40.3742,15.8151 L40.3742,29.4761 L42.2642,31.9981 C42.6932,32.5731 42.6872,33.3691 42.2472,33.9351 L42.2472,33.9351 Z M20.3512,18.5741 L20.3512,18.9691 C20.3512,21.4961 18.2962,23.5511 15.7692,23.5511 L14.3772,23.5511 L14.3772,23.0391 C14.3772,17.8951 18.5622,13.7111 23.7052,13.7111 L24.2942,13.7111 C29.4382,13.7111 33.6222,17.8951 33.6222,23.0391 L33.6222,23.5511 L26.3132,23.5511 C23.7432,23.5511 21.6512,21.4601 21.6512,18.8891 L21.6512,18.5741 L20.3512,18.5741 Z M24.2942,37.2611 L23.7052,37.2611 C18.5622,37.2611 14.3772,33.0781 14.3772,27.9341 L14.3772,24.8521 L15.7692,24.8521 C18.0582,24.8521 20.0452,23.5391 21.0172,21.6251 C22.0102,23.5401 24.0112,24.8521 26.3132,24.8521 L33.6222,24.8521 L33.6222,27.9341 C33.6222,33.0781 29.4382,37.2611 24.2942,37.2611 L24.2942,37.2611 Z M41.6742,29.0421 L41.6742,16.2481 L43.3042,14.0711 C44.0842,13.0311 44.0712,11.5851 43.2732,10.5581 C42.5242,9.5941 41.2432,9.2001 40.0832,9.5821 L37.0402,10.5811 C36.1502,10.4341 31.8152,9.7911 24.0002,9.7911 C16.1842,9.7911 11.8492,10.4341 10.9602,10.5811 L7.9172,9.5821 C6.7582,9.2001 5.4752,9.5941 4.7262,10.5581 C3.9282,11.5851 3.9162,13.0311 4.6952,14.0711 L6.3262,16.2481 L6.3262,29.0421 L4.6952,31.2191 C3.9162,32.2611 3.9282,33.7061 4.7262,34.7321 C5.4742,35.6971 6.7562,36.0891 7.9172,35.7081 L10.9602,34.7101 C11.4722,34.7941 13.1552,35.0441 16.0082,35.2421 C17.9462,37.2821 20.6762,38.5621 23.7052,38.5621 L24.2942,38.5621 C27.3242,38.5621 30.0542,37.2821 31.9912,35.2421 C34.8432,35.0441 36.5282,34.7941 37.0392,34.7101 L40.0832,35.7091 C40.3782,35.8051 40.6812,35.8521 40.9812,35.8521 C41.8612,35.8521 42.7162,35.4511 43.2732,34.7321 C44.0712,33.7061 44.0842,32.2611 43.3042,31.2191 L41.6742,29.0421 Z M28.7252,30.0371 C27.8142,30.0371 27.0732,29.2951 27.0732,28.3841 C27.0732,27.4741 27.8142,26.7331 28.7252,26.7331 C29.6352,26.7331 30.3762,27.4741 30.3762,28.3841 C30.3762,29.2951 29.6352,30.0371 28.7252,30.0371 L28.7252,30.0371 Z M28.7252,25.7331 C27.2622,25.7331 26.0732,26.9221 26.0732,28.3841 C26.0732,29.8471 27.2622,31.0371 28.7252,31.0371 C30.1872,31.0371 31.3762,29.8471 31.3762,28.3841 C31.3762,26.9221 30.1872,25.7331 28.7252,25.7331 L28.7252,25.7331 Z M28.7252,27.6401 C28.3132,27.6401 27.9802,27.9731 27.9802,28.3841 C27.9802,28.7961 28.3132,29.1291 28.7252,29.1291 C29.1362,29.1291 29.4692,28.7961 29.4692,28.3841 C29.4692,27.9731 29.1362,27.6401 28.7252,27.6401 L28.7252,27.6401 Z M19.3802,27.6401 C18.9692,27.6401 18.6352,27.9731 18.6352,28.3841 C18.6352,28.7961 18.9692,29.1291 19.3802,29.1291 C19.7912,29.1291 20.1252,28.7961 20.1252,28.3841 C20.1252,27.9731 19.7912,27.6401 19.3802,27.6401 L19.3802,27.6401 Z M21.7272,32.8671 L21.0972,33.0531 L21.3812,34.0121 L22.0112,33.8261 C23.3182,33.4411 24.6992,33.4411 26.0052,33.8261 L26.6352,34.0121 L26.9192,33.0531 L26.2892,32.8671 C24.7972,32.4251 23.2192,32.4271 21.7272,32.8671 L21.7272,32.8671 Z M19.3802,30.0371 C18.4692,30.0371 17.7282,29.2951 17.7282,28.3841 C17.7282,27.4741 18.4692,26.7331 19.3802,26.7331 C20.2912,26.7331 21.0322,27.4741 21.0322,28.3841 C21.0322,29.2951 20.2912,30.0371 19.3802,30.0371 L19.3802,30.0371 Z M22.0322,28.3841 C22.0322,26.9221 20.8422,25.7331 19.3802,25.7331 C17.9172,25.7331 16.7282,26.9221 16.7282,28.3841 C16.7282,29.8471 17.9172,31.0371 19.3802,31.0371 C20.8422,31.0371 22.0322,29.8471 22.0322,28.3841 L22.0322,28.3841 Z"
    />
  );

  const normalHover = (
    <path
      fill-rule="evenodd"
      d="M17.7284,28.3784 C17.7314,27.4714 18.4714,26.7324 19.3794,26.7324 C20.2894,26.7324 21.0284,27.4714 21.0314,28.3784 L17.7284,28.3784 Z M19.3794,30.0364 C18.8434,30.0364 18.3714,29.7754 18.0694,29.3784 L20.6904,29.3784 C20.3894,29.7754 19.9164,30.0364 19.3794,30.0364 L19.3794,30.0364 Z M22.0324,28.3844 C22.0324,26.9224 20.8424,25.7324 19.3794,25.7324 C17.9174,25.7324 16.7284,26.9224 16.7284,28.3844 C16.7284,29.8474 17.9174,31.0364 19.3794,31.0364 C20.8424,31.0364 22.0324,29.8474 22.0324,28.3844 L22.0324,28.3844 Z M27.0734,28.3784 C27.0764,27.4714 27.8154,26.7324 28.7244,26.7324 C29.6334,26.7324 30.3734,27.4714 30.3754,28.3784 L27.0734,28.3784 Z M28.7244,30.0364 C28.1884,30.0364 27.7154,29.7754 27.4144,29.3784 L30.0354,29.3784 C29.7334,29.7754 29.2614,30.0364 28.7244,30.0364 L28.7244,30.0364 Z M28.7244,25.7324 C27.2624,25.7324 26.0724,26.9224 26.0724,28.3844 C26.0724,29.8474 27.2624,31.0364 28.7244,31.0364 C30.1864,31.0364 31.3764,29.8474 31.3764,28.3844 C31.3764,26.9224 30.1864,25.7324 28.7244,25.7324 L28.7244,25.7324 Z M21.7274,32.8664 L21.0974,33.0534 L21.3814,34.0124 L22.0104,33.8254 C23.3174,33.4404 24.6994,33.4404 26.0054,33.8254 L26.6354,34.0124 L26.9194,33.0534 L26.2894,32.8664 C24.7974,32.4254 23.2194,32.4274 21.7274,32.8664 L21.7274,32.8664 Z M12.8964,24.8524 L12.8964,27.3924 L12.3764,27.3924 C11.6764,27.3924 11.1064,26.8224 11.1064,26.1214 C11.1064,25.4214 11.6764,24.8524 12.3764,24.8524 L12.8964,24.8524 Z M35.1034,27.3924 L35.1034,24.8524 L35.6234,24.8524 C36.3244,24.8524 36.8934,25.4214 36.8934,26.1214 C36.8934,26.8224 36.3244,27.3924 35.6234,27.3924 L35.1034,27.3924 Z M42.2474,33.9354 C41.8344,34.4664 41.1274,34.6814 40.4884,34.4744 L37.1344,33.3734 L36.9724,33.4024 C36.9574,33.4054 35.6414,33.6394 33.1174,33.8524 C34.1234,32.3574 34.7494,30.5924 34.8834,28.6924 L35.6234,28.6924 C37.0404,28.6924 38.1934,27.5394 38.1934,26.1214 C38.1934,24.7044 37.0404,23.5514 35.6234,23.5514 L34.9224,23.5514 L34.9224,23.0384 C34.9224,17.1784 30.1544,12.4104 24.2944,12.4104 L23.7054,12.4104 C17.8454,12.4104 13.0774,17.1784 13.0774,23.0384 L13.0774,23.5514 L12.3764,23.5514 C10.9594,23.5514 9.8064,24.7044 9.8064,26.1214 C9.8064,27.5394 10.9594,28.6924 12.3764,28.6924 L13.1164,28.6924 C13.2514,30.5924 13.8764,32.3574 14.8824,33.8524 C12.3564,33.6404 11.0424,33.4054 11.0274,33.4024 L10.8654,33.3734 L7.5124,34.4734 C6.8724,34.6854 6.1654,34.4664 5.7524,33.9354 C5.3134,33.3684 5.3064,32.5724 5.7364,31.9984 L7.6254,29.4764 L7.6254,15.8154 L5.7364,13.2914 C5.3064,12.7184 5.3134,11.9214 5.7524,11.3554 C6.1654,10.8244 6.8734,10.6094 7.5114,10.8164 L10.8654,11.9174 L11.0274,11.8884 C11.0714,11.8804 15.4984,11.0924 23.9994,11.0924 C32.5014,11.0924 36.9284,11.8804 36.9724,11.8884 L37.1344,11.9174 L40.4884,10.8164 C41.1274,10.6094 41.8344,10.8244 42.2474,11.3554 C42.6864,11.9214 42.6934,12.7184 42.2634,13.2914 L40.3744,15.8154 L40.3744,29.4764 L42.2634,31.9984 C42.6934,32.5724 42.6864,33.3684 42.2474,33.9354 L42.2474,33.9354 Z M20.3514,18.5734 L20.3514,18.9694 C20.3514,21.4954 18.2954,23.5514 15.7694,23.5514 L14.3774,23.5514 L14.3774,23.0384 C14.3774,17.8954 18.5614,13.7114 23.7054,13.7114 L24.2944,13.7114 C29.4374,13.7114 33.6224,17.8954 33.6224,23.0384 L33.6224,23.5514 L26.3134,23.5514 C23.7434,23.5514 21.6514,21.4604 21.6514,18.8894 L21.6514,18.5734 L20.3514,18.5734 Z M24.2944,37.2614 L23.7054,37.2614 C18.5614,37.2614 14.3774,33.0774 14.3774,27.9344 L14.3774,24.8524 L15.7694,24.8524 C18.0574,24.8524 20.0444,23.5384 21.0174,21.6254 C22.0104,23.5404 24.0114,24.8524 26.3134,24.8524 L33.6224,24.8524 L33.6224,27.9344 C33.6224,33.0774 29.4374,37.2614 24.2944,37.2614 L24.2944,37.2614 Z M41.6734,29.0424 L41.6734,16.2484 L43.3044,14.0704 C44.0834,13.0304 44.0714,11.5854 43.2734,10.5584 C42.5244,9.5944 41.2424,9.1994 40.0824,9.5824 L37.0404,10.5804 C36.1504,10.4344 31.8154,9.7914 23.9994,9.7914 C16.1844,9.7914 11.8494,10.4344 10.9604,10.5804 L7.9164,9.5824 C6.7584,9.1994 5.4754,9.5944 4.7264,10.5584 C3.9284,11.5854 3.9154,13.0304 4.6954,14.0704 L6.3264,16.2484 L6.3264,29.0424 L4.6954,31.2194 C3.9154,32.2614 3.9284,33.7054 4.7264,34.7324 C5.4744,35.6964 6.7564,36.0894 7.9164,35.7084 L10.9604,34.7104 C11.4724,34.7944 13.1554,35.0444 16.0084,35.2414 C17.9464,37.2814 20.6764,38.5624 23.7054,38.5624 L24.2944,38.5624 C27.3234,38.5624 30.0534,37.2814 31.9914,35.2414 C34.8434,35.0444 36.5284,34.7944 37.0394,34.7104 L40.0834,35.7094 C40.3784,35.8054 40.6814,35.8524 40.9804,35.8524 C41.8604,35.8524 42.7154,35.4504 43.2734,34.7324 C44.0714,33.7054 44.0834,32.2614 43.3044,31.2194 L41.6734,29.0424 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className="icon"
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default AwakePersonOnPillow;
