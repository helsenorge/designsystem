import React from 'react';

import { SvgPathProps } from '../Icon';

const ElderlyPerson: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M26.082 5.214a3.054 3.054 0 013.05 3.052 3.054 3.054 0 01-3.05 3.051 3.055 3.055 0 01-3.052-3.051 3.055 3.055 0 013.052-3.052m0 7.403a4.357 4.357 0 004.352-4.351c0-2.4-1.953-4.353-4.352-4.353a4.359 4.359 0 00-4.353 4.353 4.358 4.358 0 004.353 4.351m8.805 29.034a1.186 1.186 0 11.002-2.368 1.186 1.186 0 01-.003 2.368zm-8.518-12.927v-1.317c0-.378.072-.742.175-1.1a2.642 2.642 0 002.481-.837 2.63 2.63 0 00.641-1.94 3.98 3.98 0 01.637-.056 3.937 3.937 0 013.933 3.933v1.317H26.37zm-6.495-9.311l-3.94 3.735v16.888c0 1.16-.944 2.103-2.103 2.103a2.105 2.105 0 01-2.103-2.103V21.544c0-.841.321-1.637.907-2.242l4.911-5.082a2.587 2.587 0 013.895.2l6.655 8.472c.4.51.38 1.233-.047 1.72a1.35 1.35 0 01-1.881.138l-6.293-5.337zm15.662 18.665V27.405a5.24 5.24 0 00-5.233-5.233 5.22 5.22 0 00-1.053.119c-.044-.069-.082-.139-.133-.203l-6.656-8.472a3.885 3.885 0 00-2.857-1.482 3.901 3.901 0 00-2.993 1.181l-4.91 5.082a4.504 4.504 0 00-1.274 3.146v18.492a3.408 3.408 0 003.404 3.404 3.408 3.408 0 003.404-3.404V23.707l2.688-2.549 5.402 4.582c.011.01.023.015.034.023a5.179 5.179 0 00-.29 1.643v15.385h1.3V30.026h7.867v8.052a2.483 2.483 0 00-1.835 2.387 2.489 2.489 0 002.485 2.487 2.489 2.489 0 002.486-2.486c0-1.145-.78-2.1-1.836-2.389z" />
  );

  const normalHover = (
    <path d="M24.152 3.928a3.021 3.021 0 012.245.645 3.03 3.03 0 011.133 2.042 3.058 3.058 0 01-2.688 3.377 3.042 3.042 0 01-2.245-.644 3.038 3.038 0 01-1.133-2.042 3.058 3.058 0 012.688-3.378m-2.364 6.437a4.31 4.31 0 003.2.918 4.357 4.357 0 003.833-4.815 4.323 4.323 0 00-1.614-2.913 4.305 4.305 0 00-3.201-.918 4.358 4.358 0 00-3.833 4.815 4.32 4.32 0 001.615 2.913m15.84 28.203a1.184 1.184 0 11-.346-2.343 1.184 1.184 0 01.346 2.343zM27.32 27.018l-.192-1.303a3.962 3.962 0 01-.023-.87 2.643 2.643 0 002.263-1.123 2.637 2.637 0 00.353-2.283c.235-.083.476-.151.726-.187 2.153-.328 4.15 1.172 4.465 3.318l.193 1.303-7.785 1.146zm-7.735-8.285l-3.649 4.464v16.84c0 1.16-.944 2.103-2.104 2.103a2.105 2.105 0 01-2.102-2.103V21.545c0-.842.321-1.638.961-2.308l4-5.395a2.583 2.583 0 012.05-1.01c.69 0 1.353.275 1.84.768l7.573 7.666c.455.46.518 1.182.148 1.714a1.357 1.357 0 01-1.856.35l-6.86-4.597zm20.331 18.3a2.489 2.489 0 00-2.163-2.096L36.196 24.38c-.42-2.855-3.088-4.841-5.939-4.415-.423.063-.83.184-1.22.344l-7.532-7.623a3.865 3.865 0 00-3.007-1.147 3.895 3.895 0 00-2.847 1.52l-3.952 5.34a4.508 4.508 0 00-1.27 3.146v18.492a3.408 3.408 0 003.402 3.404 3.408 3.408 0 003.404-3.404V23.66l2.607-3.19 5.881 3.94c.041.027.087.043.13.068a5.166 5.166 0 00-.012 1.427l2.24 15.22 1.287-.19-1.859-12.63 7.784-1.145 1.172 7.968a2.484 2.484 0 00-1.469 2.629 2.49 2.49 0 002.821 2.098 2.49 2.49 0 002.098-2.821z" />
  );

  return isHovered ? normalHover : normal;
};

export default ElderlyPerson;
