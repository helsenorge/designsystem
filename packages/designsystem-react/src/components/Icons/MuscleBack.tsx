import React from 'react';
import {IconRawProps} from './Icon';

const MuscleBack = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fillRule="evenodd" transform="translate(3 7)">
      <path d="M14.2649,17.155 L14.2649,18.456 C18.5629,18.456 20.5859,10.99 20.6699,10.672 L19.4139,10.34 C18.9119,12.235 17.0099,17.155 14.2649,17.155" />
      <path d="M36.6008,22.5496 C36.2088,21.8766 35.5958,20.8096 35.1538,19.9896 C35.9128,18.2596 36.1498,16.9386 36.1658,16.8376 L34.8848,16.6206 C34.8768,16.6626 34.1178,20.9156 30.7798,24.0666 C30.4478,24.3796 30.1268,24.6326 29.8318,24.8656 C28.8178,25.6696 27.8598,26.4286 27.8598,28.5306 L29.1608,28.5306 C29.1608,27.0916 29.6648,26.6586 30.5758,25.9366 L30.5758,32.9036 C30.5758,34.1256 29.5818,35.1196 28.3608,35.1196 L21.7658,35.1196 L15.1718,35.1196 C13.9508,35.1196 12.9568,34.1256 12.9568,32.9036 L12.9568,25.9366 C13.8688,26.6586 14.3718,27.0916 14.3718,28.5306 L15.6728,28.5306 C15.6728,26.4286 14.7148,25.6696 13.7008,24.8656 C13.4058,24.6326 13.0848,24.3796 12.7528,24.0666 C9.4148,20.9156 8.6558,16.6626 8.6478,16.6206 L7.3668,16.8376 C7.3838,16.9386 7.6218,18.2596 8.3798,19.9896 C7.9378,20.8096 7.3248,21.8766 6.9318,22.5496 L2.3668,18.9706 C3.0278,17.2786 5.3998,11.2726 6.5458,9.2396 C7.8678,6.8946 10.4538,7.7406 10.5608,7.7786 L11.1218,7.9696 L11.3678,7.4306 C11.4218,7.3106 12.7428,4.5016 16.2208,5.4396 L16.4448,5.4986 L16.6558,5.4036 C18.0598,4.7756 18.4218,2.7636 18.5148,1.6956 L21.7658,1.6956 L25.0178,1.6956 C25.1108,2.7636 25.4728,4.7756 26.8768,5.4036 L27.0878,5.4986 L27.3118,5.4396 C30.7888,4.5006 32.1108,7.3096 32.1638,7.4276 L32.4068,7.9746 L32.9718,7.7786 C33.0818,7.7396 35.6548,6.8746 36.9868,9.2396 C38.1318,11.2716 40.5038,17.2786 41.1658,18.9706 L36.6008,22.5496 Z M42.5528,18.9496 C42.4288,18.6286 39.4968,11.0456 38.1198,8.6016 C36.8168,6.2906 34.5048,6.1136 33.0858,6.4036 C32.2668,5.0816 30.3298,3.4056 27.2388,4.1176 C26.4738,3.5456 26.2878,1.6926 26.2868,1.0426 L26.2838,0.3946 L21.7658,0.3946 L17.2488,0.3956 L17.2468,1.0426 C17.2448,1.6926 17.0588,3.5456 16.2938,4.1176 C13.2088,3.4036 11.2658,5.0806 10.4468,6.4036 C9.0308,6.1126 6.7158,6.2896 5.4138,8.6016 C4.0358,11.0456 1.1038,18.6286 0.9798,18.9496 L0.8068,19.3996 L7.3008,24.4906 L7.6768,23.8516 C7.6878,23.8356 8.4268,22.5766 9.0828,21.4056 C9.7058,22.5246 10.5428,23.7096 11.6568,24.8056 L11.6568,32.9036 C11.6568,34.8426 13.2338,36.4206 15.1718,36.4206 L21.7658,36.4206 L28.3608,36.4206 C30.2988,36.4206 31.8758,34.8426 31.8758,32.9036 L31.8758,24.8056 C32.9898,23.7096 33.8278,22.5246 34.4508,21.4056 C35.1058,22.5766 35.8458,23.8356 35.8558,23.8516 L36.2318,24.4906 L42.7258,19.3996 L42.5528,18.9496 Z" />
      <path d="M24.1184,10.3396 L22.8624,10.6716 C22.9464,10.9896 24.9704,18.4556 29.2674,18.4556 L29.2674,17.1546 C26.5274,17.1546 24.6224,12.2356 24.1184,10.3396" />
      <polygon points="21.115 26.491 22.416 26.491 22.416 15.064 21.115 15.064" />
      <polygon points="21.115 32.274 22.416 32.274 22.416 29.639 21.115 29.639" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(4 7)">
      <path d="M14.6692,17.9587 L14.9252,19.2337 C19.3232,18.3527 19.6792,10.8517 19.6912,10.5317 L18.3932,10.4797 C18.3902,10.5467 18.0692,17.2777 14.6692,17.9587" />
      <path d="M34.4836,22.5828 C34.0996,22.0158 33.5166,21.1268 33.0756,20.3568 C33.7026,18.3698 33.6066,16.7948 33.5986,16.6828 L32.3016,16.7748 C32.3046,16.8158 32.5486,20.9798 29.2806,24.0658 C29.0686,24.2668 28.8716,24.4418 28.6906,24.6038 C27.5876,25.5918 26.8596,26.2438 26.8596,28.5308 L28.1606,28.5308 C28.1606,26.8248 28.5116,26.5098 29.5576,25.5728 C29.5636,25.5678 29.5706,25.5618 29.5766,25.5568 L29.5766,32.9038 C29.5766,34.1258 28.5826,35.1198 27.3606,35.1198 L20.7666,35.1198 L14.1726,35.1198 C12.9516,35.1198 11.9576,34.1258 11.9576,32.9038 L11.9576,25.5568 C11.9626,25.5618 11.9706,25.5678 11.9756,25.5728 C13.0206,26.5098 13.3726,26.8248 13.3726,28.5308 L14.6726,28.5308 C14.6726,26.2448 13.9446,25.5928 12.8426,24.6048 C12.6626,24.4428 12.4646,24.2668 12.2536,24.0658 C8.9836,20.9798 9.2276,16.8158 9.2306,16.7748 L7.9336,16.6828 C7.9256,16.7948 7.8316,18.3698 8.4586,20.3568 C8.0156,21.1268 7.4326,22.0158 7.0486,22.5828 L2.4416,18.9708 C3.1026,17.2778 5.4746,11.2708 6.6206,9.2398 C7.9796,6.8288 10.0326,7.0788 10.1126,7.0958 L10.6166,7.1668 L10.8146,6.6998 C10.8526,6.6098 11.7886,4.5168 15.2206,5.4388 L15.4446,5.4988 L15.6556,5.4038 C17.0596,4.7748 17.4216,2.7638 17.5146,1.6948 L20.7666,1.6948 L24.0176,1.6948 C24.1106,2.7638 24.4726,4.7748 25.8776,5.4038 L26.0876,5.4988 L26.3116,5.4388 C29.7516,4.5118 30.6796,6.6088 30.7156,6.6938 L30.9106,7.1658 L31.4146,7.0958 C31.5036,7.0848 33.5526,6.8298 34.9126,9.2398 C36.0576,11.2708 38.4296,17.2778 39.0906,18.9708 L34.4836,22.5828 Z M40.4776,18.9498 C40.3536,18.6288 37.4226,11.0458 36.0456,8.6018 C34.6416,6.1128 32.5966,5.7928 31.6856,5.7838 C31.1436,4.9638 29.6016,3.3118 26.2376,4.1168 C25.4726,3.5438 25.2886,1.6908 25.2866,1.0428 L25.2836,0.3948 L20.7666,0.3948 L16.2496,0.3958 L16.2466,1.0428 C16.2446,1.6908 16.0596,3.5438 15.2956,4.1168 C11.9326,3.3138 10.3876,4.9638 9.8476,5.7838 C8.9356,5.7928 6.8916,6.1128 5.4876,8.6018 C4.1096,11.0458 1.1786,18.6288 1.0546,18.9498 L0.8816,19.3988 L7.3306,24.4558 L7.7246,23.8948 C7.7646,23.8398 8.4266,22.8918 9.0646,21.8738 C9.4516,22.6728 9.9646,23.4908 10.6566,24.2778 L10.6566,32.9038 C10.6566,34.8428 12.2346,36.4208 14.1726,36.4208 L20.7666,36.4208 L27.3606,36.4208 C29.2986,36.4208 30.8776,34.8428 30.8776,32.9038 L30.8776,24.2778 C31.5686,23.4908 32.0826,22.6718 32.4686,21.8738 C33.1066,22.8918 33.7696,23.8398 33.8076,23.8948 L34.2026,24.4558 L40.6506,19.3988 L40.4776,18.9498 Z" />
      <path d="M23.1399,10.4792 L21.8409,10.5322 C21.8539,10.8512 22.2089,18.3522 26.6079,19.2342 L26.8639,17.9582 C23.4629,17.2782 23.1429,10.5462 23.1399,10.4792" />
      <polygon points="20.116 26.491 21.417 26.491 21.417 15.064 20.116 15.064" />
      <polygon points="20.116 32.274 21.417 32.274 21.417 29.639 20.116 29.639" />
    </g>
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

export default MuscleBack;
