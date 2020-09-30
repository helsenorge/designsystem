import React from 'react';
import {SvgPathProps} from './Icon';

const DigestiveSystem: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <g fillRule="evenodd" transform="translate(10 6)">
      <path d="M10.1963,20.7066 C9.2743,20.7136 8.1473,20.7196 7.3643,20.7196 C6.7403,20.7196 5.6943,20.5606 5.6943,19.5006 C5.6943,18.4256 7.2373,18.3466 7.2533,18.3456 L7.2913,18.3456 C8.0083,18.3456 8.5923,18.9906 9.2133,19.6746 L9.5503,20.0416 C9.7663,20.2716 9.9813,20.4946 10.1963,20.7066 M22.4993,27.8406 L12.0303,27.8406 L12.0303,29.1416 L22.4993,29.1416 C23.9363,29.1416 25.1053,30.3106 25.1053,31.7476 C25.1053,33.1856 23.9363,34.3536 22.4993,34.3536 L4.6213,34.3536 C4.1553,34.3486 3.7783,33.9706 3.7783,33.5036 C3.7783,33.0326 4.1603,32.6506 4.6313,32.6506 L17.4643,32.6506 L17.4643,31.3506 L4.3053,31.3506 C2.8683,31.3506 1.6993,30.1816 1.6993,28.7436 C1.6993,27.3066 2.8683,26.1376 4.3053,26.1376 L6.8503,26.1376 L6.8503,26.1336 C11.7013,26.1146 22.5043,26.0346 22.5043,26.0346 L22.4943,24.7336 C22.4943,24.7336 8.5903,24.8366 5.2533,24.8366 C4.7733,24.8366 3.9423,24.5626 3.1763,23.7906 C2.5093,23.1156 1.7153,21.8806 1.7343,19.8276 C1.7533,17.7496 2.3433,14.2636 6.0923,14.2636 C7.0163,14.2636 7.8563,14.2946 8.6153,14.3236 C10.7403,14.4026 12.2763,14.4626 13.3633,13.7466 C14.6353,12.9086 15.0253,11.6146 15.4023,10.3616 C15.6033,9.6946 15.8113,9.0046 16.1553,8.4036 C17.5193,6.0186 19.6033,5.5396 22.5233,5.5396 C24.8823,5.5396 27.4193,7.4436 27.4193,11.6266 C27.4193,14.3446 26.0113,21.5106 19.5843,22.0286 C14.0593,22.4696 12.4633,21.2376 10.4973,19.1506 L10.1753,18.8016 C9.4123,17.9586 8.5293,16.9806 7.2123,17.0466 C6.0793,17.0826 4.3933,17.7666 4.3933,19.5006 C4.3933,21.0306 5.5593,22.0196 7.3643,22.0196 C8.7693,22.0196 11.2743,21.9986 11.7413,21.9946 C13.3963,23.0986 15.5943,23.6576 19.6883,23.3236 C20.7533,23.2386 21.6843,22.9856 22.5223,22.6286 C23.9493,22.6416 25.1053,23.8036 25.1053,25.2326 C25.1053,26.6706 23.9363,27.8406 22.4993,27.8406 M26.4063,25.2326 C26.4063,23.6766 25.4853,22.3406 24.1643,21.7126 C27.7943,19.0656 28.7193,13.9266 28.7193,11.6266 C28.7193,6.5516 25.5083,4.2386 22.5233,4.2386 C22.0703,4.2386 21.6163,4.2516 21.1653,4.2826 L21.1653,0.0306 L19.8643,0.0306 L19.8643,4.4356 C19.1643,4.5596 18.4863,4.7586 17.8463,5.0656 L17.8463,0.0306 L16.5463,0.0306 L16.5463,5.9026 C15.9823,6.3776 15.4693,6.9846 15.0263,7.7586 C14.6093,8.4876 14.3803,9.2506 14.1583,9.9866 C13.8193,11.1116 13.5273,12.0826 12.6483,12.6606 C11.9093,13.1466 10.5503,13.0986 8.6643,13.0236 C7.8903,12.9946 7.0343,12.9626 6.0923,12.9626 C2.5883,12.9626 0.4723,15.5246 0.4333,19.8156 C0.4113,22.3166 1.4113,23.8546 2.2543,24.7056 C2.4183,24.8716 2.5963,25.0106 2.7743,25.1506 C1.3803,25.7476 0.3983,27.1326 0.3983,28.7436 C0.3983,30.3716 1.4003,31.7666 2.8173,32.3526 C2.6053,32.6866 2.4773,33.0796 2.4773,33.5036 C2.4773,34.5796 3.2733,35.4656 4.3053,35.6236 L4.3053,35.6546 L4.6123,35.6546 C4.6183,35.6546 4.6253,35.6566 4.6313,35.6566 L4.6313,35.6546 L22.4993,35.6546 C24.6533,35.6546 26.4063,33.9016 26.4063,31.7476 C26.4063,30.3876 25.7063,29.1906 24.6493,28.4906 C25.7063,27.7906 26.4063,26.5926 26.4063,25.2326" />
      <polygon points="8.623 29.141 10.494 29.141 10.494 27.84 8.623 27.84" />
      <polygon points="3.879 29.141 7.177 29.141 7.177 27.84 3.879 27.84" />
      <polygon points="19.035 32.651 22.499 32.651 22.499 31.35 19.035 31.35" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(10 6)">
      <path d="M10.1968,21.3872 C9.2738,21.3932 8.1478,21.3992 7.3648,21.3992 C6.7408,21.3992 5.6948,21.2412 5.6948,20.1812 C5.6948,19.1052 7.2368,19.0262 7.2528,19.0252 L7.2898,19.0252 C8.0068,19.0252 8.5928,19.6712 9.2148,20.3562 L9.5508,20.7222 C9.7668,20.9522 9.9808,21.1742 10.1968,21.3872 M22.4988,28.5112 L12.0308,28.5112 L12.0308,29.8122 L22.4988,29.8122 C24.0098,29.8122 25.1048,30.7932 25.1048,32.1472 C25.1048,33.6712 23.7968,34.3542 22.4988,34.3542 L4.6208,34.3542 C4.1548,34.3482 3.7778,33.9702 3.7778,33.5032 C3.7778,33.0332 4.1598,32.6512 4.6308,32.6512 L17.4648,32.6512 L17.4648,31.3502 L4.3048,31.3502 C2.8678,31.3502 1.6988,30.1812 1.6988,28.7432 C1.6988,27.6172 2.4148,26.6432 3.4598,26.2862 C4.0548,26.6162 4.6748,26.8172 5.2528,26.8172 C8.5918,26.8172 22.5038,26.7152 22.5038,26.7152 L22.4938,25.4142 C22.4938,25.4142 8.5898,25.5162 5.2528,25.5162 C4.7728,25.5162 3.9418,25.2422 3.1758,24.4702 C2.5078,23.7952 1.7148,22.5602 1.7338,20.5082 C1.7528,18.4302 2.3438,14.9432 6.0928,14.9432 C7.0168,14.9432 7.8588,14.9742 8.6188,15.0032 C10.7408,15.0842 12.2758,15.1422 13.3628,14.4272 C14.6348,13.5892 15.0248,12.2942 15.4018,11.0422 C15.6028,10.3742 15.8108,9.6842 16.1548,9.0842 C17.5208,6.6982 19.6038,6.2192 22.5238,6.2192 C24.8818,6.2192 27.4188,8.1242 27.4188,12.3072 C27.4188,15.0252 26.0108,22.1912 19.5848,22.7092 C14.0578,23.1512 12.4628,21.9182 10.4978,19.8312 L10.1768,19.4832 C9.4138,18.6402 8.5478,17.6702 7.2118,17.7262 C6.0788,17.7622 4.3938,18.4462 4.3938,20.1812 C4.3938,21.7102 5.5598,22.6992 7.3648,22.6992 C8.7688,22.6992 11.2768,22.6792 11.7418,22.6752 C13.3968,23.7772 15.5918,24.3392 19.6878,24.0042 C20.7598,23.9182 21.6958,23.6622 22.5378,23.3022 C23.9568,23.3242 25.1048,24.4802 25.1048,25.9052 C25.1048,27.3422 23.9358,28.5112 22.4988,28.5112 M26.4058,25.9052 C26.4058,24.3512 25.4878,23.0172 24.1718,22.3882 C27.7958,19.7402 28.7188,14.6062 28.7188,12.3072 C28.7188,7.2312 25.5078,4.9182 22.5238,4.9182 C22.0708,4.9182 21.6168,4.9312 21.1658,4.9622 L21.1658,0.0312 L19.8648,0.0312 L19.8648,5.1152 C19.1648,5.2402 18.4858,5.4382 17.8458,5.7462 L17.8458,0.0312 L16.5458,0.0312 L16.5458,6.5822 C15.9818,7.0572 15.4688,7.6642 15.0258,8.4382 C14.6088,9.1672 14.3798,9.9302 14.1578,10.6672 C13.8188,11.7912 13.5268,12.7632 12.6478,13.3412 C11.9088,13.8272 10.5478,13.7732 8.6678,13.7042 C7.8928,13.6752 7.0358,13.6422 6.0928,13.6422 C2.5888,13.6422 0.4728,16.2042 0.4328,20.4962 C0.4108,22.9962 1.4108,24.5342 2.2528,25.3852 C2.2608,25.3942 2.2718,25.4002 2.2808,25.4092 C1.1358,26.1012 0.3978,27.3452 0.3978,28.7432 C0.3978,30.3712 1.3998,31.7662 2.8168,32.3532 C2.6048,32.6862 2.4768,33.0792 2.4768,33.5032 C2.4768,34.5792 3.2728,35.4662 4.3048,35.6242 L4.3048,35.6552 L4.6118,35.6552 C4.6178,35.6552 4.6248,35.6572 4.6308,35.6572 L4.6308,35.6552 L22.4988,35.6552 C24.7988,35.6552 26.4058,34.2122 26.4058,32.1472 C26.4058,30.8522 25.7508,29.7562 24.7158,29.1162 C25.7348,28.4102 26.4058,27.2362 26.4058,25.9052" />
      <polygon points="8.624 29.741 10.494 29.741 10.494 28.44 8.624 28.44" />
      <polygon points="3.879 29.741 7.177 29.741 7.177 28.44 3.879 28.44" />
      <polygon points="19.035 32.651 22.499 32.651 22.499 31.35 19.035 31.35" />
    </g>
  );

  return isHovered ? normalHover : normal;
};

export default DigestiveSystem;
