import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const Group: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M12.187 19.793a.502.502 0 1 1 1.005 0 .502.502 0 0 1-1.005 0Zm5.293 0a.502.502 0 1 1 1.005 0 .502.502 0 0 1-1.005 0ZM8.52 17.47h2.227a4.037 4.037 0 0 0 3.542-2.107 4.085 4.085 0 0 0 3.573 2.107h3.22v2.019A6.09 6.09 0 0 1 15 25.572h-.398a6.09 6.09 0 0 1-6.083-6.083V17.47Zm0-1.284a6.09 6.09 0 0 1 6.082-6.083H15a6.09 6.09 0 0 1 6.082 6.083v.284h-3.22a3.088 3.088 0 0 1-3.085-3.084v-.213h-1v.267a3.033 3.033 0 0 1-3.03 3.03H8.52v-.284Zm6.082 10.686H15c4.07 0 7.382-3.312 7.382-7.383v-3.303c0-4.071-3.312-7.383-7.382-7.383h-.398c-4.07 0-7.383 3.312-7.383 7.383v3.303c0 4.071 3.312 7.383 7.383 7.383Zm29.233 13.949h-3.074v-6.947h-.9v6.947H26.737V37.36c0-.333-.022-.662-.055-.989-.012-.132-.03-.262-.049-.392a9.551 9.551 0 0 0-.089-.533 9.795 9.795 0 0 0-.108-.515c-.013-.051-.029-.101-.043-.152a9.966 9.966 0 0 0-2.326-4.241 10.242 10.242 0 0 0-1.038-.994 8.882 8.882 0 0 1 5.645-5.573c2.797 1.394 6.254 1.393 9.05 0 3.611 1.163 6.111 4.576 6.111 8.389v8.461Zm-18.398 0h-3.074v-6.947h-.9v6.947H8.138v-6.947h-.9v6.947H4.163V37.36c0-3.813 2.501-7.226 6.111-8.389 2.797 1.394 6.254 1.394 9.05 0a8.738 8.738 0 0 1 2.427 1.23l.133.1.003.002c.244.182.471.379.692.581.06.056.121.11.18.167.19.183.368.374.54.57.112.133.22.272.325.411a8.853 8.853 0 0 1 1.086 1.851l.055.127c.077.186.15.374.213.565.028.085.051.171.076.256a8.676 8.676 0 0 1 .33 1.634c.03.296.052.593.052.895v3.461Zm12.405-18.173-.254-.074-.233.125c-2.543 1.355-5.768 1.355-8.313 0l-.233-.125-.254.074c-3.033.88-5.489 3.192-6.61 6.125a9.97 9.97 0 0 0-2.5-1.125l-.255-.074-.233.125c-2.543 1.354-5.768 1.355-8.313 0l-.233-.125-.254.074c-4.294 1.245-7.293 5.239-7.293 9.712v4.761h42.271V32.36c0-4.473-2.999-8.467-7.293-9.712Zm-1.963-7.855a.502.502 0 1 1 1.005 0 .502.502 0 0 1-1.005 0Zm-5.294 0a.503.503 0 1 1 1.005.001.503.503 0 0 1-1.005-.001Zm-3.668-2.323h2.228a4.035 4.035 0 0 0 3.542-2.107 4.086 4.086 0 0 0 3.573 2.107h3.22v2.019a6.09 6.09 0 0 1-6.082 6.083H33a6.09 6.09 0 0 1-6.083-6.083V12.47Zm0-1.284A6.09 6.09 0 0 1 33 5.103h.398a6.09 6.09 0 0 1 6.082 6.083v.284h-3.22a3.088 3.088 0 0 1-3.084-3.084v-.213h-1v.267c0 1.671-1.36 3.03-3.03 3.03h-2.229v-.284ZM33 21.872h.398c4.071 0 7.382-3.312 7.382-7.383v-3.303c0-4.071-3.31-7.383-7.382-7.383H33c-4.07 0-7.382 3.312-7.382 7.383v3.303c0 4.071 3.311 7.383 7.382 7.383Z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M43.836 32.83c0-3.813-2.5-7.226-6.112-8.389-2.795 1.393-6.252 1.394-9.05 0a8.88 8.88 0 0 0-5.644 5.573 10 10 0 0 1 .704.645c.116.113.224.231.334.35a9.948 9.948 0 0 1 2.326 4.241c.013.05.03.1.043.151.042.17.075.342.108.515a10.389 10.389 0 0 1 .138.924c.033.327.054.657.054.99v3.461H39.86v-6.947h.9v6.947h3.075v-8.46Zm-18.398 5a9.17 9.17 0 0 0-.382-2.529c-.025-.085-.048-.17-.076-.256a8.522 8.522 0 0 0-.214-.565c-.017-.043-.036-.085-.055-.128a8.873 8.873 0 0 0-1.085-1.85 9.2 9.2 0 0 0-.327-.41 9.026 9.026 0 0 0-.538-.57c-.06-.058-.12-.112-.18-.168a9.045 9.045 0 0 0-.692-.58l-.003-.003-.134-.1a8.705 8.705 0 0 0-2.426-1.23c-2.796 1.393-6.254 1.393-9.05 0-3.611 1.163-6.111 4.576-6.111 8.39v3.46h3.074v-6.947h.9v6.947h13.324v-6.947h.9v6.947h3.075v-3.46Zm19.698-5v9.761H2.865v-4.76c0-4.474 2.999-8.468 7.293-9.713l.254-.074.233.124c2.544 1.356 5.769 1.356 8.313 0l.232-.124.254.074a9.97 9.97 0 0 1 2.5 1.125c1.123-2.933 3.578-5.245 6.612-6.125l.254-.074.233.124c2.544 1.356 5.769 1.356 8.313 0l.233-.124.254.074c4.294 1.245 7.293 5.24 7.293 9.712ZM26.918 14.96A6.09 6.09 0 0 0 33 21.041h.397a6.09 6.09 0 0 0 6.083-6.083V12.94h-3.22a4.085 4.085 0 0 1-3.573-2.107 4.037 4.037 0 0 1-3.542 2.107h-2.228v2.02Zm0-3.02h2.228a3.033 3.033 0 0 0 3.03-3.03v-.267h1v.213a3.088 3.088 0 0 0 3.085 3.084h3.22v-.284a6.09 6.09 0 0 0-6.083-6.083H33a6.09 6.09 0 0 0-6.083 6.083v.284Zm-1.3 3.02v-3.304c0-4.07 3.312-7.383 7.383-7.383h.397c4.07 0 7.383 3.312 7.383 7.383v3.303c0 4.071-3.312 7.383-7.383 7.383H33c-4.071 0-7.383-3.312-7.383-7.383ZM7.8 18.51l.08.272 2.137-.633a3.011 3.011 0 0 0 1.802-1.46 3.012 3.012 0 0 0 .242-2.307l-.002-.007a.775.775 0 0 1-.014-.045l-.061-.204.959-.285.073.244a3.087 3.087 0 0 0 3.822 2.041l3.087-.915-.081-.273a6.094 6.094 0 0 0-5.834-4.354c-.571 0-1.152.081-1.727.252l-.381.113A6.09 6.09 0 0 0 7.8 18.51Zm12.41-2.34-3.088.915a4.09 4.09 0 0 1-4.023-1.003 4.02 4.02 0 0 1-.401 1.084 4.007 4.007 0 0 1-2.397 1.942l-2.136.633.574 1.936a6.088 6.088 0 0 0 7.56 4.102l.38-.113a6.09 6.09 0 0 0 4.105-7.56l-.574-1.936ZM6.554 18.88c-1.157-3.904 1.076-8.02 4.978-9.177l.382-.113c3.904-1.157 8.019 1.075 9.176 4.98l.94 3.165c1.157 3.903-1.076 8.02-4.98 9.177l-.38.113a7.36 7.36 0 0 1-2.096.306c-3.185 0-6.131-2.08-7.081-5.284l-.94-3.168Zm27.828-3.114a.503.503 0 1 0-.003-1.006.503.503 0 0 0 .003 1.006Zm-5.294 0a.503.503 0 1 0-.001-1.007.503.503 0 0 0 0 1.007ZM19 19.476a.502.502 0 1 0-.285-.964.502.502 0 0 0 .285.963Zm-4.736.88a.503.503 0 1 1-.964.285.503.503 0 0 1 .964-.286Z"
    />
  );

  const xxSmall = (
    <path
      transform={'translate(8, 8.2966)'}
      fillRule={'evenodd'}
      d="M8.812 5.18h-.274a4.639 4.639 0 0 0-4.644 4.65v2.276a4.639 4.639 0 0 0 4.644 4.65h.274a4.64 4.64 0 0 0 4.644-4.65V9.83a4.64 4.64 0 0 0-4.644-4.65m4.07 14.526c-.076-.05-.15-.076-.226-.126a8.236 8.236 0 0 1-3.844.926h-.274a8.113 8.113 0 0 1-3.796-.926A8.612 8.612 0 0 0 0 27.306v2.1h17.376v-2.1c0-3.3-1.798-6.15-4.494-7.6m12.356-5.55a8.235 8.235 0 0 1-3.844.924h-.274a8.104 8.104 0 0 1-3.794-.924 9.173 9.173 0 0 0-2.772 2.198c4.044 2.152 6.566 6.3 6.566 10.952v2.1h8.838V21.88c0-3.4-1.898-6.3-4.72-7.724m.864-9.504v2.282a4.646 4.646 0 0 1-4.644 4.65h-.274a4.648 4.648 0 0 1-4.646-4.65V4.652c0-2.57 2.08-4.652 4.646-4.652h.274a4.647 4.647 0 0 1 4.644 4.652"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall: normal, xSmallHover: normalHover, xxSmall, xxSmallHover: xxSmall });
};

export default Group;
