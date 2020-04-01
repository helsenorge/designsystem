import React from 'react';
import {IconRawProps} from './Icon';

const VideoCamera = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = false;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M25.6241,32.1741 C25.4211,32.1741 25.2571,32.3381 25.2571,32.5411 C25.2571,32.7441 25.4211,32.9081 25.6241,32.9081 C25.8271,32.9081 25.9911,32.7441 25.9911,32.5411 C25.9911,32.3381 25.8271,32.1741 25.6241,32.1741 L25.6241,32.1741 Z M14.1181,13.3011 C14.7611,13.3011 15.2831,13.8231 15.2831,14.4661 C15.2831,15.1091 14.7611,15.6311 14.1181,15.6311 C13.4761,15.6311 12.9531,15.1091 12.9531,14.4661 C12.9531,13.8231 13.4761,13.3011 14.1181,13.3011 L14.1181,13.3011 Z M14.1181,16.8301 C15.4221,16.8301 16.4821,15.7701 16.4821,14.4661 C16.4821,13.1621 15.4221,12.1021 14.1181,12.1021 C12.8141,12.1021 11.7541,13.1621 11.7541,14.4661 C11.7541,15.7701 12.8141,16.8301 14.1181,16.8301 L14.1181,16.8301 Z M23.9751,32.1741 C23.7721,32.1741 23.6071,32.3381 23.6071,32.5411 C23.6071,32.7441 23.7721,32.9081 23.9751,32.9081 C24.1771,32.9081 24.3421,32.7441 24.3421,32.5411 C24.3421,32.3381 24.1771,32.1741 23.9751,32.1741 L23.9751,32.1741 Z M11.6381,27.0551 L27.4081,27.0551 L27.4081,23.9111 L11.6381,23.9111 L11.6381,27.0551 Z M10.4391,28.2541 L28.6071,28.2541 L28.6071,22.7121 L10.4391,22.7121 L10.4391,28.2541 Z M11.0391,30.8401 L28.0081,30.8401 L28.0081,29.6411 L11.0391,29.6411 L11.0391,30.8401 Z M27.2741,32.1741 C27.0711,32.1741 26.9061,32.3381 26.9061,32.5411 C26.9061,32.7441 27.0711,32.9081 27.2741,32.9081 C27.4771,32.9081 27.6411,32.7441 27.6411,32.5411 C27.6411,32.3381 27.4771,32.1741 27.2741,32.1741 L27.2741,32.1741 Z M40.8251,35.0621 L33.8681,32.0381 L33.8681,23.7971 L40.8251,20.7741 L40.8251,35.0621 Z M31.3401,31.8321 L32.6691,31.8321 L32.6691,24.0031 L31.3401,24.0031 L31.3401,31.8321 Z M8.9071,34.8601 L30.1411,34.8601 L30.1411,20.9761 L8.9071,20.9761 L8.9071,34.8601 Z M8.3131,14.4661 C8.3131,11.2661 10.9181,8.6611 14.1181,8.6611 C17.3181,8.6611 19.9231,11.2661 19.9231,14.4661 C19.9231,16.7761 18.5611,18.8481 16.4521,19.7771 L11.7891,19.7771 C9.6761,18.8491 8.3131,16.7791 8.3131,14.4661 L8.3131,14.4661 Z M21.8071,19.7771 L18.6801,19.7771 C19.3811,19.1741 19.9481,18.4411 20.3621,17.6221 C20.6841,18.4351 21.1751,19.1691 21.8071,19.7771 L21.8071,19.7771 Z M25.9921,10.5301 C28.6781,10.5301 30.8621,12.7151 30.8621,15.4011 C30.8621,17.2631 29.7861,18.9641 28.1151,19.7771 L23.8671,19.7771 C22.1991,18.9651 21.1221,17.2601 21.1221,15.4011 C21.1221,12.7151 23.3071,10.5301 25.9921,10.5301 L25.9921,10.5301 Z M33.1431,22.8041 L31.3401,22.8041 L31.3401,19.7771 L30.1771,19.7771 C31.3521,18.6491 32.0611,17.0791 32.0611,15.4011 C32.0611,12.0541 29.3391,9.3311 25.9921,9.3311 C23.7751,9.3311 21.8381,10.5291 20.7791,12.3091 C19.8671,9.5001 17.2281,7.4621 14.1181,7.4621 C10.2561,7.4621 7.1141,10.6041 7.1141,14.4661 C7.1141,16.5501 8.0341,18.4691 9.5581,19.7771 L7.7071,19.7771 L7.7071,36.0591 L31.3401,36.0591 L31.3401,33.0311 L33.1431,33.0311 L42.0241,36.8921 L42.0241,18.9441 L33.1431,22.8041 Z M25.9921,14.2361 C26.6351,14.2361 27.1571,14.7581 27.1571,15.4011 C27.1571,16.0431 26.6351,16.5661 25.9921,16.5661 C25.3501,16.5661 24.8271,16.0431 24.8271,15.4011 C24.8271,14.7581 25.3501,14.2361 25.9921,14.2361 L25.9921,14.2361 Z M25.9921,17.7651 C27.2961,17.7651 28.3561,16.7041 28.3561,15.4011 C28.3561,14.0971 27.2961,13.0361 25.9921,13.0361 C24.6881,13.0361 23.6281,14.0971 23.6281,15.4011 C23.6281,16.7041 24.6881,17.7651 25.9921,17.7651 L25.9921,17.7651 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}></svg>
  );
});

export default VideoCamera;