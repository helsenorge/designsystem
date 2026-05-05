import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const HTMLFile: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M37.6 41H10V7h27.6v34Zm-26.35-1.25h25.1V8.25h-25.1v31.5Zm4.563-9.389h2.448v-2.083h.75V33h-.75v-2.019h-2.447V33h-.75v-4.722h.75v2.083Zm7.899-1.463h-1.617V33h-.745v-4.102h-1.61v-.62h3.972v.62Zm3.29 3.073 1.581-3.693h.978V33h-.75v-1.63l.075-2.151L27.274 33h-.547l-1.608-3.769.076 2.14V33h-.746v-4.722h.969l1.585 3.693Zm4.43.413h2.363V33h-3.112v-4.722h.75v4.106ZM21.886 15.78v9.2h-7.042v-9.2h7.042Zm10.873 8.889H24.59v-1h8.167v1ZM15.843 16.78v7.2h5.042v-7.2h-5.042Zm16.915 4.1H24.59v-1h8.167v1Zm0-3.79-8.167.003v-.998l8.167-.002v.998Z" />
  );

  const normalHover = (
    <path d="M37.6 41H10V7h27.6v34Zm-26.35-1.25h25.1V8.25h-25.1v31.5Zm4.563-9.389h2.448v-2.083h.75V33h-.75v-2.019h-2.447V33h-.75v-4.722h.75v2.083Zm7.899-1.463h-1.617V33h-.745v-4.102h-1.61v-.62h3.972v.62Zm3.29 3.073 1.581-3.693h.977V33h-.75v-1.629l.076-2.152L27.274 33h-.547l-1.608-3.769.076 2.14V33h-.746v-4.722h.969l1.585 3.693Zm4.43.413h2.363V33h-3.112v-4.722h.75v4.106Zm-8.55-16.604v9.2h-8.04v-9.2h8.04Zm9.876 8.889h-7.17v-1h7.17v1ZM15.843 16.78v7.2h6.04v-7.2h-6.04Zm16.915 4.1h-7.17v-1h7.17v1Zm0-3.79-7.17.003v-.998l7.17-.002v.998Z" />
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default HTMLFile;
