import React from 'react';
import {IconProps} from './';
const Sykdomsinformasjon = React.forwardRef(
  ({size = 64, color = 'black', ...props}: IconProps, svgRef: any): JSX.Element => (
    <svg viewBox="0 0 64 64" width={size} height={size} ref={svgRef} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M32 39.443a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm-.75-6.81a.75.75 0 0 1 1.5 0v4.219a.75.75 0 0 1-1.5 0v-4.219zm-7.365 11.286h16.23c1.356 0 2.203-1.469 1.524-2.643l-7.884-13.619a1.761 1.761 0 0 0-3.025-.038l-8.346 13.619c-.719 1.173.125 2.681 1.501 2.681zM48 11.849h-6v4h6v39H16v-39h6v-4h-6c-2.206 0-4 1.793-4 4v39c0 2.206 1.794 4 4 4h32c2.205 0 4-1.794 4-4v-39c0-2.207-1.795-4-4-4zm-15.992-.662a1.297 1.297 0 1 1 .001-2.593 1.297 1.297 0 0 1-.001 2.593zm7.763 1.269a2.703 2.703 0 0 0-2.707-2.695h-1.733v-.439A3.329 3.329 0 0 0 32 6a3.329 3.329 0 0 0-3.331 3.322v.439h-1.733a2.707 2.707 0 0 0-2.708 2.695v4.828h15.543v-4.828z"
      />
    </svg>
  ),
);
export default Sykdomsinformasjon;
