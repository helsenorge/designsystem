import React from 'react';
import {IconRawProps} from './Icon';

const Inbox = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M14.1945,20.0225 L19.9205,20.0225 L19.9205,18.8235 L14.1945,18.8235 L14.1945,20.0225 Z M37.9935,29.2685 L25.5265,29.2685 L25.5265,19.9405 C25.5265,17.0005 24.0205,14.4085 21.7405,12.8895 L28.0415,12.8895 L28.0415,16.1015 C27.2355,16.3935 26.6545,17.1585 26.6545,18.0655 C26.6545,19.2215 27.5945,20.1605 28.7505,20.1605 C29.9065,20.1605 30.8465,19.2215 30.8465,18.0655 C30.8465,17.1585 30.2655,16.3935 29.4595,16.1015 L29.4595,12.8895 L30.9425,12.8895 C34.8305,12.8895 37.9935,16.0525 37.9935,19.9405 L37.9935,29.2685 Z M23.5275,41.5465 L26.1785,41.5465 L26.1785,30.6865 L23.5275,30.6865 L23.5275,41.5465 Z M10.0065,29.2685 L10.0065,19.9405 C10.0065,16.0525 13.1695,12.8895 17.0585,12.8895 C20.9455,12.8895 24.1095,16.0525 24.1095,19.9405 L24.1095,29.2685 L10.0065,29.2685 Z M28.7505,17.1685 C29.2445,17.1685 29.6475,17.5705 29.6475,18.0655 C29.6475,18.5595 29.2445,18.9615 28.7505,18.9615 C28.2565,18.9615 27.8545,18.5595 27.8545,18.0655 C27.8545,17.5705 28.2565,17.1685 28.7505,17.1685 L28.7505,17.1685 Z M29.4595,7.5875 L33.0175,7.5875 L33.0175,6.4535 L29.4595,6.4535 L29.4595,7.5875 Z M30.9425,11.4715 L29.4595,11.4715 L29.4595,9.0055 L34.4355,9.0055 L34.4355,5.0355 L28.0415,5.0355 L28.0415,11.4715 L17.0585,11.4715 C12.3885,11.4715 8.5885,15.2705 8.5885,19.9405 L8.5885,30.6865 L22.1095,30.6865 L22.1095,42.9645 L27.5965,42.9645 L27.5965,30.6865 L39.4115,30.6865 L39.4115,19.9405 C39.4115,15.2705 35.6125,11.4715 30.9425,11.4715 L30.9425,11.4715 Z"
    />
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(8 6)">
      <path d="M21.7461,12.0649 C21.7461,12.6139 21.2991,13.0609 20.7501,13.0609 C20.2011,13.0609 19.7541,12.6139 19.7541,12.0649 C19.7541,11.5159 20.2011,11.0689 20.7501,11.0689 C21.2991,11.0689 21.7461,11.5159 21.7461,12.0649 L21.7461,12.0649 Z M30.0531,23.3269 L17.4681,23.3269 L17.4681,13.9399 C17.4681,10.9469 15.8911,8.3219 13.5301,6.8309 L22.9421,6.8309 C22.9801,6.8309 23.0171,6.8359 23.0561,6.8359 L21.1421,10.1089 C21.0151,10.0839 20.8841,10.0689 20.7501,10.0689 C19.6501,10.0689 18.7541,10.9639 18.7541,12.0649 C18.7541,13.1659 19.6501,14.0609 20.7501,14.0609 C21.8511,14.0609 22.7461,13.1659 22.7461,12.0649 C22.7461,11.5699 22.5581,11.1229 22.2591,10.7729 L24.4661,6.9999 C27.6561,7.6989 30.0531,10.5439 30.0531,13.9399 L30.0531,23.3269 Z M18.2371,35.6049 L15.4671,35.6049 L15.4671,24.6279 L16.8181,24.6279 L17.4681,24.6279 L18.2371,24.6279 L18.2371,35.6049 Z M1.9471,13.9399 C1.9471,10.0199 5.1371,6.8309 9.0581,6.8309 C12.9781,6.8309 16.1681,10.0199 16.1681,13.9399 L16.1681,23.3269 L1.9471,23.3269 L1.9471,13.9399 Z M29.7441,5.2549 L26.5711,3.3999 L26.8461,2.9309 L27.2041,2.3199 L30.3761,4.1749 L29.7441,5.2549 Z M25.1481,5.8339 L25.9141,4.5229 L30.2091,7.0349 L32.1541,3.7089 L26.7381,0.5409 L25.8661,2.0309 L23.7941,5.5729 C23.5141,5.5439 23.2301,5.5299 22.9421,5.5299 L9.0581,5.5299 C4.4201,5.5299 0.6471,9.3029 0.6471,13.9399 L0.6471,24.6279 L14.1671,24.6279 L14.1671,36.9059 L19.5371,36.9059 L19.5371,24.6279 L31.3521,24.6279 L31.3521,13.9399 C31.3521,10.0679 28.7171,6.8059 25.1481,5.8339 L25.1481,5.8339 Z" />
      <polygon points="6.195 13.923 11.921 13.923 11.921 12.923 6.195 12.923" />
    </g>
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

export default Inbox;