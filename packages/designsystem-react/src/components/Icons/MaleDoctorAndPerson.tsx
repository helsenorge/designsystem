import React from 'react';
import {IconRawProps} from './Icon';

const MaleDoctorAndPerson = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fillRule="evenodd" transform="translate(4 4)">
      <path d="M39.5095 37.8232L36.2855 37.8232 36.2855 30.9102 35.3855 30.9102 35.3855 37.8232 24.3345 37.8232 24.3345 29.3872C24.3345 26.7802 23.3105 24.3402 21.6095 22.5082 22.4305 21.8142 23.3295 21.3012 24.3485 20.9732 27.1455 22.3662 30.6035 22.3662 33.3985 20.9732 37.0095 22.1352 39.5095 25.5492 39.5095 29.3622L39.5095 37.8232zM23.0335 37.8222L1.7625 37.8222 1.7625 29.3872C1.7625 25.7602 4.0285 22.4992 7.3575 21.1882L7.3575 26.6552C6.5285 26.8692 5.9105 27.6172 5.9105 28.5122 5.9105 29.5742 6.7745 30.4372 7.8355 30.4372 8.8975 30.4372 9.7605 29.5742 9.7605 28.5122 9.7605 27.6172 9.1435 26.8692 8.3145 26.6552L8.3145 21.1862C10.8925 22.3122 13.9405 22.3082 16.5125 21.1732L16.5125 24.6832C15.5515 24.9022 14.8295 25.7602 14.8295 26.7872L14.8295 29.7602 15.7865 29.7602 15.7865 26.7872C15.7865 26.1232 16.3265 25.5832 16.9905 25.5832 17.6545 25.5832 18.1945 26.1232 18.1945 26.7872L18.1945 29.7602 19.1515 29.7602 19.1515 26.7872C19.1515 25.7602 18.4305 24.9022 17.4695 24.6832L17.4695 21.2002C20.7825 22.5182 23.0335 25.7712 23.0335 29.3872L23.0335 37.8222zM7.8355 27.5452C8.3695 27.5452 8.8035 27.9782 8.8035 28.5122 8.8035 29.0472 8.3695 29.4802 7.8355 29.4802 7.3015 29.4802 6.8675 29.0472 6.8675 28.5122 6.8675 27.9782 7.3015 27.5452 7.8355 27.5452L7.8355 27.5452zM33.5165 19.6502L33.2635 19.5762 33.0305 19.7012C30.4875 21.0562 27.2615 21.0562 24.7165 19.7012L24.4835 19.5762 24.2305 19.6502C22.8875 20.0392 21.7215 20.6932 20.6675 21.6082 19.6235 20.7382 18.3975 20.0692 17.0405 19.6762L16.7875 19.6012 16.5545 19.7262C14.0115 21.0822 10.7855 21.0822 8.2405 19.7262L8.0075 19.6012 7.7545 19.6762C3.4605 20.9212.4615 24.9152.4615 29.3872L.4615 39.1232 23.6845 39.1232 23.6845 39.1242 40.8105 39.1242 40.8105 29.3622C40.8105 24.8882 37.8115 20.8942 33.5165 19.6502L33.5165 19.6502zM22.5925 9.5068L25.8125 9.5068C27.3485 9.5068 28.6885 8.6548 29.3865 7.3998 30.0705 8.6528 31.4015 9.5068 32.9275 9.5068L35.1555 9.5068 35.1555 11.5258C35.1555 14.8788 32.4265 17.6078 29.0725 17.6078L28.6745 17.6078C25.3215 17.6078 22.5925 14.8788 22.5925 11.5258L22.5925 9.5068zM28.6745 2.1408L29.0725 2.1408C32.4265 2.1408 35.1555 4.8688 35.1555 8.2228L35.1555 8.5068 32.9275 8.5068C31.2565 8.5068 29.8975 7.1478 29.8975 5.4768L29.8975 5.2088 28.8975 5.2088 28.8975 5.4228C28.8975 7.1228 27.5135 8.5068 25.8125 8.5068L22.5925 8.5068 22.5925 8.2228C22.5925 4.8688 25.3215 2.1408 28.6745 2.1408L28.6745 2.1408zM28.6745 18.9078L29.0725 18.9078C33.1435 18.9078 36.4555 15.5958 36.4555 11.5258L36.4555 8.2228C36.4555 4.1528 33.1435.8398 29.0725.8398L28.6745.8398C24.6045.8398 21.2915 4.1528 21.2915 8.2228L21.2915 11.5258C21.2915 15.5958 24.6045 18.9078 28.6745 18.9078L28.6745 18.9078z" />
      <path d="M31.5203 12.332C31.7973 12.332 32.0223 12.107 32.0223 11.83 32.0223 11.552 31.7973 11.327 31.5203 11.327 31.2433 11.327 31.0183 11.552 31.0183 11.83 31.0183 12.107 31.2433 12.332 31.5203 12.332M26.2273 12.332C26.5043 12.332 26.7293 12.107 26.7293 11.83 26.7293 11.552 26.5043 11.327 26.2273 11.327 25.9503 11.327 25.7253 11.552 25.7253 11.83 25.7253 12.107 25.9503 12.332 26.2273 12.332M6.1169 9.5068L6.8449 9.5068C8.3709 9.5068 9.7019 8.6538 10.3859 7.3998 11.0829 8.6548 12.4239 9.5068 13.9589 9.5068L18.6799 9.5068 18.6799 11.5258C18.6799 14.8788 15.9509 17.6078 12.5959 17.6078L12.1989 17.6078C8.8459 17.6078 6.1169 14.8788 6.1169 11.5258L6.1169 9.5068zM12.1989 2.1408L12.5959 2.1408C15.9509 2.1408 18.6799 4.8688 18.6799 8.2228L18.6799 8.5068 13.9589 8.5068C12.2589 8.5068 10.8749 7.1228 10.8749 5.4228L10.8749 5.2088 9.8749 5.2088 9.8749 5.4768C9.8749 7.1478 8.5149 8.5068 6.8449 8.5068L6.1169 8.5068 6.1169 8.2228C6.1169 4.8688 8.8459 2.1408 12.1989 2.1408L12.1989 2.1408zM12.1989 18.9078L12.5959 18.9078C16.6679 18.9078 19.9799 15.5958 19.9799 11.5258L19.9799 8.2228C19.9799 4.1528 16.6679.8398 12.5959.8398L12.1989.8398C8.1289.8398 4.8159 4.1528 4.8159 8.2228L4.8159 11.5258C4.8159 15.5958 8.1289 18.9078 12.1989 18.9078L12.1989 18.9078z" />
      <path d="M9.7869 12.332C10.0639 12.332 10.2899 12.107 10.2899 11.83 10.2899 11.552 10.0639 11.327 9.7869 11.327 9.5099 11.327 9.2839 11.552 9.2839 11.83 9.2839 12.107 9.5099 12.332 9.7869 12.332M15.0798 12.332C15.3568 12.332 15.5828 12.107 15.5828 11.83 15.5828 11.552 15.3568 11.327 15.0798 11.327 14.8028 11.327 14.5778 11.552 14.5778 11.83 14.5778 12.107 14.8028 12.332 15.0798 12.332" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(4 4)">
      <path d="M39.5095 37.8223L36.2855 37.8223 36.2855 30.9103 35.3855 30.9103 35.3855 37.8223 24.3345 37.8223 24.3345 29.3873C24.3345 26.7803 23.3105 24.3403 21.6095 22.5073 22.4295 21.8133 23.3295 21.3013 24.3495 20.9733 27.1445 22.3663 30.6035 22.3663 33.3985 20.9733 37.0095 22.1353 39.5095 25.5493 39.5095 29.3623L39.5095 37.8223zM23.0335 37.8223L1.7625 37.8223 1.7625 29.3873C1.7625 25.7603 4.0285 22.4993 7.3575 21.1883L7.3575 26.6553C6.5295 26.8703 5.9115 27.6173 5.9115 28.5123 5.9115 29.5743 6.7755 30.4373 7.8355 30.4373 8.8975 30.4373 9.7605 29.5743 9.7605 28.5123 9.7605 27.6173 9.1435 26.8703 8.3145 26.6553L8.3145 21.1863C10.8925 22.3123 13.9395 22.3083 16.5125 21.1733L16.5125 24.6833C15.5515 24.9023 14.8295 25.7593 14.8295 26.7863L14.8295 29.7593 15.7865 29.7593 15.7865 26.7863C15.7865 26.1233 16.3265 25.5833 16.9905 25.5833 17.6545 25.5833 18.1945 26.1233 18.1945 26.7863L18.1945 29.7593 19.1515 29.7593 19.1515 26.7863C19.1515 25.7593 18.4305 24.9023 17.4695 24.6833L17.4695 21.2003C20.7825 22.5183 23.0335 25.7713 23.0335 29.3873L23.0335 37.8223zM7.8355 27.5453C8.3695 27.5453 8.8035 27.9783 8.8035 28.5123 8.8035 29.0473 8.3695 29.4803 7.8355 29.4803 7.3025 29.4803 6.8685 29.0473 6.8685 28.5123 6.8685 27.9783 7.3025 27.5453 7.8355 27.5453L7.8355 27.5453zM33.5165 19.6503L33.2635 19.5763 33.0305 19.7013C30.4875 21.0563 27.2605 21.0563 24.7175 19.7013L24.4855 19.5773 24.2315 19.6503C22.8875 20.0383 21.7215 20.6923 20.6675 21.6083 19.6235 20.7373 18.3975 20.0693 17.0405 19.6763L16.7875 19.6013 16.5545 19.7263C14.0115 21.0823 10.7855 21.0823 8.2405 19.7263L8.0075 19.6013 7.7545 19.6763C3.4605 20.9213.4615 24.9153.4615 29.3873L.4615 39.1233 23.6845 39.1233 24.3345 39.1233 40.8105 39.1233 40.8105 29.3623C40.8105 24.8883 37.8115 20.8943 33.5165 19.6503L33.5165 19.6503zM22.5925 9.5068L25.8125 9.5068C27.3475 9.5068 28.6885 8.6548 29.3865 7.3998 30.0705 8.6528 31.4015 9.5068 32.9275 9.5068L35.1555 9.5068 35.1555 11.5258C35.1555 14.8788 32.4265 17.6078 29.0725 17.6078L28.6745 17.6078C25.3215 17.6078 22.5925 14.8788 22.5925 11.5258L22.5925 9.5068zM28.6745 2.1398L29.0725 2.1398C32.4265 2.1398 35.1555 4.8678 35.1555 8.2218L35.1555 8.5068 32.9275 8.5068C31.2565 8.5068 29.8975 7.1478 29.8975 5.4768L29.8975 5.2088 28.8975 5.2088 28.8975 5.4218C28.8975 7.1228 27.5135 8.5068 25.8125 8.5068L22.5925 8.5068 22.5925 8.2218C22.5925 4.8678 25.3215 2.1398 28.6745 2.1398L28.6745 2.1398zM28.6745 18.9078L29.0725 18.9078C33.1435 18.9078 36.4555 15.5958 36.4555 11.5258L36.4555 8.2218C36.4555 4.1518 33.1435.8388 29.0725.8388L28.6745.8388C24.6045.8388 21.2915 4.1518 21.2915 8.2218L21.2915 11.5258C21.2915 15.5958 24.6045 18.9078 28.6745 18.9078L28.6745 18.9078z" />
      <path d="M30.5203 12.3311C30.7973 12.3311 31.0233 12.1061 31.0233 11.8291 31.0233 11.5521 30.7973 11.3271 30.5203 11.3271 30.2433 11.3271 30.0173 11.5521 30.0173 11.8291 30.0173 12.1061 30.2433 12.3311 30.5203 12.3311M25.2273 12.3311C25.5043 12.3311 25.7303 12.1061 25.7303 11.8291 25.7303 11.5521 25.5043 11.3271 25.2273 11.3271 24.9503 11.3271 24.7243 11.5521 24.7243 11.8291 24.7243 12.1061 24.9503 12.3311 25.2273 12.3311M6.1169 9.5068L6.8449 9.5068C8.3709 9.5068 9.7019 8.6538 10.3859 7.3998 11.0839 8.6548 12.4239 9.5068 13.9589 9.5068L18.6799 9.5068 18.6799 11.5258C18.6799 14.8788 15.9509 17.6078 12.5959 17.6078L12.1989 17.6078C8.8459 17.6078 6.1169 14.8788 6.1169 11.5258L6.1169 9.5068zM12.1989 2.1398L12.5959 2.1398C15.9509 2.1398 18.6799 4.8678 18.6799 8.2218L18.6799 8.5068 13.9589 8.5068C12.2589 8.5068 10.8749 7.1228 10.8749 5.4218L10.8749 5.2088 9.8749 5.2088 9.8749 5.4768C9.8749 7.1478 8.5149 8.5068 6.8449 8.5068L6.1169 8.5068 6.1169 8.2218C6.1169 4.8678 8.8459 2.1398 12.1989 2.1398L12.1989 2.1398zM12.1989 18.9078L12.5959 18.9078C16.6679 18.9078 19.9799 15.5958 19.9799 11.5258L19.9799 8.2218C19.9799 4.1518 16.6679.8388 12.5959.8388L12.1989.8388C8.1289.8388 4.8159 4.1518 4.8159 8.2218L4.8159 11.5258C4.8159 15.5958 8.1289 18.9078 12.1989 18.9078L12.1989 18.9078z" />
      <path d="M9.7869 12.3311C10.0639 12.3311 10.2889 12.1061 10.2889 11.8291 10.2889 11.5521 10.0639 11.3271 9.7869 11.3271 9.5099 11.3271 9.2849 11.5521 9.2849 11.8291 9.2849 12.1061 9.5099 12.3311 9.7869 12.3311M15.0798 12.3311C15.3568 12.3311 15.5828 12.1061 15.5828 11.8291 15.5828 11.5521 15.3568 11.3271 15.0798 11.3271 14.8028 11.3271 14.5778 11.5521 14.5778 11.8291 14.5778 12.1061 14.8028 12.3311 15.0798 12.3311M12.3572 16.4561C13.3782 16.4561 14.2062 15.6281 14.2062 14.6061L10.5082 14.6061C10.5082 15.6281 11.3362 16.4561 12.3572 16.4561" />
    </g>
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className={`hnds-style-icon ${className}`}
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default MaleDoctorAndPerson;
