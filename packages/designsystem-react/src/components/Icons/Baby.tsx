import React from 'react';
import {IconRawProps} from './Icon';

const Baby = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M23.8752,19.3042 C22.8922,19.3042 22.0922,18.5042 22.0922,17.5212 C22.0922,16.5382 22.8922,15.7392 23.8752,15.7392 C24.8582,15.7392 25.6582,16.5382 25.6582,17.5212 C25.6582,18.5042 24.8582,19.3042 23.8752,19.3042 L23.8752,19.3042 Z M23.8752,14.8392 C22.3962,14.8392 21.1922,16.0422 21.1922,17.5212 C21.1922,19.0012 22.3962,20.2042 23.8752,20.2042 C25.3542,20.2042 26.5582,19.0012 26.5582,17.5212 C26.5582,16.0422 25.3542,14.8392 23.8752,14.8392 L23.8752,14.8392 Z M27.6812,14.3592 C27.4162,14.3592 27.2012,14.5742 27.2012,14.8392 C27.2012,15.1052 27.4162,15.3202 27.6812,15.3202 C27.9472,15.3202 28.1622,15.1052 28.1622,14.8392 C28.1622,14.5742 27.9472,14.3592 27.6812,14.3592 L27.6812,14.3592 Z M30.6212,16.2152 C30.6212,19.9342 27.5952,22.9612 23.8752,22.9612 C20.1552,22.9612 17.1292,19.9342 17.1292,16.2152 C17.1292,13.7872 18.4222,11.6612 20.3522,10.4732 C21.1492,11.1952 23.6942,13.2212 27.1502,13.2212 C28.0282,13.2212 28.8932,13.0242 29.6652,12.7712 C30.2682,13.7812 30.6212,14.9562 30.6212,16.2152 L30.6212,16.2152 Z M23.8752,9.4692 C25.9972,9.4692 27.8912,10.4562 29.1292,11.9932 C28.5012,12.1812 27.8262,12.3202 27.1502,12.3202 C24.3432,12.3202 22.1372,10.7872 21.2092,10.0202 C22.0272,9.6672 22.9282,9.4692 23.8752,9.4692 L23.8752,9.4692 Z M23.8752,8.5692 C19.6592,8.5692 16.2292,11.9992 16.2292,16.2152 C16.2292,20.4312 19.6592,23.8612 23.8752,23.8612 C28.0912,23.8612 31.5212,20.4312 31.5212,16.2152 C31.5212,14.8472 31.1552,13.5662 30.5242,12.4542 C31.5632,12.0202 32.2882,11.5572 32.3442,11.5212 L31.8522,10.7682 C31.8382,10.7772 31.0782,11.2582 30.0192,11.6832 C28.6252,9.7992 26.3942,8.5692 23.8752,8.5692 L23.8752,8.5692 Z M23.8752,16.5832 C23.3562,16.5832 22.9372,17.0032 22.9372,17.5212 C22.9372,18.0392 23.3562,18.4592 23.8752,18.4592 C24.3932,18.4592 24.8132,18.0392 24.8132,17.5212 C24.8132,17.0032 24.3932,16.5832 23.8752,16.5832 L23.8752,16.5832 Z M34.1422,22.4552 L23.9572,26.7162 L13.6082,23.3882 L13.6082,16.3622 C13.6082,10.7002 18.2142,6.0952 23.8752,6.0952 C29.5362,6.0952 34.1422,10.7002 34.1422,16.3622 L34.1422,22.4552 Z M34.1422,31.3882 C34.1422,37.0492 29.5362,41.6552 23.8752,41.6552 C18.4232,41.6552 13.9622,37.3802 13.6402,32.0082 L34.1422,23.4312 L34.1422,31.3882 Z M13.6082,24.3342 L22.6802,27.2502 L13.6082,31.0452 L13.6082,24.3342 Z M23.8752,4.7952 C17.4972,4.7952 12.3082,9.9842 12.3082,16.3622 L12.3082,31.3882 C12.3082,37.7662 17.4972,42.9552 23.8752,42.9552 C30.2532,42.9552 35.4412,37.7662 35.4412,31.3882 L35.4412,16.3622 C35.4412,9.9842 30.2532,4.7952 23.8752,4.7952 L23.8752,4.7952 Z M20.0822,14.3592 C19.8172,14.3592 19.6022,14.5742 19.6022,14.8392 C19.6022,15.1052 19.8172,15.3202 20.0822,15.3202 C20.3482,15.3202 20.5622,15.1052 20.5622,14.8392 C20.5622,14.5742 20.3482,14.3592 20.0822,14.3592 L20.0822,14.3592 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M20.0824,14.3589 C19.8174,14.3589 19.6024,14.5739 19.6024,14.8389 C19.6024,15.1049 19.8174,15.3199 20.0824,15.3199 C20.3474,15.3199 20.5624,15.1049 20.5624,14.8389 C20.5624,14.5739 20.3474,14.3589 20.0824,14.3589 L20.0824,14.3589 Z M23.8744,18.4319 C24.8954,18.4319 25.7234,17.6049 25.7234,16.5839 L22.0264,16.5839 C22.0264,17.6049 22.8534,18.4319 23.8744,18.4319 L23.8744,18.4319 Z M27.6814,14.3589 C27.4164,14.3589 27.2014,14.5739 27.2014,14.8389 C27.2014,15.1049 27.4164,15.3199 27.6814,15.3199 C27.9464,15.3199 28.1624,15.1049 28.1624,14.8389 C28.1624,14.5739 27.9464,14.3589 27.6814,14.3589 L27.6814,14.3589 Z M30.6214,16.2149 C30.6214,19.9349 27.5944,22.9609 23.8744,22.9609 C20.1554,22.9609 17.1284,19.9349 17.1284,16.2149 C17.1284,13.7869 18.4224,11.6619 20.3524,10.4729 C21.1494,11.1949 23.6944,13.2209 27.1504,13.2209 C28.0274,13.2209 28.8934,13.0249 29.6654,12.7709 C30.2684,13.7809 30.6214,14.9559 30.6214,16.2149 L30.6214,16.2149 Z M23.8744,9.4689 C25.9974,9.4689 27.8914,10.4569 29.1284,11.9939 C28.5014,12.1809 27.8264,12.3199 27.1504,12.3199 C24.3424,12.3199 22.1364,10.7879 21.2084,10.0209 C22.0274,9.6669 22.9284,9.4689 23.8744,9.4689 L23.8744,9.4689 Z M23.8744,8.5689 C19.6594,8.5689 16.2284,11.9989 16.2284,16.2149 C16.2284,20.4309 19.6594,23.8609 23.8744,23.8609 C28.0914,23.8609 31.5204,20.4309 31.5204,16.2149 C31.5204,14.8479 31.1554,13.5659 30.5244,12.4539 C31.5634,12.0199 32.2884,11.5579 32.3444,11.5219 L31.8514,10.7689 C31.8384,10.7769 31.0784,11.2579 30.0194,11.6839 C28.6254,9.7989 26.3944,8.5689 23.8744,8.5689 L23.8744,8.5689 Z M34.1424,22.4559 L23.9574,26.7159 L13.6084,23.3889 L13.6084,16.3619 C13.6084,10.7009 18.2134,6.0949 23.8744,6.0949 C29.5364,6.0949 34.1424,10.7009 34.1424,16.3619 L34.1424,22.4559 Z M34.1424,31.3879 C34.1424,37.0489 29.5364,41.6549 23.8744,41.6549 C18.4234,41.6549 13.9624,37.3799 13.6394,32.0079 L34.1424,23.4309 L34.1424,31.3879 Z M13.6084,24.3339 L22.6804,27.2509 L13.6084,31.0459 L13.6084,24.3339 Z M23.8744,4.7949 C17.4974,4.7949 12.3084,9.9839 12.3084,16.3619 L12.3084,31.3879 C12.3084,37.7659 17.4974,42.9549 23.8744,42.9549 C30.2524,42.9549 35.4414,37.7659 35.4414,31.3879 L35.4414,16.3619 C35.4414,9.9839 30.2524,4.7949 23.8744,4.7949 L23.8744,4.7949 Z"
      />
    </svg>
  );
});

export default Baby;
