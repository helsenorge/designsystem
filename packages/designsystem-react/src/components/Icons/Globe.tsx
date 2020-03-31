import React from 'react';
import {IconRawProps} from './Icon';

const Globe = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = false;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M35.5655,32.4903 C34.1635,31.4683 32.7115,30.6423 31.2145,30.0143 C31.8525,28.3623 32.2775,26.5273 32.3675,24.5503 L38.3755,24.5503 C38.2435,27.5143 37.2225,30.2463 35.5655,32.4903 L35.5655,32.4903 Z M25.6055,38.2993 C27.0295,36.9153 29.1975,34.4583 30.7035,31.2103 C32.0925,31.7923 33.4425,32.5553 34.7485,33.5013 C32.4435,36.1013 29.2315,37.8713 25.6055,38.2993 L25.6055,38.2993 Z M24.5495,37.4933 L24.5495,29.8423 C26.2315,29.9073 27.8705,30.2083 29.4635,30.7423 C27.9865,33.8653 25.8615,36.2263 24.5495,37.4933 L24.5495,37.4933 Z M24.5495,24.5503 L31.0665,24.5503 C30.9755,26.3443 30.5755,28.0213 29.9825,29.5433 C28.2255,28.9423 26.4125,28.6083 24.5495,28.5413 L24.5495,24.5503 Z M24.5495,18.8283 C26.4155,18.7753 28.2055,18.4753 29.9145,17.9313 C30.5655,19.5343 31.0005,21.3243 31.0755,23.2503 L24.5495,23.2503 L24.5495,18.8283 Z M24.5495,10.2833 C25.8325,11.4983 27.9005,13.7433 29.3745,16.7383 C27.8405,17.2113 26.2315,17.4733 24.5495,17.5263 L24.5495,10.2833 Z M34.5895,14.1253 C33.3335,15.0303 32.0125,15.7523 30.6295,16.2983 C29.1385,13.1863 27.0385,10.8453 25.6365,9.5053 C29.1685,9.9293 32.3045,11.6283 34.5895,14.1253 L34.5895,14.1253 Z M35.4255,15.1223 C37.1645,17.4013 38.2395,20.2023 38.3755,23.2503 L32.3775,23.2503 C32.3025,21.1493 31.8455,19.2123 31.1555,17.4863 C32.6485,16.8923 34.0725,16.1053 35.4255,15.1223 L35.4255,15.1223 Z M23.2505,17.5243 C21.5925,17.4613 19.9755,17.1663 18.4035,16.6463 C19.9215,13.6203 22.0085,11.3663 23.2505,10.1863 L23.2505,17.5243 Z M23.2505,23.2503 L16.6065,23.2503 C16.7065,21.2883 17.1775,19.4693 17.8605,17.8383 C19.6045,18.4283 21.4025,18.7593 23.2505,18.8253 L23.2505,23.2503 Z M23.2505,28.5413 C21.2955,28.5973 19.4175,28.9163 17.6315,29.5133 C17.0535,28.0013 16.6685,26.3373 16.5975,24.5503 L23.2505,24.5503 L23.2505,28.5413 Z M23.2505,37.6333 C21.9365,36.4103 19.6745,33.9903 18.1445,30.7213 C19.7705,30.1893 21.4765,29.8993 23.2505,29.8423 L23.2505,37.6333 Z M12.9765,33.4173 C14.2205,32.4953 15.5305,31.7503 16.9035,31.1843 C18.3925,34.4353 20.5655,36.8833 22.0145,38.2713 C18.4235,37.8023 15.2465,36.0203 12.9765,33.4173 L12.9765,33.4173 Z M12.1675,32.4003 C10.5495,30.1733 9.5545,27.4753 9.4245,24.5503 L15.2965,24.5503 C15.3655,26.5193 15.7785,28.3403 16.3985,29.9823 C14.9195,30.5943 13.5065,31.4023 12.1675,32.4003 L12.1675,32.4003 Z M12.4435,15.0303 C13.7945,15.9923 15.1905,16.7713 16.6275,17.3703 C15.9015,19.1303 15.4035,21.1043 15.3055,23.2503 L9.4245,23.2503 C9.5625,20.1613 10.6635,17.3243 12.4435,15.0303 L12.4435,15.0303 Z M22.0445,9.5233 C20.6805,10.8523 18.6435,13.1493 17.1575,16.1823 C15.8305,15.6323 14.5385,14.9203 13.2885,14.0393 C15.5405,11.6163 18.6025,9.9663 22.0445,9.5233 L22.0445,9.5233 Z M23.8995,8.0923 C15.1835,8.0923 8.0915,15.1833 8.0915,23.9003 C8.0915,32.6163 15.1835,39.7083 23.8995,39.7083 C32.6165,39.7083 39.7085,32.6163 39.7085,23.9003 C39.7085,15.1833 32.6165,8.0923 23.8995,8.0923 L23.8995,8.0923 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}></svg>
  );
});

export default Globe;
