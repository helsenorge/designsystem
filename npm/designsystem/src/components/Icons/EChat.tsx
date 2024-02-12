import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const EChat: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M25.834 39.673a1.423 1.423 0 01-1.421-1.42c0-.785.638-1.422 1.421-1.422.784 0 1.422.637 1.422 1.421 0 .783-.638 1.421-1.422 1.421zm0-4.041a2.623 2.623 0 00-2.62 2.62 2.623 2.623 0 002.62 2.62 2.623 2.623 0 002.621-2.62 2.624 2.624 0 00-2.621-2.62zm3.194-27.95h-4.333a.495.495 0 100 .992h4.333a.495.495 0 100-.992zM35.25 39.36a2.498 2.498 0 01-2.495 2.496H18.913a2.498 2.498 0 01-2.495-2.495V27.956h2.587l4.843 3.114v-3.114h2.126a2.973 2.973 0 002.968-2.97v-7.404a2.972 2.972 0 00-2.968-2.969h-9.556V8.64a2.498 2.498 0 012.495-2.497h13.842A2.498 2.498 0 0135.25 8.64v30.72zM9.969 26.539a1.553 1.553 0 01-1.551-1.553v-7.402c0-.855.695-1.551 1.551-1.551h16.005c.855 0 1.55.695 1.55 1.55v7.403c0 .857-.695 1.553-1.55 1.553H22.43v1.936l-3.009-1.936H9.969zM32.755 4.725H18.913A3.918 3.918 0 0015 8.64v5.973H9.969A2.973 2.973 0 007 17.584v7.402a2.973 2.973 0 002.969 2.97H15v11.406a3.918 3.918 0 003.913 3.914h13.842a3.918 3.918 0 003.913-3.914V8.64a3.918 3.918 0 00-3.913-3.915zm-9.69 3.027a.425.425 0 10.001.85.425.425 0 00-.001-.85zm-11.614 15.29h12.04v-.992h-12.04v.992zm0-2.98h12.04v-.992h-12.04v.991z" />
  );

  const normalHover = (
    <path d="M32.92 4.784a3.859 3.859 0 013.855 3.855V39.36a3.859 3.859 0 01-3.855 3.855H19.079a3.859 3.859 0 01-3.854-3.855V25.797h-5.09a2.914 2.914 0 01-2.91-2.91v-7.404a2.914 2.914 0 012.91-2.91h5.09V8.638a3.859 3.859 0 013.854-3.855zm0 1.301H19.079a2.557 2.557 0 00-2.554 2.554v3.933h9.615a2.913 2.913 0 012.909 2.911v7.403a2.913 2.913 0 01-2.91 2.911h-2.185v3.066l-4.766-3.066h-2.663V39.36a2.557 2.557 0 002.554 2.555h13.84a2.558 2.558 0 002.556-2.555V8.64a2.557 2.557 0 00-2.555-2.555zM26 35.731a2.524 2.524 0 012.52 2.521A2.524 2.524 0 0126 40.773a2.524 2.524 0 01-2.521-2.52 2.524 2.524 0 012.52-2.522zm0 1c-.84 0-1.521.683-1.521 1.521 0 .84.682 1.521 1.52 1.521.84 0 1.522-.682 1.522-1.52 0-.839-.682-1.522-1.521-1.522zm.14-22.858H10.135c-.888 0-1.61.722-1.61 1.61v7.403c0 .888.722 1.61 1.61 1.61h9.435l3.085 1.984v-1.984h3.485c.887 0 1.609-.722 1.609-1.61v-7.403c0-.888-.722-1.61-1.61-1.61zm-2.483 6.078v.992h-12.04v-.992h12.04zm0-2.982v.992h-12.04v-.992h12.04zm5.537-9.287a.496.496 0 110 .992h-4.333a.496.496 0 110-.992zm-5.963.07a.425.425 0 110 .85.425.425 0 010-.85z" />
  );

  const xSmall = (
    <path d="M29.195 7.681H24.86a.496.496 0 000 .992h4.334a.496.496 0 100-.992zM26 39.767c-.835 0-1.516-.68-1.516-1.515a1.516 1.516 0 013.03 0c0 .835-.679 1.515-1.514 1.515zm0-4.041a2.53 2.53 0 00-2.526 2.526A2.529 2.529 0 0026 40.78a2.53 2.53 0 002.527-2.527A2.53 2.53 0 0026 35.726zM23.23 7.752a.425.425 0 100 .85.425.425 0 000-.85zM35.368 39.36a2.451 2.451 0 01-2.448 2.448H19.08a2.45 2.45 0 01-2.447-2.448V28.004h2.523l4.907 3.157v-3.157h2.076a3.02 3.02 0 003.018-3.017v-7.404a3.02 3.02 0 00-3.018-3.017h-9.506V8.64a2.45 2.45 0 012.446-2.448h13.84a2.45 2.45 0 012.449 2.448v30.72zM10.135 26.49a1.506 1.506 0 01-1.502-1.503v-7.404c0-.827.675-1.503 1.502-1.503h16.004c.828 0 1.503.676 1.503 1.503v7.404c0 .827-.675 1.503-1.503 1.503h-3.592v1.893l-2.945-1.893h-9.467zM32.92 4.678H19.08a3.967 3.967 0 00-3.963 3.962v5.926h-4.982a3.02 3.02 0 00-3.018 3.017v7.404a3.02 3.02 0 003.018 3.017h4.982V39.36a3.967 3.967 0 003.962 3.963h13.84a3.967 3.967 0 003.963-3.963V8.64a3.967 3.967 0 00-3.962-3.962zM11.618 20.072h12.04V19.06h-12.04v1.012zm0 2.98h12.04v-1.011h-12.04v1.012z" />
  );

  const xSmallHover = (
    <path d="M32.92 4.678a3.967 3.967 0 013.963 3.962v30.72a3.967 3.967 0 01-3.963 3.963H19.08a3.967 3.967 0 01-3.962-3.963V25.577h-4.983a3.02 3.02 0 01-3.017-3.018v-7.403a3.022 3.022 0 013.017-3.02h4.983V8.64a3.966 3.966 0 013.962-3.962zm0 1.514H19.08a2.45 2.45 0 00-2.446 2.448v3.497h9.507a3.022 3.022 0 013.017 3.019v7.403a3.02 3.02 0 01-3.017 3.018h-2.077v3.154l-4.906-3.154h-2.524V39.36a2.45 2.45 0 002.446 2.447H32.92a2.45 2.45 0 002.447-2.447V8.64a2.45 2.45 0 00-2.447-2.448zM26 35.726a2.529 2.529 0 012.526 2.527A2.53 2.53 0 0126 40.779a2.53 2.53 0 01-2.526-2.526A2.529 2.529 0 0126 35.726zm0 1.012c-.836 0-1.516.68-1.516 1.515a1.517 1.517 0 003.032 0c0-.835-.68-1.515-1.516-1.515zm.14-23.087H10.134c-.827 0-1.502.676-1.502 1.505v7.403c0 .827.675 1.503 1.502 1.503h9.468l2.945 1.894v-1.894h3.593c.828 0 1.502-.676 1.502-1.503v-7.403c0-.829-.674-1.505-1.502-1.505zm-2.484 5.962v1.012H11.617v-1.012h12.04zm0-2.982v1.012H11.617V16.63h12.04zm5.538-8.95a.496.496 0 010 .992H24.86a.496.496 0 010-.992zm-5.963.07a.425.425 0 11-.001.85.425.425 0 010-.85z" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default EChat;
