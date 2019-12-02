import React from 'react';
import {IconProps} from './Icon';
const Eye = React.forwardRef((svgProps: IconProps, ref: any) => {
  const {size = 38, color = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} {...props}>
      <path
        fill="{color}"
        fillRule="evenodd"
        d="M18.8958,16.5283 C17.5878,16.5283 16.5278,17.5883 16.5278,18.8953 C16.5278,20.2033 17.5878,21.2633 18.8958,21.2633 C20.2028,21.2633 21.2638,20.2033 21.2638,18.8953 C21.2638,17.5883 20.2028,16.5283 18.8958,16.5283 M22.8618,25.3123 C25.0108,23.9793 26.4488,21.6053 26.4488,18.8963 C26.4488,16.1703 24.9928,13.7843 22.8228,12.4553 C27.3428,13.9023 29.6128,17.5723 30.2978,18.8913 C29.6138,20.1873 27.3288,23.8453 22.8618,25.3123 M12.5418,18.8963 C12.5418,15.3923 15.3918,12.5423 18.8958,12.5423 C22.3988,12.5423 25.2498,15.3923 25.2498,18.8963 C25.2498,22.3993 22.3988,25.2493 18.8958,25.2493 C15.3918,25.2493 12.5418,22.3993 12.5418,18.8963 M7.4908,18.8963 C8.1758,17.5773 10.4458,13.9023 14.9698,12.4553 C12.7988,13.7833 11.3428,16.1703 11.3428,18.8963 C11.3428,21.6223 12.7988,24.0083 14.9708,25.3363 C10.4438,23.8893 8.1738,20.2123 7.4908,18.8963 M18.8958,10.6523 C9.6348,10.6523 6.1608,18.8963 6.1608,18.8963 C6.1608,18.8963 9.6348,27.1393 18.8958,27.1393 C28.1568,27.1393 31.6308,18.8963 31.6308,18.8963 C31.6308,18.8963 28.1568,10.6523 18.8958,10.6523"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} {...props}>
      <path
        fill="{color}"
        fillRule="evenodd"
        d="M20.896,16.5283 C19.588,16.5283 18.528,17.5883 18.528,18.8953 C18.528,20.2033 19.588,21.2633 20.896,21.2633 C22.204,21.2633 23.264,20.2033 23.264,18.8953 C23.264,17.5883 22.204,16.5283 20.896,16.5283 M22.861,25.3123 C25.01,23.9793 26.449,21.6063 26.449,18.8963 C26.449,16.1703 24.993,13.7833 22.822,12.4553 C27.343,13.9013 29.613,17.5723 30.298,18.8913 C29.614,20.1873 27.328,23.8463 22.861,25.3123 M18.896,25.2493 C15.393,25.2493 12.542,22.3993 12.542,18.8963 C12.542,15.3923 15.393,12.5423 18.896,12.5423 C22.399,12.5423 25.25,15.3923 25.25,18.8963 C25.25,22.3993 22.399,25.2493 18.896,25.2493 M7.491,18.8963 C8.176,17.5773 10.446,13.9033 14.969,12.4553 C12.799,13.7843 11.343,16.1703 11.343,18.8963 C11.343,21.6223 12.799,24.0083 14.969,25.3363 C10.444,23.8883 8.174,20.2113 7.491,18.8963 M18.896,10.6523 C9.635,10.6523 6.161,18.8963 6.161,18.8963 C6.161,18.8963 9.635,27.1393 18.896,27.1393 C28.157,27.1393 31.631,18.8963 31.631,18.8963 C31.631,18.8963 28.157,10.6523 18.896,10.6523"
      />
    </svg>
  );
});
export default Eye;
