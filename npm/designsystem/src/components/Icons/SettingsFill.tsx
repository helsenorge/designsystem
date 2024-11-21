import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const SettingsFill: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 40.82c.455 0 .905-.017 1.351-.053.67-1.08 1.256-2.942 1.706-5.34a11.928 11.928 0 0 0 2.988-1.238c2.013 1.377 3.744 2.279 4.982 2.57a17.114 17.114 0 0 0 1.912-1.911c-.291-1.238-1.193-2.97-2.57-4.983.54-.924.96-1.927 1.238-2.987 2.398-.45 4.26-1.037 5.34-1.706a17.26 17.26 0 0 0 0-2.703c-1.08-.67-2.942-1.256-5.34-1.706a11.927 11.927 0 0 0-1.238-2.987c1.377-2.014 2.279-3.745 2.57-4.983a17.11 17.11 0 0 0-1.911-1.911c-1.238.291-2.97 1.192-4.983 2.57-.924-.54-1.927-.96-2.988-1.239-.45-2.398-1.036-4.259-1.706-5.34a17.231 17.231 0 0 0-2.702 0c-.67 1.081-1.256 2.942-1.706 5.34a11.95 11.95 0 0 0-2.988 1.239c-2.013-1.378-3.745-2.28-4.982-2.57a17.11 17.11 0 0 0-1.912 1.911c.291 1.238 1.193 2.969 2.57 4.983-.54.924-.96 1.927-1.238 2.987-2.398.45-4.26 1.037-5.34 1.706a17.231 17.231 0 0 0 0 2.703c1.08.669 2.942 1.256 5.34 1.706.278 1.06.698 2.063 1.238 2.987-1.377 2.014-2.278 3.745-2.57 4.983a17.1 17.1 0 0 0 1.912 1.911c1.238-.291 2.969-1.192 4.983-2.57.924.54 1.927.96 2.987 1.238.45 2.398 1.036 4.26 1.706 5.34.446.035.896.053 1.351.053Zm0-13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.6 40.242c.44.117.88.217 1.319.298.926-.87 1.975-2.517 3.03-4.716a11.92 11.92 0 0 0 3.206-.423c1.589 1.851 3.027 3.17 4.148 3.772.814-.388 1.597-.84 2.34-1.352.04-1.27-.383-3.176-1.192-5.478a11.931 11.931 0 0 0 1.97-2.565c2.432.186 4.382.101 5.599-.266a17.244 17.244 0 0 0 .7-2.61c-.871-.926-2.517-1.975-4.717-3.03a11.927 11.927 0 0 0-.423-3.206c1.852-1.589 3.17-3.027 3.772-4.148A17.093 17.093 0 0 0 38 14.178c-1.271-.04-3.177.383-5.479 1.192a11.928 11.928 0 0 0-2.565-1.97c.186-2.432.101-4.382-.266-5.599a17.235 17.235 0 0 0-2.61-.7c-.926.871-1.975 2.517-3.03 4.717a11.925 11.925 0 0 0-3.206.423c-1.589-1.852-3.028-3.17-4.148-3.772-.814.388-1.597.84-2.34 1.352-.04 1.27.383 3.176 1.192 5.478a11.926 11.926 0 0 0-1.97 2.565c-2.432-.186-4.382-.101-5.599.265a17.23 17.23 0 0 0-.7 2.61c.871.927 2.517 1.976 4.717 3.031-.005 1.096.14 2.174.423 3.206-1.851 1.589-3.17 3.027-3.772 4.148.388.815.84 1.598 1.352 2.341 1.27.039 3.176-.384 5.478-1.193.753.76 1.613 1.426 2.565 1.97-.186 2.432-.101 4.382.266 5.599.421.15.852.283 1.291.4Zm3.365-12.557a4 4 0 1 0 2.07-7.728 4 4 0 0 0-2.07 7.728Z"
    />
  );

  const xSmall = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 40.818c.455 0 .905-.017 1.351-.053.67-1.08 1.256-2.942 1.706-5.34a11.928 11.928 0 0 0 2.988-1.238c2.013 1.378 3.744 2.279 4.982 2.57a17.105 17.105 0 0 0 1.912-1.911c-.291-1.238-1.193-2.97-2.57-4.983.54-.924.96-1.927 1.238-2.987 2.398-.45 4.26-1.037 5.34-1.706a17.26 17.26 0 0 0 0-2.703c-1.08-.67-2.942-1.256-5.34-1.706a11.929 11.929 0 0 0-1.238-2.987c1.377-2.014 2.279-3.745 2.57-4.983a17.101 17.101 0 0 0-1.911-1.911c-1.238.291-2.97 1.192-4.983 2.57a11.93 11.93 0 0 0-2.988-1.239c-.45-2.398-1.036-4.259-1.706-5.34a17.231 17.231 0 0 0-2.702 0c-.67 1.081-1.256 2.942-1.706 5.34a11.93 11.93 0 0 0-2.988 1.239c-2.013-1.378-3.745-2.28-4.982-2.57a17.103 17.103 0 0 0-1.912 1.911c.291 1.238 1.193 2.969 2.57 4.983-.54.924-.96 1.927-1.238 2.987-2.398.45-4.26 1.037-5.34 1.706a17.234 17.234 0 0 0 0 2.703c1.08.669 2.942 1.256 5.34 1.706.278 1.06.698 2.063 1.238 2.987-1.377 2.014-2.278 3.745-2.57 4.983a17.1 17.1 0 0 0 1.912 1.911c1.238-.291 2.969-1.192 4.983-2.57.924.54 1.927.96 2.987 1.238.45 2.398 1.036 4.26 1.706 5.34.446.035.896.053 1.351.053Zm0-13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  );

  const xSmallHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.6 40.24c.44.117.88.217 1.32.298.925-.87 1.974-2.516 3.03-4.716 1.095.005 2.173-.14 3.205-.423 1.589 1.852 3.027 3.17 4.148 3.772.814-.388 1.598-.84 2.34-1.352.04-1.27-.383-3.176-1.192-5.478a11.926 11.926 0 0 0 1.97-2.565c2.432.186 4.382.101 5.599-.266a17.212 17.212 0 0 0 .7-2.61c-.871-.926-2.517-1.975-4.717-3.03a11.927 11.927 0 0 0-.423-3.206c1.852-1.589 3.17-3.027 3.772-4.148a17.093 17.093 0 0 0-1.351-2.34c-1.271-.04-3.177.383-5.478 1.192a11.924 11.924 0 0 0-2.566-1.97c.186-2.432.101-4.382-.265-5.599a17.226 17.226 0 0 0-2.61-.7c-.927.871-1.976 2.517-3.031 4.717a11.933 11.933 0 0 0-3.206.423c-1.589-1.852-3.027-3.17-4.148-3.772-.814.388-1.597.84-2.34 1.352-.04 1.27.383 3.176 1.192 5.478a11.928 11.928 0 0 0-1.97 2.565c-2.432-.186-4.381-.101-5.599.266a17.245 17.245 0 0 0-.7 2.61c.872.926 2.518 1.975 4.717 3.03a11.955 11.955 0 0 0 .423 3.206c-1.851 1.589-3.17 3.027-3.772 4.148.388.814.84 1.598 1.352 2.341 1.271.039 3.176-.384 5.478-1.193a11.93 11.93 0 0 0 2.565 1.97c-.186 2.432-.101 4.381.266 5.599.421.15.852.283 1.291.4Zm3.365-12.557a4 4 0 1 0 2.07-7.728 4 4 0 0 0-2.07 7.728Z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default SettingsFill;
