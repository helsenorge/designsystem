import React from 'react';
import {IconRawProps} from './Icon';
const EnterFullScreen = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M21.9196,8.7642 L21.9196,10.1642 L26.6366,10.1642 L22.1176,14.6832 L23.1076,15.6742 L27.6266,11.1552 L27.6266,15.8392 L29.0266,15.8392 L29.0266,8.7642 L21.9196,8.7642 Z M15.6736,23.1082 L14.6836,22.1182 L10.1646,26.6362 L10.1646,21.9522 L8.7646,21.9522 L8.7646,29.0272 L15.8716,29.0272 L15.8716,27.6272 L11.1546,27.6272 L15.6736,23.1082 Z"
      />
    </svg>
  ) : (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <path
        fill={hoverColor}
        fillRule="evenodd"
        d="M22.9199,7.7642 L22.9199,9.1642 L27.6369,9.1642 L22.1179,14.6832 L23.1079,15.6742 L24.1079,14.6742 L28.6269,10.1552 L28.6269,14.8392 L30.0269,14.8392 L30.0269,7.7642 L22.9199,7.7642 Z M14.6839,22.1182 L9.1639,27.6372 L9.1639,22.9522 L7.7639,22.9522 L7.7639,30.0282 L14.8719,30.0282 L14.8719,28.6272 L10.1549,28.6272 L15.6739,23.1082 L14.6839,22.1182 Z"
      />
    </svg>
  );
});
export default EnterFullScreen;
