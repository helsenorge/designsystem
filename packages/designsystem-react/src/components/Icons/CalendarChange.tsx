import React from 'react';
import {SvgPathProps} from './Icon';

const CalendarChange: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M18.586 29.239h13.881v1H18.58l1.964 1.964-.708.707-3.167-3.168 3.123-3.123.707.707-1.913 1.913zm11.952-5.507H16.656v-1h13.888l-1.964-1.963.707-.707 3.168 3.167-3.123 3.123-.707-.707 1.913-1.913zM9.46 34.699H39.71v-16.45H9.46v16.45zm3.824-23.91v1.152a2.238 2.238 0 002.235 2.235 2.237 2.237 0 002.234-2.235v-1.152h13.544v1.152a2.238 2.238 0 002.234 2.235 2.237 2.237 0 002.235-2.235v-1.152h3.946v6.159H9.46v-6.16h3.824zm1.301-2.242a.935.935 0 011.868 0v3.394a.935.935 0 01-1.868 0V8.547zm18.013 0a.935.935 0 011.868 0v3.394a.935.935 0 01-1.868 0V8.547zm3.168.94v-.94a2.237 2.237 0 00-2.235-2.235 2.238 2.238 0 00-2.234 2.235v.94H17.752v-.94a2.237 2.237 0 00-2.234-2.235 2.238 2.238 0 00-2.235 2.235v.94H8.16V36h32.852V9.488h-5.246z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M16.585 29.24h15.882v1H16.581l1.962 1.963-.707.707-3.167-3.168 3.123-3.123.707.707-1.914 1.914zm14.702-9.178l3.168 3.167-3.123 3.123-.707-.707 1.913-1.913H16.656v-1h15.887l-1.963-1.963.707-.707zM9.46 34.699H39.71v-16.45H9.46v16.45zm3.824-23.91v1.152a2.238 2.238 0 002.235 2.235 2.237 2.237 0 002.234-2.235v-1.152h13.544v1.152a2.238 2.238 0 002.234 2.235 2.237 2.237 0 002.235-2.235v-1.152h3.945v6.159H9.46v-6.16h3.823zm1.301-2.242a.934.934 0 011.868 0v3.394a.935.935 0 01-1.868 0V8.547zm18.013 0a.935.935 0 011.868 0v3.394a.935.935 0 01-1.868 0V8.547zm3.168.94v-.94a2.237 2.237 0 00-2.235-2.235 2.238 2.238 0 00-2.234 2.235v.94H17.752v-.94a2.237 2.237 0 00-2.234-2.235 2.238 2.238 0 00-2.235 2.235v.94H8.16V36h32.852V9.488h-5.246z"
    />
  );

  const simplified = (
    <path
      fillRule={'evenodd'}
      d="M19.004 29.108h13.564v1.263H18.999l1.738 1.74-.893.892-3.26-3.261 3.216-3.216.893.893-1.689 1.689zm11.117-5.244H16.557v-1.263h13.57l-1.739-1.738.893-.893 3.26 3.26-3.216 3.216-.893-.893 1.69-1.689zm-20.428 10.6h29.784v-15.98H9.693v15.98zm3.357-23.441v.918a2.472 2.472 0 002.468 2.468 2.47 2.47 0 002.468-2.468v-.918h13.077v.918a2.47 2.47 0 002.469 2.468A2.472 2.472 0 0036 11.941v-.918h3.477v5.69H9.693v-5.69h3.357zm1.77-2.476a.7.7 0 111.398 0v3.394a.7.7 0 11-1.399 0V8.547zm18.01 0a.7.7 0 011.401 0v3.394a.7.7 0 01-1.4 0V8.547zm3.17.706v-.706a2.472 2.472 0 00-2.468-2.468 2.47 2.47 0 00-2.469 2.468v.706H17.986v-.706a2.47 2.47 0 00-2.468-2.468 2.472 2.472 0 00-2.468 2.468v.706H7.925v26.981h33.32V9.254H36z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule={'evenodd'}
      d="M16.477 29.108h16.09v1.263H16.472l1.738 1.74-.893.892-3.26-3.261 3.216-3.216.893.893-1.689 1.689zm15.33-9.138l3.26 3.26-3.216 3.216-.893-.893 1.689-1.689h-16.09v-1.263h16.095l-1.738-1.738.893-.893zM9.693 34.465h29.784V18.483H9.693v15.982zm3.357-23.442v.918a2.47 2.47 0 002.468 2.468 2.47 2.47 0 002.467-2.468v-.918h13.078v.918a2.47 2.47 0 002.467 2.468A2.472 2.472 0 0036 11.941v-.918h3.477v5.69H9.693v-5.69h3.357zm1.769-2.476a.7.7 0 111.398 0v3.394a.7.7 0 11-1.398 0V8.547zm18.012 0a.7.7 0 111.4 0v3.394a.7.7 0 01-1.4 0V8.547zM36 9.253v-.706a2.472 2.472 0 00-2.47-2.468 2.47 2.47 0 00-2.466 2.468v.706H17.985v-.706a2.47 2.47 0 00-2.467-2.468 2.47 2.47 0 00-2.468 2.468v.706H7.924v26.981h33.321V9.254H36z"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default CalendarChange;
