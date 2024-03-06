import React from 'react';

import { SvgPathProps } from '../Icon';

const BreastReconstruction: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M32.272 15.972l.15 1.29c-.61.08-1.22.22-1.81.42l-.42-1.23c.67-.23 1.37-.39 2.08-.48zm-2.96 17.86c.54.29 1.12.53 1.72.7l-.36 1.25c-.68-.2-1.35-.47-1.98-.8l.62-1.15zm-3.8-3.98l-1.17.57c-.11-.23-.21-.46-.3-.7-1.49 3.87-5.22 6.46-9.48 6.46-5.62 0-10.19-4.57-10.19-10.19 0-2.149.67-4.177 1.848-5.847a5.633 5.633 0 01-2.516-4.675h1.3c0 1.488.787 2.868 2.032 3.648a10.242 10.242 0 013.256-2.376v1.46a8.856 8.856 0 00-4.62 7.79c0 4.9 3.99 8.89 8.89 8.89 4.16 0 7.73-2.83 8.66-6.88l1.08.25.59-.15c.14.61.35 1.19.62 1.75zm2.26 2.93l-.84.99c-.54-.46-1.04-.98-1.47-1.54l1.03-.79c.38.49.81.94 1.28 1.34zm12.42-14.34l-.86.97c-.46-.41-.97-.77-1.51-1.08l.63-1.13c.62.35 1.21.77 1.74 1.24zm.65 12.5l1.08.72c-.39.59-.85 1.14-1.36 1.64l-.91-.93c.45-.43.85-.91 1.19-1.43zm-6.12 3.85l.18 1.29a9.287 9.287 0 01-2.13.07l.09-1.29c.63.04 1.25.02 1.86-.07zm3.47-1.27l.69 1.1c-.6.38-1.24.7-1.91.94l-.45-1.22c.58-.21 1.14-.49 1.67-.82zm4.01-6.02l1.28.22c-.12.7-.31 1.39-.57 2.05l-1.21-.48c.23-.57.4-1.17.5-1.79zm-14.76-7.91l-.88-.95c.52-.49 1.09-.92 1.7-1.28l.67 1.11c-.53.32-1.03.7-1.49 1.12zm7.51-2.26a7.81 7.81 0 00-.67-.09l.12-1.29c.25.02.51.05.76.09.45.08.9.18 1.33.32l-.38 1.24a7.93 7.93 0 00-1.16-.27zm-9.62 5.29l-1.2-.5a10.7 10.7 0 011.03-1.87l1.07.75c-.36.5-.66 1.05-.9 1.62zm18.06 1.25c.15.69.23 1.41.23 2.12h-1.3a8.7 8.7 0 00-.2-1.84l1.27-.28zm-2.343-3.428l-.513-1.083a4.328 4.328 0 002.46-3.89h1.3a5.63 5.63 0 01-2.556 4.697l.002.003c.38.521.71 1.09.97 1.681l-1.18.54c-.26-.57-.57-1.11-.94-1.61l.457-.338zm-16.397 5.817l-1.3.03v-.24c0-.559.04-1.13.14-1.689l.03-.19 1.28.24-.03.17c-.08.49-.12.98-.12 1.47v.21zm11.93.805a.9.9 0 11-1.802-.001.9.9 0 011.802.001zm-.9 2.166c-1.19 0-2.16-.97-2.16-2.17 0-1.19.97-2.16 2.16-2.16 1.19 0 2.16.97 2.16 2.16 0 1.2-.97 2.17-2.16 2.17zm3.16-2.17c0-1.74-1.42-3.16-3.16-3.16a3.16 3.16 0 00-3.16 3.16c0 1.75 1.41 3.17 3.16 3.17 1.74 0 3.16-1.42 3.16-3.17zm-27.423.004a.902.902 0 011.802 0 .9.9 0 01-1.802 0zm.903-2.164c1.19 0 2.16.97 2.16 2.16 0 1.2-.97 2.17-2.16 2.17-1.19 0-2.17-.97-2.17-2.17 0-1.19.98-2.16 2.17-2.16zm-3.17 2.16c0 1.75 1.42 3.17 3.17 3.17 1.74 0 3.16-1.42 3.16-3.17 0-1.74-1.42-3.16-3.16-3.16-1.75 0-3.17 1.42-3.17 3.16z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M28.89 18.062c-.53.32-1.03.69-1.48 1.12l-.89-.94c.52-.49 1.09-.93 1.7-1.3l.67 1.12zm11.06 12.69l1.1.69c-.38.6-.81 1.17-1.3 1.68l-.94-.9c.42-.45.81-.94 1.14-1.47zm-14.82-1.23l-1.15.46c-1.45 3.92-4.5 6.2-8.42 6.2-5.61 0-10.18-4.57-10.18-10.19 0-2.18.41-4.07 1.21-5.62a.091.091 0 01.007-.013c-1.764-.982-2.894-2.855-2.894-4.889h1.301c0 1.582.888 3.04 2.273 3.784l.002-.003a7.656 7.656 0 013.01-2.5v1.471c-2.96 1.72-3.61 5.11-3.61 7.77 0 4.9 3.98 8.89 8.88 8.89 3.86 0 6.65-2.51 7.66-6.88l.15.03c-.01-.03-.02-.05-.02-.08l1.28-.22c.1.61.28 1.21.5 1.79zm.87 1.65c.34.52.74 1 1.18 1.43l-.91.93c-.5-.49-.96-1.04-1.36-1.64l1.09-.72zm2.64 2.56c.53.32 1.1.57 1.68.76l-.4 1.24a9.338 9.338 0 01-1.95-.89l.67-1.11zm8.75-.31l.73 1.08c-.59.4-1.23.74-1.88 1l-.49-1.2a8.276 8.276 0 001.64-.88zm-5.02-16.52c-.6.05-1.21.18-1.8.38l-.41-1.24c.68-.22 1.39-.37 2.09-.44l.12 1.3zm1.6 17.88l.2 1.29c-.46.07-.94.11-1.4.11-.25 0-.5-.01-.74-.03l.1-1.3c.62.05 1.24.03 1.84-.07zm5.06-15.3c-.42-.46-.89-.87-1.4-1.21l.74-1.07c.59.4 1.13.87 1.62 1.4l-.96.88zm1.11 1.49l.908-.529-.513-1.082a4.324 4.324 0 002.46-3.89h1.301a5.624 5.624 0 01-2.983 4.94l.006.01c.33.58.6 1.191.82 1.83l-1.23.42c-.2-.599-.46-1.17-.77-1.699zm1.12 6.29l1.29.22c-.12.7-.31 1.39-.55 2.05l-1.22-.46c.22-.58.38-1.19.48-1.81zm-6.83-10.29l-.21-.03.18-1.29.25.04c.62.1 1.23.27 1.82.5l-.47 1.21a8.2 8.2 0 00-1.57-.43zm-9.15 5.25l-1.19-.51c.28-.66.63-1.28 1.04-1.86l1.06.75c-.35.5-.66 1.05-.91 1.62zm17.33 2.1a10.167 10.167 0 01.06 2.13l-1.3-.1c.02-.23.03-.46.03-.69 0-.39-.03-.79-.08-1.17l1.29-.17zm-18.13 1.54l-1.3-.03c.02-.52.07-1.05.15-1.57.03-.18.07-.36.11-.53l1.27.27c-.04.16-.07.31-.09.47-.08.46-.13.93-.14 1.39zm11.1 1.204a.9.9 0 11-1.8 0 .9.9 0 011.8 0zm-.9 2.166c-1.19 0-2.16-.97-2.16-2.17 0-1.19.97-2.16 2.16-2.16 1.19 0 2.16.97 2.16 2.16 0 1.2-.97 2.17-2.16 2.17zm3.16-2.17a3.16 3.16 0 00-3.16-3.16c-1.74 0-3.16 1.42-3.16 3.16 0 1.75 1.42 3.17 3.16 3.17 1.75 0 3.16-1.42 3.16-3.17zm-25.42.004a.9.9 0 111.8 0 .9.9 0 01-1.8 0zm.9-2.164c1.19 0 2.16.97 2.16 2.16 0 1.2-.97 2.17-2.16 2.17-1.19 0-2.16-.97-2.16-2.17 0-1.19.97-2.16 2.16-2.16zm0 5.33c1.74 0 3.16-1.42 3.16-3.17 0-1.74-1.42-3.16-3.16-3.16-1.74 0-3.16 1.42-3.16 3.16 0 1.75 1.42 3.17 3.16 3.17z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default BreastReconstruction;
