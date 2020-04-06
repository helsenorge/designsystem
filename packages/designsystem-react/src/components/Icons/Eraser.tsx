import React from 'react';
import {IconRawProps} from './Icon';
const Eraser = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className={`${classNames} icon`} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M28.333,30.8347 L30.664,30.8347 L30.664,29.4347 L28.333,29.4347 L28.333,30.8347 Z M15.86,29.4337 L11.6,29.4337 C11.509,29.4337 11.302,29.3497 11.237,29.2847 L7.574,25.6517 C7.202,25.2807 6.998,24.7857 6.998,24.2607 C6.998,23.7357 7.202,23.2417 7.574,22.8697 L14.403,16.0407 L21.934,23.5707 L16.219,29.2857 C16.156,29.3477 15.948,29.4337 15.86,29.4337 L15.86,29.4337 Z M21.797,8.6457 L29.342,16.1627 L22.924,22.5807 L15.393,15.0497 L21.797,8.6457 Z M30.475,17.0097 C30.701,16.7827 30.826,16.4807 30.825006,16.1597 C30.824,15.8387 30.699,15.5377 30.473,15.3127 L22.644,7.5137 C22.175,7.0487 21.414,7.0497 20.947,7.5157 L6.584,21.8797 C5.948,22.5147 5.598,23.3607 5.598,24.2607 C5.598,25.1607 5.948,26.0067 6.586,26.6437 L10.251,30.2797 C10.575,30.6007 11.143,30.8347 11.6,30.8347 L26.283,30.8347 L26.283,29.4337 L18.051,29.4337 L30.475,17.0097 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className={`${classNames} icon`} {...props}>
      <path
        fill={hoverColor}
        fillRule="evenodd"
        d="M26.5012,22.5806 L18.9702,15.0496 L25.3742,8.6456 L32.9192,16.1626 L26.5012,22.5806 Z M19.7962,29.2856 C19.7332,29.3486 19.5252,29.4346 19.4382,29.4346 L15.1772,29.4346 C15.0862,29.4346 14.8802,29.3496 14.8152,29.2856 L11.1512,25.6516 C10.7792,25.2806 10.5752,24.7866 10.5752,24.2606 C10.5752,23.7356 10.7792,23.2416 11.1512,22.8696 L17.9802,16.0406 L25.5112,23.5706 L19.7962,29.2856 Z M34.0502,15.3126 L26.2212,7.5136 C25.7522,7.0486 24.9912,7.0496 24.5242,7.5156 L10.1612,21.8796 C9.5252,22.5156 9.1752,23.3606 9.1752,24.2606 C9.1752,25.1606 9.5252,26.0066 10.1632,26.6436 L13.8292,30.2796 C14.1532,30.6006 14.7202,30.8346 15.1772,30.8346 L26.2832,30.8346 L26.2832,29.4346 L21.6282,29.4346 L34.0522,17.0096 C34.2782,16.7826 34.4032,16.4806 34.402206,16.1596 C34.4012,15.8386 34.2762,15.5376 34.0502,15.3126 L34.0502,15.3126 Z M28.3332,30.8346 L30.6632,30.8346 L30.6632,29.4346 L28.3332,29.4346 L28.3332,30.8346 Z"
      />
    </svg>
  );
});
export default Eraser;
