import React from 'react';
import {IconRawProps} from './Icon';

const ElderlyPerson = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fill-rule="evenodd"
      d="M16.0818 2.214C17.7648 2.214 19.1328 3.583 19.1328 5.266 19.1328 6.948 17.7648 8.317 16.0818 8.317 14.3988 8.317 13.0298 6.948 13.0298 5.266 13.0298 3.583 14.3988 2.214 16.0818 2.214M16.0818 9.617C18.4808 9.617 20.4338 7.665 20.4338 5.266 20.4338 2.866 18.4808.913 16.0818.913 13.6828.913 11.7288 2.866 11.7288 5.266 11.7288 7.665 13.6828 9.617 16.0818 9.617M24.8865 38.6515C24.2335 38.6515 23.7015 38.1205 23.7015 37.4655 23.7015 36.8125 24.2335 36.2815 24.8865 36.2815 25.5405 36.2815 26.0725 36.8125 26.0725 37.4655 26.0725 38.1205 25.5405 38.6515 24.8865 38.6515L24.8865 38.6515zM16.3695 25.7245L16.3695 24.4065C16.3695 24.0285 16.4415 23.6645 16.5445 23.3075 17.4355 23.4745 18.3905 23.1935 19.0255 22.4695 19.5085 21.9205 19.7175 21.2175 19.6665 20.5295 19.8765 20.4955 20.0885 20.4735 20.3035 20.4735 22.4725 20.4735 24.2365 22.2375 24.2365 24.4065L24.2365 25.7245 16.3695 25.7245zM9.8745 16.4125L5.9345 20.1485 5.9345 37.0365C5.9345 38.1965 4.9905 39.1395 3.8315 39.1395 2.6715 39.1395 1.7285 38.1965 1.7285 37.0365L1.7285 18.5445C1.7285 17.7025 2.0495 16.9065 2.6355 16.3015L7.5465 11.2195C8.0345 10.7145 8.7065 10.4305 9.4065 10.4305 9.4495 10.4305 9.4935 10.4325 9.5375 10.4345 10.2845 10.4725 10.9785 10.8315 11.4405 11.4195L18.0965 19.8915C18.4965 20.4015 18.4765 21.1255 18.0485 21.6125 17.5675 22.1605 16.7245 22.2235 16.1675 21.7495L9.8745 16.4125zM25.5365 35.0775L25.5365 24.4065C25.5365 21.5205 23.1895 19.1725 20.3035 19.1725 19.9465 19.1725 19.5955 19.2205 19.2505 19.2915 19.2065 19.2235 19.1685 19.1535 19.1175 19.0895L12.4615 10.6165C11.7675 9.7325 10.7265 9.1935 9.6045 9.1355 8.4665 9.0895 7.3915 9.5085 6.6115 10.3165L1.7005 15.3975C.8795 16.2465.4275 17.3635.4275 18.5445L.4275 37.0365C.4275 38.9135 1.9545 40.4405 3.8315 40.4405 5.7075 40.4405 7.2355 38.9135 7.2355 37.0365L7.2355 20.7075 9.9235 18.1585 15.3255 22.7405C15.3365 22.7495 15.3485 22.7545 15.3595 22.7625 15.1825 23.2935 15.0695 23.8395 15.0695 24.4065L15.0695 39.7905 16.3695 39.7905 16.3695 27.0255 24.2365 27.0255 24.2365 35.0775C23.1825 35.3655 22.4015 36.3225 22.4015 37.4655 22.4015 38.8375 23.5165 39.9525 24.8865 39.9525 26.2575 39.9525 27.3725 38.8375 27.3725 37.4655 27.3725 36.3215 26.5915 35.3655 25.5365 35.0775L25.5365 35.0775z"
      transform="translate(10 3)"
    />
  );

  const normalHover = (
    <path
      fill-rule="evenodd"
      d="M14.1516 1.9279C14.2696 1.9149 14.3866 1.9079 14.5036 1.9079 15.1896 1.9079 15.8516 2.1379 16.3966 2.5729 17.0346 3.0789 17.4366 3.8049 17.5296 4.6149 17.7186 6.2859 16.5126 7.8019 14.8416 7.9919 14.0246 8.0789 13.2336 7.8559 12.5966 7.3479 11.9596 6.8409 11.5566 6.1149 11.4636 5.3059 11.2746 3.6339 12.4806 2.1179 14.1516 1.9279M11.7876 8.3649C12.5646 8.9849 13.5086 9.3129 14.4876 9.3129 14.6536 9.3129 14.8216 9.3029 14.9886 9.2829 17.3726 9.0119 19.0906 6.8519 18.8206 4.4679 18.6896 3.3129 18.1156 2.2789 17.2066 1.5549 16.2976.8299 15.1566.5019 14.0056.6369 11.6216.9079 9.9026 3.0689 10.1726 5.4519 10.3036 6.6079 10.8786 7.6419 11.7876 8.3649M27.6282 36.5675C26.9822 36.6665 26.3782 36.2135 26.2832 35.5675 26.1882 34.9215 26.6372 34.3175 27.2832 34.2225 27.3412 34.2135 27.3992 34.2105 27.4562 34.2105 28.0342 34.2105 28.5422 34.6335 28.6282 35.2225 28.7242 35.8695 28.2742 36.4725 27.6282 36.5675L27.6282 36.5675zM17.3192 25.0185L17.1272 23.7145C17.0852 23.4235 17.0822 23.1335 17.1042 22.8445 17.9732 22.8725 18.8402 22.4805 19.3672 21.7215 19.8452 21.0365 19.9502 20.1935 19.7202 19.4385 19.9552 19.3555 20.1962 19.2875 20.4462 19.2515 22.5992 18.9235 24.5952 20.4235 24.9112 22.5695L25.1042 23.8725 17.3192 25.0185zM9.5842 16.7325L5.9352 21.1965 5.9352 38.0365C5.9352 39.1965 4.9912 40.1395 3.8312 40.1395 2.6722 40.1395 1.7292 39.1965 1.7292 38.0365L1.7292 19.5445C1.7292 18.7025 2.0502 17.9065 2.6902 17.2365L6.6902 11.8415C7.1452 11.2495 7.8332 10.8825 8.5792 10.8365 8.6332 10.8335 8.6872 10.8315 8.7402 10.8315 9.4302 10.8315 10.0932 11.1065 10.5802 11.5995L18.1532 19.2655C18.6082 19.7265 18.6712 20.4475 18.3012 20.9795 17.8822 21.5775 17.0522 21.7345 16.4452 21.3295L9.5842 16.7325zM29.9152 35.0335C29.7482 33.9025 28.8322 33.0675 27.7522 32.9365L26.1962 22.3795C25.7752 19.5245 23.1082 17.5385 20.2572 17.9645 19.8342 18.0275 19.4272 18.1485 19.0362 18.3085L11.5052 10.6855C10.7162 9.8875 9.6372 9.4685 8.4982 9.5385 7.3772 9.6085 6.3432 10.1595 5.6512 11.0585L1.6992 16.3985C.8802 17.2465.4282 18.3645.4282 19.5445L.4282 38.0365C.4282 39.9135 1.9552 41.4405 3.8312 41.4405 5.7082 41.4405 7.2352 39.9135 7.2352 38.0365L7.2352 21.6595 9.8422 18.4705 15.7232 22.4095C15.7642 22.4365 15.8102 22.4525 15.8522 22.4775 15.7902 22.9505 15.7712 23.4265 15.8412 23.9045L18.0812 39.1245 19.3682 38.9345 17.5092 26.3055 25.2932 25.1595 26.4652 33.1275C25.4642 33.5665 24.8302 34.6265 24.9962 35.7565 25.1782 36.9905 26.2422 37.8805 27.4542 37.8805 27.5742 37.8805 27.6952 37.8725 27.8172 37.8545 29.1732 37.6545 30.1142 36.3895 29.9152 35.0335L29.9152 35.0335z"
      transform="translate(10 2)"
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

export default ElderlyPerson;
