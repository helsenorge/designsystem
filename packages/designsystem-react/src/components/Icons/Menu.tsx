import React from 'react';
import {IconRawProps} from './Icon';

const Menu = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}>
      <g fill="none" fillRule="evenodd" stroke-linecap="square">
        <line x1="11.144" x2="36.781" y1="15.003" y2="15.003" stroke={color} stroke-width="1.75" />
        <line x1="11.144" x2="36.781" y1="23.467" y2="23.467" stroke={color} stroke-width="1.75" />
        <line x1="11.144" x2="36.781" y1="32.309" y2="32.309" stroke={color} stroke-width="1.75" />
      </g>
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}>
      <g fill="none" fillRule="evenodd" stroke-linecap="square">
        <line x1="11.174" x2="36.811" y1="23.501" y2="23.501" stroke={color} stroke-width="1.75" />
        <line x1="11.174" x2="36.811" y1="13.727" y2="13.727" stroke={color} stroke-width="1.75" />
        <line x1="11.174" x2="36.811" y1="33.598" y2="33.598" stroke={color} stroke-width="1.75" />
      </g>
    </svg>
  );
});

export default Menu;
