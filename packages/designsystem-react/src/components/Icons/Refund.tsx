import React from 'react';
import {IconRawProps} from './Icon';

const Refund = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M29.2617,23.0869 C29.5677,22.8709 29.8597,22.7639 30.1377,22.7639 C30.2897,22.7639 30.4197,22.7739 30.5257,22.7919 C30.6297,22.8119 30.7447,22.8399 30.8697,22.8789 L31.1577,21.4419 C30.9557,21.3469 30.6877,21.2989 30.3527,21.2989 C29.9797,21.2989 29.6157,21.4209 29.2617,21.6649 C28.9077,21.9089 28.6057,22.2609 28.3567,22.7209 L28.2987,22.7209 L28.1847,21.4709 L26.8207,21.4709 L26.8207,28.5229 L28.4717,28.5229 L28.4717,24.2139 C28.6917,23.6779 28.9547,23.3019 29.2617,23.0869 L29.2617,23.0869 Z M23.9997,7.2739 C19.0207,7.2739 14.3507,9.4849 11.1877,13.2579 L10.9147,7.4779 L9.5167,7.5439 L9.9117,15.9489 L17.9797,15.9489 L17.9797,14.5489 L11.9387,14.5489 C14.8367,10.8529 19.2667,8.6739 23.9997,8.6739 C32.4507,8.6739 39.3257,15.5489 39.3257,23.9999 C39.3257,32.4509 32.4507,39.3259 23.9997,39.3259 C16.7507,39.3259 10.4367,34.1799 8.9857,27.0889 L7.6147,27.3699 C9.1977,35.1089 16.0887,40.7269 23.9997,40.7269 C33.2227,40.7269 40.7267,33.2229 40.7267,23.9999 C40.7267,14.7769 33.2227,7.2739 23.9997,7.2739 L23.9997,7.2739 Z M18.3907,19.1299 L18.3907,28.5229 L20.0557,28.5229 L20.0557,25.7789 L21.4067,24.0999 L23.9487,28.5229 L25.7857,28.5229 L22.4107,22.7919 L25.2977,19.1299 L23.4457,19.1299 L20.0997,23.3959 L20.0557,23.3959 L20.0557,19.1299 L18.3907,19.1299 Z"
      />
    </svg>
  ) : (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M29.2617,23.0869 C29.5677,22.8709 29.8597,22.7639 30.1377,22.7639 C30.2897,22.7639 30.4197,22.7739 30.5257,22.7919 C30.6297,22.8119 30.7447,22.8399 30.8697,22.8789 L31.1577,21.4419 C30.9557,21.3469 30.6877,21.2989 30.3527,21.2989 C29.9797,21.2989 29.6157,21.4209 29.2617,21.6649 C28.9077,21.9089 28.6057,22.2609 28.3567,22.7209 L28.2987,22.7209 L28.1847,21.4709 L26.8207,21.4709 L26.8207,28.5229 L28.4717,28.5229 L28.4717,24.2139 C28.6917,23.6779 28.9547,23.3019 29.2617,23.0869 L29.2617,23.0869 Z M39.1297,16.6339 C37.1687,12.6199 33.7617,9.6089 29.5357,8.1569 C25.3117,6.7069 20.7737,6.9859 16.7587,8.9479 C12.2847,11.1349 9.0607,15.1719 7.8737,19.9499 L5.0917,14.8749 L3.8637,15.5489 L7.9087,22.9269 L15.1577,19.3859 L14.5427,18.1279 L9.1157,20.7789 C10.0977,16.1869 13.1207,12.2829 17.3737,10.2059 C21.0507,8.4099 25.2097,8.1509 29.0807,9.4819 C32.9527,10.8119 36.0747,13.5699 37.8717,17.2489 C39.6687,20.9269 39.9267,25.0849 38.5967,28.9559 C37.2667,32.8279 34.5077,35.9499 30.8287,37.7469 C27.1517,39.5439 22.9917,39.8009 19.1217,38.4719 C15.2497,37.1419 12.1277,34.3829 10.3307,30.7049 C9.7667,29.5479 9.3497,28.3309 9.0907,27.0869 L7.7197,27.3719 C8.0017,28.7299 8.4567,30.0579 9.0737,31.3189 C11.0337,35.3329 14.4417,38.3439 18.6667,39.7959 C20.4487,40.4069 22.2847,40.7119 24.1157,40.7119 C26.6257,40.7119 29.1217,40.1399 31.4447,39.0049 C35.4577,37.0439 38.4687,33.6369 39.9207,29.4109 C41.3717,25.1859 41.0917,20.6489 39.1297,16.6339 L39.1297,16.6339 Z M18.3907,19.1299 L18.3907,28.5229 L20.0557,28.5229 L20.0557,25.7789 L21.4067,24.0999 L23.9487,28.5229 L25.7857,28.5229 L22.4107,22.7919 L25.2977,19.1299 L23.4457,19.1299 L20.0997,23.3959 L20.0557,23.3959 L20.0557,19.1299 L18.3907,19.1299 Z"
      />
    </svg>
  );
});

export default Refund;
