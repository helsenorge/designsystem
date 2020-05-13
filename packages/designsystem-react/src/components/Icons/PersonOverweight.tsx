import React from 'react';
import {IconRawProps} from './Icon';

const PersonOverweight = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M23.8875 28.8501C23.5355 28.9731 23.1585 28.9461 22.8265 28.7701 22.4955 28.5941 22.2615 28.2981 22.1605 27.9141L19.4345 18.8231C19.3425 18.4741 19.0125 18.2471 18.6465 18.2921L18.0195 18.4331 18.0195 19.0041 18.0535 19.2121C18.0755 19.2791 20.2965 25.8981 19.7515 28.7661 19.5955 29.5881 19.1375 30.1321 18.7335 30.6121 18.3855 31.0251 18.0565 31.4151 18.0565 31.9131 18.0565 34.1531 18.0765 39.3341 18.0765 39.3341 18.0755 40.5351 17.0965 41.5101 15.8955 41.5101 14.6975 41.5101 13.7175 40.5361 13.7135 39.3371L13.6775 39.3371 13.7035 39.3351 13.6565 32.1311 13.6535 32.0131 12.3545 32.0461 12.3655 39.3371C12.3615 40.5361 11.3815 41.5101 10.1835 41.5101 8.9825 41.5101 8.0035 40.5351 8.0015 39.3381 8.0015 39.3381 8.0225 34.1541 8.0225 31.9131 8.0225 31.4151 7.6935 31.0251 7.3455 30.6121 6.9415 30.1321 6.4835 29.5881 6.3265 28.7661 5.7825 25.9011 8.0025 19.2791 8.0255 19.2121L8.0595 19.0041C8.0595 18.6441 7.7895 18.3381 7.4325 18.2921L6.8095 18.2731 3.9115 27.9361C3.8175 28.2981 3.5825 28.5941 3.2515 28.7701 2.9205 28.9471 2.5435 28.9741 2.1915 28.8501 1.5455 28.6231 1.1805 27.9511 1.3385 27.2951L3.9745 17.0981C4.6065 14.4991 7.8065 12.7541 10.4005 12.7541L13.0635 12.7541 13.9135 12.7541 15.6785 12.7541C18.2725 12.7541 21.4725 14.4991 22.1075 17.1081L24.7375 27.2861C24.8985 27.9511 24.5335 28.6231 23.8875 28.8501M25.9975 26.9691L23.3675 16.7911C22.5665 13.4951 18.7525 11.4541 15.6785 11.4541L13.9135 11.4541 13.0635 11.4541 10.4005 11.4541C7.3255 11.4541 3.5125 13.4951 2.7135 16.7821L.0775 26.9791C-.2415 28.2961.4825 29.6281 1.7615 30.0771 2.4495 30.3191 3.2165 30.2601 3.8625 29.9171 4.3665 29.6501 4.7675 29.2241 5.0045 28.7241 5.0175 28.8221 5.0325 28.9161 5.0495 29.0081 5.2695 30.1651 5.8945 30.9081 6.3515 31.4501 6.4975 31.6231 6.6985 31.8621 6.7215 31.9131 6.7215 34.1521 6.7005 39.3321 6.7005 39.3361 6.7045 41.2521 8.2675 42.8111 10.1835 42.8111 11.3655 42.8111 12.4085 42.2151 13.0395 41.3111 13.6695 42.2151 14.7145 42.8111 15.8955 42.8111 17.8115 42.8111 19.3735 41.2521 19.3775 39.3321 19.3775 39.3321 19.3575 34.1521 19.3525 31.9521 19.3805 31.8621 19.5805 31.6231 19.7275 31.4501 20.1845 30.9081 20.8095 30.1651 21.0295 29.0081 21.0465 28.9151 21.0625 28.8201 21.0745 28.7201 21.3155 29.2281 21.7145 29.6511 22.2165 29.9171 22.8635 30.2601 23.6295 30.3191 24.3175 30.0771 25.5965 29.6281 26.3205 28.2961 25.9975 26.9691M12.907 2.2642C14.59 2.2642 15.958 3.6322 15.958 5.3152 15.958 6.9972 14.59 8.3672 12.907 8.3672 11.224 8.3672 9.855 6.9972 9.855 5.3152 9.855 3.6322 11.224 2.2642 12.907 2.2642M12.907 9.6672C15.306 9.6672 17.259 7.7142 17.259 5.3152 17.259 2.9152 15.306.9632 12.907.9632 10.508.9632 8.554 2.9152 8.554 5.3152 8.554 7.7142 10.508 9.6672 12.907 9.6672"
      transform="translate(11 2)"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M23.8767 28.8501C23.5237 28.9731 23.1477 28.9461 22.8157 28.7701 22.4847 28.5941 22.2507 28.2981 22.1497 27.9141L19.4237 18.8231C19.3307 18.4711 18.9987 18.2461 18.6407 18.2911L18.0167 18.4281 18.0077 19.0851 18.0307 19.1701C18.0487 19.2381 19.7897 25.8781 19.2407 28.7661 19.0787 29.6211 18.7557 30.1991 18.4967 30.6641 18.2547 31.0971 18.0457 31.4711 18.0457 31.9131 18.0457 34.1531 18.0667 39.3331 18.0667 39.3331 18.0647 40.5341 17.0857 41.5101 15.8857 41.5101 14.6867 41.5101 13.7067 40.5361 13.7037 39.3371L13.6777 39.3371 13.7037 39.3351 13.6557 32.1311 13.6527 32.0131 12.3547 32.0461 12.3647 39.3371C12.3607 40.5361 11.3817 41.5101 10.1837 41.5101 8.9817 41.5101 8.0037 40.5351 8.0017 39.3381 8.0017 39.3381 8.0227 34.1541 8.0227 31.9131 8.0227 31.4711 7.8137 31.0971 7.5707 30.6631 7.3127 30.1991 6.9887 29.6201 6.8267 28.7661 6.2777 25.8781 8.0197 19.2381 8.0367 19.1701L8.0597 19.0041C8.0597 18.6441 7.7897 18.3381 7.4327 18.2921L6.8097 18.2731 3.9117 27.9361C3.8167 28.2981 3.5827 28.5941 3.2517 28.7701 2.9207 28.9471 2.5437 28.9741 2.1907 28.8501 1.5457 28.6231 1.1807 27.9511 1.3387 27.2951L3.9747 17.0981C4.6057 14.4991 7.8067 12.7541 10.3997 12.7541L13.8567 12.7541 13.9137 12.7541 15.6677 12.7541C18.2617 12.7541 21.4617 14.4991 22.0967 17.1081L24.7267 27.2861C24.8877 27.9511 24.5227 28.6231 23.8767 28.8501M25.9867 26.9691L23.3567 16.7911C22.5557 13.4951 18.7417 11.4541 15.6677 11.4541L13.9137 11.4541 13.8567 11.4541 10.3997 11.4541C7.3257 11.4541 3.5127 13.4951 2.7137 16.7821L.0777 26.9791C-.2413 28.2961.4817 29.6281 1.7617 30.0771 2.4487 30.3191 3.2157 30.2601 3.8617 29.9171 4.5077 29.5751 4.9837 28.9731 5.1637 28.2881L5.4237 27.4191C5.4237 28.0031 5.4617 28.5441 5.5497 29.0081 5.7507 30.0691 6.1477 30.7791 6.4367 31.2971 6.5697 31.5381 6.7217 31.8091 6.7217 31.9131 6.7217 34.1521 6.7007 39.3321 6.7007 39.3361 6.7047 41.2521 8.2677 42.8111 10.1837 42.8111 11.3617 42.8111 12.4027 42.2181 13.0337 41.3171 13.6647 42.2181 14.7067 42.8111 15.8857 42.8111 17.8007 42.8111 19.3627 41.2521 19.3677 39.3321 19.3677 39.3321 19.3467 34.1521 19.3467 31.9131 19.3467 31.8091 19.5047 31.5261 19.6317 31.2981 19.9207 30.7801 20.3167 30.0701 20.5187 29.0081 20.6057 28.5431 20.6447 28.0031 20.6447 27.4181L20.8977 28.2661C21.0837 28.9731 21.5607 29.5751 22.2057 29.9171 22.8527 30.2601 23.6157 30.3191 24.3067 30.0771 25.5857 29.6281 26.3097 28.2971 25.9867 26.9691M12.907 2.2642C14.59 2.2642 15.958 3.6322 15.958 5.3152 15.958 6.9972 14.59 8.3672 12.907 8.3672 11.224 8.3672 9.855 6.9972 9.855 5.3152 9.855 3.6322 11.224 2.2642 12.907 2.2642M12.907 9.6672C15.306 9.6672 17.259 7.7142 17.259 5.3152 17.259 2.9152 15.306.9632 12.907.9632 10.508.9632 8.554 2.9152 8.554 5.3152 8.554 7.7142 10.508 9.6672 12.907 9.6672"
      transform="translate(11 2)"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className="icon"
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default PersonOverweight;
