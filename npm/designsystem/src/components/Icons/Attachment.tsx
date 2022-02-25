import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const Attachment: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M25.8 40.135c-2.416 0-4.383-1.864-4.383-4.154V16.666c0-1.322 1.127-2.398 2.513-2.398s2.513 1.076 2.513 2.399v14.017h-1.3V16.668c0-.605-.544-1.098-1.213-1.098-.67 0-1.213.492-1.213 1.098V35.98c0 1.572 1.383 2.852 3.084 2.852 1.7 0 3.084-1.28 3.084-2.852V13.104c0-2.505-2.191-4.542-4.885-4.542-2.693 0-4.885 2.037-4.885 4.542V39.36h-1.3V13.105c0-3.222 2.775-5.843 6.185-5.843 3.41 0 6.185 2.622 6.185 5.843V35.98c0 2.29-1.967 4.155-4.384 4.155" />
  );

  const normalHover = (
    <path d="M25.8 40.135c-2.417 0-4.384-1.864-4.384-4.154V16.666c0-1.322 1.127-2.398 2.513-2.398s2.513 1.076 2.513 2.399v14.017h-1.3V16.668c0-.605-.544-1.098-1.213-1.098s-1.213.492-1.213 1.098V35.98c0 1.572 1.383 2.852 3.084 2.852s3.084-1.28 3.084-2.852V13.104c0-2.505-2.191-4.542-4.884-4.542-2.776 0-4.724 1.704-5.346 4.675L13.71 37.913l-1.274-.256 4.945-24.68c.749-3.58 3.223-5.715 6.619-5.715 3.41 0 6.184 2.622 6.184 5.843V35.98c0 2.29-1.967 4.155-4.384 4.155" />
  );

  const xSmall = (
    <path d="M24.564 40.769c-2.504 0-4.541-1.933-4.541-4.31V17.142c0-1.408 1.198-2.555 2.67-2.555s2.67 1.147 2.67 2.555v14.02H23.75v-14.02c0-.52-.475-.943-1.057-.943-.584 0-1.059.423-1.059.943v19.317c0 1.488 1.314 2.7 2.93 2.7 1.615 0 2.929-1.212 2.929-2.7v-22.88c0-2.42-2.12-4.389-4.73-4.389-2.609 0-4.731 1.97-4.731 4.388V39.84h-1.61V13.58c0-3.31 2.844-6 6.34-6 3.498 0 6.343 2.69 6.343 6v22.88c0 2.377-2.038 4.31-4.541 4.31" />
  );

  const xSmallHover = (
    <path d="M22.736 7.516c-3.515 0-6.075 2.204-6.85 5.904L10.94 38.107l1.734.347 4.944-24.68c.597-2.853 2.463-4.49 5.118-4.49 2.566 0 4.653 1.934 4.653 4.31v22.882c0 1.444-1.28 2.619-2.851 2.619-1.573 0-2.851-1.175-2.851-2.619V17.157c0-.476.44-.864.979-.864.54 0 .979.388.979.864v14.02h1.77v-14.02c0-1.452-1.234-2.632-2.75-2.632-1.514 0-2.747 1.18-2.747 2.632v19.32c0 2.418 2.072 4.386 4.62 4.386 2.546 0 4.619-1.968 4.619-4.387V13.594c0-3.351-2.88-6.078-6.42-6.078" />
  );

  return getIcon(size, isHovered, normal, normalHover, xSmall, xSmallHover);
};

export default Attachment;
