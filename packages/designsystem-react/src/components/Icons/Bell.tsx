import React from 'react';
import {IconRawProps} from './Icon';

const Bell = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M28.0042,34.4813 L28.0042,34.2723 L19.7962,34.2723 L19.7962,34.4813 L11.9022,34.4813 L14.9592,29.5643 L32.8412,29.5643 L35.8972,34.4813 L28.0042,34.4813 Z M26.7042,36.5203 C26.7042,38.0663 25.4462,39.3243 23.9002,39.3243 L23.9002,39.3243 C22.3532,39.3243 21.0952,38.0663 21.0952,36.5203 L21.0952,35.7813 L26.7042,35.7813 L26.7042,36.5203 Z M15.2472,19.2033 C15.2472,15.3683 17.8482,12.0363 21.5702,11.1013 L22.0622,10.9773 L22.0622,10.3133 C22.0622,9.3003 22.8862,8.4763 23.9002,8.4763 C24.9132,8.4763 25.7372,9.3003 25.7372,10.3133 L25.7372,10.9773 L26.2292,11.1013 C29.9522,12.0363 32.5522,15.3683 32.5522,19.2033 L32.5522,28.2653 L15.2472,28.2653 L15.2472,19.2033 Z M37.6192,34.7883 L33.8522,28.7293 L33.8522,19.2033 C33.8522,14.9363 31.0662,11.2073 27.0192,9.9713 C26.8482,8.4013 25.5142,7.1753 23.9002,7.1753 C22.2852,7.1753 20.9512,8.4013 20.7812,9.9713 C16.7332,11.2073 13.9472,14.9363 13.9472,19.2033 L13.9472,28.7293 L10.1812,34.7883 C10.0562,34.9883 10.0502,35.2403 10.1652,35.4473 C10.2792,35.6533 10.4972,35.7813 10.7332,35.7813 L19.7962,35.7813 L19.7962,36.5203 C19.7962,38.7833 21.6372,40.6243 23.9002,40.6243 C26.1632,40.6243 28.0042,38.7833 28.0042,36.5203 L28.0042,35.7813 L37.0672,35.7813 C37.3022,35.7813 37.5202,35.6533 37.6352,35.4473 C37.7492,35.2403 37.7432,34.9883 37.6192,34.7883 L37.6192,34.7883 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M40.7277,16.8441 L39.8027,17.7581 C42.4257,20.4101 41.6807,24.3941 39.4867,26.5631 L40.4007,27.4871 C43.0397,24.8791 43.9147,20.0681 40.7277,16.8441 L40.7277,16.8441 Z M28.0037,34.4811 L28.0037,34.2721 L19.7957,34.2721 L19.7957,34.4811 L11.9027,34.4811 L14.9587,29.5651 L32.8407,29.5651 L35.8967,34.4811 L28.0037,34.4811 Z M26.7047,36.5201 C26.7047,38.0661 25.4467,39.3241 23.8997,39.3241 C22.3537,39.3241 21.0957,38.0661 21.0957,36.5201 L21.0957,35.7811 L26.7047,35.7811 L26.7047,36.5201 Z M15.2477,19.2031 C15.2477,15.3681 17.8477,12.0361 21.5707,11.1011 L22.0617,10.9771 L22.0617,10.3131 C22.0617,9.3001 22.8867,8.4761 23.8997,8.4761 C24.9137,8.4761 25.7377,9.3001 25.7377,10.3131 L25.7377,10.9771 L26.2287,11.1011 C29.9517,12.0361 32.5527,15.3681 32.5527,19.2031 L32.5527,28.2651 L15.2477,28.2651 L15.2477,19.2031 Z M33.8527,28.7291 L33.8527,19.2031 C33.8527,14.9361 31.0657,11.2071 27.0187,9.9711 C26.8487,8.4021 25.5147,7.1761 23.8997,7.1761 C22.2857,7.1761 20.9517,8.4021 20.7807,9.9711 C16.7337,11.2071 13.9477,14.9361 13.9477,19.2031 L13.9477,28.7291 L10.1807,34.7881 C10.0567,34.9891 10.0507,35.2401 10.1647,35.4471 C10.2797,35.6541 10.4977,35.7811 10.7327,35.7811 L19.7957,35.7811 L19.7957,36.5201 C19.7957,38.7831 21.6367,40.6241 23.8997,40.6241 C26.1637,40.6241 28.0037,38.7831 28.0037,36.5201 L28.0037,35.7811 L37.0667,35.7811 C37.3027,35.7811 37.5197,35.6541 37.6347,35.4471 C37.7487,35.2401 37.7437,34.9891 37.6187,34.7881 L33.8527,28.7291 Z M42.8897,14.7071 L41.9647,15.6211 C45.7827,19.4831 45.6447,24.7481 41.6237,28.7241 L42.5377,29.6491 C47.1117,25.1261 47.2537,19.1211 42.8897,14.7071 L42.8897,14.7071 Z M5.8347,15.6211 L4.9107,14.7071 C0.5457,19.1221 0.6877,25.1261 5.2627,29.6491 L6.1767,28.7241 C2.1547,24.7481 2.0177,19.4831 5.8347,15.6211 L5.8347,15.6211 Z M7.9967,17.7581 L7.0717,16.8441 C3.8857,20.0681 4.7607,24.8791 7.3997,27.4871 L8.3137,26.5631 C6.1197,24.3941 5.3747,20.4111 7.9967,17.7581 L7.9967,17.7581 Z"
      />
    </svg>
  );
});

export default Bell;
