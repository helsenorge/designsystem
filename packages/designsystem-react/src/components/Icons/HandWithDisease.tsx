import React from 'react';
import {IconRawProps} from './Icon';

const HandWithDisease = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M28.0708,25.0574 C28.0708,24.5704 27.6758,24.1754 27.1888,24.1754 C26.7008,24.1754 26.3058,24.5704 26.3058,25.0574 C26.3058,25.5444 26.7008,25.9394 27.1888,25.9394 C27.6758,25.9394 28.0708,25.5444 28.0708,25.0574 M20.4288,27.8504 C20.4288,28.3374 20.8238,28.7324 21.3118,28.7324 C21.7988,28.7324 22.1938,28.3374 22.1938,27.8504 C22.1938,27.3634 21.7988,26.9684 21.3118,26.9684 C20.8238,26.9684 20.4288,27.3634 20.4288,27.8504 M26.3058,30.1364 C26.3058,29.6484 25.9108,29.2534 25.4238,29.2534 C24.9368,29.2534 24.5418,29.6484 24.5418,30.1364 C24.5418,30.6234 24.9368,31.0184 25.4238,31.0184 C25.9108,31.0184 26.3058,30.6234 26.3058,30.1364 M23.3498,22.6904 C23.3498,22.2034 22.9548,21.8084 22.4678,21.8084 C21.9808,21.8084 21.5858,22.2034 21.5858,22.6904 C21.5858,23.1784 21.9808,23.5724 22.4678,23.5724 C22.9548,23.5724 23.3498,23.1784 23.3498,22.6904 M10.2298,23.2234 C10.2298,22.7364 9.8348,22.3414 9.3478,22.3414 C8.8608,22.3414 8.4658,22.7364 8.4658,23.2234 C8.4658,23.7104 8.8608,24.1054 9.3478,24.1054 C9.8348,24.1054 10.2298,23.7104 10.2298,23.2234 M21.2598,17.2054 C20.7728,17.2054 20.3778,17.6004 20.3778,18.0884 C20.3778,18.5754 20.7728,18.9704 21.2598,18.9704 C21.7468,18.9704 22.1418,18.5754 22.1418,18.0884 C22.1418,17.6004 21.7468,17.2054 21.2598,17.2054 M13.0188,26.9874 C13.0188,26.5004 12.6238,26.1054 12.1368,26.1054 C11.6498,26.1054 11.2548,26.5004 11.2548,26.9874 C11.2548,27.4744 11.6498,27.8704 12.1368,27.8704 C12.6238,27.8704 13.0188,27.4744 13.0188,26.9874 M16.8168,23.5724 C16.8168,23.0854 16.4218,22.6904 15.9338,22.6904 C15.4468,22.6904 15.0518,23.0854 15.0518,23.5724 C15.0518,24.0594 15.4468,24.4554 15.9338,24.4554 C16.4218,24.4554 16.8168,24.0594 16.8168,23.5724 M44.1198464,24.4194 C44.1238,25.1404 43.8688,25.8224 43.4028,26.3394 C42.9208,26.8734 42.2738,27.1694 41.5798,27.1724 L41.1288,27.1744 C41.3448,27.5464 41.4788,27.9734 41.4808,28.4354 C41.4848,29.1194 41.2218,29.7644 40.7428,30.2504 C40.2628,30.7374 39.6218,31.0074 38.9398,31.0104 L38.2268,31.0144 C38.4388,31.3824 38.5708,31.8034 38.5728,32.2574 C38.5758,32.9374 38.3128,33.5784 37.8328,34.0614 C37.3528,34.5434 36.7128,34.8104 36.0318,34.8134 L24.0738,34.8704 C23.9938,34.8704 23.9058,34.8704 23.8128,34.8704 C22.1908,34.8704 18.6998,34.7444 16.5528,32.1234 L6.5438,32.1234 L6.5438,30.8244 L15.7278,30.8244 C15.4068,30.1834 15.1438,29.4544 14.9738,28.5964 L16.2488,28.3434 C16.9698,31.9804 19.3858,33.5504 24.0678,33.5704 L30.1758,33.5414 C30.1458,33.4534 30.1198,33.3624 30.1198,33.2644 C30.1198,32.7764 30.5148,32.3824 31.0018,32.3824 C31.4888,32.3824 31.8838,32.7764 31.8838,33.2644 C31.8838,33.3594 31.8578,33.4474 31.8298,33.5334 L36.0258,33.5144 C36.3608,33.5124 36.6748,33.3814 36.9108,33.1444 C37.1458,32.9084 37.2748,32.5954 37.2728,32.2634 C37.2698,31.5794 36.7078,31.0244 36.0198,31.0244 L36.0138,31.0244 L29.7428,31.0544 L29.7368,29.7544 L38.9338,29.7104 C39.2678,29.7094 39.5818,29.5764 39.8168,29.3374 C40.0528,29.0984 40.1828,28.7804 40.1808,28.4414 C40.1778,27.7474 39.6158,27.1844 38.9278,27.1844 L38.9218,27.1844 L36.8728,27.1944 C36.8798,27.2374 36.8988,27.2754 36.8988,27.3204 C36.8988,27.8074 36.5038,28.2034 36.0158,28.2034 C35.5288,28.2034 35.1338,27.8074 35.1338,27.3204 C35.1338,27.2784 35.1528,27.2434 35.1578,27.2024 L31.6558,27.2194 L31.6498,25.9194 L41.5738,25.8724 C41.8968,25.8704 42.2028,25.7274 42.4368,25.4684 C42.6858,25.1924 42.8218,24.8224 42.8208,24.4254 C42.8168,23.6334 42.2538,22.9914 41.5658,22.9914 L41.5598,22.9914 L38.9038,23.0034 C38.9038,23.0034 38.9028,23.0034 38.9018,23.0034 L31.1028,23.0404 L31.0958,21.7404 L38.8968,21.7034 C39.2308,21.7024 39.5438,21.5694 39.7788,21.3304 C40.0158,21.0914 40.1448,20.7724 40.1428,20.4344 C40.1418,20.0974 40.0088,19.7804 39.7708,19.5424 C39.5328,19.3054 39.2118,19.1584 38.8838,19.1774 L30.9538,19.1964 C30.9758,19.2734 31.0018,19.3494 31.0018,19.4344 C31.0018,19.9214 30.6068,20.3164 30.1198,20.3164 C29.6328,20.3164 29.2378,19.9214 29.2378,19.4344 C29.2378,19.3514 29.2628,19.2764 29.2848,19.2004 L25.7228,19.2094 C25.4258,19.1954 25.2118,19.0444 25.1148,18.7934 C25.0178,18.5414 25.0858,18.2574 25.2858,18.0764 L28.9428,14.7804 C29.4128,14.3664 29.6548,13.8804 29.6688,13.3304 C29.6828,12.7954 29.4668,12.2164 29.0788,11.7184 L19.4348,16.5294 C18.5358,16.9804 17.3308,18.1514 16.1298,19.7424 C16.0058,19.9064 15.8138,19.9744 15.6058,20.0004 L6.5378,19.9144 L6.5498,18.6154 L15.2928,18.6974 C16.2318,17.4874 17.5538,16.0194 18.8528,15.3674 L28.9408,10.3344 C29.1878,10.2114 29.4868,10.2564 29.6838,10.4504 C30.5258,11.2684 30.9938,12.3304 30.9688,13.3634 C30.9458,14.2754 30.5448,15.1014 29.8078,15.7504 L27.4178,17.9054 L38.8798,17.8774 C39.5748,17.8754 40.2038,18.1384 40.6878,18.6204 C41.1718,19.1024 41.4398,19.7454 41.4438,20.4294 C41.4458,20.8804 41.3218,21.3094 41.1058,21.6934 L41.5538,21.6914 L41.5658,21.6914 C42.9678,21.6914 44.1128,22.9124 44.1198464,24.4194"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M28.0703,25.0574 C28.0703,24.5704 27.6753,24.1754 27.1883,24.1754 C26.7013,24.1754 26.3063,24.5704 26.3063,25.0574 C26.3063,25.5444 26.7013,25.9394 27.1883,25.9394 C27.6753,25.9394 28.0703,25.5444 28.0703,25.0574 M20.4293,27.8504 C20.4293,28.3374 20.8243,28.7324 21.3113,28.7324 C21.7993,28.7324 22.1933,28.3374 22.1933,27.8504 C22.1933,27.3634 21.7993,26.9684 21.3113,26.9684 C20.8243,26.9684 20.4293,27.3634 20.4293,27.8504 M26.3063,30.1364 C26.3063,29.6484 25.9113,29.2534 25.4243,29.2534 C24.9363,29.2534 24.5413,29.6484 24.5413,30.1364 C24.5413,30.6234 24.9363,31.0184 25.4243,31.0184 C25.9113,31.0184 26.3063,30.6234 26.3063,30.1364 M23.3493,22.6904 C23.3493,22.2034 22.9543,21.8084 22.4673,21.8084 C21.9803,21.8084 21.5853,22.2034 21.5853,22.6904 C21.5853,23.1784 21.9803,23.5724 22.4673,23.5724 C22.9543,23.5724 23.3493,23.1784 23.3493,22.6904 M10.2293,23.2234 C10.2293,22.7364 9.8343,22.3414 9.3473,22.3414 C8.8603,22.3414 8.4653,22.7364 8.4653,23.2234 C8.4653,23.7104 8.8603,24.1054 9.3473,24.1054 C9.8343,24.1054 10.2293,23.7104 10.2293,23.2234 M21.2593,17.7054 C20.7723,17.7054 20.3773,18.1004 20.3773,18.5884 C20.3773,19.0754 20.7723,19.4704 21.2593,19.4704 C21.7473,19.4704 22.1423,19.0754 22.1423,18.5884 C22.1423,18.1004 21.7473,17.7054 21.2593,17.7054 M13.0183,26.9874 C13.0183,26.5004 12.6233,26.1054 12.1363,26.1054 C11.6493,26.1054 11.2543,26.5004 11.2543,26.9874 C11.2543,27.4744 11.6493,27.8704 12.1363,27.8704 C12.6233,27.8704 13.0183,27.4744 13.0183,26.9874 M16.8163,23.5724 C16.8163,23.0854 16.4213,22.6904 15.9333,22.6904 C15.4463,22.6904 15.0513,23.0854 15.0513,23.5724 C15.0513,24.0594 15.4463,24.4554 15.9333,24.4554 C16.4213,24.4554 16.8163,24.0594 16.8163,23.5724 M44.1203262,24.4194 C44.1233,25.1404 43.8683,25.8224 43.4023,26.3394 C42.9203,26.8734 42.2733,27.1694 41.5793,27.1724 L41.1293,27.1744 C41.3443,27.5474 41.4783,27.9744 41.4803,28.4354 C41.4843,29.1194 41.2213,29.7644 40.7423,30.2504 C40.2623,30.7374 39.6223,31.0074 38.9393,31.0104 L38.2263,31.0144 C38.4383,31.3824 38.5703,31.8034 38.5723,32.2574 C38.5763,32.9374 38.3133,33.5784 37.8323,34.0614 C37.3523,34.5434 36.7133,34.8104 36.0313,34.8134 L24.0733,34.8704 C23.9933,34.8704 23.9053,34.8704 23.8123,34.8704 C22.1903,34.8704 18.7003,34.7444 16.5523,32.1234 L6.5433,32.1234 L6.5433,30.8244 L15.7273,30.8244 C15.4073,30.1834 15.1433,29.4544 14.9733,28.5964 L16.2483,28.3434 C16.9693,31.9804 19.3883,33.5504 24.0673,33.5704 L30.1753,33.5414 C30.1463,33.4534 30.1193,33.3624 30.1193,33.2644 C30.1193,32.7764 30.5143,32.3824 31.0023,32.3824 C31.4893,32.3824 31.8843,32.7764 31.8843,33.2644 C31.8843,33.3594 31.8583,33.4474 31.8293,33.5334 L36.0253,33.5144 C36.3603,33.5124 36.6753,33.3814 36.9113,33.1444 C37.1453,32.9084 37.2743,32.5954 37.2723,32.2634 C37.2693,31.5794 36.7083,31.0244 36.0193,31.0244 L36.0133,31.0244 L29.7433,31.0544 L29.7373,29.7544 L38.9333,29.7104 C39.2673,29.7094 39.5813,29.5764 39.8163,29.3374 C40.0523,29.0984 40.1823,28.7804 40.1803,28.4414 C40.1773,27.7474 39.6153,27.1844 38.9273,27.1844 L38.9213,27.1844 L36.8733,27.1944 C36.8793,27.2374 36.8983,27.2754 36.8983,27.3204 C36.8983,27.8074 36.5033,28.2034 36.0163,28.2034 C35.5283,28.2034 35.1333,27.8074 35.1333,27.3204 C35.1333,27.2784 35.1523,27.2434 35.1573,27.2024 L31.6553,27.2194 L31.6493,25.9194 L41.5733,25.8724 C41.8963,25.8704 42.2033,25.7274 42.4363,25.4684 C42.6853,25.1924 42.8213,24.8224 42.8203,24.4254 C42.8163,23.6314 42.2763,23.0164 41.5603,22.9914 L38.9033,23.0034 C38.9033,23.0034 38.9023,23.0034 38.9023,23.0034 L31.1023,23.0404 L31.0963,21.7404 L38.8963,21.7034 C39.5873,21.6994 40.1463,21.1314 40.1433,20.4344 C40.1393,19.7394 39.6063,19.1504 38.8833,19.1774 L30.9533,19.1964 C30.9763,19.2734 31.0023,19.3494 31.0023,19.4344 C31.0023,19.9214 30.6073,20.3164 30.1193,20.3164 C29.6323,20.3164 29.2373,19.9214 29.2373,19.4344 C29.2373,19.3514 29.2633,19.2764 29.2843,19.2004 L25.7223,19.2094 C25.4403,19.2514 25.1493,18.9954 25.0853,18.6954 C25.0213,18.3944 25.1763,18.0904 25.4573,17.9654 L29.4133,16.2064 C29.8893,15.8544 30.1663,15.4094 30.2363,14.8834 C30.3073,14.3524 30.1553,13.7524 29.8233,13.2164 L19.7163,16.9584 C18.4403,17.4354 16.8603,18.7744 16.1303,19.7424 C16.0063,19.9064 15.8113,19.9744 15.6053,20.0004 L6.5373,19.9144 L6.5493,18.6154 L15.3003,18.6974 C16.2043,17.6134 17.8083,16.2834 19.2633,15.7404 L29.8353,11.8254 C30.0943,11.7294 30.3853,11.8074 30.5623,12.0204 C31.3103,12.9254 31.6613,14.0324 31.5253,15.0554 C31.4043,15.9604 30.9163,16.7384 30.1133,17.3044 C30.0783,17.3284 30.0413,17.3494 30.0033,17.3664 L28.7993,17.9024 L38.8793,17.8774 L38.8913,17.8774 C40.2923,17.8774 41.4363,19.0194 41.4433,20.4294 C41.4453,20.8904 41.3153,21.3184 41.1043,21.6934 L41.5533,21.6914 L41.5653,21.6914 C42.9673,21.6914 44.1123,22.9124 44.1203262,24.4194"
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

export default HandWithDisease;
