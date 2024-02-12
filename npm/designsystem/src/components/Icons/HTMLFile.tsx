import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const HTMLFile: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path d="m21.565 22.235-2.292-2.292 2.292-2.292-.707-.707-2.999 3 2.999 2.998.707-.707Zm8.178-2.292-2.998 3-.707-.708 2.291-2.292-2.291-2.292.707-.707 2.998 3Zm4.052 12.441V33h-3.112v-4.722h.75v4.106h2.362Zm-8.377-4.106h-.968V33h.745v-1.63l-.076-2.139L26.727 33h.547l1.612-3.779-.076 2.15V33h.75v-4.722h-.977l-1.58 3.692-1.585-3.692Zm-3.323.62V33h-.746v-4.102H19.74v-.62h3.972v.62h-1.617Zm-3.834 1.463v-2.083h.75V33h-.75v-2.018h-2.448V33h-.75v-4.722h.75v2.083h2.448Z" />
      <path fillRule="evenodd" d="M10 7v34h27.6V7H10Zm26.35 1.25h-25.1v31.5h25.1V8.25Z" clipRule="evenodd" />
    </>
  );

  const normalHover = (
    <>
      <path d="m19.565 22.235-2.292-2.292 2.292-2.292-.707-.707-2.999 3 2.999 2.998.707-.707Zm12.178-2.292-2.998 3-.707-.708 2.291-2.292-2.291-2.292.707-.707 2.998 3Zm2.052 12.441V33h-3.112v-4.722h.75v4.106h2.362Zm-8.377-4.106h-.968V33h.745v-1.63l-.076-2.139L26.727 33h.547l1.612-3.779-.076 2.15V33h.75v-4.722h-.977l-1.58 3.692-1.585-3.692Zm-3.323.62V33h-.746v-4.102H19.74v-.62h3.972v.62h-1.617Zm-3.834 1.463v-2.083h.75V33h-.75v-2.018h-2.448V33h-.75v-4.722h.75v2.083h2.448Z" />
      <path fillRule="evenodd" d="M10 7v34.016h27.6V7H10Zm26.35 1.25h-25.1v31.516h25.1V8.25Z" clipRule="evenodd" />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default HTMLFile;
