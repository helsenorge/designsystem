import React from 'react';

import { SvgPathProps } from './Icon';

const Skin: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M23.988 37.913a.913.913 0 11.911-.912.913.913 0 01-.911.912zm0-2.923A2.014 2.014 0 0021.976 37c0 1.11.903 2.013 2.012 2.013A2.015 2.015 0 0025.998 37a2.014 2.014 0 00-2.01-2.011zm6.105 2.923a.913.913 0 01-.911-.912.913.913 0 011.824 0c0 .503-.41.912-.913.912zm0-2.923c-1.108 0-2.01.902-2.01 2.01 0 1.11.902 2.013 2.01 2.013 1.11 0 2.012-.903 2.012-2.012a2.013 2.013 0 00-2.012-2.011zm8.192-3.156a.566.566 0 01-.565.566H10.03a.565.565 0 01-.564-.566V19.082H21.82l-.508 1.71a4.364 4.364 0 00-1.941 4.535 4.336 4.336 0 004.256 3.484 4.342 4.342 0 002.68-7.768c.002-.681.013-1.323.024-1.961h11.953v12.752zM22.41 21.664l2.979-10.033a118.952 118.952 0 00-.382 9.745l.042.373.286.193a3.045 3.045 0 01.217 4.889 3.078 3.078 0 01-2.581.612 3.021 3.021 0 01-2.323-2.362 3.063 3.063 0 011.527-3.287l.235-.13zm3.952-3.881c.019-.67.043-1.311.07-1.931h13.065v-1.05H26.487c.193-3.597.504-6.291.724-8.143l.117-1.002a.727.727 0 00-.58-.8.734.734 0 00-.854.512l-2.802 9.433H8.232v1.05H22.78l-.573 1.93H8.165v14.052c0 1.029.837 1.866 1.865 1.866h27.69a1.868 1.868 0 001.866-1.866V17.783H26.363zm9.837 20.13A.913.913 0 1137.11 37a.913.913 0 01-.911.912zm0-2.923A2.014 2.014 0 0034.188 37c0 1.11.903 2.013 2.012 2.013A2.015 2.015 0 0038.21 37a2.014 2.014 0 00-2.01-2.011zm-24.424 2.923a.913.913 0 010-1.823.913.913 0 010 1.823zm0-2.923A2.014 2.014 0 009.765 37c0 1.11.903 2.013 2.01 2.013A2.015 2.015 0 0013.789 37a2.014 2.014 0 00-2.012-2.011zm6.107 2.923A.914.914 0 0116.97 37a.913.913 0 011.824 0c0 .503-.41.912-.911.912zm0-2.923c-1.11 0-2.012.902-2.012 2.01 0 1.11.902 2.013 2.012 2.013 1.108 0 2.01-.903 2.01-2.012a2.013 2.013 0 00-2.01-2.011z" />
  );

  const normalHover = (
    <path d="M11.77 37.918a.913.913 0 010-1.823.913.913 0 010 1.823m0-2.923a2.014 2.014 0 00-2.01 2.01c0 1.11.903 2.013 2.01 2.013a2.015 2.015 0 002.013-2.012 2.014 2.014 0 00-2.012-2.011m6.106 2.923a.913.913 0 11.911-.912.913.913 0 01-.91.912m0-2.923a2.014 2.014 0 00-2.013 2.01c0 1.11.903 2.013 2.012 2.013a2.015 2.015 0 002.011-2.012 2.014 2.014 0 00-2.01-2.011m6.105 2.923a.913.913 0 010-1.823.913.913 0 010 1.823m0-2.923a2.014 2.014 0 00-2.011 2.01c0 1.11.903 2.013 2.01 2.013a2.015 2.015 0 002.013-2.012 2.014 2.014 0 00-2.012-2.011m6.105 2.923a.913.913 0 010-1.823.913.913 0 010 1.823m0-2.923a2.014 2.014 0 00-2.01 2.01c0 1.11.902 2.013 2.01 2.013a2.015 2.015 0 002.012-2.012 2.014 2.014 0 00-2.012-2.011m6.107 2.923a.913.913 0 11.911-.912.913.913 0 01-.911.912m0-2.923a2.014 2.014 0 00-2.012 2.01c0 1.11.903 2.013 2.012 2.013a2.015 2.015 0 002.01-2.012 2.014 2.014 0 00-2.01-2.011m2.085-3.156a.566.566 0 01-.564.566h-27.69a.567.567 0 01-.565-.566V19.087l12.72.001-.82 1.677a4.36 4.36 0 00-1.993 4.567 4.335 4.335 0 004.255 3.484c.998 0 1.965-.336 2.746-.972a4.345 4.345 0 00.015-6.733c.167-.713.328-1.38.485-2.024h11.41v12.752zM25.02 21.234l-.06.463.372.25a3.043 3.043 0 011.342 2.525c0 .921-.411 1.782-1.125 2.364a3.08 3.08 0 01-2.582.611 3.021 3.021 0 01-2.323-2.362 3.064 3.064 0 011.527-3.287l.18-.099 5.47-11.196a199.485 199.485 0 00-2.801 10.731zm2.17-3.447c.174-.688.338-1.321.498-1.93h11.805v-1.05H27.967c.429-1.592.807-2.91 1.127-4.029.647-2.255 1.074-3.744 1.229-5.116a.734.734 0 00-1.407-.362l-4.644 9.507H8.227v1.05h15.532l-.943 1.931-14.656-.001v14.052c0 1.029.837 1.866 1.866 1.866h27.69a1.868 1.868 0 001.865-1.866V17.787H27.19z" />
  );

  return isHovered ? normalHover : normal;
};

export default Skin;
