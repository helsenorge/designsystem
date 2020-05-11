import React from 'react';
import {IconRawProps} from './Icon';

const Menu = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fill="none" fill-rule="evenodd" stroke-linecap="square">
      <line x1="11.144" x2="36.781" y1="15.003" y2="15.003" stroke-width="1.75" />
      <line x1="11.144" x2="36.781" y1="23.467" y2="23.467" stroke-width="1.75" />
      <line x1="11.144" x2="36.781" y1="32.309" y2="32.309" stroke-width="1.75" />
    </g>
  );

  const normalHover = (
    <g fill="none" fill-rule="evenodd" stroke-linecap="square">
      <line x1="11.174" x2="36.811" y1="23.501" y2="23.501" stroke-width="1.75" />
      <line x1="11.174" x2="36.811" y1="13.727" y2="13.727" stroke-width="1.75" />
      <line x1="11.174" x2="36.811" y1="33.598" y2="33.598" stroke-width="1.75" />
    </g>
  );

  const simplified = (
    <path
      fill-rule="evenodd"
      d="M37.8799342,31.2113487 L37.8799342,33.4850329 L10.1052632,33.4850329 L10.1052632,31.2113487 L37.8799342,31.2113487 Z M37.8799342,22.3692434 L37.8799342,24.6429276 L10.1052632,24.6429276 L10.1052632,22.3692434 L37.8799342,22.3692434 Z M37.8799342,13.8947368 L37.8799342,16.1684211 L10.1052632,16.1684211 L10.1052632,13.8947368 L37.8799342,13.8947368 Z"
    />
  );

  const simplifiedHover = (
    <path
      fill-rule="evenodd"
      d="M37.8799342,32.4745066 L37.8799342,34.7481908 L10.1052632,34.7481908 L10.1052632,32.4745066 L37.8799342,32.4745066 Z M37.8799342,22.3692434 L37.8799342,24.6429276 L10.1052632,24.6429276 L10.1052632,22.3692434 L37.8799342,22.3692434 Z M37.8799342,12.6315789 L37.8799342,14.9052632 L10.1052632,14.9052632 L10.1052632,12.6315789 L37.8799342,12.6315789 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      stroke={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className="icon"
      {...props}>
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default Menu;
