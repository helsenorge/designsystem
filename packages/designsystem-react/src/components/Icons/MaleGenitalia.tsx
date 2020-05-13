import React from 'react';
import {IconRawProps} from './Icon';

const MaleGenitalia = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M30.3337,30.1636 L30.3337,20.9816 L29.0327,20.9816 L29.0327,30.5596 L29.0327,31.1166 L29.0327,33.9046 L19.2207,33.9046 L19.2207,31.1166 L19.2207,30.6176 L19.2207,20.9816 L17.9197,20.9816 L17.9197,30.2426 C13.0037,28.6476 10.2017,25.0796 10.2017,20.3396 C10.2017,13.1466 16.3917,7.2946 23.9997,7.2946 C31.6077,7.2946 37.7977,13.1466 37.7977,20.3396 C37.7977,25.0626 35.1537,28.5216 30.3337,30.1636 M24.7767,42.1396 L24.7767,39.3676 L23.4767,39.3676 L23.4767,42.1396 C21.0807,41.8176 19.2207,39.7816 19.2207,37.2986 L19.2207,35.2046 L29.0327,35.2046 L29.0327,37.2986 C29.0327,39.7816 27.1727,41.8176 24.7767,42.1396 M23.9997,5.9956 C15.6747,5.9956 8.9007,12.4306 8.9007,20.3396 C8.9007,25.8206 12.1807,29.9046 17.9197,31.6086 L17.9197,37.2986 C17.9197,40.7206 20.7047,43.5046 24.1267,43.5046 C27.5487,43.5046 30.3337,40.7206 30.3337,37.2986 L30.3337,31.5356 C35.9117,29.7866 39.0987,25.7296 39.0987,20.3396 C39.0987,12.4306 32.3247,5.9956 23.9997,5.9956"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M31.5171,29.582 L30.7141,20.426 L29.4191,20.54 L30.2561,30.081 L30.2561,30.082 L30.5491,33.414 L20.7731,34.271 L20.5301,31.494 L19.6441,21.398 L18.3491,21.511 L19.1581,30.73 C14.6731,29.602 10.2021,25.752 10.2021,20.339 C10.2021,13.147 16.3911,7.295 24.0001,7.295 C31.6091,7.295 37.7981,13.147 37.7981,20.339 C37.7981,25.078 36.0761,27.653 31.5171,29.582 M29.7171,40.376 C29.0171,41.211 28.0761,41.757 27.0291,41.991 L26.7871,39.227 L25.4921,39.341 L25.7341,42.103 C23.3141,41.992 21.2871,40.125 21.0701,37.652 L20.8861,35.566 L30.6631,34.708 L30.8461,36.794 C30.9601,38.1 30.5601,39.372 29.7171,40.376 M39.0991,20.339 C39.0991,12.43 32.3261,5.995 24.0001,5.995 C15.6741,5.995 8.9011,12.43 8.9011,20.339 C8.9011,26.597 14.1591,30.986 19.2781,32.095 L19.7751,37.766 C20.0581,40.992 22.7741,43.43 25.9541,43.43 C26.1341,43.43 26.3171,43.422 26.5001,43.406 C28.1521,43.261 29.6481,42.481 30.7131,41.211 C31.7791,39.941 32.2871,38.332 32.1411,36.68 L31.6371,30.941 C36.9291,28.805 39.0991,25.703 39.0991,20.339"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className="icon"
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default MaleGenitalia;
