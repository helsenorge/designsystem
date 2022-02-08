import React from 'react';
import { returnIcon, SvgPathProps } from './Icon';

const Form: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M24.598 9.37a.583.583 0 100-1.166.583.583 0 000 1.166zm14.769 23.259c0 .752-.612 1.363-1.364 1.363H16.849a2.35 2.35 0 00.434-1.363v-.095h22.084v.095zm-.945 4.894H10.774V9.182h8.821l-1.93 1.292v.442h-5.109v21.713a2.366 2.366 0 002.363 2.363h23.084c.143 0 .283-.018.419-.042v2.573zM20.712 9.637V6.52h7.773v3.117l2.046 1.37v1.134H18.665v-1.133l2.047-1.371zm10.819 3.504v-1.225h4.109v19.618H16.283v1.095a1.364 1.364 0 01-2.727 0V11.916h4.109v1.225h13.866zM29.485 9.06h8.937v22.474H36.64V10.916h-5.109v-.442l-2.046-1.371V9.06zm10.237 22.474V7.76H29.485V5.52h-9.773v2.36H9.474v30.944h30.248V34.24c.397-.423.645-.987.645-1.612v-1.095h-.645zm-9.996-10.977l-.721-.694-4.922 5.114-2.728-2.834-.72.694 3.448 3.582 5.643-5.862z" />
  );

  const normalHover = (
    <path d="M29.467 5.548v2.234H39.68v21.802c.396.425.643.989.643 1.613a2.35 2.35 0 01-.643 1.61v5.97H9.5V7.902h10.214V5.549h9.753zm-9.873 3.655H10.8v28.274h27.58v-3.96a2.327 2.327 0 01-.42.042H14.935a2.361 2.361 0 01-2.36-2.357V10.93h5.099v-.44l1.92-1.287zM37.96 29.83H16.863a2.339 2.339 0 010 2.728H37.96a1.364 1.364 0 000-2.727zm-20.288-17.9h-4.098v19.265a1.365 1.365 0 002.728 0c0-.752-.612-1.365-1.364-1.365v-1h20.667v-16.9h-4.098v1.223H17.673V11.93zM38.38 9.08h-8.914v.042l2.04 1.368v.44h5.099v17.9h1.355c.144 0 .283.018.42.043V9.08zm-9.322 10.736l.721.693-5.643 5.862-3.448-3.582.72-.693 2.728 2.834 4.922-5.114zm-.592-13.27h-7.753v3.109l-2.041 1.367v1.13h11.835v-1.13l-2.041-1.367V6.546zm-3.877 1.68a.58.58 0 110 1.162.58.58 0 010-1.161z" />
  );

  const small = (
    <path d="M36.054 34.439H17.387a2.31 2.31 0 00.249-.954h19.46a1.047 1.047 0 01-1.042.954zm.603 3.665h-25.4V12.058h7.448l-1.376.923v.748H13.04v19.664a2.302 2.302 0 002.3 2.299h20.714c.21 0 .409-.038.603-.091v2.503zM20.492 12.37V9.537h6.932v2.833l1.91 1.28v.812H18.582v-.812l1.91-1.28zm10.095 3.345v-.731h3.168v17.248h-17.37v1.16a1.046 1.046 0 01-2.092 0V14.985h3.036v.73h13.258zm6.07-3.77v20.287h-1.65V13.729h-4.42v-.748l-1.545-1.035h7.615zm1.696 20.287h-.085V10.335h-9.591V8.284h-9.44v2.164h-9.59v29.268h28.621v-5.429h-.096c.116-.275.18-.577.18-.894v-1.161zM23.958 12.037a.543.543 0 100-1.087.543.543 0 000 1.087zm5.597 10.547l-.902-.868-4.478 4.651-2.43-2.524-.902.87 3.332 3.46 5.38-5.589z" />
  );

  const smallHover = (
    <path d="M23.957 12.037a.543.543 0 100-1.087.543.543 0 000 1.087zm6.699 9.404l-.902-.868-5.58 5.795-1.656-1.72-.903.87 2.56 2.655 6.48-6.732zm5.397 12.998H17.386c.147-.288.235-.612.249-.954h19.46a1.047 1.047 0 01-1.042.954zm.603 3.667H11.259V12.059h7.447l-1.377.922v.75h-4.29v19.662c0 1.268 1.033 2.3 2.3 2.3h20.714c.21 0 .41-.038.603-.09v2.503zM20.49 12.37V9.537h6.932v2.834l1.91 1.279v.812h-10.75v-.812l1.908-1.279zm10.095 3.344v-.731h3.168v17.248h-17.37v1.16a1.046 1.046 0 01-2.091 0V14.985h3.036v.73h13.257zm6.07-3.768v20.285h-1.649V13.731h-4.42v-.75l-1.546-1.034h7.615zm1.696 20.285h-.085V10.335h-9.59V8.284h-9.44v2.164H9.648v29.268h28.62v-5.429h-.097c.117-.275.181-.577.181-.894v-1.161z" />
  );

  return returnIcon(size, isHovered, normal, normalHover, small, smallHover);
};

export default Form;
