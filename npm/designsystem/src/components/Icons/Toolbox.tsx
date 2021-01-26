import React from 'react';
import {SvgPathProps} from './Icon';

const Toolbox: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M44.022 39.178H19.193V24.086a8.58 8.58 0 00-.034-.684h24.828c.022.225.035.453.035.684v15.092zM15.274 17.003h6.09v5.099h-2.418a8.397 8.397 0 00-3.672-5.1zm2.62 22.175H3.727V24.086c0-3.905 3.177-7.083 7.083-7.083 3.905 0 7.082 3.178 7.082 7.083v15.092zm4.47-17.076h1.241v-7.816h-1.242v7.816zm-1.57-8.816V9.97h5.27l1.98 3.315h-7.25zm-2.578 0h1.578V9.97h-1.578v3.315zm6.39 8.816h7.287v-5.098h-7.288v5.098zm5.596-12.208c0-1.016.47-1.963 1.243-2.583v3.083h4.14V7.31a3.32 3.32 0 011.241 2.583c0 1.464-.94 2.737-2.338 3.167l-.354.108.001 8.933h-1.242v-8.567l-.013-.491-.417-.008a3.297 3.297 0 01-2.26-3.142zm4.933 7.109h1.804c3.216 0 5.934 2.157 6.795 5.099h-8.599v-5.1zm1.804-1.3h-1.805v-1.811a4.288 4.288 0 002.692-3.998 4.32 4.32 0 00-2.536-3.927l-.706-.32v3.747h-2.139V5.647l-.706.32a4.321 4.321 0 00-2.537 3.927 4.29 4.29 0 002.691 3.997v1.813h-7.288v-1.418h5.201L26.63 8.97h-9.414v5.315h4.147v1.418H10.811c-4.623 0-8.383 3.76-8.383 8.382v16.392h42.894V24.086c0-4.622-3.76-8.382-8.383-8.382zm-26.128 10.54a2.46 2.46 0 01-2.457-2.456 2.46 2.46 0 012.457-2.457 2.459 2.459 0 012.456 2.457 2.459 2.459 0 01-2.456 2.457zm0-6.213a3.761 3.761 0 00-3.757 3.757 3.76 3.76 0 003.757 3.757 3.76 3.76 0 003.756-3.757 3.761 3.761 0 00-3.756-3.757z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M44.022 37.394H19.193V22.302a8.58 8.58 0 00-.034-.684h24.828c.022.225.035.453.035.684v15.092zM15.274 15.219h6.089v5.099h-2.417a8.397 8.397 0 00-3.672-5.1zm2.619 22.175H3.728V22.302c0-3.905 3.177-7.083 7.083-7.083 3.905 0 7.082 3.178 7.082 7.083v15.092zm4.47-17.076h1.242v-7.816h-1.242v7.816zm-1.569-8.816V8.187h5.269l1.98 3.315h-7.249zm-2.578 0h1.578V8.187h-1.578v3.315zm6.389 8.816h7.288V15.22h-7.288v5.098zM30.202 6.61c0-1.016.47-1.963 1.243-2.583V7.11h4.139V4.027a3.32 3.32 0 011.242 2.583c0 1.464-.94 2.737-2.338 3.167l-.354.108.001 10.433h-1.242V10.25l-.013-.491-.417-.008a3.297 3.297 0 01-2.261-3.142zm4.933 8.609h1.804c3.217 0 5.934 2.157 6.795 5.099h-8.599v-5.1zm1.804-1.3h-1.804l-.001-3.312a4.286 4.286 0 002.692-3.997 4.32 4.32 0 00-2.536-3.927l-.706-.32V6.11h-2.139V2.363l-.706.32a4.32 4.32 0 00-2.537 3.927 4.292 4.292 0 002.691 3.997v3.313h-7.288v-1.418h5.201L26.63 7.187h-9.414v5.315h4.147v1.418H10.811c-4.622 0-8.383 3.76-8.383 8.382v16.392h42.894V22.302c0-4.622-3.76-8.382-8.383-8.382zM10.811 24.46a2.46 2.46 0 01-2.457-2.456 2.46 2.46 0 012.457-2.457 2.46 2.46 0 012.457 2.457 2.46 2.46 0 01-2.457 2.457zm0-6.213a3.761 3.761 0 00-3.757 3.757 3.76 3.76 0 003.757 3.757 3.76 3.76 0 003.756-3.757 3.761 3.761 0 00-3.756-3.757z"
    />
  );

  const simplified = (
    <g>
      <path
        fillRule="evenodd"
        d="M43.976 39.132H19.488v-14.92c0-.173-.015-.342-.025-.514H43.95c.012.17.026.34.026.514v14.92zM15.953 17.3h5.53v4.756h-2.28a8.56 8.56 0 00-3.25-4.756zm1.893 21.832H4.024v-14.92a6.92 6.92 0 016.912-6.912c3.81 0 6.91 3.101 6.91 6.912v14.92zm4.646-17.076h1.232v-7.64h-1.232v7.64zm-1.569-8.65v-3.305h5.261l1.975 3.306H20.923zm-2.578 0h1.568V10.1h-1.568v3.305zm6.39 8.65h7.278v-4.757h-7.277v4.757zm5.596-12.037c0-1.01.467-1.953 1.233-2.572v3.077h4.148V7.447a3.313 3.313 0 011.235 2.572 3.29 3.29 0 01-2.336 3.162l-.357.11v8.765h-1.23V13.66l-.013-.493-.421-.01a3.293 3.293 0 01-2.259-3.138zm6.733 7.28c3.058 0 5.655 2 6.563 4.757h-8.362V17.3h1.8zm0-1.641h-1.799V14.02a4.292 4.292 0 002.69-4.002c0-1.69-.996-3.234-2.538-3.932l-.714-.323v3.75h-2.128v-3.75l-.714.323a4.326 4.326 0 00-2.54 3.932 4.294 4.294 0 002.692 4v1.639h-7.277v-1.242h5.204l-3.182-5.325h-9.422v5.325h4.147v1.242H10.936c-4.717 0-8.554 3.837-8.554 8.554v16.562H45.618V24.212c0-4.717-3.837-8.554-8.554-8.554z"
      />
      <path
        fillRule="evenodd"
        d="M10.935 26.199a2.289 2.289 0 01-2.286-2.287 2.289 2.289 0 012.286-2.286 2.289 2.289 0 012.287 2.286 2.289 2.289 0 01-2.287 2.287m0-6.214a3.932 3.932 0 00-3.928 3.927 3.933 3.933 0 003.928 3.929 3.932 3.932 0 003.927-3.929 3.931 3.931 0 00-3.927-3.927"
      />
    </g>
  );

  const simplifiedHover = (
    <g>
      <path
        fillRule="evenodd"
        d="M43.976 37.348H19.488v-14.92c0-.174-.015-.343-.025-.515H43.95c.012.17.026.341.026.514v14.92zM15.953 15.515h5.543v4.756h-2.293a8.573 8.573 0 00-3.25-4.756zm1.893 21.833H4.024v-14.92a6.92 6.92 0 016.912-6.913c3.81 0 6.91 3.101 6.91 6.912v14.92zm4.66-17.077h1.232v-7.64h-1.232v7.64zm-1.569-8.649V8.316h5.261l1.973 3.306h-7.234zm-2.578-.001h1.568V8.316h-1.568v3.305zm6.39 8.65h7.264v-4.756h-7.265v4.756zM30.33 6.734a3.31 3.31 0 011.233-2.57v3.075h4.148V4.163a3.312 3.312 0 011.235 2.57c0 1.463-.94 2.734-2.336 3.164l-.357.108v10.266h-1.23v-9.896l-.013-.494-.421-.01a3.292 3.292 0 01-2.259-3.137zm6.733 8.781c3.058 0 5.654 1.998 6.563 4.756h-8.362v-4.756h1.8zm0-1.642h-1.799v-3.138a4.292 4.292 0 002.69-4.001 4.326 4.326 0 00-2.538-3.931l-.714-.324v3.75h-2.128V2.48l-.714.324a4.325 4.325 0 00-2.54 3.93 4.297 4.297 0 002.692 4.002v3.138h-7.265v-1.242h5.204l-3.181-5.325h-9.422v5.325h4.147v1.242h-10.56c-4.717 0-8.554 3.837-8.554 8.554V38.99H45.618V22.427c0-4.717-3.837-8.554-8.554-8.554z"
      />
      <path
        fillRule="evenodd"
        d="M10.935 24.414a2.289 2.289 0 01-2.286-2.287 2.288 2.288 0 012.286-2.285 2.288 2.288 0 012.287 2.285 2.289 2.289 0 01-2.287 2.287m0-6.214a3.932 3.932 0 00-3.928 3.927 3.933 3.933 0 003.928 3.929 3.932 3.932 0 003.927-3.929 3.931 3.931 0 00-3.927-3.927"
      />
    </g>
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Toolbox;