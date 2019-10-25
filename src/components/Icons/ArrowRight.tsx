import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
}

const ArrowRight = React.forwardRef((props: IconProps, ref: any) => {
  const {size = 128, color = 'black'} = props;
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 512 512" enable-background="new 0 0 512 512">
      <polygon
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill={color}
        points="299.6,0 279.1,24.6 456.6,238.6 0,238.6 0,273.4 456.6,273.4 
      279.1,487.3 299.6,512 512,256 "
      />
    </svg>
  );
});

ArrowRight.displayName = 'Icon';

export default ArrowRight;
