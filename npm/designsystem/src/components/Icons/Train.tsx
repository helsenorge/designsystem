import React from 'react';
import { SvgPathProps } from './Icon';

const Train: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M16.466 24.161l-.034-6.679a3.397 3.397 0 013.375-3.41l8.29-.044h.017c.9 0 1.747.348 2.387.982a3.367 3.367 0 011.006 2.393l.035 6.68-15.076.078zm14.95-10.075c-.892-.884-2.074-1.4-3.326-1.359l-8.29.043a4.7 4.7 0 00-4.668 4.718l.038 7.33a.651.651 0 00.65.647h.003l16.375-.085a.65.65 0 00.647-.654l-.038-7.329a4.663 4.663 0 00-1.392-3.31zM20.516 31.714a1.345 1.345 0 01-.949-.387 1.34 1.34 0 01.935-2.291h.007c.355 0 .69.137.942.387a1.341 1.341 0 01-.935 2.291zm-.007-3.979h-.014a2.644 2.644 0 00-2.626 2.653c.004.705.282 1.367.783 1.863a2.626 2.626 0 001.856.764h.015a2.644 2.644 0 002.625-2.654 2.618 2.618 0 00-.783-1.862 2.623 2.623 0 00-1.856-.764zm7.897 8.146l-8.684.045h-.034c-.267 0-.528-.02-.786-.052l-.264-.086-.014.044c-3.114-.509-5.509-3.203-5.526-6.46l-.062-12.07a6.544 6.544 0 011.906-4.67 6.54 6.54 0 014.65-1.953l8.684-.045h.036c1.746 0 3.39.675 4.633 1.905a6.543 6.543 0 011.954 4.648l.063 12.07a6.553 6.553 0 01-1.906 4.671 6.546 6.546 0 01-4.65 1.953zm-9.38 2.903l.512-1.565c.05.001.1.007.15.007h.041l8.684-.044c.177 0 .352-.016.528-.029l.534 1.577-10.45.054zm17.235-9.533L36.2 17.182a7.844 7.844 0 00-2.339-5.568c-1.499-1.48-3.483-2.257-5.59-2.28l-8.686.044a7.836 7.836 0 00-5.566 2.34 7.835 7.835 0 00-2.282 5.59l.062 12.07c.021 3.831 2.785 7.015 6.416 7.706l-1.606 4.903 1.235.404.755-2.303 11.318-.059.778 2.296 1.231-.418-1.68-4.957a7.841 7.841 0 003.735-2.108 7.837 7.837 0 002.281-5.59zm-8.692 2.426a1.321 1.321 0 01-.949-.387A1.34 1.34 0 0127.556 29h.007c.355 0 .69.137.942.387a1.341 1.341 0 01-.935 2.291zm-.02-3.979a2.642 2.642 0 00-1.844 4.516 2.624 2.624 0 001.856.763h.014a2.642 2.642 0 001.844-4.515c-.502-.495-1.17-.739-1.87-.764zM26.336 7.724a.958.958 0 00-.01-1.914.957.957 0 00.01 1.914zm-4.592.018a.957.957 0 10-.01-1.914.957.957 0 00.01 1.914z" />
  );

  const normalHover = (
    <path d="M28.74 32.02a1.42 1.42 0 01-1.008.423h-.008a1.43 1.43 0 01-.007-2.857h.007c.785 0 1.425.636 1.43 1.42.002.383-.145.742-.414 1.014zm-1.016-3.735h-.013a2.714 2.714 0 00-1.926.81 2.711 2.711 0 00-.79 1.934 2.733 2.733 0 002.729 2.716h.015a2.707 2.707 0 001.925-.811A2.707 2.707 0 0030.453 31a2.731 2.731 0 00-2.73-2.716zm-6.355 3.774a1.418 1.418 0 01-1.008.422h-.007a1.43 1.43 0 01-.008-2.858h.007a1.43 1.43 0 011.016 2.436zm-1.015-3.735h-.014a2.714 2.714 0 00-1.926.808 2.711 2.711 0 00-.79 1.934 2.733 2.733 0 002.729 2.716h.015a2.712 2.712 0 001.925-.81 2.714 2.714 0 00.79-1.933 2.734 2.734 0 00-2.73-2.716zm-4.256-3.736l-.036-7.009a3.557 3.557 0 011.034-2.535 3.551 3.551 0 012.523-1.059l8.663-.044h.018a3.58 3.58 0 013.576 3.556l.036 7.01-15.814.081zM28.3 12.64h-.025l-8.663.046a4.848 4.848 0 00-3.44 1.445 4.85 4.85 0 00-1.41 3.454l.04 7.662a.652.652 0 00.65.646h.003l17.114-.088a.65.65 0 00.647-.653l-.04-7.66A4.882 4.882 0 0028.3 12.64zm.307 24.197l-9.076.047c-1.838-.022-3.587-.7-4.9-2a6.875 6.875 0 01-2.051-4.88l-.066-12.613a6.875 6.875 0 012-4.9 6.866 6.866 0 014.88-2.05l9.076-.047.036-.002a6.925 6.925 0 016.916 6.88l.065 12.613a6.874 6.874 0 01-2 4.902 6.868 6.868 0 01-4.88 2.05zm-9.58 1.949l.2-.614c.089.002.177.013.265.013h.046l9.076-.047c.218-.002.435-.017.65-.035l.213.629-10.45.053zm17.76-8.906l-.066-12.614c-.023-4.517-3.704-8.174-8.214-8.174h-.043l-9.077.048a8.164 8.164 0 00-5.796 2.437 8.16 8.16 0 00-2.376 5.82l.065 12.613a8.16 8.16 0 002.437 5.798 8.16 8.16 0 004.189 2.224l-1.296 3.956 1.235.404.754-2.303 11.318-.059.779 2.296 1.23-.418-1.363-4.022A8.156 8.156 0 0034.41 35.7a8.163 8.163 0 002.376-5.823zM21.645 7.398a.999.999 0 10-.01-1.997.999.999 0 00.01 1.998zm4.799-.018a.999.999 0 10-.01-1.998.999.999 0 00.01 1.998z" />
  );

  return isHovered ? normalHover : normal;
};

export default Train;
