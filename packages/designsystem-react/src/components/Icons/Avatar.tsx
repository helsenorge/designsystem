import React from 'react';
import {IconRawProps} from './Icon';

const Avatar = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <g fill="none" fillRule="evenodd" stroke={color} strokeWidth="1.4" transform="translate(12.5 5)">
        <path d="M16.0736804 19.10614C14.7595355 19.8061776 13.2594547 20.2047176 11.6660356 20.2047176 10.0726165 20.2047176 8.57327647 19.8061776 7.25839085 19.10614 3.36558864 20.2350896.518768676 23.8249126.518768676 28.0821789L.518768676 37.081182 22.8140433 37.081182 22.8140433 28.0821789C22.8140433 23.8249126 19.9672234 20.2350896 16.0736804 19.10614zM11.8624906.51862052L11.4698769.51862052C7.79708653.51862052 4.81988917 3.49581787 4.81988917 7.16860824L4.81988917 10.4310061C4.81988917 14.1037965 7.79708653 17.0809939 11.4698769 17.0809939L11.8624906 17.0809939C15.535281 17.0809939 18.5124784 14.1037965 18.5124784 10.4310061L18.5124784 7.16860824C18.5124784 3.49581787 15.535281.51862052 11.8624906.51862052z" />
        <path d="M4.91678328 7.94302031L6.18055504 7.94302031C8.10658468 7.94302031 9.66815025 6.38219552 9.66815025 4.45616588L9.66815025 4.19244798 9.66815025 4.40282968C9.66815025 6.35774976 11.25268 7.94302031 13.2083409 7.94302031L18.4812174 7.94302031M3.5997494 10.5028619L4.69906785 10.5028619 4.69906785 7.942724 3.5997494 7.942724C3.06935047 7.942724 2.6396977 8.37311755 2.6396977 8.9027757L2.6396977 9.54281016C2.6396977 10.0732091 3.06935047 10.5028619 3.5997494 10.5028619zM19.7326922 7.94302031L18.6333738 7.94302031 18.6333738 10.5031582 19.7326922 10.5031582C20.2630911 10.5031582 20.6927439 10.0727646 20.6927439 9.54310648L20.6927439 8.90307201C20.6927439 8.37341386 20.2630911 7.94302031 19.7326922 7.94302031z" />
        <line x1="18.543" x2="18.543" y1="29.577" y2="37.081" />
        <line x1="4.79" x2="4.79" y1="29.577" y2="37.081" />
      </g>
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <g fill="none" fillRule="evenodd" transform="translate(12.5 5)">
        <path
          stroke={color}
          strokeWidth="1.4"
          d="M16.0736804 19.10614C14.7595355 19.8061776 13.2594547 20.2047176 11.6660356 20.2047176 10.0726165 20.2047176 8.57327647 19.8061776 7.25839085 19.10614 3.36558864 20.2350896.518768676 23.8249126.518768676 28.0821789L.518768676 37.081182 22.8140433 37.081182 22.8140433 28.0821789C22.8140433 23.8249126 19.9672234 20.2350896 16.0736804 19.10614zM11.8624906.51862052L11.4698769.51862052C7.79708653.51862052 4.81988917 3.49581787 4.81988917 7.16860824L4.81988917 10.4310061C4.81988917 14.1037965 7.79708653 17.0809939 11.4698769 17.0809939L11.8624906 17.0809939C15.535281 17.0809939 18.5124784 14.1037965 18.5124784 10.4310061L18.5124784 7.16860824C18.5124784 3.49581787 15.535281.51862052 11.8624906.51862052z"
        />
        <path
          fill={color}
          d="M9.58333086 10.7310964C9.58333086 11.0051852 9.36109668 11.2274194 9.08700784 11.2274194 8.81291901 11.2274194 8.59068482 11.0051852 8.59068482 10.7310964 8.59068482 10.4570075 8.81291901 10.2347734 9.08700784 10.2347734 9.36109668 10.2347734 9.58333086 10.4570075 9.58333086 10.7310964M14.8114642 10.7310964C14.8114642 11.0051852 14.5892301 11.2274194 14.3151412 11.2274194 14.0410524 11.2274194 13.8188182 11.0051852 13.8188182 10.7310964 13.8188182 10.4570075 14.0410524 10.2347734 14.3151412 10.2347734 14.5892301 10.2347734 14.8114642 10.4570075 14.8114642 10.7310964"
        />
        <path
          stroke={color}
          strokeWidth="1.4"
          d="M4.91678328 7.94302031L6.18055504 7.94302031C8.10658468 7.94302031 9.66815025 6.38219552 9.66815025 4.45616588L9.66815025 4.19244798 9.66815025 4.40282968C9.66815025 6.35774976 11.25268 7.94302031 13.2083409 7.94302031L18.4812174 7.94302031M3.5997494 10.5028619L4.69906785 10.5028619 4.69906785 7.942724 3.5997494 7.942724C3.06935047 7.942724 2.6396977 8.37311755 2.6396977 8.9027757L2.6396977 9.54281016C2.6396977 10.0732091 3.06935047 10.5028619 3.5997494 10.5028619zM19.7326922 7.94302031L18.6333738 7.94302031 18.6333738 10.5031582 19.7326922 10.5031582C20.2630911 10.5031582 20.6927439 10.0727646 20.6927439 9.54310648L20.6927439 8.90307201C20.6927439 8.37341386 20.2630911 7.94302031 19.7326922 7.94302031z"
        />
        <line x1="18.543" x2="18.543" y1="29.577" y2="37.081" stroke={color} strokeWidth="1.4" />
        <line x1="4.79" x2="4.79" y1="29.577" y2="37.081" stroke={color} strokeWidth="1.4" />
        <path
          fill={color}
          d="M9.58333086 10.7310964C9.58333086 11.0051852 9.36109668 11.2274194 9.08700784 11.2274194 8.81291901 11.2274194 8.59068482 11.0051852 8.59068482 10.7310964 8.59068482 10.4570075 8.81291901 10.2347734 9.08700784 10.2347734 9.36109668 10.2347734 9.58333086 10.4570075 9.58333086 10.7310964M14.8114642 10.7310964C14.8114642 11.0051852 14.5892301 11.2274194 14.3151412 11.2274194 14.0410524 11.2274194 13.8188182 11.0051852 13.8188182 10.7310964 13.8188182 10.4570075 14.0410524 10.2347734 14.3151412 10.2347734 14.5892301 10.2347734 14.8114642 10.4570075 14.8114642 10.7310964M9.80215746 13.4746515C9.80215746 14.482854 10.6199793 15.3006758 11.6281817 15.3006758 12.6363842 15.3006758 13.4534652 14.482854 13.4534652 13.4746515L9.80215746 13.4746515z"
        />
      </g>
    </svg>
  );
});

export default Avatar;
