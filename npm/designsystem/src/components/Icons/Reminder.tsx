import React from 'react';

import { SvgPathProps } from '../Icon';

const Reminder: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path fillRule="evenodd" d="M24.377 12.39h-7.105v-1.3h7.105v1.3Z" />
      <path d="M18.014 5.281c.577-.73 1.524-1.302 2.944-1.302 1.285.001 2.158.62 2.688 1.355.508.703.715 1.527.716 2.058.004.632.009 1.452.013 2.4h-1.3c-.004-.945-.009-1.763-.013-2.393v-.004c0-.264-.124-.822-.47-1.3-.324-.45-.828-.815-1.634-.816-1.026 0-1.596.393-1.925.809-.354.447-.46.964-.46 1.188v2.516h-1.3V7.276c0-.49.189-1.297.74-1.995Zm-.741 8.407v13.526l-3.582-2.706c-.375-.306-1.067-.674-1.857-.791-.825-.124-1.812.022-2.619.848-.966.989-1.164 2.053-1.013 2.957.146.864.6 1.539.888 1.864.599.675 6.48 7.197 9.467 10.384l.007.008.007.007c1.796 1.795 5.223 4.616 11.151 4.192 5.378-.386 8.577-4.643 9.494-6.707 1.13-2.544 1.093-4.748 1.074-5.884a21.046 21.046 0 0 1-.004-.344v-7.305c0-1.773-1.452-3.418-3.211-3.418-.747 0-1.61.147-2.295.69l-.058.047a4.989 4.989 0 0 0-.408-1.187c-.25-.488-.592-.89-1.052-1.166-.458-.274-.987-.396-1.568-.396-.99 0-1.782.325-2.347.907a4.465 4.465 0 0 0-.416-1.032c-.273-.476-.633-.841-1.088-1.08-.448-.237-.948-.33-1.472-.33-.735 0-1.426.157-1.984.602.002-1.247.002-2.496 0-3.686h-1.3c.003 2.32 0 4.864-.014 7.176-.024.438-.027.915-.01 1.43l1.299-.014c.004-.445.008-.903.01-1.37.061-1.069.25-1.739.506-2.151.3-.483.74-.687 1.493-.687.372 0 .65.066.866.18.21.11.4.287.566.576.329.575.54 1.554.565 3.142-.002.108-.001.216.002.325l1.3-.021c0-.103 0-.204-.002-.304.015-.71.179-1.278.46-1.668.294-.408.77-.695 1.566-.695.398 0 .685.082.9.211.214.128.402.33.562.642.334.655.5 1.717.5 3.277h1.3c0-.965.3-1.446.63-1.708.36-.285.882-.41 1.489-.41.948 0 1.911.966 1.911 2.118v7.305c0 .11.002.23.004.363.017 1.13.047 3.067-.962 5.337-.81 1.824-3.684 5.6-8.398 5.938-5.389.386-8.467-2.143-10.132-3.807-2.98-3.178-8.842-9.681-9.435-10.35a2.621 2.621 0 0 1-.578-1.216c-.087-.516-.001-1.157.66-1.834.445-.455.974-.549 1.497-.47.548.081 1.029.348 1.232.517l.012.009 5.687 4.296V13.688h-1.3Z" />
      <path
        fillRule="evenodd"
        d="M10.601 9.49c.403.366.883.71 1.395 1.023a9.508 9.508 0 0 0-1.79.174c-.798.165-1.604.487-2.086 1.13-.521.696-.539 1.585-.131 2.57.408.986 1.048 1.603 1.904 1.74.796.127 1.599-.196 2.288-.629.934-.586 1.858-1.5 2.617-2.394.046 2.443-.53 4.087-1.105 5.382l1.188.528c.756-1.702 1.512-3.983 1.106-7.583a.66.66 0 0 0 0-.099c-.118-1.44-.483-3.52-1.238-4.98-.374-.724-.902-1.41-1.651-1.706-.807-.317-1.672-.112-2.524.53-.852.642-1.29 1.416-1.194 2.28.088.799.618 1.486 1.221 2.034Zm.071-2.177c-.028-.259.061-.63.683-1.098.622-.468 1.012-.459 1.266-.359.312.123.65.468.973 1.092.485.939.802 2.25.975 3.431-1.108-.481-2.306-1.136-3.094-1.852-.523-.475-.767-.89-.803-1.214ZM9.16 12.597c-.156.209-.268.573.03 1.293.297.72.638.91.908.953.33.053.797-.073 1.392-.446.895-.562 1.835-1.529 2.585-2.458-1.2-.15-2.563-.195-3.606.02-.692.144-1.113.377-1.309.638Z"
      />
    </>
  );

  const normalHover = (
    <>
      <path fillRule="evenodd" d="M24.377 14.39h-7.105v-1.3h7.105v1.3Z" />
      <path d="M18.014 5.281c.577-.73 1.524-1.302 2.944-1.302 1.285.001 2.158.62 2.688 1.355.508.703.715 1.527.716 2.058.004.632.009 3.452.013 4.4h-1.3c-.004-.945-.009-3.763-.013-4.393v-.004c0-.264-.124-.822-.47-1.3-.324-.45-.828-.815-1.634-.816-1.026 0-1.596.393-1.925.809-.354.447-.46.964-.46 1.188v4.516h-1.3V7.276c0-.49.189-1.297.74-1.995Zm-.741 10.407v11.526l-3.582-2.706c-.375-.306-1.067-.674-1.857-.791-.825-.124-1.812.022-2.619.848-.966.989-1.164 2.053-1.013 2.957.146.864.6 1.539.888 1.864.599.675 6.48 7.197 9.467 10.384l.007.008.007.007c1.796 1.795 5.223 4.616 11.151 4.192 5.378-.386 8.577-4.643 9.494-6.707 1.13-2.544 1.093-4.748 1.074-5.884a21.046 21.046 0 0 1-.004-.344v-7.305c0-1.773-1.452-3.418-3.211-3.418-.747 0-1.61.147-2.295.69l-.058.047a4.989 4.989 0 0 0-.408-1.187c-.25-.488-.592-.89-1.052-1.166-.458-.274-.987-.396-1.568-.396-.99 0-1.782.325-2.347.907a4.465 4.465 0 0 0-.416-1.032c-.273-.476-.633-.841-1.088-1.08-.448-.237-.948-.33-1.472-.33-.735 0-1.426.157-1.984.602.002-1.247.002-.496 0-1.686h-1.3c.003 2.32 0 2.864-.014 5.176-.024.438-.027.915-.01 1.43l1.299-.014c.004-.445.008-.903.01-1.37.061-1.069.25-1.739.506-2.151.3-.483.74-.687 1.493-.687.372 0 .65.066.866.18.21.11.4.287.566.576.329.575.54 1.554.565 3.142-.002.108-.001.216.002.325l1.3-.021c0-.103 0-.204-.002-.304.015-.71.179-1.278.46-1.668.294-.408.77-.695 1.566-.695.398 0 .685.082.9.211.214.128.402.33.562.642.334.655.5 1.717.5 3.277h1.3c0-.965.3-1.446.63-1.708.36-.285.882-.41 1.489-.41.948 0 1.911.966 1.911 2.118v7.305c0 .11.002.23.004.363.017 1.13.047 3.067-.962 5.337-.81 1.824-3.684 5.6-8.398 5.938-5.389.386-8.467-2.143-10.132-3.807-2.98-3.178-8.842-9.681-9.435-10.35a2.621 2.621 0 0 1-.578-1.216c-.087-.516-.001-1.157.66-1.834.445-.455.974-.549 1.497-.47.548.081 1.029.348 1.232.517l.012.009 5.687 4.296V15.688h-1.3Z" />
      <path
        fillRule="evenodd"
        d="M10.601 11.49c.403.366.883.71 1.395 1.023a9.508 9.508 0 0 0-1.79.174c-.798.165-1.604.487-2.086 1.13-.521.696-.539 1.585-.131 2.57.408.986 1.048 1.603 1.904 1.74.796.127 1.599-.196 2.288-.629.934-.586 1.858-1.5 2.617-2.394.046 2.443-.53 4.087-1.105 5.382l1.188.528c.756-1.702 1.512-3.983 1.106-7.583a.66.66 0 0 0 0-.099c-.118-1.44-.483-3.52-1.238-4.98-.374-.724-.902-1.41-1.651-1.706-.807-.317-1.672-.112-2.524.53-.852.642-1.29 1.416-1.194 2.28.088.799.618 1.486 1.221 2.034Zm.071-2.177c-.028-.259.061-.63.683-1.098.622-.468 1.012-.459 1.266-.359.312.123.65.468.973 1.092.485.939.802 2.25.975 3.431-1.108-.481-2.306-1.136-3.094-1.852-.523-.475-.767-.89-.803-1.214ZM9.16 14.597c-.156.209-.268.573.03 1.293.297.72.638.91.908.953.33.053.797-.073 1.392-.446.895-.562 1.835-1.529 2.585-2.458-1.2-.15-2.563-.195-3.606.02-.692.144-1.113.377-1.309.638Z"
      />
    </>
  );

  return isHovered ? normalHover : normal;
};

export default Reminder;
