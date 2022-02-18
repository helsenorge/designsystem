import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const TrashCan: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M23.4 34.646h1V19.307h-1v15.339zm-4.772 0h1V19.307h-1v15.339zm-7.486-21.26h25.515v-2.147H11.142v2.147zm22.892 22.961a3.346 3.346 0 01-3.342 3.343H17.109a3.346 3.346 0 01-3.343-3.343V14.686h20.268v21.661zM22.451 9.333a1.45 1.45 0 012.898 0v.606h-2.898v-.606zm3.997.606v-.606A2.55 2.55 0 0023.9 6.785a2.55 2.55 0 00-2.548 2.548v.606H9.843v4.747h2.623v21.661a4.648 4.648 0 004.643 4.643h13.583a4.648 4.648 0 004.642-4.643V14.686h2.623V9.939H26.448zm1.723 24.707h1V19.307h-1v15.339z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M18.628 34.646h1V19.307h-1v15.339zm-4.862-19.96h20.268v21.661a3.346 3.346 0 01-3.343 3.343H17.108a3.346 3.346 0 01-3.342-3.343V14.686zm-1.3 21.661a4.648 4.648 0 004.642 4.643h13.583a4.648 4.648 0 004.643-4.643V13.386H12.466v22.961zM11.143 9.128h25.514V6.981H11.143v2.147zm11.308-4.053c0-.799.65-1.449 1.449-1.449s1.449.65 1.449 1.449v.605h-2.898v-.605zm3.997.605v-.605A2.552 2.552 0 0023.9 2.526a2.552 2.552 0 00-2.548 2.549v.605H9.843v4.747h28.114V5.68H26.448zM23.4 34.646h1V19.307h-1v15.339zm4.77 0h1V19.307h-1v15.339z"
    />
  );

  const small = (
    <path
      fillRule="evenodd"
      d="M23.254 33.848h1.49V19.863h-1.49v13.985zM12.532 14.3h22.934v-1.627H12.532V14.3zm20.543 21.1a2.887 2.887 0 01-2.882 2.883H17.807a2.886 2.886 0 01-2.882-2.882V15.815h18.15v19.586zM22.923 10.77c0-.595.484-1.078 1.076-1.078a1.08 1.08 0 011.078 1.077v.387h-2.154v-.387zm3.644.386v-.387A2.57 2.57 0 0024 8.201a2.57 2.57 0 00-2.566 2.568v.387H11.018v4.66h2.392V35.4a4.402 4.402 0 004.397 4.398h12.386A4.402 4.402 0 0034.59 35.4V15.815h2.392v-4.66H26.567zm1.037 22.692h1.49V19.863h-1.49v13.985zm-8.7 0h1.49V19.863h-1.49v13.985z"
    />
  );

  const smallHover = (
    <path
      fillRule="evenodd"
      d="M12.534 10.415h22.934V8.788H12.534v1.627zm10.39-3.529A1.08 1.08 0 0124 5.81a1.08 1.08 0 011.077 1.077v.387h-2.155v-.387zm3.645.387v-.387A2.57 2.57 0 0024 4.318a2.57 2.57 0 00-2.567 2.568v.387H11.018v4.658h25.964V7.273H26.57zm-11.644 8.542h18.15v19.586a2.886 2.886 0 01-2.882 2.882H17.807a2.887 2.887 0 01-2.882-2.882V15.815zM13.41 35.401a4.402 4.402 0 004.397 4.398h12.386A4.403 4.403 0 0034.59 35.4V14.3H13.41v21.1zm5.494-1.553h1.49V19.863h-1.49v13.985zm8.702 0h1.49V19.863h-1.49v13.985zm-4.35 0h1.49V19.863h-1.49v13.985z"
    />
  );

  return getIcon(size, isHovered, normal, normalHover, small, smallHover);
};

export default TrashCan;
