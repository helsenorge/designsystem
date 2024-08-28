import React from 'react';

import { SvgPathProps } from '../Icon';

const CreditCard: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path
        fillRule="evenodd"
        d="m12.544 13.88 22.767-6.1a2.29 2.29 0 0 1 2.805 1.62l.096.356-25.838 6.923h14.65l12.169-3.26 2.611 9.745a2.29 2.29 0 0 1-1.62 2.806l-.1.027v1.237l.41-.11a3.485 3.485 0 0 0 2.464-4.269L39.27 9.091A3.485 3.485 0 0 0 35 6.626l-22.766 6.1a3.485 3.485 0 0 0-2.533 3.953h1.221a2.29 2.29 0 0 1 1.621-2.799Z"
      />
      <rect x="5.572" y="18.641" width="32.524" height="22.203" rx="3.144" stroke="currentColor" fill="none" strokeWidth="1.3" />
      <rect x="9.479" y="24.693" width="5.453" height="3.926" rx="1.265" />
      <rect x="30.296" y="22.427" width="3.983" height="2.267" rx="1.133" />
      <circle cx="10.271" cy="34.792" r=".807" />
      <circle cx="18.339" cy="34.792" r=".807" />
      <circle cx="12.601" cy="34.792" r=".807" />
      <circle cx="20.669" cy="34.792" r=".807" />
      <circle cx="26.407" cy="34.792" r=".807" />
      <circle cx="14.932" cy="34.792" r=".807" />
      <circle cx="23" cy="34.792" r=".807" />
      <circle cx="28.737" cy="34.792" r=".807" />
    </>
  );

  const normalHover = (
    <>
      <path
        fillRule="evenodd"
        d="M12.041 13.194 34.14 5a2.29 2.29 0 0 1 2.944 1.352l.143.385-26.408 9.752-.13-.35a2.29 2.29 0 0 1 1.352-2.944Zm29.998 6.518-3.496-9.429-17.807 6.396H9.616l-.046-.125a3.485 3.485 0 0 1 2.056-4.48L33.725 3.88a3.485 3.485 0 0 1 4.479 2.055l4.955 13.361a3.485 3.485 0 0 1-2.056 4.48l-1.02.378V22.88l.605-.224a2.29 2.29 0 0 0 1.351-2.944Z"
      />
      <rect x="5.572" y="18.641" width="32.524" height="22.203" rx="3.144" stroke="currentColor" fill="none" strokeWidth="1.3" />
      <rect x="9.479" y="24.694" width="5.453" height="3.926" rx="1.265" />
      <rect x="30.296" y="22.427" width="3.983" height="2.267" rx="1.133" />
      <circle cx="10.271" cy="34.792" r=".807" />
      <circle cx="18.339" cy="34.792" r=".807" />
      <circle cx="12.601" cy="34.792" r=".807" />
      <circle cx="20.669" cy="34.792" r=".807" />
      <circle cx="26.407" cy="34.792" r=".807" />
      <circle cx="14.932" cy="34.792" r=".807" />
      <circle cx="23" cy="34.792" r=".807" />
      <circle cx="28.737" cy="34.792" r=".807" />
    </>
  );

  return isHovered ? normalHover : normal;
};

export default CreditCard;
