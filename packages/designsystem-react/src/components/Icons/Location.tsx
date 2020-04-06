import React from 'react';
import {IconRawProps} from './Icon';

const Location = React.forwardRef((svgProps: IconRawProps, ref: any) => {
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
        d="M24.0052,24.7999 C21.0242,24.7999 18.5992,22.3749 18.5992,19.3949 C18.5992,16.4129 21.0242,13.9879 24.0052,13.9879 C26.9862,13.9879 29.4112,16.4129 29.4112,19.3949 C29.4112,22.3749 26.9862,24.7999 24.0052,24.7999 M24.0052,12.5879 C20.2522,12.5879 17.1992,15.6419 17.1992,19.3949 C17.1992,23.1479 20.2522,26.1999 24.0052,26.1999 C27.7582,26.1999 30.8112,23.1479 30.8112,19.3949 C30.8112,15.6419 27.7582,12.5879 24.0052,12.5879 M24.0052,41.9299 C21.5532,39.1289 11.2432,26.9289 11.2432,19.8299 C11.2432,12.7929 16.9682,7.0689 24.0052,7.0689 C31.0422,7.0689 36.7672,12.7929 36.7672,19.8299 C36.7672,26.9269 26.4562,39.1299 24.0052,41.9299 M24.0052,5.6679 C16.1962,5.6679 9.8422,12.0219 9.8422,19.8299 C9.8422,28.3829 22.9302,42.8449 23.4872,43.4559 C23.6202,43.6019 23.8082,43.6849 24.0052,43.6849 C24.2022,43.6849 24.3902,43.6019 24.5232,43.4559 C25.0802,42.8449 38.1682,28.3829 38.1682,19.8299 C38.1682,12.0219 31.8142,5.6679 24.0052,5.6679"
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

export default Location;
