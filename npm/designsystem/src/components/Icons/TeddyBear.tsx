import React from 'react';

import { SvgPathProps } from '../Icon';

const TeddyBear: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M24 19.226c.923 0 1.398-.626 1.613-1.05a.752.752 0 00-.1-.852c-.232-.255-.675-.517-1.513-.517-.838 0-1.281.262-1.514.517a.754.754 0 00-.1.852c.217.424.69 1.05 1.614 1.05zm-2.64-2.163c.697-.6 1.558-.9 2.616-.918 1.054.017 1.903.297 2.593.858 1.02.829 1.216 1.972.524 3.056-.665 1.04-1.82 1.659-3.092 1.659h-.013c-1.276-.004-2.431-.63-3.091-1.675-.661-1.048-.487-2.162.463-2.98zm-1.308 3.513c.842 1.336 2.312 2.137 3.933 2.142H24c1.615 0 3.085-.791 3.934-2.12.964-1.51.676-3.226-.735-4.372-.872-.707-1.922-1.061-3.225-1.081-1.3.023-2.398.413-3.267 1.16-1.34 1.152-1.591 2.789-.656 4.27zm-3.206-7.788a1.882 1.882 0 01-.908-1.607c0-1.045.85-1.896 1.897-1.896.544 0 1.054.238 1.408.64a7.903 7.903 0 00-2.397 2.863zm3.363-2.314l.388-.25-.22-.407a2.89 2.89 0 00-2.542-1.532 2.9 2.9 0 00-2.897 2.896c0 1.249.804 2.35 2 2.743l.44.143.178-.426a6.923 6.923 0 012.653-3.167zm15.558 22.324a4.997 4.997 0 00-3.858-2.297c-.128-.01-.253-.001-.38-.002l-2.02-6.787a9.332 9.332 0 001.425-1.314l4.677 8.154c.4.697.437 1.526.156 2.246zm-1.702 7.488a4.304 4.304 0 01-6.405-1.258 4.283 4.283 0 01-.06-4.146l.576-1.087a3.725 3.725 0 013.633-1.997 3.73 3.73 0 013.279 2.534l.398 1.153a4.313 4.313 0 01-1.421 4.8zm-7.614-6.014a5.58 5.58 0 00-.256 4.697 6.786 6.786 0 01-4.432-.016 5.582 5.582 0 00-.261-4.68l-.576-1.087a5.005 5.005 0 00-3.15-2.518l1.852-6.22A9.19 9.19 0 0024 25.553a9.19 9.19 0 004.372-1.103l1.847 6.205c-1.354.345-2.502 1.232-3.192 2.532l-.576 1.086zm-6.16 4.757a4.302 4.302 0 01-2.912 2.097 4.316 4.316 0 01-3.503-.85 4.31 4.31 0 01-1.41-4.791l.399-1.153a3.731 3.731 0 013.28-2.534 3.725 3.725 0 013.632 1.997l.577 1.087a4.288 4.288 0 01-.062 4.147zm-7.95-8.477l4.697-8.185c.435.499.922.948 1.452 1.345l-2.02 6.787c-.142-.001-.282-.01-.426.002a4.994 4.994 0 00-3.857 2.297 2.602 2.602 0 01.155-2.246zm3.722-14.238c0-.22.015-.436.032-.651l.034-.423-.373-.201a4.383 4.383 0 115.495-6.601l.267.332.41-.111a7.757 7.757 0 014.145 0l.41.11.267-.331a4.366 4.366 0 013.419-1.644 4.389 4.389 0 014.384 4.383 4.38 4.38 0 01-2.31 3.862l-.374.2.036.426c.018.215.032.43.032.649 0 4.377-3.56 7.938-7.937 7.938-4.377 0-7.937-3.561-7.937-7.938zm20.366 17.918a3.915 3.915 0 00.309-4.327l-4.955-8.636a9.174 9.174 0 001.455-4.955c0-.117-.004-.232-.01-.347a5.68 5.68 0 002.626-4.79 5.69 5.69 0 00-5.685-5.683 5.652 5.652 0 00-4.156 1.81 8.967 8.967 0 00-4.025 0 5.653 5.653 0 00-4.157-1.81 5.69 5.69 0 00-5.684 5.683 5.68 5.68 0 002.624 4.79c-.005.115-.01.23-.01.347 0 1.808.53 3.49 1.43 4.915l-4.976 8.675a3.917 3.917 0 00.309 4.328l-.286.828a5.615 5.615 0 001.847 6.248 5.601 5.601 0 008.06-1.203 7.917 7.917 0 005.675.017 5.595 5.595 0 004.584 2.385 5.624 5.624 0 005.31-7.447l-.285-.828zM30.165 9.285c1.046 0 1.897.85 1.897 1.896 0 .695-.375 1.31-.963 1.64a7.906 7.906 0 00-2.37-2.865 1.876 1.876 0 011.436-.671zm.215 4.374l.172.417.43-.128a2.87 2.87 0 002.08-2.767 2.9 2.9 0 00-2.897-2.896c-1.08 0-2.062.602-2.564 1.572l-.207.4.377.247a6.94 6.94 0 012.609 3.155zm-3.734.709a.503.503 0 100-1.006.503.503 0 000 1.006zm-5.292 0a.502.502 0 10-.002-1.004.502.502 0 00.002 1.004z" />
  );

  const normalHover = (
    <path d="M21.36 17.063c.697-.6 1.558-.899 2.615-.918 1.054.017 1.903.297 2.593.857 1.021.83 1.218 1.972.524 3.057-.665 1.04-1.819 1.659-3.09 1.659h-.014c-1.276-.005-2.432-.631-3.09-1.676-.662-1.048-.489-2.162.462-2.979zm-1.309 3.513c.842 1.336 2.313 2.136 3.934 2.142h.016c1.615 0 3.085-.792 3.933-2.12.965-1.51.676-3.226-.735-4.372-.872-.707-1.92-1.061-3.225-1.081-1.299.022-2.397.412-3.266 1.16-1.34 1.152-1.59 2.788-.657 4.271zm16.122 12.996a4.999 4.999 0 00-4.264-3.071c-.129-.01-.253-.001-.379-.002l-2.022-6.787a9.308 9.308 0 001.538-1.437l6.625 6.933a2.58 2.58 0 01.717 1.929 2.575 2.575 0 01-2.215 2.435zm-2.108 6.714a4.3 4.3 0 01-3.49.839 4.303 4.303 0 01-2.915-2.097 4.285 4.285 0 01-.06-4.147l.575-1.087a3.727 3.727 0 013.633-1.997 3.732 3.732 0 013.28 2.535l.398 1.153a4.316 4.316 0 01-1.42 4.801zm-7.614-6.014a5.57 5.57 0 00-.255 4.696 6.786 6.786 0 01-4.434-.016 5.578 5.578 0 00-.26-4.68l-.577-1.086a4.997 4.997 0 00-3.149-2.519l1.852-6.219A9.176 9.176 0 0024 25.551c1.581 0 3.07-.4 4.372-1.103l1.847 6.206a4.984 4.984 0 00-3.192 2.532l-.576 1.086zm-6.159 4.756a4.302 4.302 0 01-2.913 2.097 4.312 4.312 0 01-3.503-.849 4.309 4.309 0 01-1.41-4.791l.4-1.153a3.732 3.732 0 013.278-2.535 3.727 3.727 0 013.633 1.997l.576 1.087a4.288 4.288 0 01-.06 4.147zm-9.82-6.044a2.572 2.572 0 01-.908-1.847 2.581 2.581 0 01.718-1.929l6.648-6.959a9.322 9.322 0 001.561 1.462l-2.02 6.788c-.143-.001-.283-.009-.427.002a5 5 0 00-4.268 3.078 2.566 2.566 0 01-1.304-.595zm5.59-16.671c0-.22.016-.436.032-.651l.035-.423-.373-.201a4.38 4.38 0 01-2.308-3.861 4.389 4.389 0 014.383-4.384c1.335 0 2.581.6 3.42 1.645l.264.332.411-.111a7.744 7.744 0 014.147 0l.411.111.266-.332a4.364 4.364 0 013.42-1.645 4.388 4.388 0 014.381 4.384 4.38 4.38 0 01-2.307 3.861l-.373.201.034.423c.017.215.033.431.033.651 0 4.377-3.56 7.938-7.938 7.938-4.377 0-7.938-3.561-7.938-7.938zm23.624 14.89a3.863 3.863 0 00-1.076-2.893l-6.788-7.103a9.176 9.176 0 001.417-4.894c0-.116-.004-.231-.01-.347a5.677 5.677 0 002.623-4.789 5.69 5.69 0 00-5.683-5.683c-1.59 0-3.082.654-4.157 1.81a8.996 8.996 0 00-4.025 0 5.648 5.648 0 00-4.156-1.81 5.69 5.69 0 00-5.684 5.683c0 1.951.995 3.749 2.624 4.79-.006.115-.01.23-.01.346a9.17 9.17 0 001.398 4.862L9.342 28.31a3.867 3.867 0 00-1.076 2.893 3.858 3.858 0 001.362 2.769 3.89 3.89 0 001.697.836l-.087.252a5.614 5.614 0 001.847 6.247 5.593 5.593 0 004.544 1.094 5.595 5.595 0 003.515-2.296 7.922 7.922 0 005.676.017 5.595 5.595 0 004.584 2.384c1.247 0 2.47-.417 3.475-1.208a5.607 5.607 0 001.835-6.238l-.086-.25a3.886 3.886 0 001.698-.838 3.863 3.863 0 001.36-2.769zM24 19.226c.923 0 1.397-.627 1.613-1.05a.755.755 0 00-.1-.853c-.232-.254-.675-.517-1.513-.517-.838 0-1.282.263-1.514.517a.757.757 0 00-.1.853c.216.423.691 1.05 1.614 1.05zm-7.155-6.439a1.881 1.881 0 01-.907-1.606c0-1.046.851-1.896 1.897-1.896.543 0 1.052.237 1.408.64a7.904 7.904 0 00-2.398 2.862zm3.364-2.314l.387-.25-.218-.407a2.896 2.896 0 00-2.543-1.531 2.9 2.9 0 00-2.897 2.896c0 1.249.804 2.351 2 2.742l.44.144.177-.427a6.92 6.92 0 012.654-3.167zm9.956-1.188c1.046 0 1.896.85 1.896 1.896a1.87 1.87 0 01-.963 1.64 7.898 7.898 0 00-2.369-2.865 1.873 1.873 0 011.436-.671zm.215 4.374l.171.417.432-.128a2.872 2.872 0 002.078-2.767 2.9 2.9 0 00-2.896-2.896c-1.08 0-2.063.602-2.565 1.571l-.207.4.377.248a6.932 6.932 0 012.61 3.155zm-9.027.708a.503.503 0 10.001-1.005.503.503 0 000 1.005zm5.293 0a.503.503 0 100-1.006.503.503 0 000 1.006z" />
  );

  return isHovered ? normalHover : normal;
};

export default TeddyBear;
