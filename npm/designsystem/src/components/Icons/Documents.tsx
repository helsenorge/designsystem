import React from 'react';

import { SvgPathProps } from './Icon';

const Documents: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M39.317 32.884V21.549a2.522 2.522 0 00-2.52-2.52h-.284v-1.134h4.726c.21 0 .4.089.533.249a.684.684 0 01.15.57l-2.605 14.17zm-1.3 6.483H8.303V16.873h9.243l2.535 3.456h16.716c.673 0 1.22.548 1.22 1.22v17.818zm-24.734-26.12h19.56v5.783H20.738l-2.535-3.457h-4.92v-2.326zm1.752-2.856h20.178v8.639h-1.07v-7.083H15.035V10.39zm27.736 6.92a1.988 1.988 0 00-1.532-.716h-4.726V9.09H13.734v2.856h-1.75v3.626h-4.98v25.094h32.313v-.591L43.2 18.949a1.99 1.99 0 00-.429-1.637zm-25.663 8.86h-1.3v3.176h-3.175v1.3h3.175v3.175h1.3v-3.175h3.176v-1.3h-3.176v-3.175z" />
  );

  const normalHover = (
    <path d="M16.914 26.171h-1.3v3.175h-3.176v1.3h3.176v3.175h1.3v-3.175h3.175v-1.3h-3.175v-3.175zM37.92 39.367H8.206V16.872h9.242l2.536 3.457h16.717a1.22 1.22 0 011.219 1.22v17.818zm-24.734-26.12h19.56v5.782H20.643l-2.536-3.457h-4.921v-2.325zm1.751-5.107h20.179v10.89h-1.07v-7.083H14.937V8.14zm21.764 10.89h-.285V6.84H13.638v5.107h-1.752v3.625h-4.98v25.095H39.22V21.548a2.522 2.522 0 00-2.519-2.519z" />
  );

  return isHovered ? normalHover : normal;
};

export default Documents;
