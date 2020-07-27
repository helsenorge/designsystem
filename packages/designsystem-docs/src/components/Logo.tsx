import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

interface LogoProps {
  size?: number;
}

function Logo(props: LogoProps) {
  const {size = 225} = props;
  return (
    <Link to="/">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 260 58">
        <path d="M156.1 27.45c0-5.27 3.36-8.6 7.24-8.6a7.53 7.53 0 014.93 2l-.07-3v-6.72h1.5v24.45h-1.29l-.14-2.11h-.1a7.68 7.68 0 01-5.31 2.53c-4.11 0-6.76-3-6.76-8.55zM168.2 32v-9.72a6.88 6.88 0 00-4.76-2.1c-3.26 0-5.74 3.16-5.74 7.27 0 4.32 1.9 7.21 5.37 7.21 1.8 0 3.4-.95 5.13-2.66zM176.63 27.45c0-5.34 3.47-8.6 7.11-8.6 3.88 0 6.26 2.75 6.26 7.55a4.59 4.59 0 01-.11 1.22h-11.72c.06 4.12 2.48 7.07 6.15 7.07a7.16 7.16 0 004.38-1.46l.62 1.16a9.16 9.16 0 01-5.14 1.6c-4.18.01-7.55-3.2-7.55-8.54zm11.94-1.05c0-4.18-1.87-6.26-4.8-6.26s-5.27 2.35-5.6 6.26zM194.42 33.74l.88-1.12a7.55 7.55 0 005.2 2.07c2.55 0 3.88-1.49 3.88-3.23 0-2-2.11-2.92-4-3.6-2.48-.88-5.07-1.87-5.07-4.66 0-2.38 1.84-4.35 5.24-4.35a7.56 7.56 0 014.69 1.7l-.81 1.05a6.39 6.39 0 00-3.91-1.46c-2.55 0-3.71 1.46-3.71 3 0 1.87 1.8 2.58 3.74 3.3 2.55 1 5.34 1.8 5.34 5 0 2.44-2 4.59-5.51 4.59a9.47 9.47 0 01-5.96-2.29zM211.76 13.92a1.29 1.29 0 112.58 0 1.29 1.29 0 11-2.58 0zm.51 5.34h1.49v16.32h-1.49zM220.73 38.91a5.16 5.16 0 012.42-3.91v-.13a2.91 2.91 0 01-1.43-2.62 3.82 3.82 0 011.77-3v-.14a6.07 6.07 0 01-2-4.48 5.61 5.61 0 015.74-5.75 5.68 5.68 0 012.14.41h5.55v1.26h-3.81a5.43 5.43 0 011.8 4.11 5.58 5.58 0 01-5.68 5.75 5.68 5.68 0 01-2.72-.68 2.92 2.92 0 00-1.36 2.27c0 1.19.68 2.14 3.12 2.14h3.51c3.67 0 5.37 1.16 5.37 3.74 0 2.83-3 5.51-7.72 5.51-4.11.04-6.7-1.73-6.7-4.48zm12.89-.82c0-1.8-1.33-2.48-3.78-2.48h-3.5a10.37 10.37 0 01-2-.27 4.28 4.28 0 00-2.14 3.43c0 2 2 3.44 5.44 3.44 3.63 0 5.98-2.08 5.98-4.12zm-2.21-13.49a4.24 4.24 0 10-8.47 0 4.25 4.25 0 108.47 0zM240.69 19.26H242l.14 2.51h.1c1.67-1.66 3.37-2.92 5.61-2.92 3.37 0 4.93 2 4.93 6.26v10.47h-1.5V25.31c0-3.47-1.08-5.1-3.74-5.1-1.93 0-3.33 1-5.33 3.06v12.31h-1.5z" />
        <path fill="#d8d8d8" d="M134.29 4.51h2v42.36h-2z" />
        <path
          d="M34.53 33c-3.31 0-6 3.13-6 7s2.7 7 6 7 6-3.13 6-7-2.69-7-6-7zm0 12.45C32 45.48 30 43 30 40s2-5.48 4.51-5.48S39 37 39 40s-2 5.48-4.47 5.48zM11.9 32.89a5.31 5.31 0 00-4.15 2.31v-1.86H6.12v13.52h1.63v-7.58c0-2.25 1.88-4.68 3.73-4.81a3.06 3.06 0 012.39.64 4.58 4.58 0 011.2 3.29c.13 2.26.09 8.14.09 8.2v.26h1.48V38c0-2.53-1.64-5.11-4.74-5.11zm27.77-16.25h-6.53v-3.25h4.53V10.3h-4.54V7.5h6.36V4.73h-9.91v14.73h10.09zm-26.08-6.39H8.81V4.73H5.49v14.74h3.42V13.6h4.77v5.93H17V4.73h-3.4zm93.8 2.66c0-4.27-2.1-6.92-5.47-6.92s-6 3.1-6 6.92 2.71 6.92 6 6.92a5.87 5.87 0 005-3.09l.13-.23-1.29-.75-.13.23a4.38 4.38 0 01-3.74 2.34c-2.25 0-4.18-2-4.49-4.67h10zm-10-.75c.31-2.64 2.24-4.67 4.49-4.67s3.74 1.7 3.94 4.67zM55.31 33.34h-1.62v13.52h1.62v-8.49l5-3.61v-2.11l-5 3.48zm45.13 7.15H105V37.4h-4.54v-2.8h6.36v-2.76h-9.94v14.72H107v-2.82h-6.53zM80.31 10.6C79.18 10.15 78 9.61 78 9c0-.94.46-1.36 1.5-1.36a1.93 1.93 0 012 1.68v.24l3.66-.06v-.28c-.32-3.22-2.98-4.71-5.5-4.71-2.17 0-5.39 1.18-5.39 4.44 0 2.05 1.53 3.12 3 3.88.26.14.63.27 1.06.44 1.31.48 3.29 1.22 3.29 2.3a1.4 1.4 0 01-.45 1 1.94 1.94 0 01-1.52.44c-1.52-.11-2.09-1.88-2.1-1.9l-.06-.19-3.56.08v.27c.21 2.16 1.9 4.7 6 4.77h.1a5.61 5.61 0 004.79-2.39 4.37 4.37 0 00-.46-4.54c-.77-1.05-2.18-1.76-4.05-2.51zM56.93 4.73h-3.45v14.78h9.11v-2.87h-5.66zm20.71 28.08a5.07 5.07 0 00-1.52 9.87c-.86.85-3.11 3.07-3.37 3.34a3.82 3.82 0 00-1 2.55c0 2.49 2.71 4.51 6 4.51s6-2 6-4.51-2.71-4.52-6-4.52a8 8 0 00-1.1.08c.32-.34.74-.79 1.15-1.21a5 5 0 004.82-5.05 4.87 4.87 0 00-.2-1.42l2.34-1.69v-2.11l-3.11 2.22a4.94 4.94 0 00-4.01-2.06zm.1 12.73c2.52 0 4.56 1.36 4.56 3s-2 3-4.56 3-4.56-1.36-4.56-3 2.05-3 4.56-3zm-.1-4.1a3.57 3.57 0 113.49-3.57 3.54 3.54 0 01-3.49 3.57z"
          fillRule="evenodd"
        />
      </svg>
    </Link>
  );
}

export default Logo;
