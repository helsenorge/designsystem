import React from 'react';
import {IconRawProps} from './Icon';

const InfoSignStroke = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = false;
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M25.6715,30.501 C25.5325,30.441 25.4255,30.351 25.3505,30.229 C25.2765,30.108 25.2395,29.96 25.2395,29.786 L25.2395,21.869 L25.1275,21.757 L21.4765,21.951 L21.4765,22.495 C21.6255,22.51 21.7905,22.545 21.9725,22.599 C22.1525,22.654 22.2885,22.711 22.3785,22.771 C22.4975,22.85 22.5965,22.956 22.6765,23.087 C22.7555,23.22 22.7955,23.372 22.7955,23.546 L22.7955,29.883 C22.7955,30.066 22.7635,30.214 22.6985,30.326 C22.6335,30.437 22.5225,30.523 22.3635,30.583 C22.2735,30.618 22.1665,30.643 22.0425,30.657 C21.9185,30.672 21.7915,30.685 21.6625,30.695 L21.6625,31.239 L26.3715,31.239 L26.3715,30.695 C26.2425,30.68 26.1185,30.655 25.9995,30.62 C25.8795,30.585 25.7705,30.546 25.6715,30.501 M24.0005,37.604 C16.4995,37.604 10.3965,31.501 10.3965,24 C10.3965,16.499 16.4995,10.397 24.0005,10.397 C31.5015,10.397 37.6025,16.499 37.6025,24 C37.6025,31.501 31.5015,37.604 24.0005,37.604 M24.0005,8.695 C15.5615,8.695 8.6955,15.562 8.6955,24 C8.6955,32.438 15.5615,39.305 24.0005,39.305 C32.4385,39.305 39.3045,32.438 39.3045,24 C39.3045,15.562 32.4385,8.695 24.0005,8.695 M23.7255,19.327 C24.5865,19.327 25.2845,18.629 25.2845,17.768 C25.2845,16.908 24.5865,16.21 23.7255,16.21 C22.8645,16.21 22.1665,16.908 22.1665,17.768 C22.1665,18.629 22.8645,19.327 23.7255,19.327"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}></svg>
  );
});

export default InfoSignStroke;
