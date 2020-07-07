import React from 'react';
import {IconRawProps} from './Icon';

const BrokenHeart = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M36.4927,23.2053 L23.9997,36.1273 L11.5087,23.2073 C8.8877,20.4753 8.9767,16.1213 11.7087,13.4993 C12.9967,12.2633 14.6787,11.5883 16.4587,11.5883 C16.5067,11.5883 16.5557,11.5883 16.6037,11.5893 C18.4367,11.6273 20.1457,12.3763 21.4157,13.6993 L23.4267,15.7953 L24.3917,18.7983 L20.9987,22.0713 L24.1987,25.1583 L21.4827,27.7823 L22.3867,28.7173 L26.0707,25.1573 L22.8707,22.0713 L25.8777,19.1723 L24.7377,15.6233 L26.5837,13.6993 C27.8537,12.3763 29.5627,11.6273 31.3957,11.5893 C33.2287,11.5513 34.9677,12.2303 36.2907,13.4993 C39.0227,16.1213 39.1127,20.4753 36.4927,23.2053 M37.1907,12.5613 C35.6177,11.0513 33.5507,10.2373 31.3687,10.2893 C29.1887,10.3343 27.1557,11.2263 25.6457,12.7993 L23.9997,14.5153 L22.3537,12.7993 C20.8437,11.2263 18.8107,10.3343 16.6307,10.2893 C14.4527,10.2493 12.3827,11.0513 10.8087,12.5613 C7.5597,15.6793 7.4527,20.8583 10.5727,24.1093 L23.9997,37.9973 L37.4297,24.1073 C40.5467,20.8583 40.4397,15.6793 37.1907,12.5613"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M36.4932,23.2053 L24.0002,36.1273 L11.5092,23.2073 C8.8882,20.4753 8.9772,16.1213 11.7092,13.4993 C12.9972,12.2633 14.6792,11.5883 16.4592,11.5883 C16.5072,11.5883 16.5562,11.5883 16.6042,11.5893 C18.4372,11.6273 20.1462,12.3763 21.4162,13.6993 L23.4272,15.7953 L24.3922,18.7983 L20.9992,22.0713 L24.1992,25.1583 L20.9962,28.2533 L23.8542,30.9803 L24.7512,30.0393 L22.8732,28.2473 L26.0712,25.1573 L22.8712,22.0713 L25.8782,19.1723 L24.7372,15.6233 L26.5842,13.6993 C27.8532,12.3763 29.5622,11.6273 31.3962,11.5893 C33.2292,11.5513 34.9682,12.2303 36.2912,13.4993 C37.6142,14.7693 38.3642,16.4783 38.4022,18.3113 C38.4392,20.1453 37.7612,21.8833 36.4932,23.2053 M37.1912,12.5613 C35.6182,11.0513 33.5462,10.2433 31.3692,10.2893 C29.1882,10.3343 27.1562,11.2263 25.6462,12.7993 L24.0002,14.5153 L22.3542,12.7993 C20.8442,11.2263 18.8112,10.3343 16.6312,10.2893 C14.4462,10.2413 12.3822,11.0513 10.8082,12.5613 C7.5602,15.6793 7.4532,20.8583 10.5722,24.1093 L24.0002,37.9973 L37.4302,24.1073 C38.9392,22.5333 39.7462,20.4653 39.7012,18.2853 C39.6572,16.1043 38.7652,14.0713 37.1912,12.5613"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className={`hnds-style-icon ${className}`}
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default BrokenHeart;
