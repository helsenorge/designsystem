import React from 'react';

import { SvgPathProps } from './Icon';

const Refund: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M29.262 23.087c.306-.216.598-.323.876-.323.152 0 .282.01.388.028.104.02.219.048.344.087l.288-1.437c-.202-.095-.47-.143-.805-.143-.373 0-.737.122-1.091.366s-.656.596-.905 1.056h-.058l-.114-1.25H26.82v7.052h1.65v-4.31c.22-.535.484-.911.79-1.126zM24 7.274a16.704 16.704 0 00-12.812 5.984l-.273-5.78-1.398.066.395 8.405h8.068v-1.4h-6.041a15.313 15.313 0 0112.06-5.875c8.452 0 15.327 6.875 15.327 15.326 0 8.45-6.875 15.326-15.326 15.326-7.25 0-13.563-5.146-15.014-12.237l-1.371.28C9.198 35.11 16.089 40.728 24 40.728c9.223 0 16.727-7.504 16.727-16.727S33.223 7.274 24 7.274zM18.39 19.13v9.393h1.666v-2.744l1.35-1.68 2.543 4.424h1.837l-3.375-5.731 2.887-3.662h-1.852L20.1 23.396h-.044V19.13H18.39z" />
  );

  const normalHover = (
    <path d="M29.262 23.087c.306-.216.598-.323.876-.323.152 0 .282.01.388.028.104.02.219.048.344.087l.288-1.437c-.202-.095-.47-.143-.805-.143-.373 0-.737.122-1.091.366s-.656.596-.905 1.056h-.058l-.114-1.25H26.82v7.052h1.65v-4.31c.22-.535.484-.911.79-1.126zm9.868-6.453a16.618 16.618 0 00-9.594-8.477 16.62 16.62 0 00-12.777.79A16.713 16.713 0 007.874 19.95l-2.782-5.075-1.228.674 4.045 7.378 7.249-3.541-.615-1.258-5.427 2.65a15.314 15.314 0 018.258-10.572 15.225 15.225 0 0111.707-.724 15.223 15.223 0 018.79 7.767 15.225 15.225 0 01.726 11.707 15.224 15.224 0 01-7.768 8.79 15.23 15.23 0 01-11.707.726 15.226 15.226 0 01-8.791-7.767 15.453 15.453 0 01-1.24-3.618l-1.371.285a16.727 16.727 0 001.354 3.947 16.616 16.616 0 009.593 8.477c1.782.61 3.618.916 5.449.916 2.51 0 5.006-.572 7.329-1.707a16.62 16.62 0 008.476-9.594 16.616 16.616 0 00-.791-12.777zM18.39 19.13v9.393h1.666v-2.744l1.35-1.68 2.543 4.424h1.837l-3.375-5.731 2.887-3.662h-1.852L20.1 23.396h-.044V19.13H18.39z" />
  );

  return isHovered ? normalHover : normal;
};

export default Refund;
