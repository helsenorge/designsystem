import React from 'react';
import {SvgPathProps} from './Icon';

const Anxiety: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M28.239 20.142c0-4.033-3.282-7.315-7.315-7.315-4.034 0-7.315 3.282-7.315 7.315s3.28 7.315 7.315 7.315c4.033 0 7.315-3.282 7.315-7.315zm1 0c0 4.585-3.73 8.315-8.315 8.315-4.585 0-8.315-3.73-8.315-8.315 0-4.585 3.73-8.315 8.315-8.315 4.585 0 8.315 3.73 8.315 8.315zm5.918-6.468a.847.847 0 000-1.694c-.468 0-1.624.847-1.624.847s1.156.847 1.624.847zm-1.218-4.928a.847.847 0 00-1.198 0c-.331.33-.55 1.746-.55 1.746s1.417-.218 1.748-.55a.847.847 0 000-1.196zm.613 17.258l-2.614-5.624v-.144c0-7.516-5.735-11.573-11.13-11.573-6.821 0-11.044 5.893-11.044 11.352 0 3.633 1.116 5.838 2.194 7.97.97 1.922 1.888 3.736 1.888 6.337v5.397h12.142v-5.184h.649a5.307 5.307 0 005.3-5.3v-2.04h1.856c.292 0 .55-.142.706-.388a.82.82 0 00.053-.803zm1.179-.55c.31.667.259 1.434-.136 2.052a2.127 2.127 0 01-1.802.989h-.555v.74c0 3.42-2.615 6.24-5.95 6.568v5.216H12.546v-6.697c0-2.291-.81-3.894-1.748-5.75-1.094-2.162-2.333-4.615-2.333-8.557 0-6.976 5.537-12.651 12.343-12.651 5.99 0 12.355 4.459 12.429 12.727l2.494 5.364zm-14.807-4.037a.55.55 0 00.55-.55v-4.453a.55.55 0 10-1.1 0v4.454a.55.55 0 00.55.549zm.858 2.144a.858.858 0 11-1.716.002.858.858 0 011.716-.002z" />
  );

  const normalHover = (
    <path d="M28.239 20.142c0-4.033-3.281-7.315-7.315-7.315-4.034 0-7.315 3.282-7.315 7.315s3.28 7.315 7.315 7.315c4.034 0 7.315-3.282 7.315-7.315zm1 0c0 4.585-3.73 8.315-8.315 8.315-4.585 0-8.315-3.73-8.315-8.315 0-4.585 3.73-8.315 8.315-8.315 4.585 0 8.315 3.73 8.315 8.315zm7.153-8.162c-.468 0-1.623.847-1.623.847s1.155.847 1.623.847a.847.847 0 100-1.694zm-1.704-3.984a.847.847 0 00-1.198 0c-.331.33-.55 1.747-.55 1.747s1.417-.218 1.748-.55a.847.847 0 000-1.197zm-.135 18.008l-2.615-5.624v-.144c0-7.516-5.735-11.573-11.13-11.573-6.821 0-11.044 5.893-11.044 11.352 0 3.633 1.116 5.838 2.194 7.97.97 1.922 1.888 3.736 1.888 6.337v5.397h12.142v-5.184h.649a5.307 5.307 0 005.3-5.3v-2.04h1.856c.292 0 .55-.141.706-.387a.824.824 0 00.054-.804zm1.179-.55a2.128 2.128 0 01-.137 2.052 2.127 2.127 0 01-1.802.989h-.555v.74c0 3.42-2.615 6.24-5.95 6.568v5.216H12.546v-6.697c0-2.291-.81-3.894-1.748-5.75-1.094-2.162-2.333-4.615-2.333-8.557 0-6.976 5.537-12.651 12.343-12.651 5.99 0 12.355 4.459 12.429 12.727l2.495 5.364zm-14.808-4.037a.55.55 0 00.55-.55v-4.453a.55.55 0 10-1.1 0v4.454a.55.55 0 00.55.549zm.858 2.144a.858.858 0 11-1.716.002.858.858 0 011.716-.002z" />
  );

  return isHovered ? normalHover : normal;
};

export default Anxiety;