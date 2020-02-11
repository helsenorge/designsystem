import React from 'react';
import {IconRawProps} from './Icon';
const X = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 38, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M26.1376353,10.5895725 L27.4104275,11.8623647 L20.2715725,18.9995725 L27.4104275,26.1376353 L26.1376353,27.4104275 L18.9995725,20.2715725 L11.8623647,27.4104275 L10.5895725,26.1376353 L17.7275725,18.9995725 L10.5895725,11.8623647 L11.8623647,10.5895725 L18.9995725,17.7275725 L26.1376353,10.5895725 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={hoverColor}
        fillRule="evenodd"
        d="M28.5546147,7.79289322 L29.9688282,9.20710678 L20.3012032,18.8748932 L29.7428596,28.3163361 L28.328646,29.7305496 L18.8872032,20.2888932 L9.44538535,29.7305496 L8.03117178,28.3163361 L17.4722032,18.8738932 L7.80520317,9.20710678 L9.21941674,7.79289322 L18.8862032,17.4598932 L28.5546147,7.79289322 Z"
      />
    </svg>
  );
});
export default X;
