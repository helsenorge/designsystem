import React from 'react';
import {IconRawProps} from './Icon';

const Receptionist = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M34.8818,20.1723 L34.7598,20.1723 L34.7598,14.0103 L34.8818,14.0103 C36.5808,14.0103 37.9628,15.3923 37.9628,17.0913 C37.9628,18.7903 36.5808,20.1723 34.8818,20.1723 L34.8818,20.1723 Z M16.4198,16.0763 L17.3808,16.0763 C19.1908,16.0763 20.7608,15.0323 21.5218,13.5153 C22.2988,15.0343 23.8808,16.0763 25.7008,16.0763 L31.3308,16.0763 L31.3308,20.0213 C31.3308,24.0043 28.0898,27.2443 24.1078,27.2443 L23.6428,27.2443 C22.4098,27.2443 21.2218,26.9283 20.1668,26.3473 C21.1798,26.1813 21.9588,25.3063 21.9588,24.2463 C21.9588,23.0683 20.9998,22.1093 19.8218,22.1093 L17.4058,22.1093 C17.1808,22.1093 16.9668,22.1543 16.7628,22.2193 C16.5368,21.5113 16.4198,20.7763 16.4198,20.0213 L16.4198,16.0763 Z M16.4198,14.6583 C16.4198,10.6753 19.6598,7.4353 23.6428,7.4353 L24.1078,7.4353 C28.0898,7.4353 31.3308,10.6753 31.3308,14.6583 L31.3308,15.0763 L25.7008,15.0763 C23.6648,15.0763 22.0088,13.4203 22.0088,11.3843 L22.0088,11.1353 L21.0088,11.1353 L21.0088,11.4473 C21.0088,13.4483 19.3818,15.0763 17.3808,15.0763 L16.4198,15.0763 L16.4198,14.6583 Z M17.4058,25.0823 C16.9448,25.0823 16.5698,24.7073 16.5698,24.2463 C16.5698,23.7843 16.9448,23.4093 17.4058,23.4093 L19.8218,23.4093 C20.2828,23.4093 20.6588,23.7843 20.6588,24.2463 C20.6588,24.7073 20.2828,25.0823 19.8218,25.0823 L17.4058,25.0823 Z M12.9898,20.1723 L12.8678,20.1723 C11.1698,20.1723 9.7868,18.7903 9.7868,17.0913 C9.7868,15.3923 11.1698,14.0103 12.8678,14.0103 L12.9898,14.0103 L12.9898,20.1723 Z M34.8818,12.7113 L34.6388,12.7113 C33.9308,7.5583 29.5118,3.5733 24.1688,3.5733 L23.5818,3.5733 C18.2378,3.5733 13.8188,7.5583 13.1108,12.7113 L12.8678,12.7113 C10.4518,12.7113 8.4868,14.6753 8.4868,17.0913 C8.4868,19.5063 10.4518,21.4723 12.8678,21.4723 L13.0008,21.4723 L13.0008,22.2363 C13.0008,23.6043 14.0428,24.7213 15.3728,24.8673 C15.6408,25.7413 16.4458,26.3823 17.4058,26.3823 L17.9828,26.3823 C19.5448,27.7743 21.5408,28.5443 23.6428,28.5443 L24.1078,28.5443 C28.8068,28.5443 32.6308,24.7213 32.6308,20.0213 L32.6308,14.6583 C32.6308,9.9593 28.8068,6.1353 24.1078,6.1353 L23.6428,6.1353 C18.9428,6.1353 15.1198,9.9593 15.1198,14.6583 L15.1198,20.0213 C15.1198,21.0533 15.3108,22.0553 15.6698,23.0103 C15.5488,23.1793 15.4578,23.3683 15.3898,23.5683 C14.7698,23.4433 14.3008,22.8933 14.3008,22.2363 L14.3008,14.1533 C14.3008,9.0363 18.4648,4.8733 23.5818,4.8733 L24.1688,4.8733 C29.2858,4.8733 33.4488,9.0363 33.4488,14.1533 L33.4598,14.1533 L33.4598,21.4723 L34.8818,21.4723 C37.2978,21.4723 39.2628,19.5063 39.2628,17.0913 C39.2628,14.6753 37.2978,12.7113 34.8818,12.7113 L34.8818,12.7113 Z M27.0108,19.4643 C27.3358,19.4643 27.5988,19.2013 27.5988,18.8773 C27.5988,18.5523 27.3358,18.2893 27.0108,18.2893 C26.6868,18.2893 26.4238,18.5523 26.4238,18.8773 C26.4238,19.2013 26.6868,19.4643 27.0108,19.4643 L27.0108,19.4643 Z M36.4228,42.8773 L11.3268,42.8773 L11.3268,39.9473 C11.3268,35.4263 14.3018,31.3803 18.5928,30.0193 C21.8518,31.6583 25.8978,31.6583 29.1568,30.0193 C33.4478,31.3803 36.4228,35.4263 36.4228,39.9473 L36.4228,42.8773 Z M29.2748,28.6963 L29.0208,28.6233 L28.7878,28.7473 C25.7818,30.3493 21.9678,30.3493 18.9628,28.7473 L18.7298,28.6233 L18.4758,28.6963 C13.5018,30.1383 10.0268,34.7653 10.0268,39.9473 L10.0268,44.1763 L37.7228,44.1763 L37.7228,39.9473 C37.7228,34.7653 34.2488,30.1383 29.2748,28.6963 L29.2748,28.6963 Z M20.8218,19.4643 C21.1458,19.4643 21.4088,19.2013 21.4088,18.8773 C21.4088,18.5523 21.1458,18.2893 20.8218,18.2893 C20.4968,18.2893 20.2338,18.5523 20.2338,18.8773 C20.2338,19.2013 20.4968,19.4643 20.8218,19.4643 L20.8218,19.4643 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M23.8749,25.3168 C24.8959,25.3168 25.7239,24.4888 25.7239,23.4678 L22.0259,23.4678 C22.0259,24.4888 22.8539,25.3168 23.8749,25.3168 L23.8749,25.3168 Z M20.8219,19.4638 C21.1459,19.4638 21.4089,19.2008 21.4089,18.8768 C21.4089,18.5528 21.1459,18.2888 20.8219,18.2888 C20.4969,18.2888 20.2339,18.5528 20.2339,18.8768 C20.2339,19.2008 20.4969,19.4638 20.8219,19.4638 L20.8219,19.4638 Z M27.0109,19.4638 C27.3359,19.4638 27.5989,19.2008 27.5989,18.8768 C27.5989,18.5528 27.3359,18.2888 27.0109,18.2888 C26.6869,18.2888 26.4239,18.5528 26.4239,18.8768 C26.4239,19.2008 26.6869,19.4638 27.0109,19.4638 L27.0109,19.4638 Z M34.8819,20.1718 L34.7599,20.1718 L34.7599,14.0108 L34.8819,14.0108 C36.5809,14.0108 37.9629,15.3928 37.9629,17.0908 C37.9629,18.7898 36.5809,20.1718 34.8819,20.1718 L34.8819,20.1718 Z M16.4189,16.0758 L17.3809,16.0758 C19.1899,16.0758 20.7609,15.0318 21.5209,13.5148 C22.2989,15.0338 23.8799,16.0758 25.7009,16.0758 L31.3309,16.0758 L31.3309,20.0218 C31.3309,24.0048 28.0899,27.2448 24.1069,27.2448 L23.6429,27.2448 C22.4099,27.2448 21.2219,26.9288 20.1659,26.3478 C21.1799,26.1818 21.9579,25.3068 21.9579,24.2458 C21.9579,23.0678 20.9999,22.1088 19.8219,22.1088 L17.4069,22.1088 C17.1809,22.1088 16.9669,22.1538 16.7629,22.2188 C16.5369,21.5118 16.4189,20.7758 16.4189,20.0218 L16.4189,16.0758 Z M16.4189,14.6588 C16.4189,10.6758 19.6599,7.4358 23.6429,7.4358 L24.1069,7.4358 C28.0899,7.4358 31.3309,10.6758 31.3309,14.6588 L31.3309,15.0758 L25.7009,15.0758 C23.6649,15.0758 22.0089,13.4208 22.0089,11.3848 L22.0089,11.1348 L21.0089,11.1348 L21.0089,11.4478 C21.0089,13.4478 19.3809,15.0758 17.3809,15.0758 L16.4189,15.0758 L16.4189,14.6588 Z M17.4069,25.0828 C16.9449,25.0828 16.5699,24.7068 16.5699,24.2458 C16.5699,23.7848 16.9449,23.4088 17.4069,23.4088 L19.8219,23.4088 C20.2839,23.4088 20.6589,23.7848 20.6589,24.2458 C20.6589,24.7068 20.2839,25.0828 19.8219,25.0828 L17.4069,25.0828 Z M12.9899,20.1718 L12.8679,20.1718 C11.1689,20.1718 9.7879,18.7898 9.7879,17.0908 C9.7879,15.3928 11.1689,14.0108 12.8679,14.0108 L12.9899,14.0108 L12.9899,20.1718 Z M34.8819,12.7108 L34.6389,12.7108 C33.9309,7.5588 29.5119,3.5728 24.1679,3.5728 L23.5819,3.5728 C18.2379,3.5728 13.8189,7.5588 13.1109,12.7108 L12.8679,12.7108 C10.4529,12.7108 8.4869,14.6758 8.4869,17.0908 C8.4869,19.5068 10.4529,21.4718 12.8679,21.4718 L13.0009,21.4718 L13.0009,22.2368 C13.0009,23.6048 14.0429,24.7218 15.3729,24.8668 C15.6409,25.7408 16.4459,26.3818 17.4069,26.3818 L17.9819,26.3818 C19.5449,27.7748 21.5409,28.5448 23.6429,28.5448 L24.1069,28.5448 C28.8069,28.5448 32.6299,24.7208 32.6299,20.0218 L32.6299,14.6588 C32.6299,9.9588 28.8069,6.1358 24.1069,6.1358 L23.6429,6.1358 C18.9429,6.1358 15.1199,9.9588 15.1199,14.6588 L15.1199,20.0218 C15.1199,21.0528 15.3109,22.0558 15.6699,23.0108 C15.5489,23.1798 15.4579,23.3678 15.3899,23.5688 C14.7699,23.4428 14.3009,22.8938 14.3009,22.2368 L14.3009,14.1538 C14.3009,9.0368 18.4639,4.8728 23.5819,4.8728 L24.1679,4.8728 C29.2859,4.8728 33.4489,9.0368 33.4489,14.1538 L33.4599,14.1538 L33.4599,21.4718 L34.8819,21.4718 C37.2979,21.4718 39.2629,19.5068 39.2629,17.0908 C39.2629,14.6758 37.2979,12.7108 34.8819,12.7108 L34.8819,12.7108 Z M36.4229,42.8768 L11.3269,42.8768 L11.3269,39.9478 C11.3269,35.4258 14.3019,31.3798 18.5929,30.0198 C21.8519,31.6578 25.8979,31.6578 29.1569,30.0198 C33.4489,31.3798 36.4229,35.4258 36.4229,39.9478 L36.4229,42.8768 Z M29.2739,28.6958 L29.0209,28.6228 L28.7879,28.7468 C25.7819,30.3488 21.9679,30.3488 18.9619,28.7468 L18.7289,28.6228 L18.4759,28.6958 C13.5009,30.1388 10.0269,34.7658 10.0269,39.9478 L10.0269,44.1768 L37.7229,44.1768 L37.7229,39.9478 C37.7229,34.7658 34.2489,30.1388 29.2739,28.6958 L29.2739,28.6958 Z"
    />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M26.9785263,19.4314105 C27.3031579,19.4314105 27.5658947,19.1686737 27.5658947,18.8440421 C27.5658947,18.5194105 27.3031579,18.2566737 26.9785263,18.2566737 C26.6538947,18.2566737 26.3911579,18.5194105 26.3911579,18.8440421 C26.3911579,19.1686737 26.6538947,19.4314105 26.9785263,19.4314105 L26.9785263,19.4314105 Z M34.8492632,20.1577263 L34.7090526,20.1577263 L34.7090526,13.9594105 L34.8492632,13.9594105 C36.5583158,13.9594105 37.9490526,15.3501474 37.9490526,17.0592 C37.9490526,18.7669895 36.5583158,20.1577263 34.8492632,20.1577263 L34.8492632,20.1577263 Z M16.368,16.0486737 L17.3469474,16.0486737 C19.1557895,16.0486737 20.7258947,15.0078316 21.4875789,13.4933053 C22.2682105,15.0090947 23.8484211,16.0486737 25.6673684,16.0486737 L31.3162105,16.0486737 L31.3162105,19.9884632 C31.3162105,23.9813053 28.0673684,27.2301474 24.0745263,27.2301474 L23.6096842,27.2301474 C22.3654737,27.2301474 21.1755789,26.8890947 20.1107368,26.2992 C21.1250526,26.1425684 21.9069474,25.2709895 21.9069474,24.2137263 C21.9069474,23.0453053 20.9570526,22.0941474 19.7898947,22.0941474 L17.3734737,22.0941474 C17.1435789,22.0941474 16.9263158,22.1408842 16.7178947,22.2090947 C16.488,21.4954105 16.368,20.7514105 16.368,19.9884632 L16.368,16.0486737 Z M16.368,14.6250947 C16.368,10.6335158 19.6168421,7.38467368 23.6096842,7.38467368 L24.0745263,7.38467368 C28.0673684,7.38467368 31.3162105,10.6335158 31.3162105,14.6250947 L31.3162105,15.0381474 L25.6673684,15.0381474 C23.6349474,15.0381474 21.9814737,13.3846737 21.9814737,11.3522526 L21.9814737,11.1021474 L20.9709474,11.1021474 L20.9709474,11.4141474 C20.9709474,13.4124632 19.3452632,15.0381474 17.3469474,15.0381474 L16.368,15.0381474 L16.368,14.6250947 Z M17.3734737,25.0676211 C16.9023158,25.0676211 16.5183158,24.6848842 16.5183158,24.2137263 C16.5183158,23.7413053 16.9023158,23.3573053 17.3734737,23.3573053 L19.7898947,23.3573053 C20.2610526,23.3573053 20.6437895,23.7413053 20.6437895,24.2137263 C20.6437895,24.6848842 20.2610526,25.0676211 19.7898947,25.0676211 L17.3734737,25.0676211 Z M12.9751579,20.1577263 L12.8349474,20.1577263 C11.1258947,20.1577263 9.73642105,18.7669895 9.73642105,17.0592 C9.73642105,15.3501474 11.1258947,13.9594105 12.8349474,13.9594105 L12.9751579,13.9594105 L12.9751579,20.1577263 Z M34.8492632,12.6962526 L34.5890526,12.6962526 C33.8905263,7.54509474 29.4745263,3.55856842 24.1351579,3.55856842 L23.5490526,3.55856842 C18.2096842,3.55856842 13.7936842,7.54509474 13.0938947,12.6962526 L12.8349474,12.6962526 C10.4286316,12.6962526 8.47326316,14.6528842 8.47326316,17.0592 C8.47326316,19.4642526 10.4286316,21.4208842 12.8349474,21.4208842 L12.9865263,21.4208842 L12.9865263,22.2040421 C12.9865263,23.5669895 14.0273684,24.6785684 15.3536842,24.8175158 C15.6151579,25.6903579 16.4172632,26.3307789 17.3734737,26.3307789 L17.9570526,26.3307789 C19.5157895,27.7227789 21.5090526,28.4933053 23.6096842,28.4933053 L24.0745263,28.4933053 C28.7646316,28.4933053 32.5793684,24.6785684 32.5793684,19.9884632 L32.5793684,14.6250947 C32.5793684,9.93625263 28.7646316,6.12151579 24.0745263,6.12151579 L23.6096842,6.12151579 C18.9195789,6.12151579 15.1048421,9.93625263 15.1048421,14.6250947 L15.1048421,19.9884632 C15.1048421,21.0217263 15.2968421,22.0246737 15.6581053,22.9808842 C15.5368421,23.1476211 15.4458947,23.3333053 15.3776842,23.5316211 C14.7410526,23.4103579 14.2496842,22.8747789 14.2496842,22.2040421 L14.2496842,14.1210947 C14.2496842,8.99393684 18.4218947,4.82172632 23.5490526,4.82172632 L24.1351579,4.82172632 C29.2635789,4.82172632 33.4345263,8.99393684 33.4345263,14.1210947 L33.4458947,14.1210947 L33.4458947,21.4208842 L34.8492632,21.4208842 C37.2543158,21.4208842 39.2122105,19.4642526 39.2122105,17.0592 C39.2122105,14.6528842 37.2543158,12.6962526 34.8492632,12.6962526 L34.8492632,12.6962526 Z M20.7890526,19.4314105 C21.1124211,19.4314105 21.3764211,19.1686737 21.3764211,18.8440421 C21.3764211,18.5194105 21.1124211,18.2566737 20.7890526,18.2566737 C20.4644211,18.2566737 20.2016842,18.5194105 20.2016842,18.8440421 C20.2016842,19.1686737 20.4644211,19.4314105 20.7890526,19.4314105 L20.7890526,19.4314105 Z M36.4092632,42.8617263 L11.2749474,42.8617263 L11.2749474,39.9147789 C11.2749474,35.3825684 14.2597895,31.3278316 18.5608421,29.9661474 C21.8210526,31.6069895 25.8631579,31.6069895 29.1221053,29.9661474 C33.4256842,31.3278316 36.4092632,35.3825684 36.4092632,39.9147789 L36.4092632,42.8617263 Z M29.2357895,28.6802526 L28.9894737,28.6095158 L28.7633684,28.7295158 C25.7507368,30.3337263 21.9347368,30.3349895 18.9208421,28.7295158 L18.6947368,28.6095158 L18.4484211,28.6802526 C13.4804211,30.1215158 10.0117895,34.7408842 10.0117895,39.9147789 L10.0117895,44.1248842 L37.6724211,44.1248842 L37.6724211,39.9147789 C37.6724211,34.7408842 34.2025263,30.1215158 29.2357895,28.6802526 L29.2357895,28.6802526 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M26.9782737,19.4314105 C27.3029053,19.4314105 27.5656421,19.1686737 27.5656421,18.8440421 C27.5656421,18.5194105 27.3029053,18.2566737 26.9782737,18.2566737 C26.6536421,18.2566737 26.3909053,18.5194105 26.3909053,18.8440421 C26.3909053,19.1686737 26.6536421,19.4314105 26.9782737,19.4314105 L26.9782737,19.4314105 Z M23.8418526,25.2836211 C24.8637474,25.2836211 25.6911158,24.4562526 25.6911158,23.4356211 L21.9938526,23.4356211 C21.9938526,24.4562526 22.8212211,25.2836211 23.8418526,25.2836211 L23.8418526,25.2836211 Z M20.7888,19.4314105 C21.1134316,19.4314105 21.3761684,19.1686737 21.3761684,18.8440421 C21.3761684,18.5194105 21.1134316,18.2566737 20.7888,18.2566737 C20.4641684,18.2566737 20.2014316,18.5194105 20.2014316,18.8440421 C20.2014316,19.1686737 20.4641684,19.4314105 20.7888,19.4314105 L20.7888,19.4314105 Z M34.8490105,20.1577263 L34.7088,20.1577263 L34.7088,13.9594105 L34.8490105,13.9594105 C36.5580632,13.9594105 37.9488,15.3501474 37.9488,17.0592 C37.9488,18.7669895 36.5580632,20.1577263 34.8490105,20.1577263 L34.8490105,20.1577263 Z M16.3677474,16.0486737 L17.3466947,16.0486737 C19.1555368,16.0486737 20.7256421,15.0078316 21.4885895,13.4933053 C22.2679579,15.0090947 23.8494316,16.0486737 25.6671158,16.0486737 L31.3159579,16.0486737 L31.3159579,19.9884632 C31.3159579,23.9813053 28.0671158,27.2301474 24.0755368,27.2301474 L23.6094316,27.2301474 C22.3652211,27.2301474 21.1753263,26.8890947 20.1104842,26.2992 C21.1260632,26.1425684 21.9079579,25.2709895 21.9079579,24.2137263 C21.9079579,23.0453053 20.9568,22.0941474 19.7896421,22.0941474 L17.3732211,22.0941474 C17.1433263,22.0941474 16.9260632,22.1408842 16.7189053,22.2090947 C16.4877474,21.4954105 16.3677474,20.7514105 16.3677474,19.9884632 L16.3677474,16.0486737 Z M16.3677474,14.6250947 C16.3677474,10.6335158 19.6165895,7.38467368 23.6094316,7.38467368 L24.0755368,7.38467368 C28.0671158,7.38467368 31.3159579,10.6335158 31.3159579,14.6250947 L31.3159579,15.0381474 L25.6671158,15.0381474 C23.6346947,15.0381474 21.9812211,13.3846737 21.9812211,11.3522526 L21.9812211,11.1021474 L20.9719579,11.1021474 L20.9719579,11.4141474 C20.9719579,13.4124632 19.3462737,15.0381474 17.3466947,15.0381474 L16.3677474,15.0381474 L16.3677474,14.6250947 Z M17.3732211,25.0676211 C16.9020632,25.0676211 16.5180632,24.6848842 16.5180632,24.2137263 C16.5180632,23.7413053 16.9020632,23.3573053 17.3732211,23.3573053 L19.7896421,23.3573053 C20.2608,23.3573053 20.6448,23.7413053 20.6448,24.2137263 C20.6448,24.6848842 20.2608,25.0676211 19.7896421,25.0676211 L17.3732211,25.0676211 Z M12.9761684,20.1577263 L12.8346947,20.1577263 C11.1269053,20.1577263 9.73616842,18.7669895 9.73616842,17.0592 C9.73616842,15.3501474 11.1269053,13.9594105 12.8346947,13.9594105 L12.9761684,13.9594105 L12.9761684,20.1577263 Z M34.8490105,12.6962526 L34.5900632,12.6962526 C33.8902737,7.54509474 29.4755368,3.55856842 24.1361684,3.55856842 L23.5488,3.55856842 C18.2094316,3.55856842 13.7934316,7.54509474 13.0936421,12.6962526 L12.8346947,12.6962526 C10.4296421,12.6962526 8.47301053,14.6528842 8.47301053,17.0592 C8.47301053,19.4642526 10.4296421,21.4208842 12.8346947,21.4208842 L12.9862737,21.4208842 L12.9862737,22.2040421 C12.9862737,23.5669895 14.0283789,24.6785684 15.3534316,24.8175158 C15.6149053,25.6903579 16.4170105,26.3307789 17.3732211,26.3307789 L17.9568,26.3307789 C19.5168,27.7227789 21.5100632,28.4933053 23.6094316,28.4933053 L24.0755368,28.4933053 C28.7643789,28.4933053 32.5791158,24.6785684 32.5791158,19.9884632 L32.5791158,14.6250947 C32.5791158,9.93625263 28.7643789,6.12151579 24.0755368,6.12151579 L23.6094316,6.12151579 C18.9205895,6.12151579 15.1045895,9.93625263 15.1045895,14.6250947 L15.1045895,19.9884632 C15.1045895,21.0217263 15.2965895,22.0246737 15.6578526,22.9808842 C15.5378526,23.1476211 15.4456421,23.3333053 15.3774316,23.5316211 C14.7408,23.4103579 14.2494316,22.8747789 14.2494316,22.2040421 L14.2494316,14.1210947 C14.2494316,8.99393684 18.4216421,4.82172632 23.5488,4.82172632 L24.1361684,4.82172632 C29.2633263,4.82172632 33.4342737,8.99393684 33.4342737,14.1210947 L33.4456421,14.1210947 L33.4456421,21.4208842 L34.8490105,21.4208842 C37.2540632,21.4208842 39.2119579,19.4642526 39.2119579,17.0592 C39.2119579,14.6528842 37.2540632,12.6962526 34.8490105,12.6962526 L34.8490105,12.6962526 Z M36.4090105,42.8617263 L11.2759579,42.8617263 L11.2759579,39.9147789 C11.2759579,35.3825684 14.2595368,31.3278316 18.5605895,29.9661474 C21.8208,31.6069895 25.8629053,31.6069895 29.1231158,29.9661474 C33.4254316,31.3278316 36.4090105,35.3825684 36.4090105,39.9147789 L36.4090105,42.8617263 Z M29.2368,28.6815158 L28.9892211,28.6095158 L28.7643789,28.7295158 C25.7492211,30.3349895 21.9332211,30.3337263 18.9218526,28.7295158 L18.6944842,28.6095158 L18.4481684,28.6802526 C13.4814316,30.1202526 10.0128,34.7408842 10.0128,39.9147789 L10.0128,44.1248842 L37.6721684,44.1248842 L37.6721684,39.9147789 C37.6721684,34.7408842 34.2035368,30.1215158 29.2368,28.6815158 L29.2368,28.6815158 Z"
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

export default Receptionist;
