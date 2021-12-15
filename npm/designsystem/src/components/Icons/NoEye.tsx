import React from 'react';
import { returnIcon, SvgPathProps } from './Icon';

const NoEye: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      d="M23.478 33.617c-2.67 0-4.927-.572-6.829-1.43l.955-.971a9.265 9.265 0 0 0 5.874 2.095c5.134 0 9.311-4.177 9.311-9.311 0-2.285-.83-4.377-2.2-6l1.324-1.347c4.185 2.503 6.224 6.312 6.714 7.347-.747 1.577-5.056 9.617-15.149 9.617Zm-1.347-7.008c.405.21.86.34 1.347.34a2.949 2.949 0 0 0 2.95-2.95c0-.506-.14-.975-.365-1.392l3.612-3.676A7.97 7.97 0 0 1 31.49 24c0 4.417-3.594 8.01-8.01 8.01a7.967 7.967 0 0 1-4.957-1.728l3.61-3.673Zm3.316-4.791a2.928 2.928 0 0 0-1.969-.767A2.949 2.949 0 0 0 20.53 24c0 .779.307 1.482.801 2.009l-3.55 3.613A7.98 7.98 0 0 1 15.466 24c0-4.417 3.595-8.011 8.012-8.011 2.14 0 4.08.847 5.518 2.218l-3.549 3.61ZM8.328 24c.748-1.577 5.057-9.617 15.15-9.617 3.011 0 5.496.723 7.536 1.769l-1.108 1.128a9.271 9.271 0 0 0-6.428-2.592c-5.134 0-9.312 4.178-9.312 9.312a9.28 9.28 0 0 0 2.702 6.549l-1.164 1.185c-4.643-2.477-6.86-6.645-7.376-7.734Zm31.612-.253c-.03-.072-2.129-4.89-7.113-8.024l5.984-6.09-.708-.696-6.156 6.266c-2.268-1.246-5.068-2.121-8.469-2.121-11.83 0-16.417 10.558-16.462 10.665L6.91 24l.107.253c.031.074 2.312 5.31 7.77 8.416l-5.598 5.697.708.695 5.804-5.906c2.14 1.05 4.714 1.763 7.778 1.763 11.83 0 16.417-10.56 16.462-10.665l.106-.253-.106-.253Z"
      fill-rule="evenodd"
    />
  );
  const normalHover = (
    <path
      d="M23.478 33.617c-2.67 0-4.927-.572-6.829-1.43l.955-.971a9.265 9.265 0 0 0 5.874 2.095c5.134 0 9.311-4.177 9.311-9.311 0-2.285-.83-4.377-2.2-6l1.324-1.347c4.181 2.5 6.22 6.304 6.713 7.344-.748 1.535-5.162 9.62-15.148 9.62Zm.197-8.58a2.944 2.944 0 1 0 3.74-3.805l2.26-2.301A7.97 7.97 0 0 1 31.49 24c0 4.417-3.594 8.01-8.01 8.01a7.967 7.967 0 0 1-4.957-1.728l5.153-5.245Zm2.501-3.961a2.931 2.931 0 0 0-2.678 2.726l-5.718 5.82A7.981 7.981 0 0 1 15.467 24c0-4.417 3.594-8.011 8.011-8.011 2.14 0 4.08.847 5.518 2.218l-2.82 2.869ZM8.328 24c.748-1.577 5.057-9.617 15.15-9.617 3.011 0 5.496.723 7.536 1.769l-1.108 1.128a9.271 9.271 0 0 0-6.428-2.592c-5.134 0-9.31 4.178-9.31 9.312a9.28 9.28 0 0 0 2.7 6.549l-1.164 1.185c-4.643-2.477-6.86-6.645-7.376-7.734Zm31.612-.252c-.03-.072-2.129-4.89-7.113-8.025l5.984-6.09-.708-.696-6.156 6.266c-2.268-1.246-5.068-2.121-8.469-2.121-11.83 0-16.417 10.558-16.462 10.665L6.91 24l.107.253c.031.074 2.312 5.31 7.77 8.416l-5.598 5.697.708.695 5.804-5.906c2.14 1.05 4.714 1.763 7.778 1.763 11.83 0 16.417-10.56 16.462-10.666l.106-.252-.106-.252Z"
      fill-rule="evenodd"
    />
  );
  const simplified = (
    <path
      d="M30.215 31.395A9.647 9.647 0 0 0 33.667 24c0-2.47-.938-4.72-2.469-6.432l.32-.327c3.788 2.087 5.848 5.34 6.602 6.76-.839 1.577-3.28 5.406-7.905 7.394ZM9.88 24c.838-1.577 3.28-5.407 7.906-7.394A9.647 9.647 0 0 0 14.332 24c0 2.471.94 4.72 2.471 6.432l-.322.327C12.694 28.673 10.634 25.42 9.88 24ZM24 16.102a7.86 7.86 0 0 1 5.067 1.846l-3.47 3.532a2.963 2.963 0 0 0-1.596-.47A2.99 2.99 0 0 0 21.009 24c0 .608.185 1.172.497 1.645l-3.464 3.525a7.862 7.862 0 0 1-1.94-5.17c0-4.356 3.543-7.898 7.899-7.898Zm0 15.797a7.866 7.866 0 0 1-5.067-1.847l3.47-3.532c.463.295 1.008.47 1.598.47a2.99 2.99 0 0 0 2.494-4.634l3.464-3.526a7.857 7.857 0 0 1 1.94 5.17c0 4.356-3.543 7.899-7.898 7.899Zm8.798-15.959 5.461-5.56-.894-.877-5.717 5.818C29.55 14.29 27.025 13.588 24 13.588 12.302 13.588 7.914 24 7.914 24s2.11 4.99 7.289 8.06L9.74 37.62l.894.878 5.717-5.82c2.098 1.032 4.625 1.734 7.649 1.734C35.697 34.412 40.087 24 40.087 24s-2.11-4.99-7.289-8.06Z"
      fill-rule="evenodd"
    />
  );
  const simplifiedHover = (
    <path
      d="M30.214 31.395A9.65 9.65 0 0 0 33.668 24c0-2.47-.94-4.72-2.47-6.43l.321-.328c3.787 2.087 5.847 5.34 6.601 6.758-.838 1.58-3.28 5.408-7.906 7.396ZM9.88 24.001c.839-1.58 3.28-5.408 7.905-7.396a9.65 9.65 0 0 0-3.452 7.394c0 2.472.938 4.722 2.47 6.434l-.322.326c-3.787-2.086-5.847-5.34-6.601-6.758ZM24 16.1a7.86 7.86 0 0 1 5.067 1.848l-3.048 3.1a2.975 2.975 0 0 0-2.549 2.597l-5.427 5.525a7.857 7.857 0 0 1-1.942-5.172c0-4.355 3.543-7.898 7.899-7.898Zm0 15.798a7.862 7.862 0 0 1-5.067-1.847l4.76-4.845A2.989 2.989 0 0 0 29.416 24c0-1.24-.754-2.304-1.829-2.758l2.37-2.412a7.856 7.856 0 0 1 1.941 5.168c0 4.357-3.543 7.9-7.898 7.9Zm8.798-15.959 5.461-5.559-.894-.878-5.717 5.818C29.55 14.29 27.024 13.587 24 13.587c-11.698 0-16.087 10.414-16.087 10.414s2.111 4.988 7.289 8.06l-5.46 5.558.893.879 5.717-5.82c2.097 1.033 4.625 1.735 7.648 1.735C35.698 34.413 40.086 24 40.086 24s-2.11-4.99-7.288-8.06Z"
      fill-rule="evenodd"
    />
  );
  return returnIcon(isExtraSmall, isHovered, normal, normalHover, simplified, simplifiedHover);
};

export default NoEye;
