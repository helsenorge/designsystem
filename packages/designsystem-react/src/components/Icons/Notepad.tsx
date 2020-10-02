import React from 'react';
import {SvgPathProps} from './Icon';

const Notepad: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M14.493 28.485h7.735v-.956h-7.735v.956zm26.668-9.313l-.263.264-2.861-2.863.263-.262c.765-.767 2.097-.765 2.861 0 .79.789.79 2.072 0 2.861zm-1.52 1.521l-2.862-2.861.58-.581 2.863 2.861-.581.581zm-8.434 8.434l-1.11-1.11 7.811-7.702 1.055 1.055-7.756 7.757zm.177 9.244H8.776V12.286h4.49v.36c0 .855.694 1.55 1.55 1.55.855 0 1.55-.694 1.55-1.55v-.36h7.428v.36c0 .855.695 1.55 1.55 1.55.855 0 1.55-.694 1.55-1.55v-.36h4.49v9.137l-4.365 4.364-2.642 6.082a.933.933 0 00.197 1.039.933.933 0 001.04.196l5.77-2.52v7.787zM11.06 11.01h2.204v-.614H11.06v.614zm3.16-1.712a.595.595 0 011.19 0v3.348a.595.595 0 01-1.19 0V9.298zm2.145 1.712h7.427v-.614h-7.427v.614zm8.384-1.712a.595.595 0 011.188 0v3.348a.595.595 0 11-1.188 0V9.298zm2.144 1.712h2.204v-.614h-2.204v.614zm-.147 20.207l-.86.376.375-.862.485.486zm-.075-1.43l1.163-2.677 2.529 2.528-2.675 1.167-1.017-1.017zm9.43-11.278l1.17 1.17-7.812 7.702-1.114-1.115 7.756-7.757zm5.962-3.1a3.278 3.278 0 00-2.334-.966c-.88 0-1.71.343-2.333.966l-4.737 4.737v-8.49l-.008-.646h-2.6l-.005-1.57h-3.153v-.142c0-.855-.695-1.551-1.55-1.551-.855 0-1.55.696-1.55 1.55v.143h-7.428v-.142c0-.855-.695-1.551-1.55-1.551-.856 0-1.55.696-1.55 1.55v.143H10.59l-.485.006v1.564h-1.96l-.645.008V39l.008.646h24.506l.645-.008V29.477l9.405-9.402a3.276 3.276 0 00.966-2.333c0-.882-.343-1.71-.966-2.333zM14.47 20.665H25.69v-.956H14.47v.956zm.022 3.9H25.69v-.956H14.493v.956z" />
  );

  const normalHover = (
    <path d="M14.493 28.485h7.735v-.956h-7.735v.956zm26.405-11.05l-2.861-2.861.263-.263c.765-.767 2.097-.765 2.861 0 .79.789.79 2.072 0 2.861l-.263.264zm-1.258 1.258l-2.861-2.861.58-.581 2.863 2.861-.581.581zm-8.433 8.434l-1.11-1.11 7.811-7.702 1.055 1.055-7.756 7.757zm.177 11.244H8.776V12.286h4.49v.36c0 .855.694 1.55 1.55 1.55.855 0 1.55-.694 1.55-1.55v-.36h7.428v.36c0 .855.695 1.55 1.55 1.55.855 0 1.55-.694 1.55-1.55v-.36h4.49v7.137l-4.365 4.364-2.642 6.082a.933.933 0 00.197 1.039.933.933 0 001.04.196l5.77-2.52v9.787zM11.06 11.01h2.204v-.614H11.06v.614zm3.16-1.712a.595.595 0 011.19 0v3.348a.595.595 0 01-1.19 0V9.298zm2.145 1.712h7.427v-.614h-7.427v.614zm8.384-1.712a.595.595 0 011.188 0v3.348a.595.595 0 11-1.188 0V9.298zm2.144 1.712h2.204v-.614h-2.204v.614zm-.147 18.207l-.86.376.375-.862.485.486zm-.075-1.43l1.163-2.677 2.529 2.528-2.675 1.167-1.017-1.017zm9.43-11.278l1.17 1.17-7.812 7.702-1.114-1.115 7.756-7.757zm3.629-4.066c-.882 0-1.71.343-2.334.966l-4.737 4.737v-6.49l-.008-.646h-2.6l-.005-1.57h-3.153v-.142c0-.855-.695-1.551-1.55-1.551-.855 0-1.55.696-1.55 1.55v.143h-7.428v-.142c0-.855-.695-1.551-1.55-1.551-.856 0-1.55.696-1.55 1.55v.143H10.59l-.485.006v1.564h-1.96l-.645.008V39l.008.646h24.506l.645-.008V27.477l9.405-9.402a3.276 3.276 0 00.966-2.333c0-.882-.343-1.71-.966-2.333a3.278 3.278 0 00-2.334-.966zm-25.26 8.222H25.69v-.956H14.47v.956zm.022 3.9H25.69v-.956H14.493v.956z" />
  );

  return isHovered ? normalHover : normal;
};

export default Notepad;
