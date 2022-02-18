import React from 'react';
import { SvgPathProps } from './Icon';

const HealthWarning: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      d="M28.81 19.986v4.77h-5.425v5.42h-4.772v-5.42h-5.425v-4.77h5.425v-5.43h4.772v5.43h5.425zm-4.125-6.73h-7.372v5.43H11.89v7.37h5.424v5.42h7.372v-5.42h5.425v-7.37h-5.425v-5.43zm8.37 17.248h.41c.175 0 .318.142.318.318v4.645a.318.318 0 0 1-.318.318h-.41a.317.317 0 0 1-.318-.318v-4.645c0-.176.142-.318.317-.318zm.205 6.503a.817.817 0 1 1-.002 1.634.817.817 0 0 1 .002-1.634zM21 37.34c-8.257 0-14.974-6.717-14.974-14.974C6.026 14.11 12.743 7.393 21 7.393s14.974 6.717 14.974 14.973c0 1.51-.225 2.988-.663 4.409l-2.113-3.798-7.467 13.59c-1.522.508-3.11.773-4.73.773zm3.995 3.268 8.21-14.945 8.313 14.945H24.995zm18.734 1.299-7.58-13.623a16.163 16.163 0 0 0 1.123-5.918c0-8.973-7.3-16.273-16.273-16.273-8.973 0-16.273 7.3-16.273 16.273 0 8.974 7.3 16.273 16.273 16.273a16.28 16.28 0 0 0 3.85-.466l-2.052 3.734H43.73z"
      fill-rule="evenodd"
    />
  );

  const normalHover = (
    <path
      d="M32.975 29.692h.57c.175 0 .318.142.318.318v5.45a.318.318 0 0 1-.318.318h-.57a.318.318 0 0 1-.318-.318v-5.45c0-.176.142-.318.318-.318zm.285 7.495a.94.94 0 1 1 0 1.882.94.94 0 0 1 0-1.882zm-12.261.152c-8.256 0-14.973-6.717-14.973-14.973 0-8.257 6.717-14.974 14.973-14.974 8.257 0 14.974 6.717 14.974 14.974 0 1.092-.124 2.17-.355 3.223l-2.43-4.367-8.616 15.685a15.034 15.034 0 0 1-3.573.432zm2.569 4.095 9.627-17.525 9.75 17.525H23.568zm21.588 1.3-8.627-15.506c.491-1.568.743-3.202.743-4.862 0-8.973-7.299-16.274-16.273-16.274-8.973 0-16.273 7.301-16.273 16.274s7.3 16.273 16.273 16.273c.925 0 1.846-.084 2.752-.239l-2.38 4.334h23.785zM28.81 19.985v4.77h-5.424v5.42h-4.773v-5.42h-5.424v-4.77h5.424v-5.429h4.773v5.43h5.424zm-4.125-6.729h-7.372v5.43h-5.424v7.37h5.424v5.42h7.372v-5.42h5.425v-7.37h-5.425v-5.43z"
      fill-rule="evenodd"
    />
  );

  return isHovered ? normalHover : normal;
};

export default HealthWarning;
