import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const LegalDocument: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path
        fillRule="evenodd"
        d="M22.452 18.623a2.93 2.93 0 0 1 .646 1.817.65.65 0 1 1-1.3 0 1.63 1.63 0 0 0-.35-.991c-.235-.286-.66-.566-1.483-.545-.837.02-1.231.307-1.439.578-.23.3-.31.687-.322 1.006-.008.233.045.486.3.811.274.349.785.78 1.713 1.308 1.993 1.13 3.051 2.381 3.285 3.648.198 1.073.046 2.774-1.354 4.303.108.11.205.219.292.329.44.56.597 1.113.577 1.66-.016.461-.13 1.155-.59 1.753-.48.628-1.27 1.057-2.437 1.086-1.181.03-2.006-.394-2.52-1.02a2.93 2.93 0 0 1-.645-1.816.65.65 0 1 1 1.3 0c0 .275.092.677.35.991.234.285.66.566 1.482.545.837-.02 1.232-.307 1.44-.578.23-.3.31-.687.321-1.006.008-.233-.044-.486-.3-.812-.274-.348-.784-.78-1.713-1.307-1.992-1.13-3.05-2.381-3.284-3.648-.198-1.073-.047-2.774 1.353-4.303a3.946 3.946 0 0 1-.291-.329c-.441-.56-.597-1.113-.578-1.66.016-.461.13-1.155.59-1.753.481-.628 1.27-1.057 2.438-1.086 1.18-.03 2.005.394 2.52 1.02Zm-.229 7.868c.137.744.051 2.04-1.088 3.247-.236-.16-.499-.321-.788-.485-1.855-1.053-2.517-2.042-2.648-2.754-.137-.744-.05-2.041 1.088-3.247.237.16.499.321.788.485 1.856 1.053 2.517 2.042 2.648 2.754Z"
      />
      <path
        fillRule="evenodd"
        d="M37.288 40.64H10.712V7.864h13.454a5 5 0 0 1 3.551 1.48l8.123 8.196a5 5 0 0 1 1.448 3.52v19.58Zm-1.276-1.276H11.988V9.14h12.264a2 2 0 0 1 2 1.998l.01 7.752h7.75a2 2 0 0 1 2 2v18.474ZM27.323 17.88h7.143l-7.143-7.225v7.225Z"
      />
    </>
  );

  const normalHover = (
    <>
      <path
        fillRule="evenodd"
        d="M22.452 18.622a2.93 2.93 0 0 1 .646 1.817.65.65 0 1 1-1.3 0 1.63 1.63 0 0 0-.35-.991c-.235-.285-.66-.566-1.483-.545-.837.02-1.232.307-1.439.578-.23.3-.31.687-.322 1.006-.008.233.044.487.3.812.274.348.784.78 1.713 1.307 1.993 1.13 3.051 2.381 3.285 3.648.197 1.073.046 2.774-1.354 4.303.108.11.205.219.292.329.44.56.597 1.113.577 1.66-.016.461-.13 1.154-.59 1.753-.481.628-1.27 1.057-2.437 1.086-1.181.03-2.006-.394-2.52-1.02a2.93 2.93 0 0 1-.646-1.817.65.65 0 1 1 1.3 0c0 .276.093.678.35.992.235.285.66.566 1.483.545.837-.02 1.232-.307 1.439-.578.23-.3.31-.687.322-1.006.008-.233-.044-.486-.3-.811-.274-.349-.784-.78-1.713-1.308-1.993-1.13-3.05-2.381-3.284-3.648-.198-1.073-.047-2.774 1.353-4.303a3.944 3.944 0 0 1-.291-.329c-.441-.56-.598-1.113-.578-1.66.016-.461.13-1.154.59-1.753.481-.628 1.27-1.057 2.438-1.086 1.18-.03 2.005.394 2.519 1.02Zm-.229 7.868c.137.744.051 2.041-1.088 3.247-.237-.16-.499-.32-.788-.485-1.856-1.053-2.517-2.042-2.648-2.754-.137-.744-.05-2.04 1.088-3.247.237.16.499.321.788.485 1.856 1.053 2.517 2.042 2.648 2.754Z"
      />
      <path fillRule="evenodd" d="M37.288 40.64H10.712V7.864h26.576V40.64Zm-1.276-1.276H11.988V9.14H26.25l9.75.012.012 9.738v20.474Z" />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default LegalDocument;
