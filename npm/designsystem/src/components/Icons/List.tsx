import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const List: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M9.41 32.62a1.079 1.079 0 100 2.159 1.079 1.079 0 000-2.158zm0-9.697a1.079 1.079 0 100 2.158 1.079 1.079 0 000-2.158zm0-9.702a1.079 1.079 0 100 2.158 1.079 1.079 0 000-2.158zm5.817 21.13h24.666V33.05H15.227v1.3zm0-9.7h24.666v-1.3H15.227v1.3zm0-9.697h24.665v-1.301H15.226v1.3z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M9.41 34.62a1.079 1.079 0 100 2.159 1.079 1.079 0 000-2.158zm0-11.697a1.079 1.079 0 100 2.158 1.079 1.079 0 000-2.158zm0-11.702a1.079 1.079 0 100 2.158 1.079 1.079 0 000-2.158zm5.817 25.13h24.666V35.05H15.227v1.3zm0-11.7h24.666v-1.3H15.227v1.3zm0-11.697h24.665v-1.301H15.226v1.3z"
    />
  );

  const xSmall = (
    <path
      fillRule={'evenodd'}
      d="M11.25 31.336a1.137 1.137 0 100 2.275 1.137 1.137 0 000-2.275zm0-8.474a1.137 1.137 0 100 2.275 1.137 1.137 0 000-2.275zm0-8.477a1.137 1.137 0 100 2.275 1.137 1.137 0 000-2.275zm5.085 19.226h21.552v-2.275H16.335v2.275zm0-8.474h21.552v-2.275H16.335v2.275zm0-8.475h21.552v-2.275H16.335v2.275z"
    />
  );

  const xSmallHover = (
    <path
      fillRule={'evenodd'}
      d="M11.25 33.863a1.137 1.137 0 100 2.275 1.137 1.137 0 000-2.275zm0-11.001a1.137 1.137 0 100 2.275 1.137 1.137 0 000-2.275zm0-11a1.137 1.137 0 100 2.274 1.137 1.137 0 000-2.275zm5.084 24.277h21.553v-2.275H16.334v2.275zm0-11.002h21.553v-2.275H16.334v2.275zm0-10.997h21.553v-2.275H16.334v2.275z"
    />
  );
  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default List;
