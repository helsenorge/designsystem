import React from 'react';
import {IconRawProps} from './Icon';

const Documents = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M39.3173,32.8837 L39.3173,21.5487 C39.3173,20.1597 38.1873,19.0297 36.7973,19.0297 L36.5133,19.0297 L36.5133,17.8947 L41.2393,17.8947 C41.4493,17.8947 41.6383,17.9837 41.7723,18.1437 C41.9063,18.3047 41.9593,18.5077 41.9213,18.7137 L39.3173,32.8837 Z M38.0173,39.3667 L8.3033,39.3667 L8.3033,16.8727 L17.5463,16.8727 L20.0813,20.3287 L36.7973,20.3287 C37.4703,20.3287 38.0173,20.8767 38.0173,21.5487 L38.0173,39.3667 Z M13.2833,13.2467 L32.8423,13.2467 L32.8423,19.0297 L20.7393,19.0297 L18.2043,15.5727 L13.2833,15.5727 L13.2833,13.2467 Z M15.0353,10.3907 L35.2133,10.3907 L35.2133,19.0297 L34.1433,19.0297 L34.1433,11.9467 L15.0353,11.9467 L15.0353,10.3907 Z M42.7713,17.3117 C42.3913,16.8557 41.8333,16.5947 41.2393,16.5947 L36.5133,16.5947 L36.5133,9.0907 L13.7343,9.0907 L13.7343,11.9467 L11.9833,11.9467 L11.9833,15.5727 L7.0043,15.5727 L7.0043,40.6667 L39.3173,40.6667 L39.3173,40.0757 L43.2003,18.9487 C43.3073,18.3647 43.1513,17.7677 42.7713,17.3117 L42.7713,17.3117 Z M17.1083,26.1717 L15.8083,26.1717 L15.8083,29.3467 L12.6333,29.3467 L12.6333,30.6467 L15.8083,30.6467 L15.8083,33.8217 L17.1083,33.8217 L17.1083,30.6467 L20.2843,30.6467 L20.2843,29.3467 L17.1083,29.3467 L17.1083,26.1717 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M16.914,26.1712 L15.614,26.1712 L15.614,29.3462 L12.438,29.3462 L12.438,30.6462 L15.614,30.6462 L15.614,33.8212 L16.914,33.8212 L16.914,30.6462 L20.089,30.6462 L20.089,29.3462 L16.914,29.3462 L16.914,26.1712 Z M37.92,39.3672 L8.206,39.3672 L8.206,16.8722 L17.448,16.8722 L19.984,20.3292 L36.701,20.3292 C37.373,20.3292 37.92,20.8762 37.92,21.5482 L37.92,39.3672 Z M13.186,13.2472 L32.746,13.2472 L32.746,19.0292 L20.643,19.0292 L18.107,15.5722 L13.186,15.5722 L13.186,13.2472 Z M14.937,8.1402 L35.116,8.1402 L35.116,19.0292 L34.046,19.0292 L34.046,11.9472 L14.937,11.9472 L14.937,8.1402 Z M36.701,19.0292 L36.416,19.0292 L36.416,6.8402 L13.638,6.8402 L13.638,11.9472 L11.886,11.9472 L11.886,15.5722 L6.906,15.5722 L6.906,40.6672 L39.22,40.6672 L39.22,21.5482 C39.22,20.1592 38.09,19.0292 36.701,19.0292 L36.701,19.0292 Z"
      />
    </svg>
  );
});

export default Documents;
