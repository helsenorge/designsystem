import React from 'react';
import {IconRawProps} from './Icon';

const Heart = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = false;
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
        d="M36.3677,23.0803 L23.8757,36.0023 L11.3837,23.0813 C8.7627,20.3513 8.8517,15.9963 11.5837,13.3743 C12.9127,12.0993 14.6247,11.4663 16.3357,11.4663 C18.1407,11.4663 19.9447,12.1723 21.2917,13.5753 L23.8757,16.2683 L26.4587,13.5753 C29.0797,10.8443 33.4337,10.7533 36.1667,13.3743 C38.8977,15.9963 38.9877,20.3513 36.3677,23.0803 M37.0667,12.4363 C33.8167,9.3203 28.6387,9.4273 25.5207,12.6743 L23.8757,14.3903 L22.2287,12.6743 C19.1127,9.4273 13.9317,9.3183 10.6827,12.4363 C7.4347,15.5543 7.3287,20.7343 10.4467,23.9833 L23.8757,37.8723 L37.3047,23.9823 C40.4217,20.7343 40.3147,15.5543 37.0667,12.4363 M11.3617,18.2263 C11.3347,19.5553 11.8227,20.8113 12.7377,21.7653 L13.6757,20.8653 C13.0017,20.1623 12.6407,19.2343 12.6607,18.2523 C12.6807,17.2703 13.0827,16.3553 13.7917,15.6753 C14.4787,15.0153 15.3837,14.6513 16.3367,14.6513 L16.3367,13.3513 C15.0457,13.3513 13.8217,13.8443 12.8907,14.7373 C11.9317,15.6583 11.3887,16.8963 11.3617,18.2263"
      />
    </svg>
  ) : (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}></svg>
  );
});

export default Heart;
