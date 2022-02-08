import React from 'react';
import { returnIcon, SvgPathProps } from './Icon';

const AlarmClock: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <g fillRule="evenodd">
      <path d="M24.65 25.937h-4.88v-1.3h3.58v-4.862h1.3zM16.272 36.651l-.954-.883 2.632-2.845.954.883zM31.728 36.651l-2.632-2.845.954-.883 2.632 2.845z" />
      <path d="M24 14.602c-5.447 0-9.879 4.432-9.879 9.88 0 5.446 4.432 9.877 9.879 9.877 5.447 0 9.878-4.43 9.878-9.878 0-5.447-4.431-9.879-9.878-9.879m0 21.057c-6.164 0-11.179-5.015-11.179-11.178 0-6.164 5.015-11.179 11.179-11.179 6.164 0 11.178 5.015 11.178 11.18 0 6.162-5.014 11.177-11.178 11.177" />
      <path d="M16.287 12.44h-.005a3.418 3.418 0 00-2.435 1.013 3.435 3.435 0 00.557 5.306 11.19 11.19 0 014.936-4.43 3.407 3.407 0 00-3.053-1.89zm-1.33 8.03l-.556-.241a4.74 4.74 0 01-2.859-4.336 4.707 4.707 0 011.384-3.357 4.715 4.715 0 013.354-1.396h.007c2.08 0 3.892 1.344 4.513 3.346l.18.579-.565.219a9.885 9.885 0 00-5.178 4.649l-.28.538zm13.704-6.14a11.179 11.179 0 014.935 4.428 3.438 3.438 0 001.563-2.879 3.45 3.45 0 00-3.446-3.44h-.006a3.407 3.407 0 00-3.046 1.89zm4.382 6.14l-.28-.537a9.884 9.884 0 00-5.178-4.649l-.563-.22.179-.578a4.713 4.713 0 014.504-3.346h.008a4.75 4.75 0 014.745 4.737 4.738 4.738 0 01-2.86 4.35l-.555.242z" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd">
      <path d="M24.65 25.937h-4.88v-1.3h3.58v-4.862h1.3zM16.272 36.651l-.954-.883 2.632-2.845.954.883zM31.728 36.651l-2.632-2.845.954-.883 2.632 2.845z" />
      <path d="M24 14.602c-5.447 0-9.88 4.432-9.88 9.88 0 5.446 4.433 9.877 9.88 9.877 5.447 0 9.878-4.43 9.878-9.878 0-5.447-4.431-9.879-9.878-9.879m0 21.057c-6.164 0-11.18-5.015-11.18-11.178 0-6.164 5.016-11.179 11.18-11.179s11.178 5.015 11.178 11.18c0 6.162-5.014 11.177-11.178 11.177" />
      <path d="M28.66 14.329a11.184 11.184 0 014.936 4.43 3.437 3.437 0 00-1.878-6.319h-.006a3.407 3.407 0 00-3.052 1.889zm4.383 6.142l-.28-.538a9.88 9.88 0 00-5.179-4.649l-.564-.22.18-.578c.621-2.002 2.434-3.346 4.512-3.346h.008a4.715 4.715 0 013.354 1.396 4.71 4.71 0 011.384 3.357 4.742 4.742 0 01-2.859 4.336l-.556.242zm7.718-7.195l-1.3-.008c.014-2.44-1.794-5.082-4.737-5.1l.008-1.3c3.746.022 6.047 3.343 6.03 6.408" />
      <path d="M43.778 13.225l-1.3-.008c.011-1.962-.72-3.954-2.006-5.465-.99-1.163-2.744-2.552-5.477-2.568l.008-1.299c2.516.014 4.81 1.088 6.46 3.024 1.484 1.744 2.328 4.046 2.315 6.316m-27.491-.785h-.005a3.418 3.418 0 00-2.435 1.013 3.435 3.435 0 00.557 5.306 11.179 11.179 0 014.936-4.43 3.407 3.407 0 00-3.053-1.89zm-1.33 8.03l-.556-.241a4.74 4.74 0 01-2.86-4.336 4.707 4.707 0 011.385-3.357 4.715 4.715 0 013.354-1.396h.007c2.079 0 3.892 1.344 4.513 3.346l.179.579-.564.219a9.882 9.882 0 00-5.178 4.649l-.28.538zm-7.718-7.194c-.018-3.065 2.283-6.386 6.03-6.407l.008 1.3c-2.944.017-4.752 2.66-4.738 5.099l-1.3.008z" />
      <path d="M4.254 13.006c-.025-4.378 3.256-9.122 8.6-9.152l.007 1.3c-4.54.025-7.328 4.092-7.307 7.844l-1.3.008z" />
    </g>
  );

  const small = (
    <path
      fillRule="evenodd"
      d="M23.869 33.994c-5.32 0-9.646-4.326-9.646-9.644a9.588 9.588 0 011.98-5.83c.03-.04.06-.082.09-.12a9.601 9.601 0 011.07-1.15l.13-.118a9.554 9.554 0 011.375-1.013 9.573 9.573 0 015-1.413 9.577 9.577 0 014.997 1.41l.108.066a9.63 9.63 0 011.397 1.066c.387.354.747.737 1.072 1.15.032.04.061.082.092.122a9.576 9.576 0 011.98 5.83c0 5.318-4.327 9.644-9.645 9.644zM12.945 15.76a3.187 3.187 0 01.936-2.272 3.19 3.19 0 012.27-.944h.006c1.137 0 2.158.599 2.726 1.549-.028.012-.05.031-.077.044a11.47 11.47 0 00-2.445 1.64c-.08.07-.156.14-.233.21-.32.297-.628.61-.913.942-.03.035-.062.065-.091.1-.312.372-.596.769-.859 1.18-.019.028-.043.053-.062.084a3.196 3.196 0 01-1.258-2.533zm18.632-3.216h.005c.855 0 1.66.332 2.266.936a3.196 3.196 0 01-.315 4.811c-.019-.03-.044-.056-.063-.087-.264-.41-.548-.806-.86-1.178l-.082-.09c-.29-.337-.6-.653-.925-.954l-.223-.203a11.462 11.462 0 00-2.445-1.64c-.027-.013-.053-.032-.08-.046a3.165 3.165 0 012.722-1.549zm3.705 11.807c0-1.593-.33-3.11-.923-4.488a4.95 4.95 0 00.738-7.635 4.947 4.947 0 00-3.515-1.452h-.008a4.926 4.926 0 00-4.37 2.661 11.37 11.37 0 00-6.67 0 4.924 4.924 0 00-4.377-2.661h-.009a4.945 4.945 0 00-3.519 1.464 4.94 4.94 0 00-1.454 3.523 4.968 4.968 0 002.202 4.101 11.33 11.33 0 00-.922 4.487c0 3.686 1.763 6.96 4.484 9.048l-1.925 2.08 1.299 1.2 2.122-2.294a11.34 11.34 0 005.434 1.379c1.965 0 3.817-.5 5.434-1.379l2.12 2.294 1.3-1.2-1.926-2.08c2.72-2.088 4.485-5.362 4.485-9.048zm-12.297-.078h-3.346v1.768h5.114v-6.395h-1.768v4.627z"
    />
  );

  const smallHover = (
    <path
      fillRule="evenodd"
      d="M33.534 18.292c-.021-.033-.048-.062-.07-.095-.26-.404-.539-.795-.847-1.162-.037-.043-.077-.082-.114-.125a11.665 11.665 0 00-1.134-1.14 11.395 11.395 0 00-2.434-1.632c-.028-.013-.053-.032-.08-.046a3.168 3.168 0 012.725-1.549h.006a3.192 3.192 0 012.27.944 3.198 3.198 0 01-.322 4.805zm-9.666 15.702c-5.318 0-9.644-4.326-9.644-9.644a9.578 9.578 0 011.98-5.83l.09-.121a9.623 9.623 0 011.072-1.15 9.615 9.615 0 011.5-1.128 9.58 9.58 0 015.002-1.415 9.58 9.58 0 014.996 1.41l.111.067c.447.28.868.598 1.262.944l.142.129a9.7 9.7 0 011.058 1.137c.036.045.07.093.105.139a9.573 9.573 0 011.97 5.818c0 5.318-4.326 9.644-9.644 9.644zM12.945 15.759a3.213 3.213 0 013.204-3.216h.007c1.138 0 2.158.599 2.727 1.549-.026.012-.048.03-.075.043a11.458 11.458 0 00-3.595 2.796c-.028.033-.06.063-.087.096-.313.373-.597.77-.861 1.18-.02.03-.043.056-.062.085a3.196 3.196 0 01-1.258-2.533zm23.616.003a4.947 4.947 0 00-1.453-3.523 4.945 4.945 0 00-3.52-1.464h-.008c-1.87 0-3.53 1.04-4.378 2.661a11.355 11.355 0 00-3.334-.499c-1.16 0-2.278.176-3.333.5a4.926 4.926 0 00-4.38-2.662h-.008a4.986 4.986 0 00-4.97 4.987 4.963 4.963 0 002.2 4.101 11.352 11.352 0 00-.921 4.487c0 3.686 1.763 6.959 4.483 9.048l-1.925 2.079 1.297 1.202 2.123-2.295c1.617.88 3.469 1.38 5.434 1.38 1.966 0 3.816-.5 5.433-1.38l2.124 2.295 1.297-1.202-1.925-2.08c2.72-2.088 4.484-5.361 4.484-9.047 0-1.593-.33-3.109-.922-4.487a4.963 4.963 0 002.202-4.101zm2.661-7.097c-1.18-1.383-2.82-2.152-4.62-2.162l-.01 1.768c1.638.01 2.689.844 3.284 1.541a5.158 5.158 0 011.218 3.323l1.77.01a6.96 6.96 0 00-1.642-4.48zM13.137 6.503c-3.892.022-6.282 3.466-6.264 6.643l1.768-.01c-.013-2.327 1.707-4.849 4.504-4.865l-.008-1.768zm9.846 17.768h-3.345v1.769h5.115v-6.395h-1.77v4.626z"
    />
  );

  return returnIcon(size, isHovered, normal, normalHover, small, smallHover);
};

export default AlarmClock;
