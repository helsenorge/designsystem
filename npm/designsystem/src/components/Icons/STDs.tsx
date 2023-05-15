import React from 'react';

import { SvgPathProps } from './Icon';

const STDs: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M29.594 25.023c-.512 1.089-1.232 1.973-1.835 2.657l-.357.35c-.261.258-.521.514-.762.729l-1.235.976a1.284 1.284 0 01-1.667-.057 1.28 1.28 0 01-.422-.891 1.285 1.285 0 01.332-.931l.064-.071c.32-.2 1.459-.937 2.259-1.817.712-.938 1.562-2.572 1.56-5.036l-1.298.01c0 2.093-.705 3.46-1.26 4.194-.345.379-.793.739-1.18 1.022-1.132-1.12-1.727-2.46-1.875-2.935-.186-.487-.307-1.883-.297-2.395l-1.3-.026c-.01.493.093 2.127.369 2.845.193.625.86 2.053 2.04 3.284l-.046.052a2.58 2.58 0 00-.56 2.49l-.876-.691c-.271-.24-.533-.5-.797-.76l-.315-.306c-.67-.757-1.36-1.608-1.872-2.696-.56-1.173-.826-2.343-.795-3.495 0-2.06.849-5.511 6.53-5.511 5.56 0 6.392 3.452 6.392 5.529.03 1.134-.236 2.304-.797 3.48zm-2.621 15.905c-.103 1.06-.587 1.203-1.047 1.203-1.165 0-1.247-.601-1.276-.77V31.31a2.568 2.568 0 001.56-.557l1.263-.998c.242-.213.477-.445.712-.676l-1.212 11.848zm-4.97 1.203c-.458 0-.943-.142-1.047-1.206L19.753 29.15c.213.21.423.418.662.628l1.233.974a2.58 2.58 0 001.633.556l.005 9.964c-.035.257-.117.858-1.282.858zm9.688-20.606c0-2.048-.75-6.812-7.691-6.812-7.266 0-7.83 5.214-7.83 6.794-.037 1.34.273 2.71.919 4.069.34.725.756 1.352 1.188 1.919l1.386 13.56c.148 1.51 1 2.377 2.34 2.377.844 0 1.505-.248 1.954-.71.447.457 1.115.71 1.969.71 1.34 0 2.193-.866 2.34-2.374l1.398-13.665a10.63 10.63 0 001.105-1.814c.649-1.36.959-2.73.922-4.054zM23.664 5.869a3.162 3.162 0 013.159 3.158 3.162 3.162 0 01-3.16 3.159 3.162 3.162 0 01-3.158-3.16 3.162 3.162 0 013.159-3.157zm0 7.618a4.465 4.465 0 004.459-4.46c0-2.458-2-4.46-4.46-4.46a4.464 4.464 0 00-4.458 4.46c0 2.459 2 4.46 4.459 4.46z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M31.173 24.6c-.21 1.18-.658 2.182-1.085 3.043l-.252.428c-.186.316-.37.633-.55.904l-.939 1.263a1.288 1.288 0 01-1.625.377 1.28 1.28 0 01-.639-.753 1.286 1.286 0 01.08-.986l.044-.085c.258-.276 1.166-1.283 1.711-2.34 1.003-2.456.243-4.667-.12-5.73l-1.23.422c.336.983.965 2.812.171 4.764-.513.99-1.525 2.043-1.535 2.053a.624.624 0 00-.112.157l-.086.167a2.577 2.577 0 00-.16 1.976 2.575 2.575 0 001.283 1.51 2.588 2.588 0 001.757.223l-.913 8.935c-.104 1.06-.588 1.203-1.048 1.203-1.165 0-1.247-.601-1.276-.774L24.58 30.6v-.23a.65.65 0 10-1.3 0v1.116h.001l.005 9.786c-.035.257-.117.858-1.28.858-.46 0-.945-.142-1.049-1.206l-.912-8.92c.155.028.311.054.47.054.4 0 .806-.094 1.186-.288a2.574 2.574 0 001.283-1.511 2.57 2.57 0 00-.16-1.975l-.087-.168a.62.62 0 00-.11-.157c-.01-.01-1.023-1.062-1.512-2.001-.818-2.004-.19-3.833.147-4.816l-1.229-.422c-.365 1.063-1.125 3.274-.097 5.783.523 1.01 1.428 2.012 1.687 2.287l.044.086a1.288 1.288 0 01-.56 1.738 1.287 1.287 0 01-1.624-.377l-.919-1.234c-.199-.3-.384-.617-.57-.933l-.228-.384c-.45-.905-.898-1.906-1.11-3.09-.236-1.277-.192-2.476.137-3.581.63-2.345 1.341-5.002 6.737-5.002h.77c5.396 0 6.11 2.657 6.742 5.02.324 1.087.37 2.286.132 3.567M20.504 10.554a3.163 3.163 0 013.16-3.158 3.162 3.162 0 013.158 3.158 3.162 3.162 0 01-3.159 3.159 3.163 3.163 0 01-3.159-3.16M32.292 20.68c-.607-2.266-1.523-5.63-7.153-5.936 1.732-.613 2.983-2.251 2.983-4.19 0-2.458-2-4.46-4.459-4.46a4.464 4.464 0 00-4.459 4.46c0 1.969 1.291 3.625 3.064 4.215-5.26.446-6.139 3.7-6.727 5.894-.383 1.286-.438 2.689-.165 4.167.241 1.344.755 2.492 1.25 3.48l.245.418c.198.338.396.674.628 1.022l.94 1.263c.065.088.146.156.221.234l1.002 9.808c.148 1.51 1.001 2.377 2.342 2.377.842 0 1.503-.248 1.952-.71.447.457 1.115.71 1.97.71 1.34 0 2.193-.866 2.34-2.374l1.014-9.922c.036-.042.077-.078.11-.123l.96-1.292c.211-.32.41-.655.607-.993l.271-.461c.47-.945.984-2.093 1.224-3.434.274-1.481.22-2.884-.16-4.153"
    />
  );

  return isHovered ? normalHover : normal;
};

export default STDs;
