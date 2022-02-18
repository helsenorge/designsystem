import React from 'react';
import { SvgPathProps } from './Icon';

const Publication: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M25.331 29.214h6.025v-1h-6.025v1zm0-2.846h6.025v-1h-6.025v1zm0 5.691h6.025v-1h-6.025v1zm9.19 1.48a1.35 1.35 0 01-1.349 1.35H14.828c-.183 0-.358-.038-.517-.104l-.011-.005a1.35 1.35 0 01-.822-1.241V8.624c0-.744.606-1.35 1.35-1.35h18.344c.744 0 1.349.606 1.349 1.35v24.915zm-4.068 6.919l-12.146-4.269h12.146v4.269zm2.719-34.484H14.828a2.654 2.654 0 00-2.651 2.65v24.915a2.65 2.65 0 001.664 2.455l-.001.003 17.914 6.296v-6.104h1.418a2.653 2.653 0 002.65-2.65V8.624a2.653 2.653 0 00-2.65-2.65zM17.144 22.16h13.712v-4.737H17.144v4.737zm-1 .999h15.712v-6.737H16.144v6.737zm.303-9.009h14.909v-1H16.447v1zm.197 12.218h6.024v-1h-6.024v1zm0 5.691h6.024v-1h-6.024v1zm0-2.845h6.024v-1h-6.024v1zm-.197-17.91h10.744v-1H16.447v1z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M25.331 32.059h6.025v-1h-6.025v1zm0-2.845h6.025v-1h-6.025v1zm9.19 4.325c0 .745-.606 1.35-1.35 1.35H14.865l-.585-.122a1.35 1.35 0 01-.801-1.228V8.624c0-.744.605-1.35 1.35-1.35h18.342c.744 0 1.35.606 1.35 1.35v24.915zm-2.067 5.036l-11.387-2.386h11.387v2.386zm.717-32.601H14.829a2.654 2.654 0 00-2.651 2.65v24.915c0 1.142.73 2.108 1.743 2.48v.001l.013.003c.222.08.456.129.699.146l19.121 4.007V36.12a2.652 2.652 0 002.068-2.581V8.624c0-1.461-1.19-2.65-2.651-2.65zM16.644 26.368h6.025v-1h-6.025v1zm.5-4.208h13.712v-4.737H17.144v4.737zm-1 .999h15.712v-6.737H16.144v6.737zm9.187 3.209h6.025v-1h-6.025v1zm-8.687 2.846h6.025v-1h-6.025v1zm0 2.845h6.025v-1h-6.025v1zm-.196-20.755h10.743v-1H16.448v1zm0 2.846h14.908v-1H16.448v1z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Publication;
