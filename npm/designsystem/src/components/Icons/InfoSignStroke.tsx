import React from 'react';
import { returnIcon, SvgPathProps } from './Icon';

const InfoSignStroke: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M25.672 30.501a.682.682 0 01-.322-.272.835.835 0 01-.11-.443v-7.917l-.112-.112-3.651.194v.544c.148.015.314.05.495.104.18.055.316.112.406.172a.994.994 0 01.299.316.88.88 0 01.119.459v6.337a.879.879 0 01-.098.443.623.623 0 01-.335.257c-.09.035-.197.06-.32.074a8.883 8.883 0 01-.38.038v.544h4.709v-.544a2.45 2.45 0 01-.7-.194M24 37.604c-7.5 0-13.604-6.103-13.604-13.604 0-7.501 6.104-13.603 13.604-13.603 7.502 0 13.602 6.102 13.602 13.603 0 7.501-6.1 13.604-13.601 13.604m0-28.909C15.56 8.695 8.694 15.562 8.694 24c0 8.438 6.867 15.305 15.305 15.305 8.438 0 15.304-6.867 15.304-15.305 0-8.438-6.866-15.305-15.304-15.305m-.274 10.632a1.559 1.559 0 100-3.118 1.559 1.559 0 000 3.118" />
  );

  const normalHover = (
    <path d="M25.672 30.501a.682.682 0 01-.322-.272.835.835 0 01-.11-.443v-7.917l-.112-.112-3.651.194v.544c.148.015.314.05.495.104.18.055.316.112.406.172a.994.994 0 01.299.316.88.88 0 01.119.459v6.337a.879.879 0 01-.098.443.623.623 0 01-.335.257c-.09.035-.197.06-.32.074a8.883 8.883 0 01-.38.038v.544h4.709v-.544a2.45 2.45 0 01-.7-.194M24 37.604c-7.5 0-13.604-6.103-13.604-13.604 0-7.501 6.104-13.603 13.604-13.603 7.502 0 13.602 6.102 13.602 13.603 0 7.501-6.1 13.604-13.601 13.604m0-28.909C15.56 8.695 8.694 15.562 8.694 24c0 8.438 6.867 15.305 15.305 15.305 8.438 0 15.304-6.867 15.304-15.305 0-8.438-6.866-15.305-15.304-15.305m-.274 8.632a1.559 1.559 0 100-3.118 1.559 1.559 0 000 3.118" />
  );

  const small = (
    <path d="M25.668 30.487a.68.68 0 01-.32-.271.833.833 0 01-.111-.442v-7.9l-.112-.112-3.643.193v.543c.148.015.313.05.495.104.18.055.315.112.405.172a.991.991 0 01.297.315.877.877 0 01.119.458v6.324c0 .182-.032.33-.097.442a.622.622 0 01-.334.256c-.09.035-.197.06-.32.074-.124.015-.25.028-.38.038v.543h4.7v-.543a2.445 2.445 0 01-.699-.194M24 37.575c-7.485 0-13.575-6.09-13.575-13.575 0-7.485 6.09-13.574 13.575-13.574 7.486 0 13.574 6.089 13.574 13.574 0 7.485-6.088 13.575-13.574 13.575m0-28.848C15.58 8.727 8.728 15.58 8.728 24S15.579 39.273 24 39.273c8.42 0 15.272-6.853 15.272-15.273S32.421 8.727 24 8.727m-.274 10.61a1.556 1.556 0 100-3.112 1.556 1.556 0 000 3.112" />
  );

  const smallHover = (
    <path d="M25.668 30.487a.68.68 0 01-.32-.271.833.833 0 01-.111-.442v-7.9l-.112-.112-3.643.193v.543c.148.015.313.05.495.104.18.055.315.112.405.172a.991.991 0 01.297.315.877.877 0 01.119.458v6.324c0 .182-.032.33-.097.442a.622.622 0 01-.334.256c-.09.035-.197.06-.32.074-.124.015-.25.028-.38.038v.543h4.7v-.543a2.445 2.445 0 01-.699-.194M24 37.575c-7.485 0-13.575-6.09-13.575-13.575 0-7.485 6.09-13.574 13.575-13.574 7.486 0 13.574 6.089 13.574 13.574 0 7.485-6.088 13.575-13.574 13.575m0-28.848C15.58 8.727 8.728 15.58 8.728 24S15.579 39.273 24 39.273c8.42 0 15.272-6.853 15.272-15.273S32.421 8.727 24 8.727m-.274 8.084a1.556 1.556 0 100-3.112 1.556 1.556 0 000 3.112" />
  );

  return returnIcon(size, isHovered, normal, normalHover, small, smallHover);
};

export default InfoSignStroke;
