import React from 'react';
import { SvgPathProps } from './Icon';

const EarNoseThroat: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <g>
      <path d="M26.604 20.403a1.02 1.02 0 100 2.04 1.02 1.02 0 000-2.04m-10.002 6.635a.677.677 0 01-.527-.052.684.684 0 01-.336-.41l-1.126-3.698a1.48 1.48 0 01.984-1.845 1.48 1.48 0 011.363.268l.63-.778a2.488 2.488 0 00-2.284-.447 2.482 2.482 0 00-1.65 3.093l1.126 3.699c.132.433.424.788.822 1a1.68 1.68 0 001.29.127c.54-.164.96-.584 1.125-1.123l-.957-.293a.687.687 0 01-.46.459" />
      <path d="M34.499 26.634a.823.823 0 01-.706.387h-1.857v2.04c0 2.923-2.376 5.3-5.299 5.3h-.651v5.184h-3.231V35.43c0-1.092.375-2.16 1.057-3.013l.408-.507-2.772-2.218-.406.506a8.393 8.393 0 00-1.838 5.232v4.115h-5.358v-5.397c0-2.6-.918-4.414-1.889-6.335-1.078-2.133-2.192-4.339-2.192-7.97 0-5.46 4.221-11.353 11.043-11.353 5.395 0 11.128 4.056 11.128 11.573v.143l2.617 5.624a.824.824 0 01-.054.804m1.232-1.353l-2.495-5.364C33.163 11.65 26.798 7.19 20.808 7.19c-6.807 0-12.344 5.675-12.344 12.652 0 3.942 1.239 6.394 2.333 8.557.938 1.856 1.748 3.46 1.748 5.75v6.697h7.96V35.43c0-1.384.411-2.743 1.169-3.893l.745.597a6.144 6.144 0 00-.965 3.296v5.416h5.833V35.63a6.609 6.609 0 005.95-6.568v-.74h.556a2.13 2.13 0 001.802-.989 2.126 2.126 0 00.136-2.05" />
      <path d="M16.911 23.89c.013 0 .05 0 .12.051l.598-.8c-.81-.607-1.93.038-1.93.961 0 .543.358 1.008.891 1.156l.27-.963c-.075-.02-.16-.084-.16-.193 0-.117.094-.213.211-.213" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M26.604 20.403a1.02 1.02 0 100 2.04 1.02 1.02 0 000-2.04m-10.002 6.635a.677.677 0 01-.527-.052.684.684 0 01-.336-.41l-1.126-3.698a1.48 1.48 0 01.984-1.845 1.48 1.48 0 011.363.268l.63-.778a2.488 2.488 0 00-2.284-.447 2.482 2.482 0 00-1.65 3.093l1.126 3.699c.132.433.424.788.822 1a1.68 1.68 0 001.29.127c.54-.164.96-.584 1.125-1.123l-.957-.293a.687.687 0 01-.46.459" />
      <path d="M34.499 26.634a.823.823 0 01-.706.387h-1.857v2.04c0 2.923-2.376 5.3-5.299 5.3h-.651v5.184h-3.231V35.43c0-1.092.375-2.16 1.057-3.013l.408-.507-2.772-2.218-.406.506a8.393 8.393 0 00-1.838 5.232v4.115h-5.358v-5.397c0-2.6-.918-4.414-1.889-6.335-1.078-2.133-2.192-4.339-2.192-7.97 0-5.46 4.221-11.353 11.043-11.353 5.395 0 11.128 4.056 11.128 11.573v.143l2.617 5.624a.824.824 0 01-.054.804m1.232-1.353l-2.495-5.364C33.163 11.65 26.798 7.19 20.808 7.19c-6.807 0-12.344 5.675-12.344 12.652 0 3.942 1.239 6.394 2.333 8.557.938 1.856 1.748 3.46 1.748 5.75v6.697h7.96V35.43c0-1.384.411-2.743 1.169-3.893l.745.597a6.144 6.144 0 00-.965 3.296v5.416h5.833V35.63a6.609 6.609 0 005.95-6.568v-.74h.556a2.13 2.13 0 001.802-.989 2.126 2.126 0 00.136-2.05" />
      <path d="M16.911 23.89c.013 0 .05 0 .12.051l.598-.8c-.81-.607-1.93.038-1.93.961 0 .543.358 1.008.891 1.156l.27-.963c-.075-.02-.16-.084-.16-.193 0-.117.094-.213.211-.213" />
    </g>
  );

  return isHovered ? normalHover : normal;
};

export default EarNoseThroat;
