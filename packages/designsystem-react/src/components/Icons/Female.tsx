import React from 'react';
import {IconRawProps} from './Icon';

const Female = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M23.668,29.0366 C17.676,29.0366 12.801,24.1616 12.801,18.1686 C12.801,12.1756 17.676,7.2996 23.668,7.2996 C29.661,7.2996 34.536,12.1756 34.536,18.1686 C34.536,24.1616 29.661,29.0366 23.668,29.0366 M35.837,18.1686 C35.837,11.4586 30.378,5.9996 23.668,5.9996 C16.959,5.9996 11.5,11.4586 11.5,18.1686 C11.5,24.6586 16.611,29.9626 23.018,30.3036 L23.018,35.0626 L18.51,35.0626 L18.51,36.3626 L23.018,36.3626 L23.018,41.7386 L24.318,41.7386 L24.318,36.3626 L28.826,36.3626 L28.826,35.0626 L24.318,35.0626 L24.318,30.3036 C30.726,29.9626 35.837,24.6586 35.837,18.1686"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M12.801,15.968 C12.801,9.975 17.676,5.099 23.669,5.099 C29.662,5.099 34.537,9.975 34.537,15.968 C34.537,21.961 29.662,26.836 23.669,26.836 C17.676,26.836 12.801,21.961 12.801,15.968 M35.838,15.968 C35.838,9.258 30.379,3.8 23.669,3.8 C16.959,3.8 11.5,9.258 11.5,15.968 C11.5,22.458 16.612,27.762 23.019,28.103 L23.019,35.071 L18.511,35.071 L18.511,36.37 L23.019,36.37 L23.019,41.746 L24.32,41.746 L24.32,36.37 L28.827,36.37 L28.827,35.071 L24.32,35.071 L24.32,28.103 C30.726,27.762 35.838,22.458 35.838,15.968"
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

export default Female;
