import React from 'react';
import {SvgPathProps} from './Icon';

const ShakingHand: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M39.3413,19.1577 C39.1593,21.4337 37.7793,23.6657 35.4313,25.4607 L34.2723,26.4347 L33.2923,25.3547 C32.3613,24.3117 30.7553,24.2217 29.7123,25.1537 C29.3833,25.4477 29.1603,25.8117 29.0233,26.2007 C28.0763,25.3047 26.5873,25.2587 25.5983,26.1417 C24.9343,26.7357 24.6603,27.6027 24.7853,28.4217 C24.1853,28.4227 23.5843,28.6247 23.1023,29.0547 C22.3653,29.7137 22.1153,30.7067 22.3503,31.5967 C21.8043,31.6327 21.2653,31.8327 20.8263,32.2247 C20.3203,32.6767 20.0223,33.2977 19.9843,33.9737 C19.9713,34.2027 19.9993,34.4257 20.0453,34.6437 L19.6503,35.0047 C19.4123,35.2237 19.0883,35.3287 18.7423,35.2977 C18.3723,35.2647 18.0203,35.0867 17.7513,34.7957 C17.4833,34.5047 17.3343,34.1387 17.3313,33.7677 C17.3293,33.4187 17.4583,33.1057 17.6973,32.8867 L22.0583,28.8467 L22.0653,28.8407 L22.0653,28.8397 L22.0683,28.8377 L21.6263,28.3607 L21.1873,27.8817 L16.5773,32.1027 C16.3313,32.3287 16.0103,32.4457 15.6763,32.4307 C15.3403,32.4167 15.0293,32.2717 14.7993,32.0237 C14.5703,31.7747 14.4513,31.4527 14.4643,31.1167 C14.4773,30.7817 14.6193,30.4717 14.8623,30.2477 L19.8423,25.7007 L19.4043,25.2207 L18.9693,24.7387 L18.9663,24.7407 L18.9563,24.7507 L13.8923,29.3217 C13.6453,29.5497 13.3263,29.6687 12.9913,29.6547 C12.6593,29.6417 12.3523,29.5007 12.1273,29.2567 C11.9023,29.0127 11.7853,28.6957 11.7993,28.3627 C11.8143,28.0287 11.9583,27.7197 12.2063,27.4897 L18.1933,21.9137 L18.1813,21.9027 C19.5733,21.9367 21.0663,21.5527 22.1553,20.7677 L24.1153,22.3937 C25.3393,23.3357 26.8183,23.6717 28.1723,23.3167 C29.2033,23.0467 30.0033,22.3997 30.3683,21.5427 C30.4673,21.3097 30.4233,21.0407 30.2543,20.8527 L25.2613,15.3057 L26.9353,13.7707 C28.4833,12.4047 33.3913,9.7967 37.4573,14.0777 C38.8383,15.5327 39.4893,17.2887 39.3413,19.1577 L39.3413,19.1577 Z M34.0763,30.0057 C33.5683,30.4597 32.7853,30.4157 32.3313,29.9077 L32.3283,29.9047 L30.8353,28.2587 L30.4443,27.8067 C30.2553,27.5687 30.1513,27.2807 30.1683,26.9747 C30.1863,26.6447 30.3323,26.3427 30.5783,26.1227 C30.8133,25.9127 31.1073,25.8087 31.4003,25.8087 C31.7403,25.8087 32.0803,25.9497 32.3263,26.2237 L34.1743,28.2617 C34.3943,28.5077 34.5053,28.8247 34.4873,29.1537 C34.4683,29.4837 34.3223,29.7857 34.0763,30.0057 L34.0763,30.0057 Z M30.9983,32.2937 C30.4913,32.7467 29.7113,32.7037 29.2563,32.1987 L26.3663,28.8567 C26.1463,28.6107 26.0353,28.2937 26.0543,27.9637 C26.0723,27.6347 26.2183,27.3317 26.4643,27.1117 C26.9733,26.6577 27.7563,26.7017 28.2023,27.2017 L29.4273,28.6177 C29.4583,28.6567 29.4803,28.6997 29.5143,28.7377 L29.8633,29.1217 L31.0963,30.5487 C31.3163,30.7947 31.4273,31.1117 31.4083,31.4417 C31.3903,31.7707 31.2443,32.0737 30.9983,32.2937 L30.9983,32.2937 Z M28.1483,34.8397 C27.9023,35.0597 27.5843,35.1707 27.2553,35.1527 C26.9283,35.1337 26.6273,34.9897 26.4083,34.7467 L23.8703,31.7697 C23.4163,31.2617 23.4603,30.4787 23.9683,30.0247 C24.4773,29.5707 25.2593,29.6147 25.7033,30.1117 L28.2463,33.0947 C28.7003,33.6027 28.6563,34.3857 28.1483,34.8397 L28.1483,34.8397 Z M24.9943,36.9977 C24.4883,37.4497 23.7103,37.4077 23.2553,36.9057 L21.5943,34.9387 C21.3743,34.6927 21.2633,34.3757 21.2813,34.0467 C21.3003,33.7167 21.4463,33.4147 21.6923,33.1947 C22.2003,32.7397 22.9833,32.7837 23.4253,33.2787 L25.0923,35.2527 C25.5473,35.7607 25.5033,36.5437 24.9943,36.9977 L24.9943,36.9977 Z M10.8083,23.2217 C9.5713,21.7517 9.0103,20.0607 9.1833,18.3327 C9.3743,16.4247 10.4643,14.5497 12.1743,13.1877 C14.8083,11.0907 18.8383,10.1777 22.2473,13.8997 L28.9703,21.3707 C28.7173,21.6897 28.3233,21.9327 27.8423,22.0587 C26.8953,22.3067 25.7983,22.0477 24.9273,21.3787 L22.5743,19.4267 C22.3223,19.2177 21.9553,19.2277 21.7163,19.4507 C20.2283,20.8387 17.4023,20.9397 16.2173,20.0477 L15.4353,21.0857 C15.7613,21.3317 16.1563,21.5057 16.5783,21.6417 L12.6163,25.3317 L10.8083,23.2217 Z M38.4003,13.1827 C34.1603,8.7187 28.5903,10.5767 26.0653,12.8037 L24.3913,14.3397 L23.2093,13.0257 C19.1893,8.6357 14.3163,9.8217 11.3643,12.1707 C9.3823,13.7497 8.1153,15.9487 7.8893,18.2027 C7.6813,20.2887 8.3463,22.3137 9.8173,24.0637 L11.6643,26.2187 L11.3223,26.5367 C10.8213,26.9987 10.5303,27.6277 10.5013,28.3067 C10.4723,28.9877 10.7103,29.6377 11.1713,30.1377 C11.6323,30.6377 12.2613,30.9277 12.9423,30.9537 C12.9753,30.9547 13.0083,30.9557 13.0423,30.9557 C13.0893,30.9557 13.1343,30.9457 13.1823,30.9427 C13.1783,30.9847 13.1663,31.0247 13.1653,31.0677 C13.1393,31.7497 13.3803,32.4017 13.8443,32.9047 C14.3073,33.4077 14.9393,33.7007 15.6203,33.7297 C15.6583,33.7317 15.6953,33.7327 15.7333,33.7327 C15.8363,33.7327 15.9373,33.7167 16.0383,33.7047 C16.0373,33.7287 16.0313,33.7517 16.0313,33.7757 C16.0363,34.4717 16.3073,35.1467 16.7963,35.6777 C17.2843,36.2067 17.9353,36.5317 18.6293,36.5927 C18.7083,36.5997 18.7863,36.6027 18.8643,36.6027 C19.4923,36.6027 20.0773,36.3797 20.5293,35.9627 L20.6573,35.8447 L22.2683,37.7527 C22.2723,37.7567 22.2763,37.7617 22.2803,37.7657 C22.7803,38.3257 23.4753,38.6107 24.1723,38.6107 C24.7743,38.6107 25.3783,38.3987 25.8613,37.9677 C26.3413,37.5377 26.6103,36.9647 26.6803,36.3707 C26.8423,36.4127 27.0103,36.4407 27.1823,36.4497 C27.2313,36.4527 27.2793,36.4537 27.3283,36.4537 C27.9513,36.4537 28.5463,36.2277 29.0143,35.8087 C29.5873,35.2987 29.8613,34.5837 29.8503,33.8727 C29.9583,33.8867 30.0673,33.9067 30.1763,33.9067 C30.7783,33.9067 31.3823,33.6947 31.8643,33.2627 C32.3753,32.8067 32.6543,32.1877 32.7003,31.5547 C32.8823,31.5957 33.0683,31.6187 33.2543,31.6187 C33.8563,31.6187 34.4603,31.4067 34.9433,30.9747 C35.4473,30.5237 35.7463,29.9027 35.7843,29.2267 C35.8223,28.5537 35.5963,27.9057 35.1463,27.3977 L36.2443,26.4747 C38.8653,24.4717 40.4263,21.9097 40.6373,19.2607 C40.8133,17.0467 40.0193,14.8877 38.4003,13.1827 L38.4003,13.1827 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M35.5132,24.9814 L33.7982,26.5774 L33.3412,26.0124 C32.9192,25.4824 32.3162,25.1484 31.6432,25.0714 C30.9712,24.9954 30.3072,25.1854 29.7782,25.6064 C29.4392,25.8764 29.1922,26.2234 29.0292,26.6114 C28.6182,26.1754 28.0812,25.8924 27.4792,25.8234 C26.8072,25.7474 26.1442,25.9374 25.6142,26.3584 C25.0842,26.7804 24.7502,27.3834 24.6732,28.0564 C24.6532,28.2344 24.6542,28.4124 24.6702,28.5864 C24.0512,28.5524 23.4462,28.7344 22.9552,29.1244 C22.4252,29.5464 22.0912,30.1484 22.0142,30.8214 C21.9842,31.0934 22.0072,31.3594 22.0602,31.6184 C21.4962,31.6224 20.9502,31.8014 20.5022,32.1584 C19.9712,32.5804 19.6382,33.1834 19.5612,33.8564 C19.4952,34.4284 19.6342,34.9884 19.9262,35.4614 C19.4352,35.7174 18.7782,35.6244 18.3082,35.1624 C17.7422,34.6054 17.6752,33.7514 18.1612,33.2574 L22.3302,29.0014 L21.8662,28.5464 L21.4042,28.0894 L21.4022,28.0914 L21.3992,28.0944 L17.0042,32.5284 C16.5202,33.0214 15.7212,33.0244 15.2252,32.5364 C14.9842,32.2994 14.8492,31.9834 14.8462,31.6474 C14.8422,31.3114 14.9692,30.9954 15.2012,30.7594 L19.9552,25.9774 L19.4942,25.5184 L19.0362,25.0574 L14.1872,29.8824 C13.7022,30.3754 12.9102,30.3844 12.4212,29.9024 C11.9322,29.4214 11.9282,28.6284 12.4092,28.1404 L18.8332,21.7304 C20.1112,21.7624 21.4552,21.4514 22.4842,20.7964 L24.3482,22.5314 C25.5162,23.5414 26.9732,23.9614 28.3452,23.6854 C29.3892,23.4744 30.2262,22.8744 30.6392,22.0394 C30.7522,21.8134 30.7222,21.5414 30.5642,21.3444 L25.3502,14.8384 L26.4602,13.7164 C27.9412,12.2764 32.7172,9.4344 36.9852,13.5134 C38.4352,14.8984 39.1712,16.6214 39.1132,18.4954 C39.0422,20.7774 37.7722,23.0734 35.5132,24.9814 L35.5132,24.9814 Z M33.8572,30.7004 C33.3242,31.1254 32.5452,31.0364 32.1202,30.5034 C32.1192,30.5024 32.1182,30.5004 32.1172,30.4994 L30.7212,28.7714 L30.3562,28.2974 C30.1812,28.0494 30.0942,27.7554 30.1282,27.4514 C30.1652,27.1234 30.3282,26.8294 30.5872,26.6244 C30.8132,26.4434 31.0842,26.3564 31.3542,26.3564 C31.7192,26.3564 32.0802,26.5164 32.3262,26.8254 L34.0552,28.9644 C34.2612,29.2224 34.3532,29.5454 34.3162,29.8734 C34.2782,30.2014 34.1162,30.4954 33.8572,30.7004 L33.8572,30.7004 Z M30.6532,32.8084 C30.3952,33.0144 30.0722,33.1074 29.7442,33.0694 C29.4172,33.0324 29.1252,32.8704 28.9192,32.6144 L26.2252,29.1124 C26.0202,28.8544 25.9272,28.5314 25.9652,28.2034 C26.0022,27.8754 26.1652,27.5814 26.4232,27.3764 C26.6812,27.1704 27.0052,27.0774 27.3322,27.1154 C27.6602,27.1524 27.9542,27.3154 28.1532,27.5654 L29.2902,29.0434 C29.3202,29.0854 29.3422,29.1324 29.3752,29.1734 L29.7042,29.5814 L30.8512,31.0724 C31.0562,31.3304 31.1492,31.6534 31.1122,31.9814 C31.0752,32.3094 30.9112,32.6034 30.6532,32.8084 L30.6532,32.8084 Z M27.6622,35.1884 C27.4042,35.3934 27.0822,35.4854 26.7532,35.4484 C26.4282,35.4114 26.1362,35.2514 25.9302,34.9954 L23.5672,31.8784 C23.3622,31.6204 23.2692,31.2964 23.3062,30.9694 C23.3442,30.6414 23.5062,30.3474 23.7652,30.1414 C24.0232,29.9364 24.3462,29.8424 24.6742,29.8804 C25.0022,29.9184 25.2962,30.0814 25.4922,30.3274 L27.8602,33.4514 C28.0662,33.7104 28.1592,34.0324 28.1212,34.3604 C28.0832,34.6884 27.9212,34.9824 27.6622,35.1884 L27.6622,35.1884 Z M24.3902,37.1624 C24.1322,37.3674 23.8092,37.4604 23.4812,37.4224 C23.1562,37.3854 22.8652,37.2254 22.6592,36.9704 L21.1132,34.9124 C20.9082,34.6544 20.8152,34.3314 20.8522,34.0034 C20.8902,33.6754 21.0532,33.3814 21.3112,33.1764 C21.8452,32.7524 22.6232,32.8404 23.0362,33.3594 L24.5882,35.4254 C25.0132,35.9594 24.9242,36.7374 24.3902,37.1624 L24.3902,37.1624 Z M11.0142,22.5984 C9.8652,21.0594 9.4012,19.3394 9.6722,17.6234 C9.9722,15.7294 11.1672,13.9194 12.9522,12.6584 C15.7012,10.7154 19.7782,10.0344 22.9682,13.9444 L29.2532,21.7874 C28.9822,22.0924 28.5762,22.3124 28.0882,22.4104 C27.1282,22.6054 26.0472,22.2824 25.2162,21.5644 L22.9792,19.4814 C22.7402,19.2584 22.3722,19.2484 22.1202,19.4564 C20.5552,20.7564 17.7282,20.6964 16.5972,19.7374 L15.7562,20.7294 C16.1602,21.0714 16.6682,21.3234 17.2312,21.4914 L13.2382,25.4764 L11.0142,22.5984 Z M37.8832,12.5734 C33.4332,8.3204 27.9592,10.4454 25.5452,12.7934 L24.5322,13.8174 L23.9792,13.1274 C20.2152,8.5144 15.2832,9.4194 12.2022,11.5964 C10.1322,13.0594 8.7422,15.1824 8.3882,17.4204 C8.0602,19.4904 8.6092,21.5494 9.9792,23.3844 L12.3112,26.4014 L11.4862,27.2244 C10.4992,28.2284 10.5092,29.8454 11.5092,30.8294 C12.0032,31.3154 12.6482,31.5574 13.2932,31.5574 C13.3812,31.5574 13.4692,31.5414 13.5572,31.5324 C13.5552,31.5754 13.5452,31.6174 13.5462,31.6604 C13.5532,32.3434 13.8262,32.9834 14.3132,33.4634 C14.8132,33.9554 15.4642,34.2004 16.1142,34.2004 C16.2582,34.2004 16.4012,34.1834 16.5422,34.1584 C16.5632,34.8484 16.8472,35.5484 17.3962,36.0884 C17.9542,36.6384 18.6742,36.9154 19.3752,36.9154 C19.8462,36.9154 20.3062,36.7854 20.7062,36.5344 L21.6252,37.7594 C21.6292,37.7644 21.6332,37.7694 21.6372,37.7734 C22.0582,38.3034 22.6612,38.6384 23.3342,38.7144 C23.4322,38.7254 23.5292,38.7314 23.6262,38.7314 C24.1972,38.7314 24.7462,38.5404 25.2002,38.1794 C25.6892,37.7904 26.0012,37.2434 26.1092,36.6324 C26.2692,36.6844 26.4352,36.7214 26.6062,36.7404 C26.7032,36.7514 26.8012,36.7574 26.8982,36.7574 C27.4692,36.7574 28.0182,36.5654 28.4722,36.2054 C29.0022,35.7834 29.3362,35.1804 29.4122,34.5074 C29.4202,34.4454 29.4132,34.3844 29.4152,34.3224 C29.4762,34.3344 29.5342,34.3544 29.5972,34.3614 C29.6952,34.3724 29.7922,34.3774 29.8892,34.3774 C30.4592,34.3774 31.0092,34.1864 31.4622,33.8264 C31.9822,33.4124 32.3102,32.8234 32.3952,32.1664 C32.5282,32.2044 32.6612,32.2374 32.8012,32.2534 C32.8982,32.2644 32.9962,32.2704 33.0932,32.2704 C33.6632,32.2704 34.2132,32.0784 34.6662,31.7184 C35.1972,31.2964 35.5312,30.6934 35.6072,30.0204 C35.6842,29.3474 35.4942,28.6854 35.0692,28.1504 L34.6172,27.5904 L36.3752,25.9544 C38.8962,23.8264 40.3302,21.1914 40.4122,18.5354 C40.4812,16.3144 39.5832,14.1974 37.8832,12.5734 L37.8832,12.5734 Z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default ShakingHand;
