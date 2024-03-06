import React from 'react';

import { SvgPathProps } from '../Icon';

const RadioactiveTreatment: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M30.735 11.36c0-.38.2-.7.51-.87a.966.966 0 011 0 1 1 0 010 1.73.966.966 0 01-1 0 .961.961 0 01-.51-.86zm1.86-1.47l1.14-1.98c.52.31.97.73 1.3 1.22l.25.43c.28.55.43 1.16.43 1.8h-2.27c0-.64-.34-1.19-.85-1.47zm-2.56 1.47h-2.27c0-.64.15-1.23.41-1.76l.27-.47.01-.02c.34-.49.78-.9 1.3-1.2l1.14 1.97c-.52.29-.86.84-.86 1.48zm2.55 1.47l1.14 1.97c-.52.3-1.13.49-1.78.52h-.41c-.65-.02-1.25-.22-1.78-.52l1.14-1.97c.25.15.54.23.85.23.31 0 .59-.08.84-.23zm-1.872 11.393h2.065v-1.11h-2.064v1.11zm-4.927-4.713v-1.714h11.917v1.714a2.304 2.304 0 01-2.302 2.302h-7.313a2.304 2.304 0 01-2.302-2.302zm2.302-13.768h7.313a2.304 2.304 0 012.302 2.302v8.451H25.786v-8.45a2.304 2.304 0 012.302-2.303zm-1.53 33.633a.65.65 0 00-.534.28c-1.032 1.484-2.866 2.167-5.65 2.156l-10.136-.047a.96.96 0 01-.958-.96c.003-.527.463-.97.968-.952l.518.002 4.796.023.004-.65.002-.65-3.377-.016-1.938-.009h-.008l-2.471-.012a.968.968 0 01-.96-.975c.005-.536.454-.979.968-.968l6.16.03v-.007l1.62.007.006-1.3-10.032-.04a.893.893 0 01-.658-.31 1.205 1.205 0 01-.3-.817c.002-.31.11-.6.306-.814a.896.896 0 01.659-.303h.003l2.24.01.014.001 6.61.031v-.005l1.152.005.007-1.3-7.77-.032a.968.968 0 01-.952-.976.973.973 0 01.285-.686c.184-.182.395-.295.684-.28l6.414.015.027.007a.73.73 0 00.158.02l4.559-.015a.65.65 0 00-.002-1.3l-4.556-.01c-.316-.107-.534-.277-.665-.518-.2-.365-.185-.86-.125-1.232h8.793c2.206 0 3.497 1.878 4.27 3 .125.183.235.344.332.472.124.163.273.27.523.258l3.55-.016V31.8a3.764 3.764 0 003.76 3.76h2.133v1.632h1.3v-4.534h-1.3v1.602h-2.133a2.463 2.463 0 01-2.46-2.46v-1.313l11.677-.05-.006-1.302-11.67.052v-3.663h1.031a.65.65 0 00.65-.65v-1.762h1.325a3.606 3.606 0 003.602-3.602V8.044a3.606 3.606 0 00-3.602-3.602h-7.313a3.606 3.606 0 00-3.602 3.602V19.51a3.606 3.606 0 003.602 3.602h1.325v1.762c0 .36.291.65.65.65h1.032v3.67l-3.221.013a21.334 21.334 0 01-.114-.165c-.858-1.245-2.452-3.564-5.341-3.564h-9.305a.651.651 0 00-.613.434c-.053.152-.492 1.48.052 2.61l-4.733-.01a2.235 2.235 0 00-1.605.658 2.26 2.26 0 00-.447 2.574h-.215a2.202 2.202 0 00-1.625.723 2.501 2.501 0 00-.65 1.687 2.5 2.5 0 00.634 1.694 2.181 2.181 0 001.619.74h.215a2.26 2.26 0 00-.232.97 2.27 2.27 0 002.253 2.282l.439.002a2.236 2.236 0 00-.226.955 2.257 2.257 0 002.253 2.267l10.134.047h.104c1.98 0 4.715-.278 6.413-2.436l17.188.003V39.38l-17.515-.004z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M30.734 11.36c0-.38.2-.7.51-.87a.966.966 0 011 0 1 1 0 010 1.73.966.966 0 01-1 0 .961.961 0 01-.51-.86zm1.86-1.47l1.14-1.98c.53.31.97.73 1.3 1.22l.25.43c.28.55.44 1.16.44 1.8h-2.28c0-.64-.34-1.19-.85-1.47zm-2.56 1.47h-2.26c0-.64.14-1.23.4-1.76l.27-.47.01-.02c.34-.49.78-.9 1.3-1.2l1.14 1.98c-.51.28-.86.83-.86 1.47zm2.55 1.47l1.14 1.97c-.52.3-1.13.49-1.77.52h-.41c-.65-.02-1.26-.22-1.79-.52l1.14-1.97c.25.15.54.23.85.23.31 0 .59-.08.84-.23zm-1.871 11.393h2.064v-1.11h-2.064v1.11zm-4.927-4.713v-.137h11.918v.137a2.305 2.305 0 01-2.302 2.302h-7.313a2.305 2.305 0 01-2.303-2.302zm2.303-13.768h7.313a2.305 2.305 0 012.302 2.302v10.03H25.786V8.043a2.305 2.305 0 012.303-2.302zm-1.531 33.633a.65.65 0 00-.533.28c-1.032 1.484-2.868 2.167-5.652 2.156l-10.135-.047a.96.96 0 01-.958-.96.943.943 0 01.284-.674.88.88 0 01.684-.278l.518.002 4.797.023.003-.65.002-.65-3.376-.016-1.938-.009h-.001l-2.48-.012a.954.954 0 01-.678-.286.971.971 0 01-.28-.689.969.969 0 01.963-.968h.005l6.159.03v-.007l1.62.007.006-1.3-10.032-.04a.888.888 0 01-.658-.31 1.205 1.205 0 01-.3-.817c.002-.31.11-.6.307-.814a.894.894 0 01.658-.303h.004l2.24.01.013.001 6.61.031v-.005l1.153.005.005-1.3-7.77-.032a.969.969 0 01-.951-.975.97.97 0 01.965-.967h.005l6.414.015.025.007a.647.647 0 00.159.02l4.558-.015a.65.65 0 000-1.3l-4.556-.01c-.316-.107-.535-.277-.666-.518-.2-.365-.185-.86-.125-1.232h8.793c2.207 0 3.498 1.878 4.27 3 .125.183.236.344.333.472.124.163.303.27.522.258l3.55-.016V31.8a3.764 3.764 0 003.76 3.76h2.133v1.632h1.3v-4.534h-1.3v1.602h-2.132a2.463 2.463 0 01-2.46-2.46v-1.313l11.676-.05-.006-1.302-11.67.052v-3.663h1.032a.65.65 0 00.65-.65v-1.762h1.325a3.606 3.606 0 003.602-3.602V8.044a3.606 3.606 0 00-3.602-3.602h-7.313a3.606 3.606 0 00-3.603 3.602V19.51a3.607 3.607 0 003.603 3.602h1.325v1.762c0 .36.29.65.65.65h1.03v3.67l-3.22.013a21.334 21.334 0 01-.114-.165c-.857-1.245-2.451-3.564-5.341-3.564h-9.304a.65.65 0 00-.613.434c-.053.152-.492 1.48.05 2.61l-4.731-.01H7.81a2.27 2.27 0 00-2.263 2.26c-.001.35.082.676.22.972h-.214c-.634-.007-1.194.253-1.625.723a2.501 2.501 0 00-.65 1.687 2.5 2.5 0 00.634 1.694 2.179 2.179 0 001.618.74h.216a2.256 2.256 0 00-.231.97 2.26 2.26 0 00.655 1.608c.425.432.993.672 1.598.674l.437.002a2.245 2.245 0 00-.225.955 2.257 2.257 0 002.253 2.267l10.134.047h.103c1.982 0 4.717-.278 6.415-2.436l17.187.003V39.38l-17.514-.004z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default RadioactiveTreatment;
