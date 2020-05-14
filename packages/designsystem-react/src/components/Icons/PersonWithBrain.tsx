import React from 'react';
import {IconRawProps} from './Icon';

const PersonWithBrain = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M26.6038,20.5107 C26.0408,20.5107 25.5838,20.9677 25.5838,21.5307 C25.5838,22.0937 26.0408,22.5507 26.6038,22.5507 C27.1668,22.5507 27.6248,22.0937 27.6248,21.5307 C27.6248,20.9677 27.1668,20.5107 26.6038,20.5107 L26.6038,20.5107 Z M34.4998,26.8067 C34.3418,27.0527 34.0848,27.1937 33.7928,27.1937 L31.9368,27.1937 L31.9368,29.2337 C31.9368,32.1567 29.5598,34.5337 26.6368,34.5337 L25.9868,34.5337 L25.9868,39.7187 L13.8458,39.7187 L13.8458,34.3207 C13.8458,31.7197 12.9278,29.9067 11.9578,27.9857 C10.8788,25.8527 9.7648,23.6467 9.7648,20.0147 C9.7648,14.5557 13.9868,8.6637 20.8078,8.6637 C26.2038,8.6637 31.9368,12.7187 31.9368,20.2357 L31.9368,20.3797 L34.5528,26.0037 C34.6758,26.2677 34.6568,26.5607 34.4998,26.8067 L34.4998,26.8067 Z M35.7318,25.4547 L33.2368,20.0907 C33.1638,11.8227 26.7978,7.3627 20.8078,7.3627 C14.0008,7.3627 8.4638,13.0387 8.4638,20.0147 C8.4638,23.9577 9.7038,26.4087 10.7968,28.5717 C11.7358,30.4277 12.5448,32.0307 12.5448,34.3207 L12.5448,41.0187 L27.2878,41.0187 L27.2878,35.8027 C30.6228,35.4747 33.2378,32.6537 33.2378,29.2337 L33.2378,28.4947 L33.7928,28.4947 C34.5268,28.4947 35.2008,28.1247 35.5948,27.5057 C35.9908,26.8867 36.0418,26.1207 35.7318,25.4547 L35.7318,25.4547 Z M24.3198,14.5677 L23.3778,15.5097 C22.5598,15.1617 21.6568,15.1377 20.8328,15.4027 L20.4228,14.7147 C19.9488,13.9187 20.0618,12.8917 20.6978,12.2187 L21.3488,11.5297 C22.2518,11.6567 23.1488,11.9257 23.9878,12.3407 C24.3768,12.5327 24.6418,12.8937 24.7138,13.3317 C24.7888,13.7837 24.6408,14.2457 24.3198,14.5677 L24.3198,14.5677 Z M18.0298,20.8577 L17.5708,20.4087 C16.8828,19.7357 16.7728,18.6677 17.3078,17.8687 L17.3548,17.7997 C17.6188,17.9947 17.9318,18.0987 18.2488,18.0987 C18.5688,18.0987 18.8908,17.9967 19.1638,17.7877 L20.3928,16.8457 C20.9958,16.3847 21.7648,16.2387 22.4918,16.3957 L18.0298,20.8577 Z M15.6588,23.2277 C15.3108,23.5747 14.8158,23.7167 14.3378,23.6027 C13.8638,23.4927 13.5028,23.1687 13.3498,22.7137 C13.0428,21.8047 12.8738,20.8907 12.8168,19.8947 L13.7718,20.3937 C14.1898,20.6087 14.6458,20.7157 15.1008,20.7157 C15.4988,20.7157 15.8938,20.6297 16.2628,20.4687 C16.4068,20.7297 16.5808,20.9777 16.8008,21.1937 L17.2518,21.6357 L15.6588,23.2277 Z M15.3258,13.3467 L16.4178,14.4247 C16.5678,14.5717 16.5808,14.8067 16.4468,14.9697 C15.9658,15.5567 15.9988,16.4137 16.5218,16.9627 L16.5628,17.0057 L16.3938,17.2577 C15.9578,17.9087 15.8058,18.6767 15.9088,19.4087 C15.3958,19.6657 14.7908,19.6827 14.2788,19.4177 L12.8148,18.6527 C12.9478,16.7067 13.8328,14.7357 15.3258,13.3467 L15.3258,13.3467 Z M19.9048,11.4557 L19.8978,11.4627 C18.9258,12.4927 18.7528,14.0607 19.4778,15.2767 L19.8448,15.8937 C19.8058,15.9217 19.7638,15.9437 19.7248,15.9727 L18.4958,16.9147 C18.3298,17.0407 18.0978,17.0227 17.9548,16.8727 L17.3188,16.2047 C17.1768,16.0557 17.1678,15.8257 17.2978,15.6667 C17.7928,15.0607 17.7468,14.1897 17.1898,13.6407 L16.1958,12.6607 C17.2318,11.9567 18.4788,11.5107 19.9048,11.4557 L19.9048,11.4557 Z M25.7988,13.1527 C25.6678,12.3607 25.1858,11.7057 24.4738,11.3537 C23.1298,10.6897 21.6528,10.3397 20.2028,10.3397 C14.9448,10.3397 11.6908,14.9177 11.6908,19.1587 C11.6908,20.5787 11.8868,21.8197 12.3078,23.0657 C12.5828,23.8777 13.2478,24.4777 14.0878,24.6747 C14.2808,24.7187 14.4748,24.7417 14.6668,24.7417 C15.3248,24.7417 15.9578,24.4837 16.4358,24.0057 L25.0968,15.3447 C25.6688,14.7727 25.9318,13.9537 25.7988,13.1527 L25.7988,13.1527 Z"
    />
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(8 7)">
      <path d="M18.6042 13.5107C18.0412 13.5107 17.5832 13.9677 17.5832 14.5307 17.5832 15.0937 18.0412 15.5507 18.6042 15.5507 19.1672 15.5507 19.6242 15.0937 19.6242 14.5307 19.6242 13.9677 19.1672 13.5107 18.6042 13.5107M17.5818 7.98L16.5188 9.043 16.4858 9.03C15.5838 8.647 14.5848 8.626 13.6778 8.927L13.2028 8.129C12.6688 7.232 12.7968 6.075 13.5148 5.315L14.2518 4.535C15.2608 4.675 16.2638 4.975 17.2008 5.437 17.6458 5.657 17.9488 6.07 18.0318 6.57 18.1168 7.085 17.9488 7.613 17.5818 7.98L17.5818 7.98zM8.0438 17.517C7.6478 17.912 7.0908 18.076 6.5368 17.945 5.9968 17.819 5.5858 17.448 5.4088 16.927 5.0598 15.896 4.8728 14.854 4.8168 13.713L5.9518 14.306C6.4048 14.54 6.8988 14.655 7.3928 14.655 7.8388 14.655 8.2828 14.559 8.6938 14.371 8.8528 14.669 9.0498 14.952 9.3018 15.198L9.8378 15.723 8.0438 17.517zM7.6408 6.52L8.8798 7.743C9.0648 7.926 9.0808 8.216 8.9158 8.418 8.4048 9.042 8.4378 9.955 8.9948 10.54L9.0708 10.619 8.8608 10.932C8.3808 11.65 8.2198 12.497 8.3418 13.302 7.7558 13.613 7.0558 13.636 6.4588 13.33L4.8158 12.471C4.9558 10.287 5.9538 8.071 7.6408 6.52L7.6408 6.52zM12.2578 8.692L12.6888 9.417C12.6318 9.456 12.5708 9.489 12.5158 9.532L11.1628 10.569C10.9578 10.726 10.6708 10.703 10.4928 10.515L9.7918 9.781C9.6168 9.597 9.6058 9.311 9.7678 9.115 10.2948 8.47 10.2438 7.543 9.6518 6.959L8.5108 5.832C9.7038 5.006 11.1518 4.487 12.8168 4.45L12.7138 4.559C11.6608 5.675 11.4738 7.375 12.2578 8.692L12.2578 8.692zM10.0708 14.413C9.2948 13.653 9.1708 12.447 9.7748 11.544L9.8618 11.416C10.1508 11.648 10.5008 11.773 10.8558 11.773 11.1978 11.773 11.5408 11.665 11.8318 11.442L13.1848 10.405C13.8878 9.868 14.7918 9.713 15.6358 9.926L10.6158 14.946 10.0708 14.413zM19.1168 6.391C18.9768 5.537 18.4548 4.83 17.6868 4.451 16.2138 3.723 14.5958 3.339 13.0088 3.339 7.2538 3.339 3.6908 8.352 3.6908 12.997 3.6908 14.556 3.9058 15.917 4.3668 17.28 4.6638 18.156 5.3808 18.804 6.2868 19.016 6.4958 19.065 6.7058 19.088 6.9128 19.088 7.6228 19.088 8.3068 18.81 8.8208 18.294L18.3588 8.757C18.9768 8.14 19.2598 7.255 19.1168 6.391L19.1168 6.391z" />
      <path d="M26.4988,19.8071 C26.3428,20.0531 26.0848,20.1941 25.7928,20.1941 L23.9368,20.1941 L23.9368,22.2341 C23.9368,25.1571 21.5608,27.5341 18.6378,27.5341 L17.9868,27.5341 L17.9868,32.7181 L5.8458,32.7181 L5.8458,27.3211 C5.8458,24.7201 4.9278,22.9071 3.9568,20.9861 C2.8788,18.8531 1.7648,16.6471 1.7648,13.0151 C1.7648,7.5561 5.9858,1.6631 12.8078,1.6631 C18.2028,1.6631 23.9368,5.7191 23.9368,13.2361 L23.9368,13.3791 L26.5528,19.0031 C26.6758,19.2681 26.6558,19.5611 26.4988,19.8071 M27.7308,18.4541 L25.2368,13.0901 C25.1638,4.8231 18.7988,0.3631 12.8078,0.3631 C6.0008,0.3631 0.4638,6.0381 0.4638,13.0151 C0.4638,16.9571 1.7028,19.4091 2.7968,21.5721 C3.7348,23.4281 4.5448,25.0311 4.5448,27.3211 L4.5448,34.0191 L19.2878,34.0191 L19.2878,28.8021 C22.6228,28.4751 25.2378,25.6541 25.2378,22.2341 L25.2378,21.4941 L25.7928,21.4941 C26.5268,21.4941 27.2008,21.1241 27.5958,20.5061 C27.9898,19.8871 28.0408,19.1201 27.7308,18.4541" />
    </g>
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${className} hnds-style-icon`}
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default PersonWithBrain;
