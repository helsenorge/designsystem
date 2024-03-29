import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const Change: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M21.678 11.623l-.274-1.373c-6.59 1.317-11.372 7.158-11.372 13.888 0 4.099 1.806 7.986 4.868 10.663l-4.59.217.066 1.398 7.168-.338v-6.883h-1.401v4.815c-2.953-2.415-4.71-6.038-4.71-9.872 0-6.065 4.308-11.328 10.245-12.515m16.29 12.24c0 6.645-4.516 12.32-10.981 13.805l-.157-.683.156.683a14.317 14.317 0 01-3.181.358v-1.4c.967 0 1.933-.108 2.868-.323 5.826-1.337 9.895-6.451 9.895-12.44 0-3.833-1.758-7.456-4.711-9.872v4.815h-1.4v-6.883l7.167-.338.067 1.398-4.591.217c3.063 2.676 4.868 6.565 4.868 10.664"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M18.1 31.38l1.491 4.578c-3.556-1.382-6.35-4.28-7.538-7.927-1.88-5.766.586-12.106 5.863-15.074l-.687-1.22c-5.856 3.294-8.593 10.33-6.507 16.728 1.271 3.9 4.192 7.035 7.933 8.63l-4.298 1.63.496 1.307 6.71-2.542-2.133-6.544-1.33.434zm12.934 4.695a14.23 14.23 0 01-2.914 1.327l-.433-1.332a12.793 12.793 0 002.626-1.195l.36.6-.36-.6c5.124-3.077 7.408-9.2 5.553-14.893-1.188-3.648-3.982-6.547-7.538-7.927l1.492 4.578-1.33.434-2.135-6.544 6.71-2.543.496 1.308-4.297 1.63c3.741 1.594 6.662 4.73 7.933 8.63 2.06 6.316-.476 13.112-6.163 16.527z"
    />
  );

  const xSmall = (
    <path
      fillRule={'evenodd'}
      d="M21.714 11.803l-.346-1.734c-6.676 1.335-11.52 7.25-11.52 14.068 0 4 1.689 7.805 4.582 10.502l-4.13.194.085 1.767 7.343-.347v-7.057h-1.77v4.426c-2.73-2.375-4.341-5.835-4.341-9.485 0-5.978 4.246-11.164 10.097-12.334m16.438 12.06c0 6.73-4.574 12.48-11.124 13.984-1.05.241-2.133.363-3.223.363V36.44c.957 0 1.908-.107 2.827-.318 5.74-1.318 9.751-6.359 9.751-12.26 0-3.65-1.612-7.108-4.341-9.484v4.427h-1.77v-7.06l7.344-.344.082 1.765-4.128.195a14.39 14.39 0 014.582 10.502"
    />
  );

  const xSmallHover = (
    <path
      fillRule={'evenodd'}
      d="M17.924 31.436l1.372 4.212c-3.334-1.414-5.937-4.204-7.068-7.674-1.853-5.682.578-11.93 5.778-14.856l-.867-1.542c-5.931 3.338-8.705 10.465-6.592 16.945a14.383 14.383 0 007.612 8.566l-3.867 1.465.627 1.652 6.874-2.603-2.188-6.713-1.681.548zm13.205 4.798l-.455-.76.455.76a14.483 14.483 0 01-2.95 1.343l-.55-1.68a12.754 12.754 0 002.59-1.18c5.05-3.033 7.3-9.068 5.472-14.678-1.131-3.47-3.735-6.26-7.068-7.674l1.372 4.21-1.682.549-2.186-6.712L33 7.808l.626 1.653-3.866 1.467a14.38 14.38 0 017.612 8.563c2.085 6.398-.483 13.283-6.244 16.743z"
    />
  );

  const xxSmall = (
    <path
      fillRule={'evenodd'}
      d="M6.336 1.176 6.101 0C2.604.699.066 3.799.066 7.369c0 1.974.793 3.852 2.152 5.245L0 12.718l.057 1.199 4.348-.205V9.529h-1.2v2.382a6.332 6.332 0 0 1-1.939-4.542c0-3 2.132-5.604 5.07-6.193Zm6.409.809a7.52 7.52 0 0 1 2.152 5.244 7.477 7.477 0 0 1-5.827 7.325c-.55.127-1.118.19-1.689.19v-1.199c.48 0 .958-.055 1.419-.161l.135.585-.134-.585a6.28 6.28 0 0 0 4.896-6.155c0-1.723-.715-3.36-1.939-4.542v2.386h-1.2V.887l4.351-.206.057 1.199-2.221.105Z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover, xxSmall, xxSmallHover: xxSmall });
};

export default Change;
