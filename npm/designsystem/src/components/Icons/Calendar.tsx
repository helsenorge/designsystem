import React from 'react';
import {SvgPathProps} from './Icon';

const Calendar: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M32.86 22.986a.984.984 0 010 1.967.984.984 0 010-1.967zm0 3.03a2.049 2.049 0 002.046-2.047 2.049 2.049 0 00-2.046-2.046 2.049 2.049 0 00-2.046 2.046c0 1.13.918 2.047 2.046 2.047zm6.21-7.864H8.68v-6.194h3.846v1.161a2.243 2.243 0 002.241 2.241 2.243 2.243 0 002.241-2.24v-1.162H30.62v1.161a2.244 2.244 0 002.241 2.241 2.243 2.243 0 002.241-2.24v-1.162h3.97v6.194zM8.678 35.982H39.07v-16.53H8.678v16.53zm5.148-26.273c0-.518.422-.94.941-.94.52 0 .941.422.941.94v3.41a.942.942 0 01-1.882 0V9.71zm18.093 0c0-.518.422-.94.941-.94.52 0 .941.422.941.94v3.41a.942.942 0 01-1.882 0V9.71zm3.182.95v-.95a2.243 2.243 0 00-2.24-2.24 2.244 2.244 0 00-2.242 2.24v.95H17.01v-.95a2.243 2.243 0 00-2.242-2.24 2.243 2.243 0 00-2.24 2.24v.95H7.378V37.28h32.992V10.658h-5.27zm-8.157 16.167a.984.984 0 110 1.969.984.984 0 010-1.969zm0 3.03a2.049 2.049 0 002.047-2.047 2.049 2.049 0 00-2.047-2.046 2.049 2.049 0 00-2.046 2.046c0 1.13.918 2.047 2.046 2.047z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M33.843 23.97a.984.984 0 01-.983.983.984.984 0 010-1.967c.542 0 .983.441.983.983zm1.063 0a2.049 2.049 0 00-2.046-2.047 2.049 2.049 0 00-2.046 2.046c0 1.13.918 2.047 2.046 2.047a2.049 2.049 0 002.046-2.047zm4.164-5.818H8.68v-6.194h3.846v1.161a2.243 2.243 0 002.241 2.241 2.243 2.243 0 002.241-2.24v-1.162H30.62v1.161a2.244 2.244 0 002.241 2.241 2.243 2.243 0 002.241-2.24v-1.162h3.97v6.194zM8.678 35.982H39.07v-16.53H8.678v16.53zm5.148-26.273c0-.518.422-.94.941-.94.52 0 .941.422.941.94v3.41a.942.942 0 01-1.882 0V9.71zm18.093 0c0-.518.422-.94.941-.94.52 0 .941.422.941.94v3.41a.942.942 0 01-1.882 0V9.71zm3.182.95v-.95a2.243 2.243 0 00-2.24-2.24 2.244 2.244 0 00-2.242 2.24v.95H17.01v-.95a2.243 2.243 0 00-2.242-2.24 2.243 2.243 0 00-2.24 2.24v.95H7.378V37.28h32.992V10.658h-5.27zm-11.173 17.15a.985.985 0 01-1.967 0 .984.984 0 011.967 0zm1.063 0a2.049 2.049 0 00-2.047-2.046 2.049 2.049 0 00-2.046 2.046c0 1.13.918 2.047 2.046 2.047a2.049 2.049 0 002.047-2.047z"
    />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M38.887 16.71H8.6v-6.197h3.862v1.17c0 1.223.994 2.216 2.216 2.216a2.218 2.218 0 002.215-2.215v-1.171h13.582v1.17c0 1.223.994 2.216 2.215 2.216a2.218 2.218 0 002.216-2.215v-1.171h3.982v6.197zM8.6 34.46h30.288V17.974H8.6V34.46zm5.125-26.17a.953.953 0 011.905 0v3.394a.953.953 0 01-1.905 0V8.289zm18.013 0a.953.953 0 011.905 0v3.394a.953.953 0 01-1.905 0V8.289zm3.168.96v-.96a2.218 2.218 0 00-2.216-2.216 2.218 2.218 0 00-2.215 2.215v.96H16.892v-.96a2.218 2.218 0 00-2.215-2.215 2.218 2.218 0 00-2.216 2.215v.96H7.336v26.475h32.815V9.249h-5.246zM27.67 28.292a1.508 1.508 0 100-3.016 1.508 1.508 0 000 3.016z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M38.888 16.71H8.598v-6.197h3.862v1.17a2.216 2.216 0 004.431 0v-1.17h13.583v1.17a2.217 2.217 0 004.431 0v-1.17h3.983v6.197zM8.598 34.46h30.29V17.974H8.598V34.46zm5.125-26.17a.953.953 0 011.905 0v3.394a.953.953 0 01-1.905 0V8.289zm18.014 0a.953.953 0 011.905 0v3.394a.953.953 0 01-1.905 0V8.289zm3.168.96v-.96a2.218 2.218 0 00-2.215-2.216 2.218 2.218 0 00-2.216 2.215v.96H16.89v-.96a2.217 2.217 0 00-2.214-2.215 2.219 2.219 0 00-2.217 2.215v.96H7.335v26.475h32.816V9.249h-5.246zm-7.234 19.043a1.507 1.507 0 000-3.017 1.51 1.51 0 100 3.017zm5.019-4.297a1.509 1.509 0 10-.002-3.018 1.509 1.509 0 00.002 3.018z"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Calendar;