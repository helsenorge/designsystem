import React from 'react';
import {IconRawProps} from './Icon';

const PaperPlane = React.forwardRef((svgProps: IconRawProps, ref: any) => {
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
        d="M41.5491,12.7252 L41.8181,12.6872 L41.6251,12.9452 L41.5491,12.7252 Z M26.7161,32.8712 L13.7191,23.3552 L40.9311,13.8712 L26.7161,32.8712 Z M12.9871,34.7762 L12.9871,24.4302 L20.7221,30.0932 L12.9871,34.7762 Z M6.1421,17.8062 L39.3721,13.0372 L12.4451,22.4222 L6.1421,17.8062 Z M2.8021,16.9722 L11.6881,23.4782 L11.6881,37.0822 L21.8581,30.9242 L26.9861,34.6802 L44.7381,10.9542 L2.8021,16.9722 Z"
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
        d="M43.5491,10.7252 L43.8181,10.6872 L43.6251,10.9452 L43.5491,10.7252 Z M28.7161,30.8712 L15.7191,21.3552 L42.9311,11.8712 L28.7161,30.8712 Z M14.9871,32.7762 L14.9871,22.4302 L22.7221,28.0932 L14.9871,32.7762 Z M8.1421,15.8062 L41.3721,11.0372 L14.4451,20.4222 L8.1421,15.8062 Z M4.8021,14.9722 L13.6881,21.4782 L13.6881,35.0822 L23.8581,28.9242 L28.9861,32.6802 L46.7381,8.9542 L4.8021,14.9722 Z"
      />
    </svg>
  );
});

export default PaperPlane;
