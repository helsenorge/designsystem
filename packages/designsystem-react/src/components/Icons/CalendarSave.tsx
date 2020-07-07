import React from 'react';
import {IconRawProps} from './Icon';

const CalendarSave = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M9.51,34.649 L39.661,34.649 L39.661,18.298 L9.51,18.298 L9.51,34.649 Z M9.51,10.838 L9.51,16.898 L39.661,16.898 L39.661,10.838 L35.815,10.838 L35.815,12.271 C35.815,13.348 34.938,14.225 33.861,14.225 L33.201,14.225 C32.124,14.225 31.247,13.348 31.247,12.271 L31.247,10.838 L17.802,10.838 L17.802,12.271 C17.802,13.348 16.926,14.225 15.848,14.225 L15.188,14.225 C14.111,14.225 13.234,13.348 13.234,12.271 L13.234,10.838 L9.51,10.838 Z M14.634,12.271 C14.634,12.577 14.883,12.825 15.188,12.825 L15.848,12.825 C16.154,12.825 16.402,12.577 16.402,12.271 L16.402,8.216 C16.402,7.911 16.154,7.663 15.848,7.663 L15.188,7.663 C14.883,7.663 14.634,7.911 14.634,8.216 L14.634,12.271 Z M32.647,12.271 C32.647,12.577 32.895,12.825 33.201,12.825 L33.861,12.825 C34.167,12.825 34.415,12.577 34.415,12.271 L34.415,8.216 C34.415,7.911 34.167,7.663 33.861,7.663 L33.201,7.663 C32.895,7.663 32.647,7.911 32.647,8.216 L32.647,12.271 Z M41.061,9.438 L41.061,36.049 L8.11,36.049 L8.11,9.438 L13.234,9.438 L13.234,8.216 C13.234,7.139 14.111,6.262 15.188,6.262 L15.848,6.262 C16.926,6.262 17.802,7.139 17.802,8.216 L17.802,9.438 L31.247,9.438 L31.247,8.216 C31.247,7.139 32.124,6.262 33.201,6.262 L33.861,6.262 C34.938,6.262 35.815,7.139 35.815,8.216 L35.815,9.438 L41.061,9.438 Z M29.026,26.396 L29.995,27.406 L24.604,32.583 L19.181,27.495 L20.139,26.474 L23.885,29.988 L23.885,22.846 L25.285,22.846 L25.285,29.987 L29.026,26.396 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M27.136,34.6488 L29.41,32.4648 L28.44,31.4558 L25.115,34.6488 L24.7,34.6488 L24.7,27.9048 L23.3,27.9048 L23.3,34.6488 L22.875,34.6488 L19.554,31.5328 L18.596,32.5538 L20.829,34.6488 L8.925,34.6488 L8.925,18.2978 L19.062,18.2978 L24.019,22.9488 L28.862,18.2978 L39.075,18.2978 L39.075,34.6488 L27.136,34.6488 Z M23.3,18.2978 L23.3,20.3668 L21.052,18.2978 L23.3,18.2978 Z M24.7,18.2978 L26.875,18.2978 L24.7,20.3618 L24.7,18.2978 Z M12.649,10.8378 L12.649,12.2708 C12.649,13.3478 13.526,14.2248 14.603,14.2248 L15.263,14.2248 C16.34,14.2248 17.217,13.3478 17.217,12.2708 L17.217,10.8378 L30.661,10.8378 L30.661,12.2708 C30.661,13.3478 31.538,14.2248 32.616,14.2248 L33.276,14.2248 C34.353,14.2248 35.23,13.3478 35.23,12.2708 L35.23,10.8378 L39.075,10.8378 L39.075,16.8978 L8.925,16.8978 L8.925,10.8378 L12.649,10.8378 Z M14.049,8.2158 C14.049,7.9108 14.297,7.6628 14.603,7.6628 L15.263,7.6628 C15.569,7.6628 15.817,7.9108 15.817,8.2158 L15.817,12.2708 C15.817,12.5768 15.569,12.8248 15.263,12.8248 L14.603,12.8248 C14.297,12.8248 14.049,12.5768 14.049,12.2708 L14.049,8.2158 Z M32.062,8.2158 C32.062,7.9108 32.31,7.6628 32.616,7.6628 L33.276,7.6628 C33.581,7.6628 33.83,7.9108 33.83,8.2158 L33.83,12.2708 C33.83,12.5768 33.581,12.8248 33.276,12.8248 L32.616,12.8248 C32.31,12.8248 32.062,12.5768 32.062,12.2708 L32.062,8.2158 Z M35.23,9.4378 L35.23,8.2158 C35.23,7.1388 34.353,6.2618 33.276,6.2618 L32.616,6.2618 C31.538,6.2618 30.661,7.1388 30.661,8.2158 L30.661,9.4378 L17.217,9.4378 L17.217,8.2158 C17.217,7.1388 16.34,6.2618 15.263,6.2618 L14.603,6.2618 C13.526,6.2618 12.649,7.1388 12.649,8.2158 L12.649,9.4378 L7.524,9.4378 L7.524,36.0488 L22.321,36.0488 L25.678,36.0488 L40.476,36.0488 L40.476,9.4378 L35.23,9.4378 Z"
    />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M1.51,28.649 L31.661,28.649 L31.661,12.298 L1.51,12.298 L1.51,28.649 Z M1.51,4.838 L1.51,10.898 L31.661,10.898 L31.661,4.838 L27.815,4.838 L27.815,6.271 C27.815,7.348 26.938,8.225 25.861,8.225 L25.201,8.225 C24.124,8.225 23.247,7.348 23.247,6.271 L23.247,4.838 L9.802,4.838 L9.802,6.271 C9.802,7.348 8.926,8.225 7.848,8.225 L7.188,8.225 C6.111,8.225 5.234,7.348 5.234,6.271 L5.234,4.838 L1.51,4.838 Z M6.634,6.271 C6.634,6.577 6.883,6.825 7.188,6.825 L7.848,6.825 C8.154,6.825 8.402,6.577 8.402,6.271 L8.402,2.216 C8.402,1.911 8.154,1.663 7.848,1.663 L7.188,1.663 C6.883,1.663 6.634,1.911 6.634,2.216 L6.634,6.271 Z M24.647,6.271 C24.647,6.577 24.895,6.825 25.201,6.825 L25.861,6.825 C26.167,6.825 26.415,6.577 26.415,6.271 L26.415,2.216 C26.415,1.911 26.167,1.663 25.861,1.663 L25.201,1.663 C24.895,1.663 24.647,1.911 24.647,2.216 L24.647,6.271 Z M33.061,3.438 L33.061,30.049 L0.11,30.049 L0.11,3.438 L5.234,3.438 L5.234,2.216 C5.234,1.139 6.111,0.262 7.188,0.262 L7.848,0.262 C8.926,0.262 9.802,1.139 9.802,2.216 L9.802,3.438 L23.247,3.438 L23.247,2.216 C23.247,1.139 24.124,0.262 25.201,0.262 L25.861,0.262 C26.938,0.262 27.815,1.139 27.815,2.216 L27.815,3.438 L33.061,3.438 Z M21.026,20.396 L21.995,21.406 L16.604,26.583 L11.181,21.495 L12.139,20.474 L15.885,23.988 L15.885,16.846 L17.285,16.846 L17.285,23.987 L21.026,20.396 Z"
      transform="translate(8 6)"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M20.136,28.6488 L22.41,26.4648 L21.44,25.4558 L18.115,28.6488 L17.7,28.6488 L17.7,21.9048 L16.3,21.9048 L16.3,28.6488 L15.875,28.6488 L12.554,25.5328 L11.596,26.5538 L13.829,28.6488 L1.925,28.6488 L1.925,12.2978 L12.062,12.2978 L17.019,16.9488 L21.862,12.2978 L32.075,12.2978 L32.075,28.6488 L20.136,28.6488 Z M16.3,12.2978 L16.3,14.3668 L14.052,12.2978 L16.3,12.2978 Z M17.7,12.2978 L19.875,12.2978 L17.7,14.3618 L17.7,12.2978 Z M5.649,4.8378 L5.649,6.2708 C5.649,7.3478 6.526,8.2248 7.603,8.2248 L8.263,8.2248 C9.34,8.2248 10.217,7.3478 10.217,6.2708 L10.217,4.8378 L23.661,4.8378 L23.661,6.2708 C23.661,7.3478 24.538,8.2248 25.616,8.2248 L26.276,8.2248 C27.353,8.2248 28.23,7.3478 28.23,6.2708 L28.23,4.8378 L32.075,4.8378 L32.075,10.8978 L1.925,10.8978 L1.925,4.8378 L5.649,4.8378 Z M7.049,2.2158 C7.049,1.9108 7.297,1.6628 7.603,1.6628 L8.263,1.6628 C8.569,1.6628 8.817,1.9108 8.817,2.2158 L8.817,6.2708 C8.817,6.5768 8.569,6.8248 8.263,6.8248 L7.603,6.8248 C7.297,6.8248 7.049,6.5768 7.049,6.2708 L7.049,2.2158 Z M25.062,2.2158 C25.062,1.9108 25.31,1.6628 25.616,1.6628 L26.276,1.6628 C26.581,1.6628 26.83,1.9108 26.83,2.2158 L26.83,6.2708 C26.83,6.5768 26.581,6.8248 26.276,6.8248 L25.616,6.8248 C25.31,6.8248 25.062,6.5768 25.062,6.2708 L25.062,2.2158 Z M28.23,3.4378 L28.23,2.2158 C28.23,1.1388 27.353,0.2618 26.276,0.2618 L25.616,0.2618 C24.538,0.2618 23.661,1.1388 23.661,2.2158 L23.661,3.4378 L10.217,3.4378 L10.217,2.2158 C10.217,1.1388 9.34,0.2618 8.263,0.2618 L7.603,0.2618 C6.526,0.2618 5.649,1.1388 5.649,2.2158 L5.649,3.4378 L0.524,3.4378 L0.524,30.0488 L15.321,30.0488 L18.678,30.0488 L33.476,30.0488 L33.476,3.4378 L28.23,3.4378 Z"
      transform="translate(7 6)"
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
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default CalendarSave;
