import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const NoEye: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      d="M23.478 33.617c-2.67 0-4.927-.572-6.829-1.43l.955-.971a9.265 9.265 0 0 0 5.874 2.095c5.134 0 9.311-4.177 9.311-9.311 0-2.285-.83-4.377-2.2-6l1.324-1.347c4.185 2.503 6.224 6.312 6.714 7.347-.747 1.577-5.056 9.617-15.149 9.617Zm-1.347-7.008c.405.21.86.34 1.347.34a2.949 2.949 0 0 0 2.95-2.95c0-.506-.14-.975-.365-1.392l3.612-3.676A7.97 7.97 0 0 1 31.49 24c0 4.417-3.594 8.01-8.01 8.01a7.967 7.967 0 0 1-4.957-1.728l3.61-3.673Zm3.316-4.791a2.928 2.928 0 0 0-1.969-.767A2.949 2.949 0 0 0 20.53 24c0 .779.307 1.482.801 2.009l-3.55 3.613A7.98 7.98 0 0 1 15.466 24c0-4.417 3.595-8.011 8.012-8.011 2.14 0 4.08.847 5.518 2.218l-3.549 3.61ZM8.328 24c.748-1.577 5.057-9.617 15.15-9.617 3.011 0 5.496.723 7.536 1.769l-1.108 1.128a9.271 9.271 0 0 0-6.428-2.592c-5.134 0-9.312 4.178-9.312 9.312a9.28 9.28 0 0 0 2.702 6.549l-1.164 1.185c-4.643-2.477-6.86-6.645-7.376-7.734Zm31.612-.253c-.03-.072-2.129-4.89-7.113-8.024l5.984-6.09-.708-.696-6.156 6.266c-2.268-1.246-5.068-2.121-8.469-2.121-11.83 0-16.417 10.558-16.462 10.665L6.91 24l.107.253c.031.074 2.312 5.31 7.77 8.416l-5.598 5.697.708.695 5.804-5.906c2.14 1.05 4.714 1.763 7.778 1.763 11.83 0 16.417-10.56 16.462-10.665l.106-.253-.106-.253Z"
      fillRule="evenodd"
    />
  );
  const normalHover = (
    <path
      d="M23.478 33.617c-2.67 0-4.927-.572-6.829-1.43l.955-.971a9.265 9.265 0 0 0 5.874 2.095c5.134 0 9.311-4.177 9.311-9.311 0-2.285-.83-4.377-2.2-6l1.324-1.347c4.181 2.5 6.22 6.304 6.713 7.344-.748 1.535-5.162 9.62-15.148 9.62Zm.197-8.58a2.944 2.944 0 1 0 3.74-3.805l2.26-2.301A7.97 7.97 0 0 1 31.49 24c0 4.417-3.594 8.01-8.01 8.01a7.967 7.967 0 0 1-4.957-1.728l5.153-5.245Zm2.501-3.961a2.931 2.931 0 0 0-2.678 2.726l-5.718 5.82A7.981 7.981 0 0 1 15.467 24c0-4.417 3.594-8.011 8.011-8.011 2.14 0 4.08.847 5.518 2.218l-2.82 2.869ZM8.328 24c.748-1.577 5.057-9.617 15.15-9.617 3.011 0 5.496.723 7.536 1.769l-1.108 1.128a9.271 9.271 0 0 0-6.428-2.592c-5.134 0-9.31 4.178-9.31 9.312a9.28 9.28 0 0 0 2.7 6.549l-1.164 1.185c-4.643-2.477-6.86-6.645-7.376-7.734Zm31.612-.252c-.03-.072-2.129-4.89-7.113-8.025l5.984-6.09-.708-.696-6.156 6.266c-2.268-1.246-5.068-2.121-8.469-2.121-11.83 0-16.417 10.558-16.462 10.665L6.91 24l.107.253c.031.074 2.312 5.31 7.77 8.416l-5.598 5.697.708.695 5.804-5.906c2.14 1.05 4.714 1.763 7.778 1.763 11.83 0 16.417-10.56 16.462-10.666l.106-.252-.106-.252Z"
      fillRule="evenodd"
    />
  );
  const xSmall = (
    <path
      d="M30.215 31.395A9.647 9.647 0 0 0 33.667 24c0-2.47-.938-4.72-2.469-6.432l.32-.327c3.788 2.087 5.848 5.34 6.602 6.76-.839 1.577-3.28 5.406-7.905 7.394ZM9.88 24c.838-1.577 3.28-5.407 7.906-7.394A9.647 9.647 0 0 0 14.332 24c0 2.471.94 4.72 2.471 6.432l-.322.327C12.694 28.673 10.634 25.42 9.88 24ZM24 16.102a7.86 7.86 0 0 1 5.067 1.846l-3.47 3.532a2.963 2.963 0 0 0-1.596-.47A2.99 2.99 0 0 0 21.009 24c0 .608.185 1.172.497 1.645l-3.464 3.525a7.862 7.862 0 0 1-1.94-5.17c0-4.356 3.543-7.898 7.899-7.898Zm0 15.797a7.866 7.866 0 0 1-5.067-1.847l3.47-3.532c.463.295 1.008.47 1.598.47a2.99 2.99 0 0 0 2.494-4.634l3.464-3.526a7.857 7.857 0 0 1 1.94 5.17c0 4.356-3.543 7.899-7.898 7.899Zm8.798-15.959 5.461-5.56-.894-.877-5.717 5.818C29.55 14.29 27.025 13.588 24 13.588 12.302 13.588 7.914 24 7.914 24s2.11 4.99 7.289 8.06L9.74 37.62l.894.878 5.717-5.82c2.098 1.032 4.625 1.734 7.649 1.734C35.697 34.412 40.087 24 40.087 24s-2.11-4.99-7.289-8.06Z"
      fillRule="evenodd"
    />
  );
  const xSmallHover = (
    <path
      d="M30.214 31.395A9.65 9.65 0 0 0 33.668 24c0-2.47-.94-4.72-2.47-6.43l.321-.328c3.787 2.087 5.847 5.34 6.601 6.758-.838 1.58-3.28 5.408-7.906 7.396ZM9.88 24.001c.839-1.58 3.28-5.408 7.905-7.396a9.65 9.65 0 0 0-3.452 7.394c0 2.472.938 4.722 2.47 6.434l-.322.326c-3.787-2.086-5.847-5.34-6.601-6.758ZM24 16.1a7.86 7.86 0 0 1 5.067 1.848l-3.048 3.1a2.975 2.975 0 0 0-2.549 2.597l-5.427 5.525a7.857 7.857 0 0 1-1.942-5.172c0-4.355 3.543-7.898 7.899-7.898Zm0 15.798a7.862 7.862 0 0 1-5.067-1.847l4.76-4.845A2.989 2.989 0 0 0 29.416 24c0-1.24-.754-2.304-1.829-2.758l2.37-2.412a7.856 7.856 0 0 1 1.941 5.168c0 4.357-3.543 7.9-7.898 7.9Zm8.798-15.959 5.461-5.559-.894-.878-5.717 5.818C29.55 14.29 27.024 13.587 24 13.587c-11.698 0-16.087 10.414-16.087 10.414s2.111 4.988 7.289 8.06l-5.46 5.558.893.879 5.717-5.82c2.097 1.033 4.625 1.735 7.648 1.735C35.698 34.413 40.086 24 40.086 24s-2.11-4.99-7.288-8.06Z"
      fillRule="evenodd"
    />
  );

  const xxSmall = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m13.24 33.127-5.699 5.7 1.414 1.413 6.206-6.206c2.487 1.03 5.393 1.695 8.693 1.695 11.048 0 17.234-7.422 19.164-11.023l.377-.703-.48-.638-.325-.435c-1.617-2.168-4.187-5.614-8.304-8.02l5.294-5.295-1.414-1.414-5.746 5.746c-2.384-1.074-5.211-1.775-8.566-1.775-11.149 0-16.83 7.715-18.952 11.308l-.302.512.206.557c.726 1.964 2.772 4.741 5.934 7.022a21.802 21.802 0 0 0 2.5 1.556Zm1.859-1.859a19.32 19.32 0 0 1-2.896-1.725c-2.522-1.82-4.125-3.905-4.822-5.329 2.174-3.476 7.174-9.542 16.473-9.542 2.549 0 4.749.454 6.655 1.186l-3.658 3.658a5.5 5.5 0 0 0-7.555 7.555l-4.197 4.197Zm1.997.831c1.98.697 4.236 1.13 6.758 1.13 9.141 0 14.526-5.724 16.567-9.024-1.692-2.258-4.138-5.408-7.972-7.458l-4.103 4.103a5.5 5.5 0 0 1-7.717 7.717l-3.533 3.532Z"
    />
  );

  const xxSmallHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m13.242 32.907-5.698 5.699 1.414 1.414 6.206-6.206c2.487 1.03 5.393 1.694 8.693 1.694 11.048 0 17.233-7.422 19.163-11.023l.377-.703-.48-.638-.324-.434c-1.617-2.169-4.188-5.615-8.305-8.02l5.295-5.295-1.414-1.415-5.747 5.747c-2.383-1.075-5.21-1.776-8.565-1.776-11.15 0-16.83 7.715-18.952 11.308l-.302.512.206.557c.725 1.964 2.772 4.741 5.934 7.022a21.8 21.8 0 0 0 2.5 1.557Zm1.86-1.86a19.32 19.32 0 0 1-2.897-1.725c-2.522-1.819-4.125-3.905-4.821-5.328 2.173-3.477 7.174-9.543 16.473-9.543 2.548 0 4.748.454 6.654 1.187l-15.41 15.41Zm1.997.831c1.98.697 4.236 1.13 6.758 1.13 9.14 0 14.525-5.723 16.567-9.024-1.692-2.258-4.139-5.407-7.973-7.458l-1.992 1.993a5.5 5.5 0 1 1-5.94 5.94l-7.42 7.42Z"
    />
  );
  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover, xxSmall, xxSmallHover });
};

export default NoEye;
