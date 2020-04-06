import React from 'react';
import {IconRawProps} from './Icon';

const MedicineWarning = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M30.9154,30.3401 L31.3264,30.3401 C31.5024,30.3401 31.6444,30.1971 31.6444,30.0231 L31.6444,25.3761 C31.6444,25.2001 31.5024,25.0591 31.3264,25.0591 L30.9154,25.0591 C30.7404,25.0591 30.5984,25.2001 30.5984,25.3761 L30.5984,30.0231 C30.5984,30.1971 30.7404,30.3401 30.9154,30.3401 L30.9154,30.3401 Z M22.8554,35.1611 L31.0654,20.2191 L39.3794,35.1611 L22.8554,35.1611 Z M26.4784,38.6831 L11.5874,38.6831 L11.5874,32.5601 L18.9994,32.5601 L18.9994,20.8611 L11.5874,20.8611 L11.5874,20.1271 C11.5874,16.0221 14.9274,12.6821 19.0324,12.6821 C23.1394,12.6821 26.4784,16.0221 26.4784,20.1271 L26.4784,25.8671 L20.6584,36.4621 L26.4784,36.4621 L26.4784,38.6831 Z M11.5874,31.5591 L17.9994,31.5591 L17.9994,21.8611 L11.5874,21.8611 L11.5874,31.5591 Z M21.8564,10.6821 L21.8564,11.8581 C20.9694,11.5541 20.0214,11.3811 19.0324,11.3811 C18.0434,11.3811 17.0964,11.5541 16.2084,11.8581 L16.2084,10.6821 L21.8564,10.6821 Z M15.1024,9.3811 L22.9644,9.3811 L22.9644,7.5191 L15.1024,7.5191 L15.1024,9.3811 Z M31.0584,17.5311 L27.7794,23.4991 L27.7794,20.1271 C27.7794,16.7961 25.9054,13.8951 23.1574,12.4181 L23.1574,10.6821 L24.2654,10.6821 L24.2654,6.2181 L13.8014,6.2181 L13.8014,10.6821 L14.9074,10.6821 L14.9074,12.4191 C12.1604,13.8961 10.2864,16.7961 10.2864,20.1271 L10.2864,39.9841 L27.7794,39.9841 L27.7794,36.4621 L41.5904,36.4621 L31.0584,17.5311 Z M31.1214,31.5621 C30.6704,31.5621 30.3054,31.9281 30.3054,32.3791 C30.3054,32.8291 30.6704,33.1951 31.1214,33.1951 C31.5714,33.1951 31.9374,32.8291 31.9374,32.3791 C31.9374,31.9281 31.5714,31.5621 31.1214,31.5621 L31.1214,31.5621 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className={`${classNames} icon`} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M33.0479,30.9143 C32.5279,30.9143 32.1069,31.3363 32.1069,31.8553 C32.1069,32.3753 32.5279,32.7963 33.0479,32.7963 C33.5679,32.7963 33.9889,32.3753 33.9889,31.8553 C33.9889,31.3363 33.5679,30.9143 33.0479,30.9143 L33.0479,30.9143 Z M32.7629,29.5063 L33.3329,29.5063 C33.5089,29.5063 33.6519,29.3633 33.6519,29.1883 L33.6519,23.7373 C33.6519,23.5613 33.5089,23.4203 33.3329,23.4203 L32.7629,23.4203 C32.5869,23.4203 32.4449,23.5613 32.4449,23.7373 L32.4449,29.1883 C32.4449,29.3633 32.5869,29.5063 32.7629,29.5063 L32.7629,29.5063 Z M23.3559,35.1613 L32.9839,17.6373 L42.7339,35.1613 L23.3559,35.1613 Z M26.9789,38.6833 L12.0869,38.6833 L12.0869,32.5603 L19.4999,32.5603 L19.4989,20.8613 L12.0869,20.8613 L12.0869,20.1273 C12.0869,16.0213 15.4269,12.6823 19.5329,12.6823 C23.6389,12.6823 26.9789,16.0213 26.9789,20.1273 L26.9789,25.8663 L21.1579,36.4623 L26.9789,36.4623 L26.9789,38.6833 Z M12.0869,21.8613 L18.4989,21.8613 L18.4999,31.5603 L12.0869,31.5603 L12.0869,21.8613 Z M22.3569,10.6823 L22.3569,11.8573 C21.4699,11.5543 20.5229,11.3813 19.5329,11.3813 C18.5439,11.3813 17.5969,11.5543 16.7089,11.8573 L16.7089,10.6823 L22.3569,10.6823 Z M15.6019,9.3803 L23.4639,9.3803 L23.4639,7.5183 L15.6019,7.5183 L15.6019,9.3803 Z M32.9759,14.9493 L28.2789,23.4993 L28.2789,20.1273 C28.2789,16.7963 26.4049,13.8943 23.6569,12.4183 L23.6569,10.6823 L24.7649,10.6823 L24.7649,6.2183 L14.3009,6.2183 L14.3009,10.6823 L15.4079,10.6823 L15.4079,12.4183 C12.6599,13.8943 10.7859,16.7963 10.7859,20.1273 L10.7859,39.9833 L28.2789,39.9833 L28.2789,36.4623 L44.9439,36.4623 L32.9759,14.9493 Z"
      />
    </svg>
  );
});

export default MedicineWarning;
