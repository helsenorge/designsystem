import React from 'react';
import {IconRawProps} from './Icon';

const UserOrganization = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M13.0178,34.2795 L13.2718,34.3535 C15.9438,35.1305 17.8108,37.6155 17.8108,40.3995 L17.8108,40.3995 L17.8108,43.4245 L3.0448,43.4245 L3.0448,40.3995 C3.0448,37.6155 4.9118,35.1295 7.5838,34.3535 L7.5838,34.3535 L7.8378,34.2795 L8.0718,34.4045 C9.5258,35.1785 11.3298,35.1785 12.7838,34.4045 L12.7838,34.4045 L13.0178,34.2795 Z M40.1623,34.2795 L40.4163,34.3535 C43.0883,35.1305 44.9553,37.6155 44.9553,40.3995 L44.9553,40.3995 L44.9553,43.4245 L30.1893,43.4245 L30.1893,40.3995 C30.1893,37.6155 32.0563,35.1305 34.7283,34.3535 L34.7283,34.3535 L34.9823,34.2795 L35.2163,34.4045 C36.6593,35.1725 38.4853,35.1725 39.9283,34.4045 L39.9283,34.4045 L40.1623,34.2795 Z M13.1458,35.6775 C11.4538,36.4835 9.4018,36.4835 7.7098,35.6775 C5.7168,36.3665 4.3458,38.2735 4.3458,40.3995 L4.3458,40.3995 L4.3458,42.1235 L16.5098,42.1235 L16.5098,40.3995 C16.5098,38.2735 15.1388,36.3675 13.1458,35.6775 Z M40.2903,35.6775 C38.5983,36.4835 36.5463,36.4835 34.8543,35.6775 C32.8613,36.3675 31.4903,38.2735 31.4903,40.3995 L31.4903,40.3995 L31.4903,42.1235 L43.6543,42.1235 L43.6543,40.3995 C43.6543,38.2735 42.2833,36.3675 40.2903,35.6775 Z M24.6699,27.3364 L24.6699,32.2544 L28.9289,34.7134 L28.2779,35.8384 L24.0199,33.3794 L19.7619,35.8384 L19.1109,34.7134 L23.3689,32.2554 L23.3689,27.3364 L24.6699,27.3364 Z M10.5464,22.2024 C13.1194,22.2024 15.2134,24.2964 15.2134,26.8684 L15.2134,26.8684 L15.2134,28.8394 C15.2134,31.4114 13.1194,33.5054 10.5464,33.5054 L10.5464,33.5054 L10.3084,33.5054 C7.7364,33.5054 5.6424,31.4114 5.6424,28.8394 L5.6424,28.8394 L5.6424,26.8684 C5.6424,24.2964 7.7364,22.2024 10.3084,22.2024 L10.3084,22.2024 Z M37.6909,22.2024 C40.2639,22.2024 42.3579,24.2964 42.3579,26.8684 L42.3579,26.8684 L42.3579,28.8394 C42.3579,31.4114 40.2639,33.5054 37.6909,33.5054 L37.6909,33.5054 L37.4539,33.5054 C34.8809,33.5054 32.7869,31.4114 32.7869,28.8394 L32.7869,28.8394 L32.7869,26.8684 C32.7869,24.2964 34.8809,22.2024 37.4539,22.2024 L37.4539,22.2024 Z M9.2284,26.7534 C8.7554,27.4084 7.9834,27.8364 7.1144,27.8364 L7.1144,27.8364 L6.9434,27.8364 L6.9434,28.8394 C6.9434,30.6944 8.4534,32.2044 10.3084,32.2044 L10.3084,32.2044 L10.5464,32.2044 C12.4024,32.2044 13.9124,30.6944 13.9124,28.8394 L13.9124,28.8394 L13.9124,27.8364 L11.3584,27.8364 C10.4844,27.8364 9.7094,27.4094 9.2284,26.7534 Z M36.3729,26.7534 C35.8999,27.4084 35.1289,27.8364 34.2599,27.8364 L34.2599,27.8364 L34.0879,27.8364 L34.0879,28.8394 C34.0879,30.6944 35.5979,32.2044 37.4539,32.2044 L37.4539,32.2044 L37.6909,32.2044 C39.5469,32.2044 41.0569,30.6944 41.0569,28.8394 L41.0569,28.8394 L41.0569,27.8364 L38.5039,27.8364 C37.6299,27.8364 36.8539,27.4094 36.3729,26.7534 Z M10.5464,23.5034 L10.3084,23.5034 C8.4644,23.5034 6.9644,24.9954 6.9464,26.8364 L6.9464,26.8364 L7.1144,26.8364 C8.0004,26.8364 8.7204,26.1164 8.7204,25.2314 L8.7204,25.2314 L8.7204,25.0714 L9.7204,25.0714 L9.7204,25.1984 C9.7204,26.1024 10.4554,26.8364 11.3584,26.8364 L11.3584,26.8364 L13.9094,26.8364 C13.8904,24.9954 12.3914,23.5034 10.5464,23.5034 L10.5464,23.5034 Z M37.6909,23.5034 L37.4539,23.5034 C35.6089,23.5034 34.1089,24.9954 34.0909,26.8364 L34.0909,26.8364 L34.2599,26.8364 C35.1459,26.8364 35.8649,26.1164 35.8649,25.2314 L35.8649,25.2314 L35.8649,25.0714 L36.8649,25.0714 L36.8649,25.1984 C36.8649,26.1024 37.6009,26.8364 38.5039,26.8364 L38.5039,26.8364 L41.0539,26.8364 C41.0349,24.9954 39.5359,23.5034 37.6909,23.5034 L37.6909,23.5034 Z M26.59,15.0129 L26.843,15.0869 C29.516,15.8619 31.383,18.3479 31.383,21.1319 L31.383,21.1319 L31.383,24.1579 L16.617,24.1579 L16.617,21.1319 C16.617,18.3479 18.484,15.8619 21.157,15.0869 L21.157,15.0869 L21.41,15.0129 L21.644,15.1379 C23.087,15.9059 24.913,15.9059 26.356,15.1379 L26.356,15.1379 L26.59,15.0129 Z M26.718,16.4109 C25.026,17.2169 22.974,17.2169 21.282,16.4109 C19.289,17.0989 17.918,19.0059 17.918,21.1319 L17.918,21.1319 L17.918,22.8569 L30.082,22.8569 L30.082,21.1319 C30.082,19.0059 28.711,17.0989 26.718,16.4109 Z M24.1186,2.9358 C26.6916,2.9358 28.7856,5.0298 28.7856,7.6018 L28.7856,7.6018 L28.7856,9.5728 C28.7856,12.1448 26.6916,14.2388 24.1186,14.2388 L24.1186,14.2388 L23.8806,14.2388 C21.3086,14.2388 19.2146,12.1448 19.2146,9.5728 L19.2146,9.5728 L19.2146,7.6018 C19.2146,5.0298 21.3086,2.9358 23.8806,2.9358 L23.8806,2.9358 Z M22.8006,7.4868 C22.3276,8.1418 21.5566,8.5698 20.6876,8.5698 L20.6876,8.5698 L20.5156,8.5698 L20.5156,9.5728 C20.5156,11.4278 22.0256,12.9378 23.8806,12.9378 L23.8806,12.9378 L24.1186,12.9378 C25.9746,12.9378 27.4846,11.4278 27.4846,9.5728 L27.4846,9.5728 L27.4846,8.5698 L24.9306,8.5698 C24.0566,8.5698 23.2816,8.1428 22.8006,7.4868 Z M24.1186,4.2368 L23.8806,4.2368 C22.0366,4.2368 20.5366,5.7298 20.5186,7.5698 L20.5186,7.5698 L20.6876,7.5698 C21.5736,7.5698 22.2926,6.8498 22.2926,5.9648 L22.2926,5.9648 L22.2926,5.8048 L23.2926,5.8048 L23.2926,5.9318 C23.2926,6.8358 24.0276,7.5698 24.9306,7.5698 L24.9306,7.5698 L27.4816,7.5698 C27.4626,5.7298 25.9636,4.2368 24.1186,4.2368 L24.1186,4.2368 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M13.0178,34.2795 L13.2718,34.3535 C15.9438,35.1305 17.8108,37.6155 17.8108,40.3995 L17.8108,40.3995 L17.8108,43.4245 L3.0448,43.4245 L3.0448,40.3995 C3.0448,37.6155 4.9118,35.1295 7.5838,34.3535 L7.5838,34.3535 L7.8378,34.2795 L8.0718,34.4045 C9.5148,35.1725 11.3408,35.1725 12.7838,34.4045 L12.7838,34.4045 L13.0178,34.2795 Z M40.1623,34.2795 L40.4163,34.3535 C43.0883,35.1305 44.9553,37.6155 44.9553,40.3995 L44.9553,40.3995 L44.9553,43.4245 L30.1893,43.4245 L30.1893,40.3995 C30.1893,37.6155 32.0563,35.1305 34.7283,34.3535 L34.7283,34.3535 L34.9823,34.2795 L35.2163,34.4045 C36.6593,35.1725 38.4853,35.1725 39.9283,34.4045 L39.9283,34.4045 L40.1623,34.2795 Z M13.1458,35.6775 C11.4538,36.4835 9.4018,36.4835 7.7098,35.6775 C5.7168,36.3665 4.3458,38.2735 4.3458,40.3995 L4.3458,40.3995 L4.3458,42.1235 L16.5098,42.1235 L16.5098,40.3995 C16.5098,38.2735 15.1388,36.3675 13.1458,35.6775 Z M40.2903,35.6775 C38.5983,36.4835 36.5463,36.4835 34.8543,35.6775 C32.8613,36.3675 31.4903,38.2735 31.4903,40.3995 L31.4903,40.3995 L31.4903,42.1235 L43.6543,42.1235 L43.6543,40.3995 C43.6543,38.2735 42.2833,36.3675 40.2903,35.6775 Z M24.6699,26.3364 L24.6699,32.2544 L29.7789,35.2034 L29.1289,36.3284 L24.0199,33.3794 L18.9109,36.3284 L18.2609,35.2034 L23.3689,32.2544 L23.3689,26.3364 L24.6699,26.3364 Z M10.5464,22.2024 C13.1194,22.2024 15.2134,24.2964 15.2134,26.8684 L15.2134,26.8684 L15.2134,28.8394 C15.2134,31.4114 13.1194,33.5054 10.5464,33.5054 L10.5464,33.5054 L10.3084,33.5054 C7.7364,33.5054 5.6424,31.4114 5.6424,28.8394 L5.6424,28.8394 L5.6424,26.8684 C5.6424,24.2964 7.7364,22.2024 10.3084,22.2024 L10.3084,22.2024 Z M37.6919,22.2024 C40.2639,22.2024 42.3579,24.2964 42.3579,26.8684 L42.3579,26.8684 L42.3579,28.8394 C42.3579,31.4114 40.2639,33.5054 37.6919,33.5054 L37.6919,33.5054 L37.4539,33.5054 C34.8809,33.5054 32.7869,31.4114 32.7869,28.8394 L32.7869,28.8394 L32.7869,26.8684 C32.7869,24.2964 34.8809,22.2024 37.4539,22.2024 L37.4539,22.2024 Z M9.2284,26.7534 C8.7554,27.4084 7.9834,27.8364 7.1144,27.8364 L7.1144,27.8364 L6.9434,27.8364 L6.9434,28.8394 C6.9434,30.6944 8.4534,32.2044 10.3084,32.2044 L10.3084,32.2044 L10.5464,32.2044 C12.4024,32.2044 13.9124,30.6944 13.9124,28.8394 L13.9124,28.8394 L13.9124,27.8364 L11.3584,27.8364 C10.4844,27.8364 9.7094,27.4094 9.2284,26.7534 Z M36.3729,26.7534 C35.8999,27.4084 35.1289,27.8364 34.2599,27.8364 L34.2599,27.8364 L34.0879,27.8364 L34.0879,28.8394 C34.0879,30.6944 35.5979,32.2044 37.4539,32.2044 L37.4539,32.2044 L37.6919,32.2044 C39.5469,32.2044 41.0569,30.6944 41.0569,28.8394 L41.0569,28.8394 L41.0569,27.8364 L38.5039,27.8364 C37.6299,27.8364 36.8539,27.4094 36.3729,26.7534 Z M10.5464,23.5034 L10.3084,23.5034 C8.4644,23.5034 6.9644,24.9954 6.9464,26.8364 L6.9464,26.8364 L7.1144,26.8364 C8.0004,26.8364 8.7204,26.1164 8.7204,25.2314 L8.7204,25.2314 L8.7204,25.0714 L9.7204,25.0714 L9.7204,25.1984 C9.7204,26.1024 10.4554,26.8364 11.3584,26.8364 L11.3584,26.8364 L13.9094,26.8364 C13.8904,24.9954 12.3914,23.5034 10.5464,23.5034 L10.5464,23.5034 Z M37.6919,23.5034 L37.4539,23.5034 C35.6089,23.5034 34.1089,24.9954 34.0909,26.8364 L34.0909,26.8364 L34.2599,26.8364 C35.1459,26.8364 35.8649,26.1164 35.8649,25.2314 L35.8649,25.2314 L35.8649,25.0714 L36.8649,25.0714 L36.8649,25.1984 C36.8649,26.1024 37.6009,26.8364 38.5039,26.8364 L38.5039,26.8364 L41.0539,26.8364 C41.0349,24.9954 39.5359,23.5034 37.6919,23.5034 L37.6919,23.5034 Z M26.59,15.0129 L26.843,15.0869 C29.516,15.8619 31.383,18.3479 31.383,21.1319 L31.383,21.1319 L31.383,24.1579 L16.617,24.1579 L16.617,21.1319 C16.617,18.3479 18.484,15.8619 21.157,15.0869 L21.157,15.0869 L21.41,15.0129 L21.644,15.1379 C23.087,15.9059 24.913,15.9059 26.356,15.1379 L26.356,15.1379 L26.59,15.0129 Z M26.718,16.4109 C25.026,17.2169 22.974,17.2169 21.282,16.4109 C19.289,17.0989 17.918,19.0059 17.918,21.1319 L17.918,21.1319 L17.918,22.8569 L30.082,22.8569 L30.082,21.1319 C30.082,19.0059 28.711,17.0989 26.718,16.4109 Z M24.1186,2.9358 C26.6916,2.9358 28.7856,5.0298 28.7856,7.6018 L28.7856,7.6018 L28.7856,9.5728 C28.7856,12.1448 26.6916,14.2388 24.1186,14.2388 L24.1186,14.2388 L23.8816,14.2388 C21.3086,14.2388 19.2146,12.1448 19.2146,9.5728 L19.2146,9.5728 L19.2146,7.6018 C19.2146,5.0298 21.3086,2.9358 23.8816,2.9358 L23.8816,2.9358 Z M22.8006,7.4868 C22.3276,8.1418 21.5566,8.5698 20.6876,8.5698 L20.6876,8.5698 L20.5156,8.5698 L20.5156,9.5728 C20.5156,11.4278 22.0256,12.9378 23.8816,12.9378 L23.8816,12.9378 L24.1186,12.9378 C25.9746,12.9378 27.4846,11.4278 27.4846,9.5728 L27.4846,9.5728 L27.4846,8.5698 L24.9316,8.5698 C24.0576,8.5698 23.2816,8.1428 22.8006,7.4868 Z M24.1186,4.2368 L23.8816,4.2368 C22.0366,4.2368 20.5366,5.7298 20.5186,7.5698 L20.5186,7.5698 L20.6876,7.5698 C21.5736,7.5698 22.2926,6.8498 22.2926,5.9648 L22.2926,5.9648 L22.2926,5.8048 L23.2926,5.8048 L23.2926,5.9318 C23.2926,6.8358 24.0286,7.5698 24.9316,7.5698 L24.9316,7.5698 L27.4816,7.5698 C27.4626,5.7298 25.9636,4.2368 24.1186,4.2368 L24.1186,4.2368 Z"
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
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default UserOrganization;
